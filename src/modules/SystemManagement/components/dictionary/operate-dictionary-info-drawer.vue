<script lang="ts">
import { defineComponent } from 'vue'
import { useTable } from '@/hooks/common/table'
import { useSystemManagement } from 'modules/SystemManagement/store'
import { NSpace, NTag, NButton, NPopconfirm, NDrawer } from 'naive-ui'
import DictionaryInfoOperateModal from './dictionary-info-operate-modal.vue'

type OperateDictionaryInfoDrawerProps = {
  rowData?: SystemManagement.Dictionary.DictionaryItem
}

export default defineComponent({
  name: 'OperateDictionaryInfoDrawer'
})
</script>

<script setup lang="ts">
const props = defineProps<OperateDictionaryInfoDrawerProps>()
const useSystemManagementStore = useSystemManagement()
const visible = defineModel<boolean>('visible', {
  default: false
})
const checkedRowKeys = ref<string[]>([])

const { columns, columnChecks, data, loading, getData, pagination, searchParams } = useTable({
  apiFn: useSystemManagementStore.getSystemDictionaryInfoList,
  apiParams: {
    current: 1,
    size: 10,
    dictId: null
  },
  showTotal: true,
  immediate: false,
  columns: () => [
    {
      key: 'index',
      title: '序号',
      width: 64,
      align: 'center'
    },
    {
      key: 'label',
      title: '键',
      width: 120,
      align: 'center'
    },
    {
      key: 'value',
      title: '值',
      width: 120,
      align: 'center'
    },
    {
      key: 'remarks',
      title: '类型',
      width: 100,
      align: 'center',
      render: (row: SystemManagement.Dictionary.DictionaryInfoItem) => {
        return h(
          NTag,
          {
            type: row.remarks || 'primary'
          },
          {
            default: () => '字典类型'
          }
        )
      }
    },
    {
      key: 'createTime',
      title: '创建时间',
      width: 120,
      align: 'center'
    },
    {
      key: 'active',
      title: '操作',
      width: 120,
      align: 'center',
      fixed: 'right',
      render: (row: SystemManagement.Dictionary.DictionaryInfoItem) => {
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
                    editingData.value = { ...row }
                    visibleModal.value = true
                  }
                },
                {
                  default: () => '编辑'
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
  ]
})

const visibleModal = ref(false)
const operateType = ref<SystemManagement.Dictionary.DictionaryInfoOperateType>('add')
const editingData: Ref<SystemManagement.Dictionary.DictionaryInfoItem | undefined> = ref(undefined)

const handleAdd = () => {
  operateType.value = 'add'
  visibleModal.value = true
}

const handleBatchDelete = async(row: SystemManagement.Dictionary.DictionaryInfoItem) => {
  await useSystemManagementStore.delSystemDictionaryInfo(row.id)
  getData()
}

watch(visible, async(newValue) => {
  if (newValue && props?.rowData) {
    searchParams.dictId = props?.rowData.id
    await getData()
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
          <!-- 新建/修改字典明细 -->
          <DictionaryInfoOperateModal
            v-model:visible="visibleModal"
            :operate-type="operateType"
            :row-data="editingData"
            @submitted="getData"
          />
        </div>
      </template>
    </NDrawerContent>
  </NDrawer>
</template>
