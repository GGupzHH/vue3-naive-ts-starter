<template>
  <n-config-provider 
    class="h-100%"
    :theme="darkTheme" 
  >
    <router-view />
  </n-config-provider>
</template>
<script lang="ts" setup>
import { darkTheme } from 'naive-ui'
</script>
<style lang="scss">
@import '@/styles/index.scss'
</style>
