<template>
  <router-view />
  <n-config-provider
    :theme="theme.naiveTheme"
    :theme-overrides="theme.naiveThemeOverrides"
    class="h-full"
  >
    <naive-provider>
      <router-view />
    </naive-provider>
  </n-config-provider>
<!--  <n-config-provider-->
<!--      :theme="theme.naiveTheme"-->
<!--      :theme-overrides="theme.naiveThemeOverrides"-->
<!--      >-->

<!--  </n-config-provider>-->
</template>
<script lang="ts">

</script>
<script lang="ts" setup>
import { useThemeStore } from 'modules/Settings/store'
const theme = useThemeStore()

</script>
<style lang="scss">
@import '@/styles/index.scss'
</style>
