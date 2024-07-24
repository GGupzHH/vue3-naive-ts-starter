<template>
  <div class="wrap-monitor-alarm h-full flex-col">
    <n-form
      ref="formRef"
      :model="formValue"
      inline
      label-placement="left"
      size="small"
    >
      <n-form-item
        label="名称"
        path="deviceName"
      >
        <n-input
          v-model:value="formValue.deviceName"
          type="text"
          placeholder="名称"
          :onUpdate:value="handleInputChange"
        />
      </n-form-item>
    </n-form>
    <n-data-table
      ref="table"
      class="h-full"
      remote
      :columns="columns"
      :data="data"
      :scroll-x="1000"
      :pagination="paginationReactive"
      flex-height
      :row-key="(rowData: any) => {
        return rowData.deviceId
      }"
    />
    <n-drawer
      v-model:show="drawerShow"
      :width="700"
    >
      <n-drawer-content
        title="异常信息"
        :native-scrollbar="false"
      >
        <div class="whitespace-pre-wrap">
          {{ rowRemarks }}
        </div>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<script lang="ts">
import { NButton, useMessage } from 'naive-ui'
export default defineComponent({
  name: 'MonitorSOPMonitoring'
})
</script>

<script setup lang="ts">
import { useMonitor } from 'modules/Monitor/store'
import IconFont from '@/components/IconFont/index.vue'

const proxy = getCurrentInstance()?.proxy
const useMonitorStore = useMonitor()
const data = ref([])
const formValue = ref({
  deviceName: ''
})
const selectOptions = ref([
  {
    label: '炉压',
    value: 'pressure'
  },
  {
    label: '生长速率',
    value: 'rate'
  },
  {
    label: '埚转',
    value: 'crucibleRunning'
  },
  {
    label: '埚位',
    value: 'crucibleSite'
  }
])

const message = useMessage()
const rowRemarks = ref('')
const drawerShow = ref(false)
const columns = ref([
  {
    title: '炉台ID',
    key: 'deviceId',
    width: 80
  },
  {
    title: '炉台名称',
    key: 'deviceName',
    width: 80
  },
  {
    title: '批次号',
    key: 'lotNo',
    width: 80
  },
  {
    title: '工步',
    key: 'mode',
    width: 80
  },
  {
    title: 'createTime',
    key: 'createTime',
    width: 80
  },
  {
    title: '操作',
    key: 'active',
    render(row, index) {
      return h(
        NButton,
        {
          quaternary: true,
          onClick: () => {
            rowRemarks.value = row.remarks
            drawerShow.value = true
            console.log(row, index)
          }
        },
        [
          '查看异常'
        ]
      )
    },
    width: 140,
    fixed: 'right',
    align: 'center'
  }
])

const paginationReactive = reactive({
  page: 1,
  pageSize: 10,
  showSizePicker: true,
  itemCount: 0,
  pageSizes: [10, 20, 50],
  prefix(pages) {
    console.log(pages)
    return `总数据 ${ pages.itemCount } 条`
  },
  onChange: async(page: number) => {
    paginationReactive.page = page
    await handleGetSOPMonitoring()
  },
  onUpdatePageSize: async(pageSize: number) => {
    paginationReactive.pageSize = pageSize
    paginationReactive.page = 1
    await handleGetSOPMonitoring()
  }
})

const handleGetSOPMonitoring = async() => {
  const res = await useMonitorStore.getSOPMonitoring({
    // currentPage: paginationReactive.page,
    // pageSize: paginationReactive.pageSize,
    current: paginationReactive.page,
    size: paginationReactive.pageSize,
    deviceName: formValue.value.deviceName
  })

  if (res.code === 200) {
    data.value = res.data.records
    paginationReactive.itemCount = res.data.total
  }
}

const handleInputChange = async() => {
  await handleGetSOPMonitoring()
}
onMounted(async() => {
  await handleGetSOPMonitoring()
})
</script>

<style scoped lang="scss">
</style>
