<template>
  <n-space>
    <HeaderActive/>
    <HeaderAccount/>
  </n-space>
</template>

<script lang="ts">
import HeaderAccount from './account.vue'
import HeaderActive from './active.vue'
export default defineComponent({
  name: 'CustomHeaderActive'
})
</script>

<script setup lang="ts">
const proxy = getCurrentInstance()?.proxy
</script>

<style scoped lang="scss">

</style>