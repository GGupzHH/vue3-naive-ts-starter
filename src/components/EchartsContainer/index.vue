<template>
  <div
    ref="echartsDom"
    class="w-100% h-100%"
  ></div>
</template>

<script lang="ts">
import * as echarts from 'echarts'
import { EChartsType } from 'echarts'
import { useTheme } from 'modules/Settings/store'
import echartsDarkTheme from './dark.project.json'
export default defineComponent({
  name: 'EchartsContainer'
})
</script>

<script setup lang="ts">
const proxy = getCurrentInstance()?.proxy
const props = defineProps({
  options: {
    type: Object,
    default: () => ({})
  }
})
const echartsDom = ref(null)
const useThemeStore = useTheme()
const darkMode = computed(() => useThemeStore.darkMode)
const { options } = toRefs(props)
let myChart = reactive<any>({})
echarts.registerTheme('darkCustom', echartsDarkTheme)
const drawEcharts = (contentDeep: boolean) => {
  myChart = echarts.init(echartsDom.value, contentDeep ? 'darkCustom' : null, {
    renderer: 'svg'
  })
  // 通过主题设置图标颜色的  这里可能后续需要转入回调函数去处理
  // options.value.visualMap.outOfRange.color = darkMode.value ? '#87f7cf' : '#3fb1e3'

  myChart.setOption(options.value)

  window.addEventListener('resize', () => {
    myChart?.resize()
  }, false)
}

watch(
  () => ([options.value, darkMode.value]),
  () => {
    myChart.dispose && myChart.dispose()
    drawEcharts(darkMode.value)
  },
  {
    deep: true
  }
)

onMounted(() => {
  drawEcharts(darkMode.value)
})

</script>

<style scoped lang="scss">

</style>
