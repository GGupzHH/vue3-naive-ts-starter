<script lang="ts">
import { useSystemManagement } from 'modules/SystemManagement/store'
import { useTable } from '@/hooks/common/table'
import { NSpace, NButton, NPopconfirm } from 'naive-ui'
import IconFont from '@/components/IconFont/index.vue'
import DictionaryOperateModal from '../components/dictionary/dictionary-operate-modal.vue'
import operateDictionaryInfoDrawer from '../components/dictionary/operate-dictionary-info-drawer.vue'

export default defineComponent({
  name: 'SystemManagementDictionary'
})
</script>

<script setup lang="ts">
const proxy = getCurrentInstance()?.proxy
const useSystemManagementStore = useSystemManagement()
const { columns, columnChecks, data, loading, getData, pagination, searchParams, resetSearchParams } = useTable({
  apiFn: useSystemManagementStore.getSystemDictionaryTypeList,
  showTotal: true,
  apiParams: {
    current: 1,
    size: 10,
    type: null
  },
  columns: () => [
    {
      key: 'index',
      title: '序号',
      width: 64,
      align: 'center'
    },
    {
      key: 'type',
      title: '类型',
      width: 120,
      align: 'center',
      render: (row: SystemManagement.Dictionary.DictionaryItem) => {
        return h(
          NButton,
          {
            size: 'small',
            type: 'primary',
            class: 'hover:underline underline-offset-4',
            text: true,
            onClick: () => {
              editingData.value = { ...row }
              visibleDictionaryInfoDrawer.value = true
            }
          },
          {
            default: () => row.type
          }
        )
      }
    },
    {
      key: 'description',
      title: '描述',
      width: 120,
      align: 'center'
    },
    {
      key: 'remarks',
      title: '备注',
      width: 120,
      align: 'center'
    },
    {
      key: 'active',
      title: '操作',
      width: 120,
      align: 'center',
      render: (row: SystemManagement.Dictionary.DictionaryItem) => {
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
  ],
  immediate: undefined
})

console.log(pagination)

const checkedRowKeys = ref<string[]>([])
const visibleModal = ref(false)
const operateType = ref<SystemManagement.Dictionary.DictionaryOperateType>('add')
const editingData: Ref<SystemManagement.Dictionary.DictionaryItem | undefined> = ref(undefined)
provide('dictionaryTypeData', editingData)

const handleAdd = () => {
  operateType.value = 'add'
  visibleModal.value = true
}

const handleBatchDelete = async(row: SystemManagement.Dictionary.DictionaryItem) => {
  await useSystemManagementStore.delSystemDictionaryTypeApi(row.id)
  getData()
}

const visibleDictionaryInfoDrawer = ref(false)

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
            label="字典类型"
            path="roleName"
            class="pr-24px"
          >
            <NInput
              v-model:value="searchParams.type"
              placeholder="请输入字典类型"
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
      title="字典管理"
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
      <!-- 新建/修改字典类型 -->
      <DictionaryOperateModal
        v-model:visible="visibleModal"
        :operate-type="operateType"
        :row-data="editingData"
        @submitted="getData"
      />
      <!-- 字典详情抽屉 -->
      <operateDictionaryInfoDrawer
        v-model:visible="visibleDictionaryInfoDrawer"
        :row-data="editingData"
        @submitted="getData"
      />
    </NCard>
  </div>
</template>
