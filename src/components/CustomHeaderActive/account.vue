<template>
  <n-space
    vertical
    item-style="line-height: 0;p-4px;"
  >
    <n-dropdown
      :options="options"
      trigger="click"
      @select="handleSelect"
    >
      <n-avatar
        round
        class="cursor-pointer"
      >
        {{ userInfo && userInfo.username }}
      </n-avatar>
    </n-dropdown>
  </n-space>
</template>

<script lang="ts">
import { NIcon } from 'naive-ui'
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon
} from '@vicons/ionicons5'
import { useAccount } from 'modules/Account/store'
import Cookie from 'js-cookie'

export default defineComponent({
  name: 'HeaderAccount'
})
</script>

<script setup lang="ts">
const proxy = getCurrentInstance()?.proxy
const useAccountStore = useAccount()
const message = useMessage()
const userInfo = computed(() => useAccountStore.userInfo)
const renderIcon = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}

const handleSelect = async(cb: any) => {
  await cb()
}

const logout = async() => {
  const res = await useAccountStore.logout()
  Cookie.set('access_token', '')
  Cookie.set('userName', '')
  Cookie.set('refresh_token', '')
  message.success(res.message)
  location.href = ''
}

const options = [
  {
    label: '用户资料',
    key: () => {},
    icon: renderIcon(UserIcon)
  },
  {
    label: '编辑用户资料',
    key: () => {},
    icon: renderIcon(EditIcon)
  },
  {
    label: '退出登录',
    key: logout,
    icon: renderIcon(LogoutIcon)
  }
]
</script>

<style scoped lang="scss">

</style>
