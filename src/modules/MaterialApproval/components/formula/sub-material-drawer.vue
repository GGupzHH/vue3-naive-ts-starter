<script lang="ts">
import { defineComponent } from 'vue'
import { useTable } from '@/hooks/common/table'
import { useMaterialApproval } from 'modules/MaterialApproval/store'
import SubMaterailCreateModal from './create-sub-material-modal.vue'
import { NSpace, NTag, NButton, NPopconfirm, NDrawer } from 'naive-ui'

type SubMaterialDrawerProps = {
  subMaterialTitle: string
}
export default defineComponent({
  name: 'SubMaterialDrawer'
})
</script>

<script setup lang="ts">
const props = defineProps<SubMaterialDrawerProps>()
const useMaterialApprovalStore = useMaterialApproval()
const visible = defineModel<boolean>('visible', {
  default: false
})
//     roleID: rowData.value.roleId
const checkedRowKeys = ref<string[]>([])
const series = inject<Ref<string>>('series')
const rowData = inject<Ref<MaterialApproval.Formula.MaterialInfo>>('subMaterialRowData')

const { columns, columnChecks, data, loading, getData, pagination, searchParams } = useTable({
  apiFn: useMaterialApprovalStore.queryMaterialFormulaSub,
  apiParams: {
    current: 1,
    size: 10
  },
  showTotal: true,
  immediate: false,
  columns: () => [
    {
      key: 'index',
      title: '序号',
      width: 60,
      align: 'center',
      fixed: 'left'
    },
    {
      key: 'series',
      title: '系列',
      width: 60,
      align: 'center',
      fixed: 'left'
    },
    {
      key: 'materialNo',
      title: '物料编号',
      width: 120,
      align: 'center',
      fixed: 'left'
    },
    {
      key: 'displayname',
      title: '库存量',
      width: 100,
      align: 'center'
    },
    {
      key: 'materialName',
      title: '物料名称',
      width: 220,
      align: 'center'
    },
    {
      key: 'mail',
      title: '虚拟炉台',
      width: 80,
      align: 'center'
    },
    {
      key: 'productClassification',
      title: '产品分类',
      width: 80,
      align: 'center'
    },
    {
      key: 'rawMaterialClassification',
      title: '原料分类',
      width: 80,
      align: 'center'
    },
    {
      key: 'brand',
      title: '厂牌',
      width: 80,
      align: 'center'
    },
    {
      key: 'resistivity',
      title: '电阻率',
      width: 80,
      align: 'center'
    },
    {
      key: 'active',
      title: '操作',
      width: 120,
      align: 'center',
      fixed: 'right',
      render: (row: MaterialApproval.Formula.MaterialFormulaSubItem) => {
        return h(
          NSpace,
          {
            justify: 'center'
          },
          {
            default: () => [
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
  ]
})

const handleAdd = () => {
  subMaterailCreateModalVisible.value = true
}

const handleBatchDelete = async(row: MaterialApproval.Formula.MaterialFormulaSubItem) => {
  await useMaterialApprovalStore.deleteMaterialFormulaSub({
    id: row.id
  })
  getData()
}

function closeDrawer() {
  visible.value = false
}

const subMaterailCreateModalVisible = ref(false)

watch(visible, async(newValue) => {
  if (newValue && rowData?.value) {
    searchParams.materialClassification = rowData?.value.materialInfo
    searchParams.series = series?.value
    await getData()
  }
})

</script>
<template>
  <NDrawer
    v-model:show="visible"
    :width="'70%'"
  >
    <NDrawerContent
      :title="subMaterialTitle"
      closable
    >
      <template #default>
        <div class="h-full flex flex-col">
          <AdvancedTable
            v-model:columns="columnChecks"
            class="flex-1 p-y-12px"
            :is-delete-btn="false"
            :loading="loading"
            @add="handleAdd"
            @refresh="getData"
          />
          <NDataTable
            v-model:checked-row-keys="checkedRowKeys"
            :columns="columns"
            :data="data"
            size="small"
            :flex-height="true"
            :remote="true"
            :scroll-x="640"
            :loading="loading"
            :pagination="pagination"
            :row-key="(item) => item.id"
            class="sm:h-full"
          />
        </div>
      </template>
    </NDrawerContent>
  </NDrawer>
  <!-- 子料添加弹窗 -->
  <SubMaterailCreateModal
    v-model:visible="subMaterailCreateModalVisible"
    @submitted="getData"
  />
</template>
