<script lang="ts">
import { useSystemManagement } from 'modules/SystemManagement/store'
import { useTable } from '@/hooks/common/table'
import { NSpace, NTag, NButton, NPopconfirm, NPopover } from 'naive-ui'
import IconFont from '@/components/IconFont/index.vue'

export default defineComponent({
  name: 'SystemManagementJobLog'
})
</script>

<script setup lang="ts">
const proxy = getCurrentInstance()?.proxy
const useSystemManagementStore = useSystemManagement()
const { columns, columnChecks, data, loading, getData, pagination, searchParams, resetSearchParams } = useTable({
  apiFn: useSystemManagementStore.getSystemJobLogList,
  showTotal: true,
  apiParams: {
    current: 1,
    size: 10,
    jobName: null,
    jobGroup: null,
    descs: 'create_time'
  },
  columns: () => [
    {
      key: 'index',
      title: '序号',
      width: 64,
      align: 'center'
    },
    {
      key: 'jobName',
      title: '任务名称',
      width: 120,
      align: 'center'
    },
    {
      key: 'jobGroup',
      title: '任务组名',
      width: 120,
      align: 'center'
    },
    {
      key: 'jobLogStatus',
      title: '状态',
      width: 120,
      align: 'center',
      render: (row: SystemManagement.JobLog.JobLogItem) => {
        return h(
          NTag,
          {
            type: row.jobLogStatus === '1' ? 'error' : 'success'
          },
          {
            default: () => row.jobLogStatus === '1' ? '异常' : '正常'
          }
        )
      }
    },
    {
      key: 'jobType',
      title: '类型',
      width: 120,
      align: 'center'
    },
    {
      key: 'executePath',
      title: '执行路径',
      width: 100,
      align: 'center'
    },
    {
      key: 'className',
      title: '执行文件',
      width: 120,
      align: 'center'
    },
    {
      key: 'methodName',
      title: '执行方法',
      width: 120,
      align: 'center'
    },
    {
      key: 'methodParamsValue',
      title: '执行参数值',
      width: 120,
      align: 'center'
    },
    {
      key: 'cronExpression',
      title: 'cron表达式',
      width: 120,
      align: 'center'
    },
    {
      key: 'jobMessage',
      title: '状态描述',
      width: 120,
      align: 'center'
    },
    {
      key: 'executeTime',
      title: '执行时间(ms)',
      width: 120,
      align: 'center'
    },
    {
      key: 'exceptionInfo',
      title: '异常信息',
      width: 120,
      align: 'center'
    },
    {
      key: 'createTime',
      title: '开始时间',
      width: 120,
      align: 'center'
    }
  ],
  immediate: undefined
})

const checkedRowKeys = ref<string[]>([])

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
            label="任务名称"
            path="jobName"
            class="pr-24px"
          >
            <NInput
              v-model:value="searchParams.jobName"
              placeholder="请输入任务名称"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 s:12 m:6"
            label="组名"
            path="jobGroup"
            class="pr-24px"
          >
            <NInput
              v-model:value="searchParams.jobGroup"
              placeholder="请输入组名"
            />
          </NFormItemGi>
          <NFormItemGi span="24 s:12 m:12">
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
      title="Quartz日志"
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
