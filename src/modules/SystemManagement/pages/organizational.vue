<script lang="ts">
import { useSystemManagement } from 'modules/SystemManagement/store'
import { useTable } from '@/hooks/common/table'
import { useDictTag } from '@/hooks/common/dictTag'
import OrgOperateModal from '../components/organizational/org-operate-modal.vue'
import { NSpace, NTag, NButton, NPopconfirm } from 'naive-ui'

export default defineComponent({
  name: 'SystemManagementOrganizational'
})
</script>

<script setup lang="ts">
// const proxy = getCurrentInstance()?.proxy
const useSystemManagementStore = useSystemManagement()
const handleAdd = () => {
  operateType.value = 'add'
  visibleModal.value = true
}
const checkedRowKeys = ref<string[]>([])
const handleBatchDelete = async(row: SystemManagement.Organizational.OrganizationalTreeItem) => {
  await useSystemManagementStore.delSystemOrganizational(row.id)
  getData()
}

const { columns, columnChecks, data,loading, pagination, getData } =
  useTable({
    apiFn: useSystemManagementStore.getSystemOrganizationalTree,
    apiParams: {},
    columns: () => [
      {
        key: 'id',
        title: 'ID',
        width: 120,
        align: 'left'
      },
      {
        key: 'parentId',
        title: '父节点ID',
        width: 120,
        align: 'center'
      },
      {
        key: 'name',
        title: '名称',
        width: 120,
        align: 'center'
      },
      {
        key: 'nickName',
        title: '简称',
        width: 120,
        align: 'center'
      },
      {
        key: 'departCode',
        title: '编码',
        width: 120,
        align: 'center'
      },
      {
        key: 'type',
        title: '类型',
        width: 120,
        align: 'center',
        render: (row: SystemManagement.Organizational.OrganizationalTreeItem) => {
          return useDictTag('org_type', row.type)
        }
      },
      {
        key: 'percharge',
        title: '联系人',
        width: 120,
        align: 'center'
      },
      {
        key: 'phone',
        title: '联系方式',
        width: 120,
        align: 'center'
      },
      {
        key: 'active',
        title: '操作',
        width: 180,
        align: 'center',
        render: (row: SystemManagement.Organizational.OrganizationalTreeItem) => {
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
                      operateType.value = 'addChild'
                      editingData.value = { ...row }
                      visibleModal.value = true
                    }
                  },
                  {
                    default: () => '新增子机构'
                  }
                ),
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
    ],
    immediate: undefined
  })

const visibleModal = ref(false)
const operateType = ref<SystemManagement.Organizational.OrganizationalOperateType>('add')
const editingData: Ref<SystemManagement.Organizational.OrganizationalTreeItem | undefined> = ref(undefined)

onMounted(async() => {
  await getData()
})
</script>

<template>
  <div class="flex-vertical-stretch gap-16px overflow-hidden <sm:overflow-auto">
    <NCard
      title="组织机构管理"
      :bordered="false"
      size="small"
      class="card-wrapper sm:flex-1-hidden"
    >
      <template #header-extra>
        <AdvancedTable
          v-model:columns="columnChecks"
          :is-delete-btn="false"
          :loading="loading"
          @add="handleAdd"
          @refresh="getData"
        />
      </template>
      <NDataTable
        v-model:checked-row-keys="checkedRowKeys"
        :columns="columns"
        :data="data"
        size="small"
        :flex-height="true"
        :scroll-x="640"
        :loading="loading"
        :pagination="pagination"
        :row-key="row => row.id"
        class="sm:h-full"
      />
      <OrgOperateModal
        v-model:visible="visibleModal"
        :operate-type="operateType"
        :row-data="editingData"
        @submitted="getData"
      />
    </NCard>
  </div>
</template>

<style scoped lang="scss"></style>
