
<script lang="ts">
import { defineComponent } from 'vue'
import { createReusableTemplate } from '@vueuse/core'
import LineChart from '@/modules/Home/components/line-chart.vue'
import PieChart from '@/modules/Home/components/pie-chart.vue'
import { useAccount } from 'modules/Account/store'

interface StatisticData {
  id: number
  label: string
  value: string
}
interface CardData {
  key: string
  title: string
  value: number
  unit: string
  color: {
    start: string
    end: string
  }
  icon: string
}
interface GradientBgProps {
  gradientColor: string
}
export default defineComponent({
  name: 'Home'
})
</script>

<script setup lang="ts">
const statisticData = computed<StatisticData[]>(() => [
  {
    id: 0,
    label: '项目',
    value: '25'
  },
  {
    id: 1,
    label: '待办',
    value: '4/16'
  },
  {
    id: 2,
    label: '消息',
    value: '12'
  }
])

const cardData = computed<CardData[]>(() => [
  {
    key: 'visitCount',
    title: '单晶',
    value: 9725,
    unit: '',
    color: {
      start: '#ec4786',
      end: '#b955a4'
    },
    icon: 'ant-design:bar-chart-outlined'
  },
  {
    key: 'turnover',
    title: '方棒',
    value: 1026,
    unit: '',
    color: {
      start: '#865ec0',
      end: '#5144b4'
    },
    icon: 'ant-design:money-collect-outlined'
  },
  {
    key: 'downloadCount',
    title: '集控',
    value: 970925,
    unit: '',
    color: {
      start: '#56cdf3',
      end: '#719de3'
    },
    icon: 'carbon:document-download'
  },
  {
    key: 'dealCount',
    title: '数字化',
    value: 9527,
    unit: '',
    color: {
      start: '#fcbc25',
      end: '#f68057'
    },
    icon: 'ant-design:trademark-circle-outlined'
  }
])

const [DefineGradientBg, GradientBg] = createReusableTemplate<GradientBgProps>()

function getGradientColor(color: CardData['color']) {
  return `linear-gradient(to bottom right, ${ color.start }, ${ color.end })`
}

const useAccountStore = useAccount()

const userInfo = computed(() => useAccountStore.userInfo)

if ('serial' in navigator) {
  console.log('Web Serial API is supported.')
} else {
  console.error('Web Serial API is not supported in this browser.')
}

const serialData = ref('') // 存储从串口读取的数据

// 连接串口并读取数据的函数
const connectToSerial = async() => {
  try {
    // 请求串口权限
    const port = await navigator.serial.requestPort()
    // 设置串口通信的波特率
    await port.open({ baudRate: 9600 })

    // 获取读取器以接收数据
    const reader = port.readable.getReader()

    while (true) {
      // 从串口中读取数据
      const { value, done } = await reader.read()
      if (done) {
        // 如果读取完成，退出循环
        console.log('串口读取完成')
        break
      }
      console.log(done)
      console.log(new TextDecoder().decode(value))
      console.log(new TextDecoder().decode(value).length)
      // 将数据更新到界面上
      serialData.value += new TextDecoder().decode(value)
    }

    // 关闭读取器
    reader.releaseLock()
  } catch (error) {
    console.error('串口连接失败：', error)
  }
}

onMounted(() => {
  if (!('serial' in navigator)) {
    console.error('Web Serial API 不支持当前浏览器')
  }
})

</script>
<template>
  <div class="flex-vertical-stretch gap-16px overflow-hidden <sm:overflow-auto">
    <NCard
      :bordered="false"
      class="card-wrapper"
    >
      <NGrid
        :x-gap="16"
        :y-gap="16"
        responsive="screen"
        item-responsive
      >
        <NGi span="24 s:24 m:18">
          <div class="flex-y-center">
            <div class="size-72px shrink-0 overflow-hidden rd-1/2">
              <n-avatar
                round
                :size="48"
              >
                {{ userInfo && userInfo.username }}
              </n-avatar>
            </div>
            <div class="pl-12px">
              <h3 class="text-18px font-semibold">
                早上好,用户名，今天又是充满希望的一天！
              </h3>
              <p class="text-#999 leading-30px">天气日期？</p>
            </div>
          </div>
        </NGi>
        <NGi span="24 s:24 m:6">
          <NSpace
            :size="24"
            justify="end"
          >
            <NStatistic
              v-for="item in statisticData"
              :key="item.id"
              class="whitespace-nowrap"
              v-bind="item"
            />
          </NSpace>
        </NGi>
      </NGrid>
    </NCard>

    <div>
      <button @click="connectToSerial">连接串口</button>
      <p>串口信息：{{ serialData }}</p>
    </div>
    <NCard
      :bordered="false"
      size="small"
      class="card-wrapper"
    >
      <!-- define component start: GradientBg -->
      <DefineGradientBg v-slot="{ $slots, gradientColor }">
        <div
          class="rd-8px px-16px pb-4px pt-8px text-white"
          :style="{ backgroundImage: gradientColor }"
        >
          <component :is="$slots.default" />
        </div>
      </DefineGradientBg>
      <!-- define component end: GradientBg -->

      <NGrid
        cols="s:1 m:2 l:4"
        responsive="screen"
        :x-gap="16"
        :y-gap="16"
      >
        <NGi
          v-for="item in cardData"
          :key="item.key"
        >
          <GradientBg
            :gradient-color="getGradientColor(item.color)"
            class="flex-1"
          >
            <h3 class="text-16px">{{ item.title }}</h3>
            <div class="flex justify-between pt-12px">
              <!-- <SvgIcon
                :icon="item.icon"
                class="text-32px"
              /> -->
              <CountTo
                :prefix="item.unit"
                :start-value="1"
                :end-value="item.value"
                class="text-30px text-white dark:text-dark"
              />
            </div>
          </GradientBg>
        </NGi>
      </NGrid>
    </NCard>

    <NGrid
      :x-gap="16"
      :y-gap="16"
      responsive="screen"
      item-responsive
    >
      <NGi span="24 s:24 m:14">
        <NCard
          :bordered="false"
          class="card-wrapper"
        >
          <LineChart />
        </NCard>
      </NGi>
      <NGi span="24 s:24 m:10">
        <NCard
          :bordered="false"
          class="card-wrapper"
        >
          <PieChart />
        </NCard>
      </NGi>
    </NGrid>
  </div>
</template>
