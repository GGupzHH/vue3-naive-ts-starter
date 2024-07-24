<template>
  <div class="wrap-monitor__echart">
    <n-form-item
      label="炉台"
      label-align="left"
    >
      <n-select
        v-model:value="deviceValue"
        class="w-220px"
        label-field="deviceName"
        value-field="deviceId"
        :options="deviceOptions"
        @update:value="selectChange"
      />
    </n-form-item>
    <EchartsContainer
      v-for="(echartsDataItem, echartsDataIndex) in echartsDataList"
      :key="echartsDataIndex"
      class="h-400px p-12px"
      :options="echartsDataItem"
    />
  </div>
</template>

<script lang="ts">

import { useMonitor } from 'modules/Monitor/store'
import { useTheme } from 'modules/Settings/store'
interface IDeviceItem {
  deviceId: string
  deviceName:string
  id:number
}
export default defineComponent({
  name: 'MonitorHearth'
})
</script>

<script setup lang="ts">

const proxy = getCurrentInstance()?.proxy
const useMonitorStore = useMonitor()
const themeStore = useTheme()
const echartsDataList = ref([])
const deviceValue = ref('')
const deviceOptions = ref<Array<IDeviceItem>>([])

const handleEcharts = async(id: string) => {
  const res = await useMonitorStore.getChartData()

  echartsDataList.value = res.data.map((item: any) => {
    return {
      title: {
        text: item.deviceName
      },
      tooltip: {
        trigger: 'axis',
        formatter: (value: any) => {
          return `${ item.deviceName }-${ item.attrY }<br/>
            ${ value[0].axisId }：${ value[0].axisValueLabel }，<br/>
            ${ value[0].seriesName }：<b>${ value[0].value }${ item.unitY }</b>，<br/>
            上限：<span style="color: red;"><b>${ item.upper }</b></span>，<br/>
            下限：<span style="color: red;"><b>${ item.lower }</b></span>，<br/>
          `
        }
      },
      legend: {
        data: [item.attrY]
      },
      grid: {
        left: '4%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          dataView: { readOnly: false },
          magicType: { type: ['line', 'bar'] },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        name: item.attrX,
        type: 'category',
        boundaryGap: false,
        data: item.xAxisData
      },
      yAxis: {
        type: 'value',
        name: item.unitY,
        splitLine: {
          // 分割线配置
          show: false
        },
        min: item.lower - 1,
        scale: true,
        max: item.upper + 1
      },
      visualMap: {
        type: 'piecewise',
        show: false,
        dimension: 1,
        seriesIndex: [0, 1],
        pieces: [
          {
            gt: item.upper,
            color: 'red'
          },
          {
            lt: item.lower,
            color: 'yellow'
          }
        ],
        outOfRange: {
          color: themeStore.darkMode ? '#72ccff' : '#3fb1e3'
        }
      },
      series: [
        {
          name: item.attrY,
          type: 'line',
          smooth: false,
          symbol: 'none',
          markPoint: {
            data: [
              { type: 'max',
                name: 'Max' },
              { type: 'min',
                name: 'Min' }
            ]
          },
          lineStyle: {
            width: 2
          },
          markLine: {
            symbol: 'none',
            label: {
              show: true
            },
            lineStyle: {
              color: 'red'
            },
            data: [
              {
                yAxis: item.lower
              },
              {
                yAxis: item.upper
              }
            ]
          },
          data: item.yAxisData.map((item: any) => item - 0)
        }
      ]
    }
  })

}

const getAllEquip = async() => {
  const res = await useMonitorStore.getAllEquip()
  deviceOptions.value = res.data
}

const selectChange = async() => {
  await handleEcharts(deviceValue.value)
}

onMounted(async() => {
  await getAllEquip()
  deviceValue.value = deviceOptions.value[6].deviceId
  await handleEcharts(deviceValue.value)
  setTimeout(async() => {
    await getAllEquip()
    deviceValue.value = deviceOptions.value[6].deviceId
    await handleEcharts(deviceValue.value)
  }, 30000)
})
</script>

<style scoped lang="scss">

</style>
