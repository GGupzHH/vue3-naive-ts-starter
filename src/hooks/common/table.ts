import { computed, effectScope, onScopeDispose, reactive, ref, watch } from 'vue'
import type { Ref } from 'vue'
import type { PaginationProps } from 'naive-ui'
import { cloneDeep } from 'lodash-es'

type TableData = NaiveUI.TableData
type GetTableData<A extends NaiveUI.TableApiFn> = NaiveUI.GetTableData<A>
type TableColumn<T> = NaiveUI.TableColumn<T>
type ApiFn = (args: any) => Promise<unknown>
type BaseData = Record<string, unknown>

type TableColumnCheck = {
  key: string
  title: string
  checked: boolean
}
export type TransformedData<TableData extends BaseData = BaseData> = {
  data: TableData[] | any
  pageNum: number
  pageSize: number
  total: number
}

type Transformer<
  TableData extends BaseData = BaseData,
  Response = NonNullable<unknown>
> = (response: Response) => TransformedData<TableData>

type MaybePromise<T> = T | Promise<T>
type TableConfig<A extends ApiFn, T extends BaseData, C> = {
  /** api function to get table data */
  apiFn: A
  /** api params */
  apiParams?: Parameters<A>[0]
  /** transform api response to table data */
  transformer: Transformer<T, Awaited<ReturnType<A>>>
  /** columns factory */
  columns: () => C[]
  /**
   * get column checks
   *
   * @param columns
   */
  getColumnChecks: (columns: C[]) => TableColumnCheck[]
  /**
   * get columns
   *
   * @param columns
   */
  getColumns: (columns: C[], checks: TableColumnCheck[]) => C[]
  /**
   * callback when response fetched
   *
   * @param transformed transformed data
   */
  onFetched?: (transformed: TransformedData<T>) => MaybePromise<void>
  /**
   * whether to get data immediately
   *
   * @default true
   */
  immediate?: boolean
}
function useHookTable<A extends ApiFn, T extends BaseData, C>(config: TableConfig<A, T, C>) {
  const loading = ref(false)

  const { apiFn, apiParams, transformer, immediate = true, getColumnChecks, getColumns } = config

  const searchParams: NonNullable<Parameters<A>[0]> = reactive({ ...apiParams })

  const allColumns = ref(config.columns()) as Ref<C[]>

  const data: Ref<T[]> = ref([])

  const columnChecks: Ref<TableColumnCheck[]> = ref(getColumnChecks(config.columns()))

  const columns = computed(() => getColumns(allColumns.value, columnChecks.value))

  function reloadColumns() {
    allColumns.value = config.columns()

    const checkMap = new Map(columnChecks.value.map(col => [col.key, col.checked]))

    const defaultChecks = getColumnChecks(allColumns.value)

    columnChecks.value = defaultChecks.map(col => ({
      ...col,
      checked: checkMap.get(col.key) ?? col.checked
    }))
  }

  async function getData() {
    loading.value = true
    const formattedParams = formatSearchParams(searchParams)

    const response = await apiFn(formattedParams)

    const transformed = transformer(response as Awaited<ReturnType<A>>)
    data.value = transformed.data?.records || transformed.data || []

    transformed.data.length === 0

    await config.onFetched?.(transformed)

    loading.value = false
  }

  function formatSearchParams(params: Record<string, unknown>) {
    const formattedParams: Record<string, unknown> = {}

    Object.entries(params).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        formattedParams[key] = value
      }
    })

    return formattedParams
  }

  /**
   * update search params
   *
   * @param params
   */
  function updateSearchParams(params: Partial<Parameters<A>[0]>) {
    Object.assign(searchParams, params)
  }

  /** reset search params */
  function resetSearchParams() {
    Object.assign(searchParams, apiParams)
    getData()
  }

  if (immediate) {
    getData()
  }

  return {
    loading,
    data,
    columns,
    columnChecks,
    reloadColumns,
    getData,
    searchParams,
    updateSearchParams,
    resetSearchParams
  }
}

export function useTable<A extends NaiveUI.TableApiFn>(config: NaiveUI.NaiveTableConfig<A>) {
  const scope = effectScope()

  const { apiFn, apiParams, immediate, showTotal } = config

  const SELECTION_KEY = '__selection__'

  const EXPAND_KEY = '__expand__'

  const {
    loading,
    data,
    columns,
    columnChecks,
    reloadColumns,
    getData,
    searchParams,
    updateSearchParams,
    resetSearchParams
  } = useHookTable<A, GetTableData<A>, TableColumn<NaiveUI.TableDataWithIndex<GetTableData<A>>>>({
    apiFn,
    apiParams,
    columns: config.columns,
    transformer: res => {
      const { records = [], current = 1, size = 10, total = 0 } = res.data || {}

      const recordsWithIndex = records.map((item, index) => {
        return {
          ...item,
          index: (current - 1) * size + index + 1
        }
      })

      return {
        data: recordsWithIndex.length ? recordsWithIndex : (res.data || []),
        pageNum: current,
        pageSize: size,
        total
      }
    },
    getColumnChecks: cols => {
      const checks: NaiveUI.TableColumnCheck[] = []

      cols.forEach(column => {
        if (isTableColumnHasKey(column)) {
          checks.push({
            key: column.key as string,
            title: column.title as string,
            checked: true
          })
        } else if (column.type === 'selection') {
          checks.push({
            key: SELECTION_KEY,
            title: '勾选',
            checked: true
          })
        } else if (column.type === 'expand') {
          checks.push({
            key: EXPAND_KEY,
            title: '导出',
            checked: true
          })
        }
      })

      return checks
    },
    getColumns: (cols, checks) => {
      const columnMap = new Map<string, TableColumn<GetTableData<A>>>()

      cols.forEach(column => {
        if (isTableColumnHasKey(column)) {
          columnMap.set(column.key as string, column)
        } else if (column.type === 'selection') {
          columnMap.set(SELECTION_KEY, column)
        } else if (column.type === 'expand') {
          columnMap.set(EXPAND_KEY, column)
        }
      })

      const filteredColumns = checks
        .filter(item => item.checked)
        .map(check => columnMap.get(check.key) as TableColumn<GetTableData<A>>)

      return filteredColumns
    },
    onFetched: async transformed => {
      const { pageNum, pageSize, total } = transformed

      updatePagination({
        page: pageNum,
        pageSize,
        itemCount: total
      })
    },
    immediate
  })

  const pagination: PaginationProps = reactive({
    page: 1,
    pageSize: 10,
    showSizePicker: true,
    pageSizes: [10, 15, 20, 25, 30],
    onUpdatePage: async(page: number) => {
      pagination.page = page
      updateSearchParams({
        current: page,
        size: pagination.pageSize!
      })

      await getData()
    },
    onUpdatePageSize: async(pageSize: number) => {
      pagination.pageSize = pageSize
      pagination.page = 1

      updateSearchParams({
        current: pagination.page,
        size: pageSize
      })

      await getData()
    },
    ...(showTotal
      ? {
        prefix: page => `共${ page.itemCount }条`
      }
      : {})
  })

  function updatePagination(update: Partial<PaginationProps>) {
    Object.assign(pagination, update)
  }

  onScopeDispose(() => {
    scope.stop()
  })

  return {
    loading,
    data,
    columns,
    columnChecks,
    reloadColumns,
    pagination,
    updatePagination,
    getData,
    searchParams,
    updateSearchParams,
    resetSearchParams
  }
}

export function useTableOperate<T extends TableData = TableData>(data: Ref<T[]>, getData: () => Promise<void>) {
  const drawerVisible = ref(false)
  const operateType = ref<NaiveUI.TableOperateType>('add')

  /** openDrawer */
  function openDrawer() {
    drawerVisible.value = true
  }

  /** closeDrawer */
  function closeDrawer() {
    drawerVisible.value = false
  }

  function handleAdd() {
    operateType.value = 'add'
    openDrawer()
  }

  /** the editing row data */
  const editingData: Ref<T | null> = ref(null)

  function handleEdit(id: T['id']) {
    operateType.value = 'edit'
    const findItem = data.value.find(item => item.id === id) || null
    editingData.value = cloneDeep(findItem)

    openDrawer()
  }

  /** the checked row keys of table */
  const checkedRowKeys = ref<string[]>([])

  /** the hook after the batch delete operation is completed */
  async function onBatchDeleted() {
    window.$message?.success('删除成功！')

    checkedRowKeys.value = []

    await getData()
  }

  /** the hook after the delete operation is completed */
  async function onDeleted() {
    window.$message?.success('删除成功！')

    await getData()
  }

  return {
    drawerVisible,
    openDrawer,
    closeDrawer,
    operateType,
    handleAdd,
    editingData,
    handleEdit,
    checkedRowKeys,
    onBatchDeleted,
    onDeleted
  }
}

function isTableColumnHasKey<T>(column: TableColumn<T>): column is NaiveUI.TableColumnWithKey<T> {
  return Boolean((column as NaiveUI.TableColumnWithKey<T>).key)
}
