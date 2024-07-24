<script lang="ts">
import { useSystemManagement } from 'modules/SystemManagement/store'
import { useTable } from '@/hooks/common/table'
import { useDictTagList } from '@/hooks/common/dictTag'
import { NSpace, NTag, NButton, NPopconfirm, NPopover } from 'naive-ui'
import IconFont from '@/components/IconFont/index.vue'

export default defineComponent({
  name: 'SystemManagementLog'
})
</script>

<script setup lang="ts">
const proxy = getCurrentInstance()?.proxy
const useSystemManagementStore = useSystemManagement()
const { columns, columnChecks, data, loading, getData, pagination, searchParams, resetSearchParams } = useTable({
  apiFn: useSystemManagementStore.getSystemLogList,
  showTotal: true,
  apiParams: {
    current: 1,
    size: 10,
    type: null,
    title: null,
    createBy: null
  },
  columns: () => [
    {
      key: 'index',
      title: '序号',
      width: 64,
      align: 'center'
    },
    {
      key: 'disableRole',
      title: '类型',
      width: 120,
      align: 'center',
      render: (row: SystemManagement.Log.LogItem) => {
        return h(
          NTag,
          {
            type: row.type === '1' ? 'error' : 'success'
          },
          {
            default: () => row.type === '1' ? '异常' : '正常'
          }
        )
      }
    },
    {
      key: 'title',
      title: '标题',
      width: 120,
      align: 'center'
    },
    {
      key: 'createBy',
      title: '工号',
      width: 100,
      align: 'center'
    },
    {
      key: 'remoteAddr',
      title: 'IP地址',
      width: 120,
      align: 'center'
    },
    {
      key: 'method',
      title: '请求方式',
      width: 120,
      align: 'center'
    },
    {
      key: 'serviceId',
      title: '客户端',
      width: 120,
      align: 'center'
    },
    {
      key: 'time',
      title: '请求时间',
      width: 120,
      align: 'center'
    },
    {
      key: 'createTime',
      title: '创建时间',
      width: 120,
      align: 'center'
    }
    // {
    //   key: 'active',
    //   title: '操作',
    //   width: 120,
    //   align: 'center',
    //   render: (row: SystemManagement.Log.LogItem) => {
    //     return h(
    //       NSpace,
    //       {
    //         justify: 'center'
    //       },
    //       {
    //         default: () => [
    //           h(
    //             NButton,
    //             {
    //               size: 'small',
    //               type: 'primary',
    //               ghost: true,
    //               onClick: () => {
    //                 editingData.value = { ...row }
    //               }
    //             },
    //             {
    //               default: () => '编辑'
    //             }
    //           )
    //         ]
    //       }
    //     )
    //   }
    // }
  ],
  immediate: undefined
})

const checkedRowKeys = ref<string[]>([])
const editingData: Ref<SystemManagement.Log.LogItem | undefined> = ref(undefined)

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
            span="24 m:6"
            label="类型"
            path="type"
          >
            <NSelect
              v-model:value="searchParams.type"
              :options="useDictTagList('org_type')"
              placeholder="请选择类型"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 s:12 m:6"
            label="标题"
            path="title"
            class="pr-24px"
          >
            <NInput
              v-model:value="searchParams.title"
              placeholder="请输入标题"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 s:12 m:6"
            label="工号"
            path="createBy"
            class="pr-24px"
          >
            <NInput
              v-model:value="searchParams.createBy"
              placeholder="请输入工号"
            />
          </NFormItemGi>
          <NFormItemGi span="24 s:12 m:6">
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
      title="日志管理"
      :bordered="false"
      size="small"
      class="card-wrapper sm:flex-1-hidden"
    >
      <template #header-extra>
        <AdvancedTable
          v-model:columns="columnChecks"
          :is-delete-btn="false"
          :is-add-btn="false"
          :loading="loading"
          @refresh="getData"
        />
      </template>
      <NDataTable
        v-model:checked-row-keys="checkedRowKeys"
        :columns="columns"
        :data="data"
        size="small"
        flex-height
        remote
        :scroll-x="640"
        :loading="loading"
        :pagination="pagination"
        :row-key="(item) => item.id"
        class="sm:h-full"
      />
    </NCard>
  </div>
</template>
