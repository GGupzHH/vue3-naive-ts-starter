<template>
  <div
    class="wrap-tabs__item"
    :class="{
      'bg-primary:25': $route.meta.title === tabInfo.title
    }"
    @click="handleTabClick(tabInfo)"
  >
    <slot name="tab-item__header"></slot>
    <span>
      {{ tabInfo.title }}
    </span>
    <div
      v-if="isShowCloseIcon"
      class="tab-item-icon"
      @click.stop="handleTabClose(tabInfo)"
    >
      <n-icon size="15">
        <CloseIcon />
      </n-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { ITabItem } from './types'
import {
  Close as CloseIcon
} from '@vicons/ionicons5'
export default defineComponent({
  name: 'TabItem'
})
</script>

<script setup lang="ts">
const proxy = getCurrentInstance()?.proxy
const emit = defineEmits([
  'handleTabClose',
  'handleTabClick'
])

defineProps({
  isShowCloseIcon: {
    type: Boolean,
    default: true
  },
  tabInfo: {
    type: Object as PropType<ITabItem>,
    default: () => ({})
  }
})

/**
 * @description 关闭tab按钮
 * @param tabInfo ITabItem
 * @returns void
 */
const handleTabClose = (tabInfo: ITabItem) => {
  emit('handleTabClose', tabInfo)
}

/**
 * @description 点击tab按钮
 * @param tabInfo ITabItem
 * @returns void
 */
const handleTabClick = (tabInfo: ITabItem) => {
  emit('handleTabClick', tabInfo)
}
</script>

<style scoped lang="scss">
.wrap-tabs__item {
  --uno: w-206px h-28px
    flex flex-items-center flex-justify-between
    p-x-10px m-x-1px
    rounded-t-4px
    ease-in-out duration-300
    cursor-pointer
    border-style-solid
    border-primary:50
    border-1px;
  &:hover {
    --uno: bg-primary:50;
  }
  .tab-item-icon {
    --uno: color-primary:80 flex flex-items-center rounded-full ease-in-out duration-300;
    &:hover {
      --uno: bg-primary:25;
    }
  }
}
</style>
