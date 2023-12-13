<template>
  <div class="wrap-monitor">
    <n-tabs type="line">
      <n-tab name="幸福">
        炉台
      </n-tab>
      <n-tab name="的">    
        属性
      </n-tab>
    </n-tabs>
    <div class="wrap-monitor__echart">
      <EchartsContainer :options="options"/>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance
} from 'vue'
export default defineComponent({
  name: 'Monitor'
})
</script>

<script setup lang="ts">
const proxy = getCurrentInstance()?.proxy
const options = ref({
    tooltip: {
      trigger: 'axis',
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
          color: 'blue',
        },
      },
    series: [
      {
        name:'线1',
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
           lineStyle:{
            color:'red'
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
      },
    ]
  })
</script>

<style scoped lang="scss">
.wrap-monitor {
  height: 100%;
  .wrap-monitor__echart {
    height: calc(100% - 42px);
  }
}
</style>