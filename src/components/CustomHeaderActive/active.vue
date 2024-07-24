<template>
  <div class="wrap-custom-header__active flex items-center justify-center p-x-12px">
    <div
      v-for="(settingConfigItem, settingConfigIndex) in settingConfigList"
      :key="settingConfigIndex"
      class="wrap-custom-header__active__item p-x-6px flex
      items-center justify-center
       cursor-pointer"
      :class="!darkMode ? 'hover:bg-#f6f6f6' : 'hover:bg-#333 hover:text-#fff'"
      @click="settingConfigItem.handle"
    >
      <n-tooltip
        placement="bottom"
        trigger="hover"
      >
        <template #trigger>
          <n-icon
            mark-raw
            :component="settingConfigItem.icon"
            size="20"
          />
        </template>
        <span>{{ settingConfigItem.doc }}</span>
      </n-tooltip>
    </div>
  </div>
  <n-config-provider
    :theme="themeStore.naiveTheme"
  >
    <n-drawer
      v-model:show="settingDrawerActive"
      :width="330"
      placement="right"
    >
      <n-drawer-content title="主题配置">
        <theme-mode />
        <layout-mode />
        <theme-color-select />
        <page-view />
        <n-space />
        <n-space />
      </n-drawer-content>
    </n-drawer>
  </n-config-provider>
</template>

<script lang="ts">
import {
  SettingsSharp as SettingsSharpIcon,
  Sunny as SunnyIcon,
  MoonOutline as MoonOutlineIcon
} from '@vicons/ionicons5'
import {
  ArrowsMaximize as ArrowsMaximizeIcon,
  ArrowsMinimize as ArrowsMinimizeIcon
} from '@vicons/tabler'
import LayoutMode from './components/layout-mode.vue'
import PageView from './components/page-view.vue'
import { useTheme } from 'modules/Settings/store'

export default defineComponent({
  name: 'HeaderActive'
})
</script>

<script setup lang="ts">

import ThemeColorSelect from '@/components/CustomHeaderActive/components/themeColorSelect.vue'

const proxy = getCurrentInstance()?.proxy
const themeStore = useTheme()
const isScreen = computed(() => themeStore.isScreen)
const darkMode = computed(() => themeStore.darkMode)
const settingDrawerActive = ref(false)
const settingConfigList = ref([
  {
    icon: computed(() => darkMode.value ? markRaw(MoonOutlineIcon) : markRaw(SunnyIcon)),
    doc: '主题切换',
    handle: () => {
      themeStore.setDarkMode(!darkMode.value)
    }
  },
  {
    icon: computed(() => isScreen.value ? markRaw(ArrowsMinimizeIcon) : markRaw(ArrowsMaximizeIcon)),
    doc: '全屏',
    handle: () => {
      console.log(isScreen.value)
      if (isScreen.value) {
        document.exitFullscreen()
      } else {
        document.documentElement.requestFullscreen()
      }
      themeStore.setScreen()
    }
  },
  {
    icon: markRaw(SettingsSharpIcon),
    doc: '主题配置',
    handle: () => {
      handleSetting()
    }
  }
])
const handleSetting = () => {
  settingDrawerActive.value = true
}

</script>

<style scoped lang="scss">
.wrap-custom-header__active {
  --uno: h-full;
  .wrap-custom-header__active__item {
    --uno: h-full;
    transition: all .5s;
  }
}
</style>
