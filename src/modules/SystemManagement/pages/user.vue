<script lang="ts">
import { useSystemManagement } from 'modules/SystemManagement/store'
import { useTable } from '@/hooks/common/table'
import { NSpace, NTag, NButton, NPopconfirm } from 'naive-ui'
import IconFont from '@/components/IconFont/index.vue'
import UserOperateModal from '../components/user/user-operate-modal.vue'

export default defineComponent({
  name: 'SystemManagementUser'
})
</script>

<script setup lang="ts">
const proxy = getCurrentInstance()?.proxy
const useSystemManagementStore = useSystemManagement()
const { columns, columnChecks, data, loading, getData, pagination, searchParams, resetSearchParams } = useTable({
  apiFn: useSystemManagementStore.getSystemUserList,
  showTotal: true,
  apiParams: {
    current: 1,
    size: 10,
    deptId: null,
    username: null,
    displayname: null,
    level: 1
  },
  columns: () => [
    {
      key: 'index',
      title: '序号',
      width: 64,
      align: 'center'
    },
    {
      key: 'username',
      title: '登录名',
      width: 120,
      align: 'center'
    },
    {
      key: 'workno',
      title: '工号',
      width: 120,
      align: 'center'
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
      width: 140,
      align: 'center',
      render: (row: SystemManagement.User.UserItemInfo) => {
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
              ),
              h(
                NPopconfirm,
                {
                  onPositiveClick: () => handlePwdReset(row)
                },
                {
                  default: () => '确认重置密码吗？',
                  trigger: () => h(
                    NButton,
                    {
                      size: 'small',
                      type: 'warning',
                      ghost: true
                    },
                    {
                      default: () => '重置密码'
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

const checkedRowKeys = ref<string[]>([])
const visibleModal = ref(false)
const operateType = ref<SystemManagement.User.UserOperateType>('add')
const editingData: Ref<SystemManagement.User.UserItemInfo | undefined> = ref(undefined)
const organizationalTree = ref<SystemManagement.Organizational.OrganizationalTreeItem[]>([])
const levelOptions = ref([
  {
    label: '本级',
    value: 1
  },
  {
    label: '本级及下级',
    value: 2
  }
])

const handleAdd = () => {
  operateType.value = 'add'
  visibleModal.value = true
}

const handleBatchDelete = async(row: SystemManagement.User.UserItemInfo) => {
  await useSystemManagementStore.delSystemUser(row.userId)
  getData()
}

const handlePwdReset = async(row: SystemManagement.User.UserItemInfo) => {
  await useSystemManagementStore.putSystemUserResetPwd(row.userId)
  getData()
}

const getSystemOrganizationalTree = async() => {
  const res = await useSystemManagementStore.getSystemOrganizationalTree()

  if (res.code === 200) {
    organizationalTree.value = res.data
  }
}

onMounted(async() => {
  await getSystemOrganizationalTree()
})

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
            span="24 s:12 m:5"
            label="组织"
            path="username"
            class="pr-24px"
          >
            <NTreeSelect
              v-model:value="searchParams.deptId"
              filterable
              :options="organizationalTree"
              default-value="Drive My Car"
              key-field="id"
              label-field="name"
              clearable
              placeholder="请选择组织"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 s:12 m:5"
            label="本级"
            path="username"
            class="pr-24px"
          >
            <NSelect
              v-model:value="searchParams.level"
              :options="levelOptions"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 s:12 m:5"
            label="姓名"
            path="displayname"
            class="pr-24px"
          >
            <NInput
              v-model:value="searchParams.displayname"
              placeholder="请输入姓名"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 s:12 m:5"
            label="登录名"
            path="username"
            class="pr-24px"
          >
            <NInput
              v-model:value="searchParams.username"
              placeholder="请输入登录名"
            />
          </NFormItemGi>
          <NFormItemGi span="24 s:12 m:4">
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
      title="用户管理"
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
      <!-- 新建/修改用户 -->
      <UserOperateModal
        v-model:visible="visibleModal"
        :operate-type="operateType"
        :row-data="editingData"
        @submitted="getData"
      />
    </NCard>
  </div>
</template>
