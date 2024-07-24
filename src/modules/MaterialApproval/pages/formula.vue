<script lang="ts">
import { useMaterialApproval } from 'modules/MaterialApproval/store'
import { useTable } from '@/hooks/common/table'
import { NSpace, NTag, NButton, NPopconfirm } from 'naive-ui'
import MaterailCreateModal from '../components/formula/create-material-modal.vue'
import SubMaterialDrawer from '../components/formula/sub-material-drawer.vue'
import CheckedPlatformModal from '../components/formula/checked-platform-modal.vue'
import type { FormInst } from 'naive-ui'

type FormulaRouteQueryParams = {
  /** the type of operation */
  operateType: MaterialApproval.Formula.FormulaOperateType
  rowData: string
}

export default defineComponent({
  name: 'MaterailApprovalFormula'
})
</script>

<script setup lang="ts">
// const proxy = getCurrentInstance()?.proxy
const useMaterialApprovalStore = useMaterialApproval()
const route = useRoute()
const router = useRouter()
const operateType = ref(route.query.operateType as any || 'add')
const materialCategory = ref<MaterialApproval.Formula.MaterialCategory>('preparationData')
const { message } = createDiscreteApi(
  ['message']
)
const handleAdd = (key: MaterialApproval.Formula.MaterialCategory) => {

  if (!model.series) {
    message.error('请先选择系列之后再添加物料')
    return
  }

  visibleModal.value = true
  materialCategory.value = key
}

const visibleModal = ref(false)
const editingData = ref(route.query.rowData && JSON.parse(route.query.rowData as MaterialApproval.Formula.FormulaOperateType))

const model: MaterialApproval.Formula.CreateFormula = reactive(createDefaultModel())
function createDefaultModel(): MaterialApproval.Formula.CreateFormula {

  useMaterialApprovalStore.updateMaterialCategory('preparationData', [])
  useMaterialApprovalStore.updateMaterialCategory('resubmissionData', [])
  useMaterialApprovalStore.updateMaterialCategory('segmentationData', [])

  return {
    productClassification: '',
    area: '',
    module: '',
    series: '',
    furnaceNum: '',
    productName: '',
    specification: '',
    furnaceType: '',
    number: '',
    targetResistivity: 0,
    maxResistivity: 0,
    minResistivity: 0,
    initFeedTotalWeight: '0',
    initReuseProportion: 0,
    segmentFeedTotalWeight: '0',
    segmentReuseProportion: 0,
    remark: '',
    loadInfo: [],
    initFeedInfo: [],
    segmentFeedInfo: []
  }
}

const rules: Record<
  Extract<
    keyof MaterialApproval.Formula.CreateFormula,
    'module' | 'series' | 'furnaceNum' | 'targetResistivity' | 'maxResistivity'
  >,
  NaiveUI.FormRule
> = {
  module: {
    required: true,
    trigger: ['blur', 'change'],
    message: '请选择区域'
  },
  series: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请选择系列'
  },
  furnaceNum: {
    required: true,
    trigger: ['blur', 'change'],
    message: '请选择炉台'
  },
  targetResistivity: {
    required: true,
    type: 'number',
    trigger: ['blur', 'input'],
    message: '请输入目标电阻率'
  },
  maxResistivity: {
    required: true,
    type: 'number',
    trigger: ['blur', 'input'],
    message: '请输入电阻率范围'
  }
}

const isExpanded = ref(false)
const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}

const isInfoExpanded = ref(false)
const toggleInfoExpand = () => {
  isInfoExpanded.value = !isInfoExpanded.value
}

const preparationColumns = ref([
  {
    key: 'materialInfo',
    title: '装料信息',
    width: 230,
    align: 'center'
  },
  {
    key: 'weight',
    title: '重量',
    width: 40,
    render: (row: MaterialApproval.Formula.MaterialInfo) => h('span', {}, `${ row.weight }${ row.weight && 'KG' }`)
  },
  {
    key: 'active',
    title: '子料确认',
    width: 100,
    align: 'center',
    render: (row: MaterialApproval.Formula.MaterialInfo, index: number) => {
      return h(
        NSpace,
        {
          justify: 'center'
        },
        {
          default: () => [
            h(
              NButton,
              {
                size: 'small',
                type: 'primary',
                ghost: true,
                onClick: () => {
                  subMaterialDrawerVisible.value = true
                  subMaterialTitle.value = '装料信息'
                  subMaterialRowData.value = row
                }
              },
              {
                default: () => '子料选择'
              }
            ),
            h(
              NPopconfirm,
              {
                onPositiveClick: () => handleBatchDelete('preparationData', index)
              },
              {
                default: () => '确认删除吗？',
                trigger: () => h(
                  NButton,
                  {
                    size: 'small',
                    type: 'error',
                    ghost: true
                  },
                  {
                    default: () => '删除'
                  }
                )
              }
            )
          ]
        }
      )
    }
  }
])
const preparationData = computed(() => useMaterialApprovalStore.preparationData)

const resubmissionColumns = ref([
  {
    key: 'materialInfo',
    title: '装料信息',
    width: 330,
    align: 'center'
  },
  {
    key: 'weight',
    title: '重量',
    width: 40,
    render: (row: MaterialApproval.Formula.MaterialInfo) => h('span', {}, `${ row.weight }${ row.weight && 'KG' }`)
  },
  {
    key: 'active',
    title: '子料确认',
    width: 100,
    align: 'center',
    render: (row: MaterialApproval.Formula.MaterialInfo, index: number) => {
      return h(
        NSpace,
        {
          justify: 'center'
        },
        {
          default: () => [
            h(
              NButton,
              {
                size: 'small',
                type: 'primary',
                ghost: true,
                onClick: () => {

                  subMaterialDrawerVisible.value = true
                  subMaterialTitle.value = '初始复投信息'
                  subMaterialRowData.value = row }
              },
              {
                default: () => '子料选择'
              }
            ),
            h(
              NPopconfirm,
              {
                onPositiveClick: () => handleBatchDelete('resubmissionData', index)
              },
              {
                default: () => '确认删除吗？',
                trigger: () => h(
                  NButton,
                  {
                    size: 'small',
                    type: 'error',
                    ghost: true
                  },
                  {
                    default: () => '删除'
                  }
                )
              }
            )
          ]
        }
      )
    }
  }
])
const resubmissionData = computed(() => useMaterialApprovalStore.resubmissionData)

const segmentationColumns = ref([
  {
    key: 'resubmissionCount',
    title: '复投次数',
    width: 130,
    align: 'center',
    render: (row: MaterialApproval.Formula.MaterialInfo) => {
      return h(
        'span', {}, row.resubmissionCount
        && Array.isArray(row.resubmissionCount)
        && row.resubmissionCount.join('-')
      )
    }
  },
  {
    key: 'materialInfo',
    title: '装料信息',
    width: 330,
    align: 'center'
  },
  {
    key: 'weight',
    title: '重量',
    width: 70,
    align: 'center',
    render: (row: MaterialApproval.Formula.MaterialInfo) => h('span', {}, `${ row.weight }${ row.weight && 'KG' }`)
  },
  {
    key: 'active',
    title: '子料确认',
    width: 70,
    align: 'center',
    render: (row: MaterialApproval.Formula.MaterialInfo, index: number) => {
      return h(
        NSpace,
        {
          justify: 'center'
        },
        {
          default: () => [
            h(
              NButton,
              {
                size: 'small',
                type: 'primary',
                ghost: true,
                onClick: () => {
                  subMaterialDrawerVisible.value = true
                  subMaterialTitle.value = '取段复投信息'
                  subMaterialRowData.value = row
                }
              },
              {
                default: () => '子料选择'
              }
            ),
            h(
              NPopconfirm,
              {
                onPositiveClick: () => handleBatchDelete('segmentationData', index)
              },
              {
                default: () => '确认删除吗？',
                trigger: () => h(
                  NButton,
                  {
                    size: 'small',
                    type: 'error',
                    ghost: true
                  },
                  {
                    default: () => '删除'
                  }
                )
              }
            )
          ]
        }
      )
    }
  }
])
const segmentationData = computed(() => useMaterialApprovalStore.segmentationData)

const subMaterialDrawerVisible = ref(false)
const subMaterialTitle = ref('')
const subMaterialRowData = ref<MaterialApproval.Formula.MaterialInfo>()

const moduleOptions = ref([])
const handleModuleChange = (value) => {
  model.module = value
  handleGetSeriesOptions(true)
}

const handleSeriesChange = (value) => {
  model.series = value
  model.furnaceNum = ''
}
const seriesOptions = ref([])
const handleGetSeriesOptions = async(isUpdate: boolean) => {
  const moduleRes = await useMaterialApprovalStore.querySeriesByModule({
    module: model.module
  })
  if (moduleRes.code === 200) {
    if (isUpdate) {
      model.series = ''
    }
    seriesOptions.value = moduleRes.data.map(item => ({
      label: item,
      value: item
    }))
  }
}

// 控制模态框的显示状态
const showCheckedPlatformModalVisible = ref(false)
const handleCheckedDevice = () => {
  if (!(model.module && model.series)) {
    message.warning('请选择模块和系列之后再选择炉台')
    return
  }

  showCheckedPlatformModalVisible.value = true
}

const handleDeviceValue = (deviceList: Array<number>) => {
  model.furnaceNum = deviceList.join(',')
}

const handleMaterailCreate = (stages) => {
  console.log('回调')
}

provide('module', computed(() => model.module))
provide('series', computed(() => model.series))
provide('subMaterialRowData', subMaterialRowData)
const formRoleRef = ref<FormInst | null>(null)

const handleSubmit = async(event: Event) => {
  event.stopPropagation()
  console.log(model)
  console.log(preparationData)
  console.log(resubmissionData)
  console.log(segmentationData)

  const data = {
    ...model,
    area: model.module,
    initFeedTotalWeight: initFeedTotalWeightValue.value,
    segmentFeedTotalWeight: segmentFeedTotalWeightValue.value,
    formulaDetailDTOList: [
      ...preparationData.value.map(item => {
        return {
          ...item,
          type: 1,
          resubmissionCount: ''
        }
      }),
      ...resubmissionData.value.map(item => {
        return {
          ...item,
          type: 2,
          resubmissionCount: ''
        }
      }),
      ...segmentationData.value.map(item => {
        return {
          ...item,
          type: 3,
          resubmissionCount: Array.isArray(item.resubmissionCount) && item.resubmissionCount?.join('-')
        }
      })
    ]
  }

  console.log(operateType.value)

  // 数据校验
  formRoleRef.value?.validate(async(errors) => {
    if (!errors) {
      if (operateType.value !== 'edit') {
        const res = await useMaterialApprovalStore.addFormula(data)
      } else {
        const res = await useMaterialApprovalStore.editFormula(data)
        if (res.code === 200) {
          router.push('/material-approval/approval')
        }
      }
    }
  })
}

const initFeedTotalWeightValue = computed(() => {
  return preparationData.value.reduce((sum, item) => sum + item.weight, 0) + resubmissionData.value.reduce((sum, item) => sum + item.weight, 0) + ''
})

const segmentFeedTotalWeightValue = computed(() => {
  if (segmentationData.value[0]) {
    const firstResubmissionCount = JSON.stringify(segmentationData.value[0].resubmissionCount)

    return segmentationData.value
      .filter(item => JSON.stringify(item.resubmissionCount) === firstResubmissionCount)
      .reduce((sum, item) => sum + item.weight, 0) + ''

  } else {
    return '0'
  }

})

// 配方查询  关联
const recipe = ref('')
const recipeList = ref<Array<MaterialApproval.Approval.ApprovalItem>>([])
const recipeListOptions = ref<Array<{ label: string; value: string; }>>([])
const recipeListLoading = ref(false)
async function handleRecipeSearch(query: string) {
  recipeListLoading.value = true

  const res = await useMaterialApprovalStore.getMaterialFormulaList({
    current: 1,
    size: 999
  })

  if (res.code === 200) {
    recipeList.value = res.data.records
    recipeListOptions.value = recipeList.value.map((item: MaterialApproval.Approval.ApprovalItem) => {
      return {
        label: item.formulaNum,
        value: item.id
      }
    })
  }

  recipeListLoading.value = false
}

const handleRecipeChange = (value: string) => {
  recipe.value = value

  handleFormulaAssignment(
    recipeList.value.find(item => item.id === value) as MaterialApproval.Approval.ApprovalItem
  )
}

const handleFormulaAssignment = (data: MaterialApproval.Approval.ApprovalItem) => {
  console.log(data)
  Object.assign(
    model,
    {
      productClassification: '',
      area: data.area,
      module: data.area,
      series: data.series,
      furnaceNum: data.furnaceNum,
      productName: data.productName,
      specification: '',
      furnaceType: '',
      number: data.number,
      targetResistivity: Number(data.targetResistivity),
      maxResistivity: Number(data.maxResistivity),
      minResistivity: Number(data.minResistivity),
      initFeedTotalWeight: data.initFeedTotalWeight,
      initReuseProportion: Number(data.initReuseProportion),
      segmentFeedTotalWeight: data.segmentFeedTotalWeight,
      segmentReuseProportion: Number(data.segmentReuseProportion),
      remark: data.remark
    }, data.id && { id: Number(data.id) }
  )

  useMaterialApprovalStore.updateMaterialCategory('preparationData', data.loadInfo.map(item => {
    return {
      materialInfo: item.materialInfo,
      weight: item.weight,
      resubmissionCount: ''
    }
  }))
  useMaterialApprovalStore.updateMaterialCategory('resubmissionData', data.initFeedInfo.map(item => {
    return {
      materialInfo: item.materialInfo,
      weight: item.weight,
      resubmissionCount: ''
    }
  }))
  useMaterialApprovalStore.updateMaterialCategory('segmentationData', data.segmentFeedInfo.map(item => {
    return {
      materialInfo: item.materialInfo,
      weight: item.weight,
      resubmissionCount:
        (typeof item.resubmissionCount === 'string') ? item.resubmissionCount.split('-').map(item => Number(item)) : []
    }
  }))
  console.log(model)
}

const handleBatchDelete = (key: MaterialApproval.Formula.MaterialCategory, index: number) => {
  useMaterialApprovalStore.delMaterialCategory(key, index)
}

watch(() => route.query, (newQuery) => {
  console.log(newQuery)
  operateType.value = newQuery.operateType || 'add'

  if (operateType.value === 'edit') {
    handleFormulaAssignment(editingData.value)
  } else {
    Object.assign(model, createDefaultModel())
  }
}, { immediate: true })

const title = computed(() => {
  const titles = {
    add: '新增配方',
    edit: '编辑配方'
  }
  return titles[operateType.value]
})

onMounted(async() => {
  const moduleRes = await useMaterialApprovalStore.queryAllModule()
  if (moduleRes.code === 200) {
    moduleOptions.value = moduleRes.data.map(item => ({
      label: item,
      value: item
    }))
  }

  await handleGetSeriesOptions(false)
})
</script>

<template>
  <div class="wrap-formula flex h-full bg-#ccc flex-col">
    <NCard
      :bordered="false"
      size="small"
      class="card-wrapper m-b-12px"
    >
      <div
        class="flex justify-between items-center cursor-pointer"
        @click="toggleInfoExpand"
      >
        <h3>{{ title }}</h3>
        <div>
          <NButton
            size="small"
            class="m-r-12px"
            @click="handleSubmit"
          >
            <template #icon>
              <IconFont icon="icon-shuaxin-01" />
            </template>
            保存
          </NButton>
          <NButton
            size="small"
            @click.stop="toggleInfoExpand"
          >
            <template #icon>
              <IconFont icon="icon-qiehuan" />
            </template>
          </NButton>
        </div>
      </div>
      <transition name="fade">
        <div
          v-show="isInfoExpanded"
          class="pt-4"
        >
          <NForm
            ref="formRoleRef"
            :model="model"
            :rules="rules"
            label-placement="left"
            :label-width="100"
          >
            <NGrid
              responsive="screen"
              item-responsive
            >
              <NFormItemGi
                v-if="operateType !== 'edit'"
                span="24 m:4"
                label="配方查询"
              >
                <NSelect
                  v-model:value="recipe"
                  filterable
                  placeholder="输入配方名称"
                  :options="recipeListOptions"
                  :loading="recipeListLoading"
                  clearable
                  remote
                  :on-update:value="handleRecipeChange"
                  @search="handleRecipeSearch"
                />
              </NFormItemGi>
              <NFormItemGi
                span="24 m:4"
                label="产品分类"
                path="productClassification"
              >
                <NInput
                  v-model:value="model.productClassification"
                  placeholder="请输入产品分类"
                />
              </NFormItemGi>
              <NFormItemGi
                span="24 m:4"
                label="区域"
                path="module"
              >
                <NSelect
                  v-model:value="model.module"
                  :options="moduleOptions"
                  placeholder="请选择区域"
                  :on-update:value="handleModuleChange"
                />
              </NFormItemGi>
              <NFormItemGi
                span="24 m:4"
                label="系列"
                path="series"
              >
                <NSelect
                  v-model:value="model.series"
                  :options="seriesOptions"
                  placeholder="请选择系列"
                  :on-update:value="handleSeriesChange"
                />
              </NFormItemGi>
              <NFormItemGi
                span="24 m:3"
                label="炉台"
                path="furnaceNum"
              >
                <NTooltip
                  trigger="hover"
                  :style="{ maxWidth: '400px' }"
                  :disabled="!model.furnaceNum"
                >
                  <template #trigger>
                    <NButton @click="handleCheckedDevice">请选择炉台</NButton>
                  </template>
                  已经勾选炉台：{{ model.furnaceNum }}
                </NTooltip>
              </NFormItemGi>
              <NFormItemGi
                span="24 m:4"
                label="产品"
                path="productName"
              >
                <NSelect
                  v-model:value="model.productName"
                  :options="[]"
                  placeholder="请选择产品"
                />
              </NFormItemGi>
              <NFormItemGi
                span="24 m:4"
                label="规格型号"
                path="specification"
              >
                <NSelect
                  v-model:value="model.specification"
                  :options="[]"
                  placeholder="请选择规格型号"
                />
              </NFormItemGi>
              <NFormItemGi
                span="24 m:4"
                label="炉型热场"
                path="furnaceType"
              >
                <NSelect
                  v-model:value="model.furnaceType"
                  :options="[]"
                  placeholder="请选择炉型热场"
                />
              </NFormItemGi>

              <NFormItemGi
                span="24 m:4"
                label="编号"
                path="number"
              >
                <NInput
                  v-model:value="model.number"
                  placeholder="请输入编号"
                />
              </NFormItemGi>
              <NFormItemGi
                span="24 m:4"
                label="目标电阻率"
                path="targetResistivity"
              >
                <NInputNumber
                  v-model:value="model.targetResistivity"
                  :precision="2"
                  :step="0.1"
                  placeholder="请输入目标电阻率"
                />
              </NFormItemGi>
              <NFormItemGi
                span="24 m:5"
                label="电阻率范围"
                path="maxResistivity"
              >
                <NInputNumber
                  v-model:value="model.minResistivity"
                  :precision="2"
                  :step="0.1"
                  :min="0"
                  :max="model.maxResistivity"
                />
                <span class="p-x-8px">&lt;</span>
                <NInputNumber
                  v-model:value="model.maxResistivity"
                  :precision="2"
                  :step="0.1"
                  :min="model.minResistivity"
                />
              </NFormItemGi>
              <NFormItemGi
                span="24 m:24"
                label="备注"
                path="remark"
              >
                <NInput
                  v-model:value="model.remark"
                />
              </NFormItemGi>
            </NGrid>
          </NForm>
        </div>
      </transition>
    </NCard>
    <div
      class="h-200px overflow-auto"
      style="flex: 1;"
    >
      <div class="flex h-full bg-#ccc flex-col">
        <div class="flex">
          <NCard
            :bordered="false"
            title="装料信息"
          >
            <template #header-extra>
              <NButton
                type="primary"
                @click="handleAdd('preparationData')"
              >
                添加
              </NButton>
            </template>
            <NDataTable
              :columns="preparationColumns"
              :data="preparationData"
              class="wrap-table__custom h-200px text-10px"
              size="small"
              flex-height
              remote
              :row-key="(item) => item.materialClassification"
            />
          </NCard>
          <NCard
            :bordered="false"
            title="初始复投信息"
          >
            <template #header-extra>
              <NInput
                v-model:value="initFeedTotalWeightValue"
                disabled
                style="width: 100px; margin-right: 12px;"
              />
              <NInputNumber
                v-model:value="model.initReuseProportion"
                :precision="2"
                :step="0.1"
                :min="0"
                :max="100"
                class="w-110px m-r-12px"
              >
                <template #suffix>
                  %
                </template>
              </NInputNumber>
              <NButton
                type="primary"
                @click="handleAdd('resubmissionData')"
              >
                添加
              </NButton>
            </template>
            <NDataTable
              :columns="resubmissionColumns"
              :data="resubmissionData"
              size="small"
              class="wrap-table__custom h-200px text-10px"
              flex-height
              remote
              :scroll-x="640"
              :row-key="(item) => item.materialClassification"
            />
          </NCard>
        </div>
        <div style="flex: 1;">
          <NCard
            :bordered="false"
            title="取段复投信息"
            class="h-full"
          >
            <template #header-extra>
              <NInput
                v-model:value="segmentFeedTotalWeightValue"
                disabled
                style="width: 100px; margin-right: 12px;"
              />
              <NInputNumber
                v-model:value="model.segmentReuseProportion"
                :precision="2"
                :step="0.1"
                :min="0"
                :max="100"
                class="w-110px m-r-12px"
              >
                <template #suffix>
                  %
                </template>
              </NInputNumber>
              <NButton
                type="primary"
                @click="handleAdd('segmentationData')"
              >
                添加
              </NButton>
            </template>
            <NDataTable
              :columns="segmentationColumns"
              :data="segmentationData"
              size="small"
              class="wrap-table__custom h-full text-10px"
              flex-height
              remote
              :scroll-x="640"
              :row-key="(item) => item.materialClassification"
            />
          </NCard>
        </div>
      </div>
    </div>
    <MaterailCreateModal
      v-model:visible="visibleModal"
      :material-category="materialCategory"
      :series="model.series"
      @submitted="handleMaterailCreate"
    />

    <!-- 子料确认抽屉 -->
    <SubMaterialDrawer
      v-model:visible="subMaterialDrawerVisible"
      :sub-material-title="subMaterialTitle"
    />

    <!-- 炉台选择器 -->
    <CheckedPlatformModal
      v-model:visible="showCheckedPlatformModalVisible"
      :furnace-num="model.furnaceNum"
      @submitted="handleDeviceValue"
    />
  </div>
</template>

<style scoped lang="scss">
.wrap-formula {
  .wrap-table__custom {
    :deep() {
      .n-data-table-thead {
        --uno: text-12px;
      }
    }
  }
}
</style>
