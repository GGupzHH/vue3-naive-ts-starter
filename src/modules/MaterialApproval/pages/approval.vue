<script lang="ts">
import { useMaterialApproval } from 'modules/MaterialApproval/store'
import { useTable } from '@/hooks/common/table'
import { NSpace, NTag, NButton, NPopconfirm } from 'naive-ui'

export default defineComponent({
  name: 'MaterailApproval'
})
</script>

<script setup lang="ts">
// const proxy = getCurrentInstance()?.proxy
const useMaterialApprovalStore = useMaterialApproval()
const router = useRouter()
const handleAdd = () => {
  operateType.value = 'add'
  handleLinkFormula()
}

const handleLinkFormula = (rowData?: MaterialApproval.Approval.ApprovalItem) => {
  router.push({
    path: '/material-approval/formula',
    query: {
      operateType: operateType.value,
      rowData: rowData ? JSON.stringify(rowData) : ''
    }
  })
}

const checkedRowKeys = ref<string[]>([])
const handleBatchDelete = async(row: MaterialApproval.Approval.ApprovalItem) => {
  await useMaterialApprovalStore.delMaterialFormulaList(row.id)
  getData()
}

const { columns, columnChecks, data,loading, pagination, getData } =
  useTable({
    apiFn: useMaterialApprovalStore.getMaterialFormulaList,
    apiParams: {
      current: 1,
      size: 10
    },
    columns: () => [
      {
        type: 'selection',
        fixed: 'left'
      },
      {
        key: 'formulaNum',
        title: '配方编码',
        width: 80,
        align: 'center'
      },
      {
        key: 'approvalBatch',
        title: '配方审批版本',
        width: 80,
        align: 'center'
      },
      {
        key: 'area',
        title: '区域',
        width: 50,
        align: 'left'
      },
      {
        key: 'series',
        title: '系列',
        width: 50,
        align: 'center'
      },
      {
        key: 'furnaceNum',
        title: '炉台数',
        width: 140,
        align: 'center'
      },
      {
        key: 'productName',
        title: '产品',
        width: 100,
        align: 'center'
      },
      {
        key: 'specification',
        title: '规格型号',
        width: 80,
        align: 'center'
      },
      {
        key: 'furnaceType',
        title: '炉型热厂',
        width: 80,
        align: 'center'
      },
      {
        key: 'number',
        title: '编号',
        width: 90,
        align: 'center'
      },
      {
        key: 'targetResistivity',
        title: '目标电阻率',
        width: 70,
        align: 'center'
      },
      {
        key: 'minResistivity-maxResistivity',
        title: '电阻率范围',
        width: 100,
        align: 'center',
        render: (row: MaterialApproval.Approval.ApprovalItem) => {
          return h(
            'span',
            {},
            `${ row.minResistivity } - ${ row.maxResistivity }`
          )
        }
      },
      {
        key: 'loadInfo',
        title: '装料信息',
        width: 240,
        align: 'center',
        render: (row: MaterialApproval.Approval.ApprovalItem) => {
          return h(
            'div',
            {},
            {
              default: () => row.loadInfo && row.loadInfo.map((item) => {
                return h(
                  'div',
                  {},
                  `${ item.materialInfo }， ${ item.weight }KG`
                )
              })
            }
          )
        }
      },

      {
        key: 'initFeedInfo',
        title: '初始复投信息',
        width: 240,
        align: 'center',
        render: (row: MaterialApproval.Approval.ApprovalItem) => {
          return h(
            'div',
            {},
            {
              default: () => row.loadInfo && row.loadInfo.map((item) => {
                return h(
                  'div',
                  {},
                  `${ item.materialInfo }， ${ item.weight }KG`
                )
              })
            }
          )
        }
      },
      {
        key: 'initFeedTotalWeight',
        title: '初始总投料量',
        width: 100,
        align: 'center',
        render: (row: MaterialApproval.Approval.ApprovalItem) => h(
          'span',
          {},
          `${ row.initFeedTotalWeight }${ row.initFeedTotalWeight && 'KG' }`
        )
      },
      {
        key: 'initReuseProportion',
        title: '初始回用占比',
        width: 100,
        align: 'center',
        render: (row: MaterialApproval.Approval.ApprovalItem) => h(
          'span',
          {},
          `${ row.initReuseProportion }${ row.initReuseProportion && '%' }`
        )
      },
      {
        key: 'segmentFeedInfo',
        title: '取段复投信息',
        width: 240,
        align: 'center',
        render: (row: MaterialApproval.Approval.ApprovalItem) => {
          return h(
            'div',
            {},
            {
              default: () => {
                const result = handleSegmentFeedInfo(row.segmentFeedInfo)

                return result.map(item => {
                  return h(
                    'div',
                    {},
                    {
                      default: () => {
                        return [
                          h(
                            `div`,
                            {
                              class: 'font-bold text-12px text-left'
                            },
                            `${ item.resubmissionCount }复投：`
                          ),
                          h(
                            `div`,
                            {},
                            {
                              default: () => {
                                return item.materialInfo.map((materialItem, materialIndex) => {
                                  return h(
                                    `div`,
                                    {},
                                    {
                                      default: () => [
                                        h(`strong`, {}, materialItem),
                                        h(`span`, {}, `${ item.weight[materialIndex] }KG`)
                                      ]
                                    }
                                  )
                                })
                              }
                            }
                          )
                        ]
                      }
                    }
                  )
                })
              }
            }
          )
        }
      },
      {
        key: 'segmentFeedTotalWeight',
        title: '取段投料重量',
        width: 100,
        align: 'center',
        render: (row: MaterialApproval.Approval.ApprovalItem) => h(
          'span',
          {},
          `${ row.segmentFeedTotalWeight }${ row.segmentFeedTotalWeight && 'KG' }`
        )
      },
      {
        key: 'segmentReuseProportion',
        title: '取段回用占比',
        width: 100,
        align: 'center',
        render: (row: MaterialApproval.Approval.ApprovalItem) => h(
          'span',
          {},
          `${ row.segmentReuseProportion }${ row.segmentReuseProportion && '%' }`
        )
      },

      {
        key: 'remark',
        title: '备注',
        width: 120,
        align: 'center'
      },
      {
        key: 'active',
        title: '操作',
        width: 280,
        align: 'center',
        fixed: 'right',
        render: (row: MaterialApproval.Approval.ApprovalItem) => {
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
                      operateType.value = 'edit'
                      handleLinkFormula(row)
                    }
                  },
                  {
                    default: () => '编辑'
                  }
                ),
                h(
                  NButton,
                  {
                    size: 'small',
                    type: 'primary',
                    ghost: true,
                    onClick: () => {
                      editingData.value = { ...row }
                    }
                  },
                  {
                    default: () => '复投车'
                  }
                ),

                h(
                  NPopconfirm,
                  {
                    onPositiveClick: () => handleBatchDelete(row)
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
    ],
    immediate: undefined
  })

const operateType = ref<MaterialApproval.Formula.FormulaOperateType>('add')
const editingData: Ref<MaterialApproval.Approval.ApprovalItem | undefined> = ref(undefined)

const handleSegmentFeedInfo = (data: Array<MaterialApproval.Formula.MaterialInfo>) => {
  const result = [] as any

  // 用于记录resubmissionCount相同的项
  const map = new Map()

  data.forEach(item => {
    const { resubmissionCount } = item

    if (!map.has(resubmissionCount)) {
      // 如果没有记录，初始化一个新对象
      map.set(resubmissionCount, {
        ...item,
        materialInfo: [item.materialInfo],
        weight: [item.weight]
      })
    } else {
      // 如果已经有记录，更新materialInfo和weight
      const existingItem = map.get(resubmissionCount)
      existingItem.materialInfo.push(item.materialInfo)
      existingItem.weight.push(item.weight)
    }
  })

  // 将map的值放入结果数组中
  map.forEach(value => result.push(value))

  return result
}
// onMounted(async() => {
//   await getData()
// })
</script>

<template>
  <div class="flex-vertical-stretch gap-16px overflow-hidden <sm:overflow-auto">
    <NCard
      title="配方审批版本-20249344-1"
      :bordered="false"
      size="small"
      class="card-wrapper sm:flex-1-hidden"
    >
      <template #header-extra>
        <AdvancedTable
          v-model:columns="columnChecks"
          :is-delete-btn="false"
          :loading="loading"
          add-btn-text="添加配方"
          @add="handleAdd"
          @refresh="getData"
        >
          <template #suffix>
            <NButton
              size="small"
              ghost
              type="error"
            >
              <template #icon>
                <IconFont
                  icon="icon-shanchu1"
                />
              </template>
              审批
            </NButton>
          </template>
        </AdvancedTable>
      </template>
      <NDataTable
        v-model:checked-row-keys="checkedRowKeys"
        :columns="columns"
        :data="data"
        size="small"
        :flex-height="true"
        :scroll-x="2700"
        :loading="loading"
        :pagination="pagination"
        :row-key="row => row.id"
        class="sm:h-full text-10px"
      />
    </NCard>
  </div>
</template>

<style scoped lang="scss"></style>
