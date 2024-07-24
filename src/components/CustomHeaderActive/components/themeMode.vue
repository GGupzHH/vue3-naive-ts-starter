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
        @update:value="modeConfigItem.handle"
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
import { useTheme } from 'modules/Settings/store'

</script>
<script setup lang="ts">

const proxy = getCurrentInstance()?.proxy
const useThemeStore = useTheme()
const darkMode = computed(() => useThemeStore.darkMode)
const sider = computed(() => useThemeStore.sider)
const header = computed(() => useThemeStore.header)
const modeConfigList = ref([
  {
    title: '主题',
    value: darkMode.value,
    prefixIcon: markRaw(SunnyIcon),
    suffixIcon: markRaw(MoonOutlineIcon),
    handle: () => {
      useThemeStore.setDarkMode(!darkMode.value)
      console.log(modeConfigList.value)
      modeConfigList.value[1].value = !darkMode.value
      modeConfigList.value[2].value = !darkMode.value
    }
  }
  // {
  //   title: '侧边栏深色',
  //   value: sider.value.inverted,
  //   handle: () => {
  //     useThemeStore.setSiderInverted(!sider.value.inverted)
  //   }
  // },
  // {
  //   title: '头部深色',
  //   value: header.value.inverted,
  //   handle: () => {
  //     useThemeStore.setHeaderInverted(!header.value.inverted)
  //   }
  // }
])
</script>

<style scoped lang="scss">

</style>
