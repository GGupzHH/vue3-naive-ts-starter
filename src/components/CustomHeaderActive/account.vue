<template>
  <n-space vertical item-style="line-height: 0;p-4px;">
    <n-avatar round>
      {{ userInfo.name[0] }}
    </n-avatar>
  </n-space>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance
} from 'vue'
export default defineComponent({
  name: 'HeaderAccount'
})
</script>

<script setup lang="ts">
const proxy = getCurrentInstance()?.proxy
const userInfo = ref({
  name: '赵呵呵'
})
</script>

<style scoped lang="scss">

</style>