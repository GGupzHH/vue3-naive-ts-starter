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
        label="属性"
        path="selectValue"
      >
        <n-select
          v-model:value="formValue.selectValue"
          class="w-120px"
          :options="selectOptions"
          :onUpdate:value="handleSelectChange"
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
  </div>
</template>

<script lang="ts">
import { NButton, useMessage } from 'naive-ui'
export default defineComponent({
  name: 'MonitorAlarm'
})
</script>

<script setup lang="ts">
import { useMonitor } from 'modules/Monitor/store'
import IconFont from '@/components/IconFont/index.vue'

const proxy = getCurrentInstance()?.proxy
const useMonitorStore = useMonitor()
const data = ref([])
const formValue = ref({
  selectValue: 'pressure'
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
  },
  {
    label: '节流阀开度',
    value: 'throttle'
  },
  {
    label: '氩气',
    value: 'argon'
  }
])

const selectMapping = ref({
  pressure: {
    colTitle: '炉压',
    maxTitle: '炉压上限',
    minTitle: '炉压下限',
    maxKey: 'setPressureMax',
    minKey: 'setPressureMin'
  },
  rate: {
    colTitle: '生长速率',
    maxTitle: '速率上限',
    minTitle: '速率下限',
    maxKey: 'rateUpwardFloat',
    minKey: 'rateDownwardFloat'
  },
  crucibleRunning: {
    colTitle: '等径埚转',
    maxTitle: '速率上限',
    minTitle: '速率下限',
    maxKey: 'crucibleRunningUpwardFloat',
    minKey: 'crucibleRunningDownwardFloat'
  },
  crucibleSite: {
    colTitle: '等径埚位',
    maxTitle: '速率上限',
    minTitle: '速率下限',
    maxKey: 'crucibleSiteUpwardFloat',
    minKey: 'crucibleSiteDownwardFloat'
  },
  throttle: {
    colTitle: '节流阀开度',
    maxTitle: '节流阀开度上限',
    minTitle: '节流阀开度下限',
    maxKey: 'throttleUpwardFloat',
    minKey: 'throttleDownwardFloat'
  },
  argon: {
    colTitle: '氩气',
    maxTitle: '氩气上限',
    minTitle: '氩气下限',
    maxKey: 'argonUpwardFloat',
    minKey: 'argonDownwardFloat'
  }
})
const message = useMessage()
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
    title() {
      return selectMapping.value[formValue.value.selectValue].colTitle
    },
    width: 80,
    render(row) {
      return h(
        'text',
        {},
        row[formValue.value.selectValue]
      )
    }
  },
  {
    title() {
      return selectMapping.value[formValue.value.selectValue].maxTitle
    },
    width: 80,
    render(row) {
      return h(
        'text',
        {},
        row[selectMapping.value[formValue.value.selectValue].maxKey]
      )
    }
  },
  {
    title() {
      return selectMapping.value[formValue.value.selectValue].minTitle
    },
    width: 80,
    render(row) {
      return h(
        'text',
        {},
        row[selectMapping.value[formValue.value.selectValue].minKey]
      )
    }
  },
  {
    title: '晶体长度',
    width: 80,
    key: 'crystalLength'
  },
  {
    title: '批次号',
    width: 120,
    key: 'lotNo'
  },
  {
    title: '时间',
    width: 180,
    key: 'createTime'
  },
  {
    title: 'createTimeMillis',
    key: 'createTimeMillis'
  },
  {
    title: '操作',
    key: 'active',
    render(row, index) {
      return h(
        NButton,
        {
          circle: true,
          onClick: () => {
            console.log(row, index)
          }
        },
        [
          h(IconFont, {
            class: 'icon-style',
            icon: 'icon-a-009_dakaqiandao'
          })
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
    await handleGetErrorList()
  },
  onUpdatePageSize: async(pageSize: number) => {
    paginationReactive.pageSize = pageSize
    paginationReactive.page = 1
    await handleGetErrorList()
  }
})

const handleGetErrorList = async() => {
  const res = await useMonitorStore.getErrorList({
    currentPage: paginationReactive.page,
    pageSize: paginationReactive.pageSize,
    deviceId: '',
    type: formValue.value.selectValue
  })

  if (res.code === 200) {
    data.value = res.data.records
    paginationReactive.itemCount = res.data.total
  }
}

const handleSelectChange = async() => {
  await handleGetErrorList()
}
onMounted(async() => {
  await handleGetErrorList()
})
</script>

<style scoped lang="scss">
</style>
