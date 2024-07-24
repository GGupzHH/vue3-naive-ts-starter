<script lang="ts">
import { defineComponent } from 'vue'
import { useTable } from '@/hooks/common/table'
import { useSopComparison } from 'modules/SopComparison/store'
import { NSpace, NInput, NTag, NButton, NPopconfirm, NDrawer } from 'naive-ui'
import { downloadFile } from 'utils/request.ts'

type OperateSOPSettingDrawerProps = {
  rowData?: SopComparison.SOPContrast.ComparisonListItem
}

type SopComparisonCreateModalEmits = {
  (e: 'submitted'): void
}

type ColumnsSettingType = {
  title: string
  key?: string
  align?: string
  render?: (row: any, index: number) => any
}

export default defineComponent({
  name: 'SOPSettingDrawer'
})
</script>

<script setup lang="ts">
const props = defineProps<OperateSOPSettingDrawerProps>()
const emit = defineEmits<SopComparisonCreateModalEmits>()

const useSopComparisonStore = useSopComparison()
const visible = defineModel<boolean>('visible', {
  default: false
})
const checkedRowKeys = ref<string[]>([])

const sopType = ref('')
const sopTypeOptions = ref([])
const columns = ref<Array<ColumnsSettingType>>([])
const data = ref<Array<SopComparison.SOPContrast.SOPValueItem>>([])
const loading = ref(false)

const handleInitTable = async() => {
  const res = await useSopComparisonStore.getSOPTypeComparison({
    type: sopType.value,
    sopName: props?.rowData && props?.rowData.sopName
  })

  if (res.code === 200) {
    console.log(res)

    if (res.data[0].length) {
      columns.value = res.data[0].map(header => ({
        title: header.name,
        key: header.name,
        align: 'center',
        render(row) {
          const cell = row[header.name]
          return h(NInput, {
            value: cell.sopValue,
            onUpdateValue: (value) => {
              cell.sopValue = value
            }
          })
        }
      }))

      data.value = res.data.slice(1).map(rowData => {
        const row = {}
        rowData.forEach(cell => {
          row[cell.name] = cell
        })
        return row
      })
    }

    if (res.data.length && res.data[0].id) {
      columns.value = [
        {
          title: 'Name',
          key: 'name',
          align: 'center'
        },
        {
          title: 'Value',
          align: 'center',
          render(row: SopComparison.SOPContrast.SOPValueItem) {
            return h(
              NInput,
              {
                value: row.sopValue,
                onUpdateValue: (value) => {
                  console.log(value)
                  row.sopValue = value
                }
              }
            )
          }
        }
      ]

      data.value = res.data
    }
  }
}

const handleSOPNameTypeChange = async(value) => {
  sopType.value = value
  await handleInitTable()
}

const handleUploadCSVValue = async({
  file,
  data,
  headers,
  withCredentials,
  action,
  onFinish,
  onError,
  onProgress
}: UploadCustomRequestOptions) => {
  console.log(file)
  console.log(props.rowData)

  const formData = new FormData()
  formData.append('file', file.file as File)
  formData.append('version', props.rowData.version)
  formData.append('id', props.rowData.id)
  const res = await useSopComparisonStore.uploadCSVValueFiles(formData)
  // TODO 文件上传成功时候 最外面表格也要刷新
  emit('submitted')

  // 重新获取Tree的接口数据
  await handleGetSOPTypeTree()
}

const handleGetSOPTypeTree = async() => {
  const res = await useSopComparisonStore.getSOPTypeTree(props.rowData.sopName)

  if (res.code === 200) {
    sopTypeOptions.value = res.data[0].children
  }
}

const handleSave = async() => {
  console.log(data)
  const tableData = ref([])
  if (columns.value.length > 2) {
    tableData

    data.value.forEach(item => {
      const result = []
      for (let key in item) {
        tableData.value.push(item[key])
      }

      return result
    })
  } else {
    tableData.value = data.value
  }
  console.log(tableData.value)

  const res = await useSopComparisonStore.saveSOPValue({
    sops: tableData.value
  })
}

const exportLoading = ref(false)
const handleExportSOPValueFile = async() => {
  exportLoading.value = true
  const res = await useSopComparisonStore.exportSOPValueFile({
    sopName: props?.rowData.sopName
  })
  console.log(res)
  downloadFile(res.data, props?.rowData.sopName + '.csv', 'text/csv')
  exportLoading.value = false
}

function closeDrawer() {
  visible.value = false
}

watch(visible, async(newValue) => {
  if (newValue && props?.rowData) {
    await handleGetSOPTypeTree()
  }
})

</script>
<template>
  <NDrawer
    v-model:show="visible"
    :width="'60%'"
  >
    <NDrawerContent
      title="字典详情列表"
      closable
    >
      <template #default>
        <div class="h-full flex flex-col">
          <NSpace
            justify="space-between"
            class="m-b-12px"
          >
            <NSelect
              v-model:value="sopType"
              size="small"
              filterable
              placeholder="请选择类型"
              :options="sopTypeOptions"
              label-field="type"
              value-field="type"
              clearable
              :on-update:value="handleSOPNameTypeChange"
            />
            <NSpace>
              <NUpload
                action=""
                :show-file-list="false"
                :custom-request="handleUploadCSVValue"
              >
                <NButton
                  size="small"
                  type="primary"
                  class="m-r-8px"
                  ghost
                >
                  CSV导入参数
                </NButton>
              </NUpload>
              <NButton
                type="warning"
                size="small"
                :loading="exportLoading"
                @click="handleExportSOPValueFile"
              >
                参数导出
              </NButton>
            </NSpace>
          </NSpace>
          <NDataTable
            v-model:checked-row-keys="checkedRowKeys"
            :columns="columns"
            :data="data"
            size="small"
            :flex-height="true"
            :remote="true"
            :scroll-x="640"
            :loading="loading"
            :row-key="(item) => item.id"
            class="sm:h-full"
          />
        </div>
      </template>
      <template #footer>
        <NButton
          type="primary"
          class="m-r-12px"
          @click="handleSave"
        >
          保存
        </NButton>
        <NButton @click="closeDrawer">取消</NButton>
      </template>
    </NDrawerContent>
  </NDrawer>
</template>
