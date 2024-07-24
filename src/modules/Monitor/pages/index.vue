<template>
  <div class="wrap-monitor h-full flex-col">
    <n-form
      ref="formRef"
      :model="model"
      inline
      label-placement="left"
      size="small"
    >
      <n-form-item
        label="系列"
        path="series"
      >
        <n-select
          v-model:value="model.series"
          class="w-120px"
          placeholder="系列"
          :options="seriesOptions"
        />
      </n-form-item>
      <n-form-item
        label="属性"
        path="attribute"
      >
        <n-select
          v-model:value="model.attribute"
          class="w-220px"
          placeholder="属性"
          :max-tag-count="1"
          :options="attributeOptions"
          multiple
        />
      </n-form-item>
      <n-form-item
        label="时间范围"
        path="datetimeValue"
      >
        <n-date-picker
          type="datetimerange"
          @update:value="(val) => console.log(val)"
        />
      </n-form-item>
      <div style="display: flex; justify-content: flex-end">
        <n-button
          type="primary"
          size="small"
          @click="handleValidateButtonClick"
        >
          查询
        </n-button>
      </div>
    </n-form>
    <div class="h-full overflow-auto">
      <EchartsContainer
        v-for="(echartsDataItem, echartsDataIndex) in echartsDataList"
        :key="echartsDataIndex"
        class="h-500px p-12px"
        :options="echartsDataItem"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { FormInst } from 'naive-ui'
import { useDateFormat, useNow } from '@vueuse/core'
import { useMonitor } from 'modules/Monitor/store'

export default defineComponent({
  name: 'Monitor'
})
</script>

<script setup lang="ts">

const proxy = getCurrentInstance()?.proxy
const useMonitorStore = useMonitor()
const message = useMessage()

const formRef = ref<FormInst | null>(null)
const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')

const echartsDataList = ref<any>([])
const model = ref({
  series: '',
  attribute: '',
  datetimeValue: [undefined, undefined]
})
const seriesOptions = ['M'].map(
  (v) => ({
    label: v,
    value: v
  })
)
const attributeOptions = ['炉压'].map(
  (v) => ({
    label: v,
    value: v
  })
)

const handleEchartsTemp = (chatData: any) => {
  return {
    // title: chatData.title,
    tooltip: {
      padding: 5,
      borderWidth: 1,
      formatter: function(obj: any) {
        let value = obj.value
        const index = obj.dataIndex
        console.log(obj)
        // prettier-ignore
        return `
          报警时间: ${ useDateFormat(value[0], 'YYYY-MM-DD HH:mm:ss').value }<br>
          报警数值: ${ chatData.data[index].valueY }<br>
          炉台: ${ chatData.data[index].deviceName }<br>
          报警长度: ${ chatData.data[index].crystal_length }<br>
          上限: ${ chatData.data[index].set_pressure_max }<br>
          下限: ${ chatData.data[index].set_pressure_min }
        `
      }
    },
    xAxis: {
      scale: true,
      axisLabel: {
        formatter: (val) => {
          return useDateFormat(val, 'YYYY-MM-DD HH:mm:ss').value
        }
      }
    },
    yAxis: {
      type: 'value',
      name: chatData.unitY,
      splitLine: {
        // 分割线配置
        show: false
      },
      scale: true
    },
    series: [
      {
        type: 'effectScatter',
        symbolSize: 7,
        color: 'red',
        data: chatData.data.map((item: any, index: number) => {
          return [
            item.createTimeMillis,
            item.valueY - 0
          ]
        })
      }
    ]
  }
}

const handleEchartsData = (result: any) => {
  const chartsDataList = ref<any>([])
  console.log(result)
  for (let key in result) {
    chartsDataList.value.push(
      handleEchartsTemp(result[key])
    )
  }
  return chartsDataList.value
}

const handleValidateButtonClick = (e: MouseEvent) => {
  e.preventDefault()
  formRef.value?.validate(async(errors) => {
    if (!errors) {
      const res = await useMonitorStore.getAlarmChartData()
      echartsDataList.value = handleEchartsData(res.data)
      console.log(echartsDataList)
      message.success('验证成功')
    } else {
      console.log(errors)
      message.error('验证失败')
    }
  })
}

onMounted(() => {
})
</script>

<style scoped lang="scss">
</style>
