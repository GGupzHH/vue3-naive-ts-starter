
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
