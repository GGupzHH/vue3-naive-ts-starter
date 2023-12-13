<template>
  炉台
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance
} from 'vue'
export default defineComponent({
  name: 'MonitorHearth',
})
</script>

<script setup lang="ts">
const proxy = getCurrentInstance()?.proxy
</script>

<style scoped lang="scss">

</style>