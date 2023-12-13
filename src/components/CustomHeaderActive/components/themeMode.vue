<template>
  <n-divider>
    主题模式
  </n-divider>
  <n-space vertical>
    <n-space
      v-for="(modeConfigItem, modeConfigIndex) in modeConfigList"
      :key="modeConfigIndex"
      justify="space-between"
    >
      {{ modeConfigItem.title }}
      <n-switch
        :default-value="modeConfigItem.value"
        @change="modeConfigItem.handle"
      >
        <template #checked>
          <n-icon
            mark-raw
            :component="modeConfigItem?.prefixIcon"
            size="16"
          />
        </template>
        <template #unchecked>
          <n-icon
            mark-raw
            :component="modeConfigItem?.suffixIcon"
            size="16"
          />
        </template>
      </n-switch>
    </n-space>
  </n-space>
</template>
<script lang="ts">
import {
  Sunny as SunnyIcon,
  MoonOutline as MoonOutlineIcon
} from '@vicons/ionicons5'
import { useAccount } from 'modules/Account/store'

</script>
<script setup lang="ts">

const proxy = getCurrentInstance()?.proxy
const useAccountStore = useAccount()
const themeModeConfig = computed(() => useAccountStore.settingConfig)
const modeConfigList = ref([
  {
    title: '主题',
    value: themeModeConfig.value.theme,
    prefixIcon: markRaw(SunnyIcon),
    suffixIcon: markRaw(MoonOutlineIcon),
    handle: () => {
      useAccountStore.setTheme()
    }
  },
  {
    title: '侧边栏深色',
    value: themeModeConfig.value.sidebarDeep,
    handle: () => {
      useAccountStore.setSidebarTheme()
    }
  },
  {
    title: '头部深色',
    value: themeModeConfig.value.headerDeep,
    handle: () => {
      useAccountStore.setHeaderTheme()
    }
  }
])
</script>

<style scoped lang="scss">

</style>
