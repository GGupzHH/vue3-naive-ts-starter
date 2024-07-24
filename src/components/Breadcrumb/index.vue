<template>
  <n-breadcrumb>
    <!-- <n-breadcrumb-item>
      北京总行
    </n-breadcrumb-item>
    <n-breadcrumb-item>
      天津分行
    </n-breadcrumb-item>
    <n-breadcrumb-item>
      平山道支行
    </n-breadcrumb-item> -->
  </n-breadcrumb>
</template>

<script lang="ts">
import { MdCash } from '@vicons/ionicons4'

export default defineComponent({
  name: 'Breadcrumb'
})
</script>

<script setup lang="ts">
const proxy = getCurrentInstance()?.proxy
</script>

<style scoped lang="scss">

</style>
