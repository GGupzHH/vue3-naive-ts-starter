<template>
  <div class="h-44px bg-red">
    tabs
  </div>
</template>

<script lang="ts">
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  TrendingUpSharp as TrendingUpSharpIcon
} from '@vicons/ionicons5'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'CustomTabs'
})
</script>

<script setup lang="ts">
const proxy = getCurrentInstance()?.proxy

</script>

<style scoped lang="scss">
.wrap-menu {
  //box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
  &.type-vertical {
    height: calc(100% - 50px);
    overflow: auto;
  }
}
</style>
