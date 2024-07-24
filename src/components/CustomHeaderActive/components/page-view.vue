<template>
  <n-divider title-placement="center">界面展示</n-divider>
  <n-space
    vertical
    size="large"
  >
    <setting-menu label="面包屑">
      <n-switch
        :value="themeStore.header.crumb.visible"
        @update:value="themeStore.setHeaderCrumbVisible"
      />
    </setting-menu>
    <setting-menu label="多页签">
      <n-switch
        :value="themeStore.tab.visible"
        @update:value="themeStore.setTabVisible"
      />
    </setting-menu>
    <setting-menu label="页面切换动画">
      <n-switch
        :value="themeStore.page.animate"
        @update:value="themeStore.setPageIsAnimate"
      />
    </setting-menu>
    <setting-menu label="页面切换动画类型">
      <n-select
        class="w-120px"
        size="small"
        :value="themeStore.page.animateMode"
        :options="themeStore.page.animateModeList"
        @update:value="themeStore.setPageAnimateMode"
      />
    </setting-menu>
  </n-space>
</template>

<script lang="ts" setup>
import { useTheme } from 'modules/Settings/store'
import SettingMenu from './setting-menu.vue'

defineOptions({ name: 'PageView' })

const themeStore = useTheme()
</script>

<style scoped></style>
