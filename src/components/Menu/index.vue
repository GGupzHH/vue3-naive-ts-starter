<template>
  <div
    class="wrap-menu"
    :class="{
      'type-vertical': mode === 'vertical',
    }"
  >
    <n-menu
      v-model:value="activeKey"
      :mode="mode"
      accordion
      responsive
      :options="menuOptions"
      :collapsed="collapsed"
      :collapsed-width="58"
    />
  </div>
</template>

<script lang="ts">
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  TrendingUpSharp as TrendingUpSharpIcon,
  WarningOutline as WarningOutlineIcon,
  SettingsOutline as SettingsOutlineIcon
} from '@vicons/ionicons5'
import { RouterLink } from 'vue-router'
import { useAccount } from 'modules/Account/store'
import IconFont from '@/components/IconFont/index.vue'

export default defineComponent({
  name: 'CustomMenu'
})
</script>

<script setup lang="ts">
const proxy = getCurrentInstance()?.proxy
const route = useRoute()
const useAccountStore = useAccount()

defineProps({
  mode: {
    type: String,
    default: 'horizontal'
  },
  collapsed: {
    type: Boolean,
    default: false
  }
})

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: Ref<MenuOption[]> = ref([
  // {
  //   label: () =>
  //     h(
  //       'a',
  //       {
  //         href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
  //         target: '_blank',
  //         rel: 'noopenner noreferrer'
  //       },
  //       '且听风吟'
  //     ),
  //   key: 'hear-the-wind-sing',
  //   icon: renderIcon(BookIcon)
  // },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'Monitor'
          }
        },
        { default: () => '监控' }
      ),
    key: 'Monitor',
    icon: renderIcon(TrendingUpSharpIcon)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'MonitorSetting'
          }
        },
        { default: () => '阈值配置' }
      ),
    key: 'MonitorSetting',
    icon: renderIcon(SettingsOutlineIcon)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'MonitorAlarm'
          }
        },
        { default: () => '告警列表' }
      ),
    key: 'MonitorAlarm',
    icon: renderIcon(WarningOutlineIcon)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'SOPMonitoring'
          }
        },
        { default: () => 'SOP参数异常监控' }
      ),
    key: 'SOPMonitoring',
    icon: renderIcon(WarningOutlineIcon)
  }
])
const handleMenuList = (menuList: Array<SystemManagement.Menu.SystemMenuTree>) => {
  return menuList.map(menu => {
    return {
      label: menu.children?.length ? menu.label : () => h(
        RouterLink,
        {
          to: {
            path: menu.path
          }
        },
        { default: () => menu.label }
      ),
      key: menu.path,
      icon: () => {
        return h(IconFont, {
          icon: menu.icon
        })
      },
      children: menu.children?.length && handleMenuList(menu.children)
    }
  })
}
watch(
  () => useAccountStore.menuList,
  () => {
    menuOptions.value = handleMenuList(useAccountStore.menuList as unknown as Array<SystemManagement.Menu.SystemMenuTree>)
  },
  {
    deep: true,
    immediate: true
  }
)

const activeKey = computed(() => {
  return route.path
})
console.log(activeKey)
onMounted(() => {
})
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
<style type="text/css">
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
