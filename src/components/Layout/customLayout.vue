<template>
  <n-layout
    has-sider
    class="wrap-custom h-100%"
  >
    <div
      v-if="mode.includes('vertical')"
      class="dark:bg-dark dark:text-white dark:text-opacity-82 transition-all"
      :class="themeSidebar.inverted ? 'bg-#001428 text-white' : 'bg-white text-#333639'"
    >
      <n-config-provider
        :theme="themeSidebar.inverted ? darkTheme : null"
        class="h-full"
      >
        <n-layout-sider
          class="h-full bg-transparent"
          collapse-mode="width"
          :collapsed-width="58"
          :width="240"
          :collapsed="collapsed"
          show-trigger
          bordered
          @collapse="handleCollapsed"
          @expand="handleCollapsed"
        >
          <Logo
            :collapsed="collapsed"
          />
          <Menu
            mode="vertical"
            :collapsed="collapsed"
          />
        </n-layout-sider>
      </n-config-provider>
    </div>
    <n-layout class="">
      <div
        class="dark:bg-dark dark:text-white dark:text-opacity-82 transition-all"
        :class="themeHeader.inverted ? 'bg-#001428 text-white' : 'bg-white text-#333639'"
      >
        <n-config-provider :theme="themeHeader.inverted ? darkTheme : null">
          <n-layout-header
            class="h-50px flex justify-between items-center p-x-12px"
            bordered
          >
            <Logo
              v-if="mode.includes('horizontal')"
              class="w-240px"
            />
            <Breadcrumb v-if="themeHeader.crumb.visible && mode.includes('vertical')" />
            <Menu
              v-if="mode.includes('horizontal')"
              mode="horizontal"
            />
            <CustomHeaderActive />
          </n-layout-header>
        </n-config-provider>
      </div>
      <n-layout-content class="wrap-custom__content flex flex-col">
        <Tab v-if="tab.visible" />
        <router-view
          v-slot="{ Component, route }"
          class="wrap-content p-12px overflow-auto transition-all"
          :class="{
            'is_show_tabs': tab.visible,
            'bg-layout_inverted': darkMode,
            'bg-layout': !darkMode,
          }"
        >
          <transition
            :name="themeStore.pageAnimateMode"
            mode="out-in"
            appear
          >
            <!--            <n-card-->
            <!--              class="m-12px"-->
            <!--              :class="{-->
            <!--                'is-show__tabs': tab.visible-->
            <!--              }"-->
            <!--            >-->
            <!--            </n-card>-->

            <component
              :is="Component"
              :key="route.path"
            />
            <!-- <keep-alive>
            </keep-alive> -->
          </transition>
        </router-view>
      </n-layout-content>
      <!-- <n-layout-footer>footer</n-layout-footer> -->
    </n-layout>
  </n-layout>
</template>

<script lang="ts">
import { useTheme } from 'modules/Settings/store'
import { darkTheme } from 'naive-ui'
import Tab from '@/widgets/Tab/index.vue'

export default defineComponent({
  name: 'CustomLayout'
})
</script>

<script setup lang="ts">
const proxy = getCurrentInstance()?.proxy
const themeStore = useTheme()
const darkMode = computed(() => themeStore.darkMode)
const themeHeader = computed(() => themeStore.header)
const themeSidebar = computed(() => themeStore.sider)
const mode = computed(() => themeStore.layout.mode)
const tab = computed(() => themeStore.tab)
const collapsed = ref(false)

const handleCollapsed = () => {
  collapsed.value = !collapsed.value
}
</script>

<style scoped lang="scss">
.wrap-custom {
  .wrap-custom__content {
    height: calc(100% - 50px);
    :deep() {
      .wrap-content {
        height: 100%;
        //width: calc(100% - 24px);
        &.is_show_tabs {
          height: calc(100% - 41px);
        }
      }
    }
  }
}
</style>
