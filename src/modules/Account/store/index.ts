import { defineStore } from 'pinia'
import accountApi from '@/modules/Account/api'

export const useAccount = defineStore('Account', {
  state: () => {
    const menuList = ref<SystemManagement.Menu.SystemMenuTree | null>(null)
    const userInfo = ref<Account.UserInfo | null>(null)
    return {
      userInfo,
      menuList
    }
  },
  actions: {
    async getDemoTestList() {
      const res = await accountApi.getDemoTestListID('123')
      return this.filterResponse(res)
    },
    async login(data: any) {
      const res = await accountApi.login(data)
      return this.filterResponse(res)
    },
    async getUserInfo() {
      const res = await accountApi.getUserInfoApi()
      return this.filterResponse(res)
    },
    async logout() {
      const res = await accountApi.logout()
      return this.filterResponse(res)
    },
    async getMenuListApi() {
      const res = await accountApi.getMenuList()
      return this.filterResponse(res, ({ data }) => {
        return this.menuList = data
      })
    }
  }
})
