
<script lang="ts">
import { useSystemManagement } from 'modules/SystemManagement/store'
import { useTable } from '@/hooks/common/table'
import { NSpace, NTag, NButton, NPopconfirm, NPopover } from 'naive-ui'
import IconFont from '@/components/IconFont/index.vue'
import RoleOperateModal from '../components/role/role-operate-modal.vue'
import OperateDepartmentDrawer from '../components/role/operate-department-drawer.vue'
import OperateMenuDrawer from '../components/role/operate-menu-drawer.vue'
import OperateUserDrawer from '../components/role/operate-user-drawer.vue'

export default defineComponent({
  name: 'SystemManagementRole'
})
</script>

<script setup lang="ts">
const proxy = getCurrentInstance()?.proxy
const useSystemManagementStore = useSystemManagement()
const { columns, columnChecks, data, loading, getData, pagination, searchParams, resetSearchParams } = useTable({
  apiFn: useSystemManagementStore.getSystemRoleList,
  showTotal: true,
  apiParams: {
    current: 1,
    size: 10,
    roleName: null
  },
  columns: () => [
    {
      key: 'index',
      title: '序号',
      width: 64,
      align: 'center'
    },
    {
      key: 'roleName',
      title: '角色名称',
      width: 120,
      align: 'center'
    },
    {
      key: 'roleCode',
      title: '角色标识',
      width: 120,
      align: 'center'
    },
    {
      key: 'roleDesc',
      title: '角色描述',
      width: 120,
      align: 'center'
    },
    {
      key: 'dsType',
      title: '数据权限',
      width: 120,
      align: 'center',
      render: (row: SystemManagement.Role.RoleItem) => {
        return h(
          NTag,
          {
            type: useSystemManagementStore.dsTypeOptions.find(
              item => item.value === (row.dsType + '')
            )?.type,
            bordered: false
          },
          {
            default: () => useSystemManagementStore.dsTypeOptions.find(
              item => item.value === (row.dsType + '')
            )?.label
          }
        )
      }
    },
    {
      key: 'disableRole',
      title: '是否启用',
      width: 120,
      align: 'center',
      render: (row: SystemManagement.Role.RoleItem) => {
        return h(
          NTag,
          {
            type: row.disableRole === '1' ? 'error' : 'success'
          },
          {
            default: () => row.disableRole === '1' ? '否' : '是'
          }
        )
      }
    },
    {
      key: 'active',
      title: '操作',
      width: 120,
      align: 'center',
      render: (row: SystemManagement.Role.RoleItem) => {
        return h(
          NSpace,
          {
            justify: 'center'
          },
          {
            default: () => [
              h(
                NPopover ,
                {
                  // onPositiveClick: () => handleBatchDelete(row)
                  trigger: 'click'
                },
                {
                  default: () => h(
                    NSpace,
                    {
                      vertical: true
                    },
                    {
                      default: () => [
                        h(
                          NButton,
                          {
                            text: true,
                            onClick: () => {
                              editingData.value = { ...row }
                              visibleDepartmentDrawer.value = true
                            }
                          },
                          {
                            default: () => '部门列表',
                            icon: () => h(
                              IconFont,
                              {
                                icon: 'icon-loufang'
                              }
                            )
                          }
                        ),
                        h(
                          NButton,
                          {
                            text: true,
                            onClick: () => {
                              editingData.value = { ...row }
                              visibleMenuDrawer.value = true
                            }
                          },
                          {
                            default: () => '菜单信息',
                            icon: () => h(
                              IconFont,
                              {
                                icon: 'icon-caidan'
                              }
                            )
                          }
                        ),
                        h(
                          NButton,
                          {
                            text: true,
                            onClick: () => {
                              editingData.value = { ...row }
                              visibleUserDrawer.value = true
                            }
                          },
                          {
                            default: () => '人员列表',
                            icon: () => h(
                              IconFont,
                              {
                                icon: 'icon-pintuan'
                              }
                            )
                          }
                        )
                      ]
                    }
                  ),
                  trigger: () => h(
                    NButton,
                    {
                      size: 'small',
                      type: 'warning',
                      ghost: true
                    },
                    {
                      default: () => '授权'
                    }
                  )
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

console.log(pagination)

const checkedRowKeys = ref<string[]>([])
const visibleModal = ref(false)
const operateType = ref<SystemManagement.Role.RoleOperateType>('add')
const editingData: Ref<SystemManagement.Role.RoleItem | undefined> = ref(undefined)

const handleAdd = () => {
  operateType.value = 'add'
  visibleModal.value = true
}

const handleBatchDelete = async(row: SystemManagement.Role.RoleItem) => {
  await useSystemManagementStore.delSystemRole(row.roleId)
  getData()
}

const visibleDepartmentDrawer = ref(false)
const visibleMenuDrawer = ref(false)
const visibleUserDrawer = ref(false)

</script>

<template>
  <div class="flex-vertical-stretch gap-16px overflow-hidden <sm:overflow-auto">
    <NCard
      title="搜索"
      :bordered="false"
      size="small"
      class="card-wrapper"
    >
      <NForm
        :model="searchParams"
        label-placement="left"
        :label-width="80"
      >
        <NGrid
          responsive="screen"
          item-responsive
        >
          <NFormItemGi
            span="24 s:12 m:6"
            label="角色名称"
            path="roleName"
            class="pr-24px"
          >
            <NInput
              v-model:value="searchParams.roleName"
              placeholder="请输入角色名称"
            />
          </NFormItemGi>
          <NFormItemGi span="24 s:12 m:18">
            <NSpace
              class="w-full"
              justify="end"
            >
              <NButton
                type="primary"
                ghost
                @click="getData"
              >
                <template #icon>
                  <IconFont icon="icon-sousuo1" />
                </template>
                搜索
              </NButton>
              <NButton @click="resetSearchParams">
                <template #icon>
                  <IconFont icon="icon-shuaxin-01" />
                </template>
                清空
              </NButton>
            </NSpace>
          </NFormItemGi>
        </NGrid>
      </NForm>
    </NCard>
    <NCard
      title="角色管理"
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
        :remote="true"
        :scroll-x="640"
        :loading="loading"
        :pagination="pagination"
        :row-key="(item) => item.id"
        class="sm:h-full"
      />
      <!-- 新建/修改角色 -->
      <RoleOperateModal
        v-model:visible="visibleModal"
        :operate-type="operateType"
        :row-data="editingData"
        @submitted="getData"
      />
      <!-- 授权部门抽屉 -->
      <OperateDepartmentDrawer
        v-model:visible="visibleDepartmentDrawer"
        :row-data="editingData"
        @submitted="getData"
      />
      <!-- 授权菜单抽屉 -->
      <OperateMenuDrawer
        v-model:visible="visibleMenuDrawer"
        :row-data="editingData"
        @submitted="getData"
      />
      <!-- 授权用户抽屉 -->
      <OperateUserDrawer
        v-model:visible="visibleUserDrawer"
        :row-data="editingData"
        @submitted="getData"
      />
    </NCard>
  </div>
</template>
