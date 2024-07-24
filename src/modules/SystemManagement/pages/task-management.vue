
<script lang="ts">
import {
  defineComponent,
  getCurrentInstance
} from 'vue'
export default defineComponent({
  name: 'SystemManagementTaskManagement'
})
</script>

<script setup lang="ts">
const proxy = getCurrentInstance()?.proxy
</script>

<template>
  <div>
    SystemManagementTaskManagement 定时任务
  </div>
</template>
