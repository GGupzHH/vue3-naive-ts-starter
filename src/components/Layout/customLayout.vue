<template>
  <n-layout
    has-sider
    class="wrap-custom h-100%"
  >
    <n-config-provider
      :theme="theme.sidebarDeep ? darkTheme : null"
    >
      <n-layout-sider
        class="h-full"
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
    </n-config-provider>
    <n-layout class="">
      <n-config-provider
        :theme="theme.headerDeep ? darkTheme : null"
      >
        <n-layout-header
          class="h-50px flex justify-between items-center p-x-12px"
          bordered
        >
          <Menu />
          <!-- <Breadcrumb/> -->
          <CustomHeaderActive />
        </n-layout-header>
      </n-config-provider>
      <n-config-provider
        class="wrap-custom__content"
        :theme="theme.contentDeep ? darkTheme : null"
      >
        <n-global-style />
        <n-layout-content class="h-full p-12px flex flex-col">
          <n-card class="h-100%">
            <router-view v-slot="{ Component }">
              <Component :is="Component" />
<!--              <transition-->
<!--                  :name="theme.pageAnimateMode"-->
<!--                  mode="out-in"-->
<!--                  :appear="true"-->
<!--                  @before-leave="app.setDisableMainXScroll(true)"-->
<!--                  @after-enter="app.setDisableMainXScroll(false)"-->
<!--              >-->
<!--                -->
<!--              </transition>-->
            </router-view>
          </n-card>
        </n-layout-content>
      </n-config-provider>
      <!-- <n-layout-footer>footer</n-layout-footer> -->
    </n-layout>
  </n-layout>
</template>

<script lang="ts">
import { useAccount } from 'modules/Account/store'
import { darkTheme } from 'naive-ui'

export default defineComponent({
  name: 'CustomLayout'
})
</script>

<script setup lang="ts">
const proxy = getCurrentInstance()?.proxy
const useAccountStore = useAccount()
const theme = computed(() => useAccountStore.settingConfig)
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
