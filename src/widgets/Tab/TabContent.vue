<template>
  <div
    ref="tabContentDom"
    class="wrap-tab__content"
  >
    <div
      ref="scrollContentDom"
      class="scroll-content"
    >
      <TabItem
        v-for="(tabListItem, tabListIndex) in tabList"
        :key="tabListIndex"
        :tab-info="tabListItem"
        @handle-tab-click="handleTabClick"
        @handle-tab-close="handleTabClose"
      />
    </div>
  </div>
</template>

<script lang="ts">
import TabItem from './TabItem.vue'
import { ITabItem } from './types'
export default defineComponent({
  name: 'TabContent'
})
</script>

<script setup lang="ts">
const proxy = getCurrentInstance()?.proxy
const route = useRoute()
const router = useRouter()

const tabList = reactive<Array<ITabItem>>([])
const tabContentDom = ref<HTMLElement | null>(null)
const scrollContentDom = ref<HTMLElement | null>(null)

/**
 * @description 获取当前path在tabList中的位置
 * @param path string
 * @returns number
 */
const findTabIndex = (path: string):number => {
  console.log(tabList)
  return tabList.findIndex(
    tabItem => tabItem.path === path
  )
}

/**
 * @description 给tabList添加新的tab
 * @param currentRoute globalThis.RouteLocationNormalizedLoaded
 * @returns void
 */
const handleAddTabList = (currentRoute: globalThis.RouteLocationNormalizedLoaded) => {
  const findTabItemIndex = findTabIndex(currentRoute.fullPath)
  if (findTabItemIndex === -1 && currentRoute.fullPath !== '/home') {
    tabList.push({
      path: currentRoute.fullPath,
      title: currentRoute.meta.title as string
    })
  }
}

/**
 * @description tab点击跳转
 * @param tabListItem ITabItem
 * @returns void
 */
const handleTabClick = (tabListItem: ITabItem) => {
  router.push({
    path: tabListItem.path
  })
}

/**
 * @description 关闭tab页，需要考虑关闭的是不是当前的，关闭之后还有没有别的tab
 * @param tabListItem ITabItem
 * @returns void
 */
const handleTabClose = (tabListItem: ITabItem) => {
  const findTabItemIndex = findTabIndex(tabListItem.path)
  tabList.splice(findTabItemIndex, 1)

  if (tabListItem.path === route.fullPath) {
    const replaceTabIndex = ref(0)
    if (!findTabItemIndex) {
      replaceTabIndex.value = findTabItemIndex
    } else {
      replaceTabIndex.value = findTabItemIndex - 1
    }
    router.push({
      path: tabList[replaceTabIndex.value]?.path || '/home'
    })
  }
}

/**
 * @description 监听路由变化，把当前路由添加到tab列表
 */
watch(
  () => route,
  () => {
    handleAddTabList(route)
  },
  {
    deep: true,
    immediate: true
  }
)

/**
 * @description 监听tab列表，当没有tab的时候跳转到首页
 */
watch(
  () => tabList.length,
  () => {
    if (!tabList.length) {
      router.push({
        path: '/'
      })
    }
  },
  {
    deep: true,
    immediate: true
  }
)

/**
 * @description 处理tab滚动
 * @returns void
 */
const handleTabScroll = () => {
  tabContentDom.value?.addEventListener('wheel', (event) => {
    // 判断鼠标滚动方向
    const scrollDirection = event.deltaY > 0 ? 1 : -1
    // 阻止默认滚动行为
    event.preventDefault()
    // 设置内容容器的滚动位置
    scrollContentDom.value!.scrollLeft += scrollDirection * 50 // 调整滚动速度
  })
}

onMounted(() => {
  handleTabScroll()
})

</script>

<style scoped lang="scss">
.wrap-tab__content {
  --uno: w-100% flex flex-items-center flex-justify-self-start overflow-y-auto overflow-x-hidden;
  .scroll-content {
    --uno: flex overflow-x-auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
      width: 0.5em;
    }
    :deep() {
      .wrap-tabs__item {
        min-width: 206px;
      }
    }
  }
}
</style>
