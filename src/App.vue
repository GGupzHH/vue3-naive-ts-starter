<template>
  <n-config-provider
    :theme="themeStore.naiveTheme"
    :theme-overrides="themeStore.naiveThemeOverrides"
    :date-locale="dateZhCN"
    :locale="zhCN"
    class="h-full"
  >
    <n-global-style />
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <router-view />
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
<script lang="ts">
import { useTheme } from 'modules/Settings/store'
import { subscribeStore } from 'modules/Settings/plugins/subscribe'
import { zhCN, dateZhCN } from 'naive-ui'

</script>
<script lang="ts" setup>
const themeStore = useTheme()
subscribeStore()
</script>
<style lang="scss">
@use '@/styles/index.scss';
</style>
