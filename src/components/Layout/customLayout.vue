<template>
  <n-layout
    has-sider
    class="wrap-custom h-100%"
  >
    <n-layout-sider
      class="p-l-12px"
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :collapsed="collapsed"
      show-trigger
      bordered
      @collapse="handleCollapsed"
      @expand="handleCollapsed"
    >
      <Logo />
      <Menu
        mode="vertical"
        :collapsed="collapsed"
      />
    </n-layout-sider>
    <n-layout class="">
      <n-layout-header
        class="h-50px flex justify-between items-center p-x-12px"
        bordered
      >
        <Menu />
        <!-- <Breadcrumb/> -->
        <CustomHeaderActive />
      </n-layout-header>
      <n-layout-content class="wrap-custom__content p-12px bg-#f6f9f8 dark:bg-#101014 flex flex-col">
        <n-card class="h-100%">
          <router-view v-slot="{ Component }">
            <Component :is="Component" />
          </router-view>
        </n-card>
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