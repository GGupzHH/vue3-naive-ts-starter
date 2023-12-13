<template>
  <n-config-provider
    class="h-100%"
    :theme="theme"
  >
    <router-view />
  </n-config-provider>
</template>
<script lang="ts">
import { useAccount } from 'modules/Account/store'

</script>
<script lang="ts" setup>
const useAccountStore = useAccount()
const theme = computed(() => useAccountStore.settingConfig.theme)
</script>
<style lang="scss">
@import '@/styles/index.scss'
</style>
