<template>
  <div class="wrap-tabs">
    <TabHeader />
    <TabContent />
<!--    <TabFooter />-->
  </div>
  <n-divider class="m-0px! " />
</template>

<script lang="ts">
import TabHeader from './TabHeader.vue'
import TabContent from './TabContent.vue'
import TabFooter from './TabFooter.vue'

export default defineComponent({
  name: 'Tab'
})
</script>

<script setup lang="ts">
const proxy = getCurrentInstance()?.proxy

</script>

<style scoped lang="scss">
.wrap-tabs {
  --uno: h-28px m-t-12px p-x-12px flex flex-items-end flex-justify-between;
}
.common-layout__content {
  height: calc(100% - 40px);
  --uno: bg-#fff overflow-auto;
}
</style>
