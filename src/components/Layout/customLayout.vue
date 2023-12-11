<template>
  <n-layout has-sider class="wrap-custom h-100%">
    <n-layout-sider 
      class="p-l-12px"
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :collapsed="collapsed"
      show-trigger
      @collapse="handleCollapsed"
      @expand="handleCollapsed"
    >
      <Logo />
      <Menu 
        mode="vertical"
        :collapsed="collapsed"
      ></Menu>
    </n-layout-sider>
    <n-layout class="">
      <n-layout-header class="h-50px flex justify-between items-center p-x-12px">
        <Menu></Menu>
        <CustomHeaderActive />
      </n-layout-header>
      <n-layout-content class="wrap-custom__content p-l-12px">
        <Breadcrumb/>
        <router-view v-slot="{ Component }">
          <Component :is="Component" />
        </router-view>
      </n-layout-content>
      <!-- <n-layout-footer>footer</n-layout-footer> -->
    </n-layout>
    </n-layout>  
</template>

<script lang="ts">
export default defineComponent({
  name: 'CustomLayout'
})
</script>

<script setup lang="ts">
const proxy = getCurrentInstance()?.proxy
const collapsed = ref(false)

const handleCollapsed = () => { 
  collapsed.value = !collapsed.value
}
</script>

<style scoped lang="scss">
.wrap-custom {
  .wrap-custom__content {
    height: calc(100% - 50px);
  }
}
</style>