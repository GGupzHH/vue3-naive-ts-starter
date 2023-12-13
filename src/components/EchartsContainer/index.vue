<template>
  <div
    ref="echartsDom"
    class="w-100% h-100%"
  ></div>
</template>

<script lang="ts">
import * as echarts from 'echarts'
export default defineComponent({
  name: 'EchartsContainer'
})
</script>

<script setup lang="ts">
import { EChartsType } from 'echarts'

const proxy = getCurrentInstance()?.proxy
import { useAccount } from 'modules/Account/store'
const props = defineProps({
  options: {
    type: Object,
    default: () => ({})
  }
})
const echartsDom = ref(null)
const useAccountStore = useAccount()
const contentDeep = computed(() => useAccountStore.settingConfig.contentDeep)
const { options } = toRefs(props)
const myChart = ref<null | EChartsType>(null)
const drawEcharts = (contentDeep: boolean) => {
  myChart.value = echarts.init(echartsDom.value, contentDeep ? 'dark' : null, {
    renderer: 'svg'
  })
  // myChart.clear()
  myChart.value.setOption({
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        '2019-10-10',
        '2019-10-11',
        '2019-10-12',
        '2019-10-13',
        '2019-10-14',
        '2019-10-15',
        '2019-10-16',
        '2019-10-17',
        '2019-10-18'
      ]
    },
    yAxis: {
      type: 'value'
    },
    visualMap: {
      type: 'piecewise',
      show: false,
      dimension: 1,
      // seriesIndex: [0, 1], // 虽然可以指定多个series，但是线的颜色只能设置一条
      seriesIndex: [0, 1],
      pieces: [{
        gt: 500, // 上限
        color: 'red'
      }, {
        lt: 300, // 下限
        color: 'yellow'
      }],
      outOfRange: { // 在选中范围外 的视觉元素，这里设置在正常范围内的图形颜色
        color: 'blue'
      }
    },
    series: [
      {
        name: '线1',
        type: 'line',
        smooth: false,
        symbol: 'none',
        lineStyle: {
          // 这里不能设置颜色，不然会以这个为准，设置的范围变色将不起作用
          width: 2
        },
        markLine: {
          symbol: 'none',
          label: {
            show: false
          },
          lineStyle: {
            color: 'red'
          },
          data: [
            {
              yAxis: 500
            },
            {
              yAxis: 300
            }
          ]
        },
        data: [
          200,
          560,
          750,
          580,
          250,
          300,
          450,
          300,
          100
        ]
      }
    ]
  })

  window.addEventListener('resize', () => {
    myChart.resize()
  }, false)
}

watch(
  () => ([options.value, contentDeep.value]),
  () => {
    myChart.value && myChart.value.dispose()
    drawEcharts(contentDeep.value)
  },
  {
    deep: true
  }
)

onMounted(() => {
  drawEcharts(contentDeep.value)
})

</script>

<style scoped lang="scss">

</style>
