<template>
  <n-divider title-placement="center">布局调整</n-divider>
  <n-space
    justify="space-around"
    :wrap="true"
    :size="24"
    class="px-12px"
  >
    <div
      v-for="item in theme.layout.modeList"
      :key="item.value"
      class="border-2px b-solid rounded-6px cursor-pointer hover:border-primary"
      :class="[item.value === theme.layout.mode ? 'border-primary' : 'border-transparent']"
      @click="theme.setLayoutMode(item.value)"
    >
      <n-tooltip
        :placement="item.label"
        trigger="hover"
      >
        <template #trigger>
          <div
            class="layout-card__shadow gap-6px w-96px h-64px p-6px rd-4px"
            :class="[item.value.includes('vertical') ? 'flex' : 'flex-col']"
          >
            <template v-if="item.value === 'vertical'">
              <div class="w-18px h-full bg-primary:50 rd-4px"></div>
              <div class="flex-1 flex-col gap-6px">
                <div class="h-16px bg-primary rd-4px"></div>
                <div class="flex-1 bg-primary:25 rd-4px"></div>
              </div>
            </template>
            <template v-if="item.value === 'horizontal'">
              <div class="h-16px bg-primary rd-4px"></div>
              <div class="flex-1 flex gap-6px">
                <div class="flex-1 bg-primary:25 rd-4px"></div>
              </div>
            </template>
          </div>
        </template>
        <span>{{ item.label }}</span>
      </n-tooltip>
    </div>
  </n-space>
</template>

<script setup lang="ts">
import { useTheme } from 'modules/Settings/store'
import type { PopoverPlacement } from 'naive-ui'

defineOptions({ name: 'LayoutMode' })

type LayoutConfig = Record<
    UnionKey.ThemeLayoutMode,
    {
      placement: PopoverPlacement
      headerClass: string
      menuClass: string
      mainClass: string
    }
>

const layoutConfig: LayoutConfig = {
  vertical: {
    placement: 'bottom-start',
    headerClass: '',
    menuClass: 'w-1/3 h-full',
    mainClass: 'w-2/3 h-3/4'
  },
  horizontal: {
    placement: 'bottom',
    headerClass: '',
    menuClass: 'w-full h-1/4',
    mainClass: 'w-full h-3/4'
  }
}

const theme = useTheme()
</script>

<style scoped>
.layout-card__shadow {
  box-shadow: 0 1px 2.5px rgba(0, 0, 0, 0.18);
}
</style>
