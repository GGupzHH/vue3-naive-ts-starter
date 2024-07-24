<template>
  <TabItem
    class="warp-tab__header"
    :is-show-close-icon="false"
    @click="handleTabHomeClick"
  >
    <template #tab-item__header>
      <n-icon size="15">
        <HomeOutlineIcon class="hover:bg-primary:25" />
      </n-icon>
      <!-- <span>首</span> -->
    </template>
  </TabItem>
</template>

<script lang="ts">
import TabItem from './TabItem.vue'
import {
  HomeOutline as HomeOutlineIcon
} from '@vicons/ionicons5'
import {
  defineComponent,
  getCurrentInstance
} from 'vue'
export default defineComponent({
  name: 'TabHeader'
})
</script>

<script setup lang="ts">
const proxy = getCurrentInstance()?.proxy
const router = useRouter()

const handleTabHomeClick = () => {
  router.push('/home')
}
</script>

<style scoped lang="scss">
.warp-tab__header {
  --uno: w-37px bg-primary c-#fff;
  &:hover {
    --uno: bg-primary:85;
  }
}
</style>
