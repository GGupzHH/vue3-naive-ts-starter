<template>
  <div class="wrap-custom-header__active flex items-center justify-center p-x-12px">
    <div
      v-for="(settingConfigItem, settingConfigIndex) in settingConfigList"
      :key="settingConfigIndex"
      class="p-x-6px flex
      items-center justify-center
       cursor-pointer hover:c-red"
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
            @click="settingConfigItem.handle"
          />
        </template>
        <span>{{ settingConfigItem.doc }}</span>
      </n-tooltip>
    </div>
  </div>

  <n-drawer
    v-model:show="settingDrawerActive"
    :width="502"
    placement="right"
  >
    <n-drawer-content title="主题配置">
      配置内容
    </n-drawer-content>
  </n-drawer>
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
export default defineComponent({
  name: 'HeaderActive'
})
</script>

<script setup lang="ts">
import { useAccount } from 'modules/Account/store'

const proxy = getCurrentInstance()?.proxy
const useAccountStore = useAccount()
const settingConfig = computed(() => useAccountStore.settingConfig)
const settingDrawerActive = ref(false)
const settingConfigList = ref([
  {
    icon: computed(() => settingConfig.value.theme ? markRaw(MoonOutlineIcon) : markRaw(SunnyIcon)),
    doc: '主题切换',
    handle: () => {
      useAccountStore.setTheme()
    }
  },
  {
    icon: computed(() => settingConfig.value.isScreen ? markRaw(ArrowsMinimizeIcon) : markRaw(ArrowsMaximizeIcon)),
    doc: '全屏',
    handle: () => {
      if (settingConfig.value.isScreen) {
        document.exitFullscreen()
      } else {
        document.documentElement.requestFullscreen()
      }
      useAccountStore.setScreen()
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

}
</style>