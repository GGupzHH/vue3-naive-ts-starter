<script lang="ts">
import { defineComponent } from 'vue'
import { useTable } from '@/hooks/common/table'
import { useSystemManagement } from 'modules/SystemManagement/store'
import { NSpace, NTag, NButton, NPopconfirm, NDrawer } from 'naive-ui'
import RoleUserOperateModal from './role-user-operate-modal.vue'

type OperateUserDrawerProps = {
  rowData?: SystemManagement.Role.RoleItem
}

export default defineComponent({
  name: 'OperateUserDrawer'
})
</script>

<script setup lang="ts">
const props = defineProps<OperateUserDrawerProps>()
const useSystemManagementStore = useSystemManagement()
const visible = defineModel<boolean>('visible', {
  default: false
})
const { rowData } = toRefs(props)
console.log(rowData)
//     roleID: rowData.value.roleId
const checkedRowKeys = ref<string[]>([])

// BUG 分页有bug 弹窗打开的分页 切换页数有问题 后端返回数据的问题
const { columns, columnChecks, data, loading, getData, pagination, searchParams } = useTable({
  apiFn: useSystemManagementStore.getSystemByRoleUserList,
  apiParams: {
    current: 1,
    size: 10,
    roleID: null
  },
  showTotal: true,
  immediate: false,
  columns: () => [
    {
      key: 'username',
      title: '登录名',
      width: 120,
      align: 'center',
      fixed: 'left'
    },
    {
      key: 'workno',
      title: '工号',
      width: 120,
      align: 'center',
      fixed: 'left'
    },
    {
      key: 'displayname',
      title: '姓名',
      width: 120,
      align: 'center'
    },
    {
      key: 'phone',
      title: '手机号',
      width: 120,
      align: 'center'
    },
    {
      key: 'mail',
      title: '邮箱',
      width: 120,
      align: 'center'
    },
    {
      key: 'disableUser',
      title: '是否启用',
      width: 120,
      align: 'center',
      render: (row: SystemManagement.User.UserItemInfo) => {
        return h(
          NTag,
          {
            type: row.disableUser === '1' ? 'error' : 'success'
          },
          {
            default: () => row.disableUser === '1' ? '否' : '是'
          }
        )
      }
    },
    {
      key: 'active',
      title: '操作',
      width: 120,
      align: 'center',
      fixed: 'right',
      render: (row: SystemManagement.User.UserItemInfo) => {
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

const visibleRoleUserModal = ref(false)
const handleAdd = () => {
  visibleRoleUserModal.value = true
}

const handleBatchDelete = async(row: SystemManagement.User.UserItemInfo) => {
  await useSystemManagementStore.delSystemByRoleUserItem({
    roleId: rowData.value?.roleId as number,
    userId: row.userId
  })
  getData()
}

watch(visible, async(newValue) => {
  if (newValue && props?.rowData) {
    searchParams.roleID = props?.rowData.roleId
    await getData()
  }
})

watch(pagination, async() => {
  console.log(pagination)
})

</script>
<template>
  <NDrawer
    v-model:show="visible"
    :width="'60%'"
  >
    <NDrawerContent
      title="用户权限配置"
      closable
    >
      <template #default>
        <div class="h-full flex flex-col">
          <AdvancedTable
            v-model:columns="columnChecks"
            class="flex-1 p-y-12px"
            :is-delete-btn="false"
            :loading="loading"
            add-btn-text="关联人员"
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
    <RoleUserOperateModal
      v-model:visible="visibleRoleUserModal"
      :row-data="rowData"
      @submitted="getData"
    />
  </NDrawer>
</template>
