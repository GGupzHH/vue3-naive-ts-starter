<script lang="ts">
import { useSystemManagement } from 'modules/SystemManagement/store'
import { useTable } from '@/hooks/common/table'
import MenuOperateModal from '../components/menu/menu-operate-modal.vue'
import { NSpace, NTag, NButton, NPopconfirm } from 'naive-ui'
import IconFont from '@/components/IconFont/index.vue'

export default defineComponent({
  name: 'SystemManagementMenu'
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
const handleBatchDelete = async(row: SystemManagement.Menu.SystemMenuTree) => {
  await useSystemManagementStore.delSystemMenu(row.id)
  getData()
}

const { columns, columnChecks, data,loading, pagination, getData } =
  useTable({
    apiFn: useSystemManagementStore.getSystemMenuTree,
    apiParams: {},
    columns: () => [
      {
        key: 'id',
        title: 'ID',
        width: 100,
        align: 'left'
      },
      {
        key: 'parentId',
        title: '父节点ID',
        width: 100,
        align: 'center'
      },
      {
        key: 'name',
        title: '标题',
        width: 120,
        align: 'center'
      },
      {
        key: 'path',
        title: '地址',
        width: 150,
        align: 'center'
      },
      {
        key: 'icon',
        title: '图标',
        width: 60,
        align: 'center',
        render: (row: SystemManagement.Menu.SystemMenuTree) => {
          return h(IconFont, {
            class: 'text-22px',
            icon: row.icon
          })
        }
      },
      {
        key: 'sort',
        title: '排序',
        width: 60,
        align: 'center'
      },
      {
        key: 'type',
        title: '类型',
        width: 60,
        render: (row: SystemManagement.Menu.SystemMenuTree) => {
          return h(
            NTag,
            {
              type: row.type === '0' ? 'primary' : 'success'
            },
            {
              default: () => row.type === '0' ? '菜单' : '按钮'
            }
          )
        }
      },
      {
        key: 'disableMenu',
        title: '是否启用',
        width: 60,
        align: 'center',
        render: () => {
          return h(
            NTag,
            {
              type: 'success'
            },
            {
              default: () => '是'
            }
          )
        }
      },
      {
        key: 'active',
        title: '操作',
        width: 180,
        align: 'center',
        render: (row: SystemManagement.Menu.SystemMenuTree) => {
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
                    default: () => '新增子菜单'
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
const operateType = ref<SystemManagement.Menu.MenuOperateType>('add')
const editingData: Ref<SystemManagement.Menu.SystemMenuTree | undefined> = ref(undefined)

onMounted(async() => {
  await getData()
})
</script>

<template>
  <div class="flex-vertical-stretch gap-16px overflow-hidden <sm:overflow-auto">
    <NCard
      title="菜单管理"
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
      <MenuOperateModal
        v-model:visible="visibleModal"
        :operate-type="operateType"
        :row-data="editingData"
        @submitted="getData"
      />
    </NCard>
  </div>
</template>

<style scoped lang="scss"></style>
