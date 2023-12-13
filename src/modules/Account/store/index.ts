
import { defineStore } from 'pinia'
import { darkTheme } from 'naive-ui'
import type BuiltInGlobalTheme from 'naive-ui'
import accountApi from '@/modules/Account/api'

interface ISettingConfig {
  theme: BuiltInGlobalTheme | null
  isScreen: boolean
}

export const useAccount = defineStore('Account', {
  state: () => {
    return {
      settingConfig: {
        theme: null,
        isScreen: false
      }
    }
  },
  actions: {
    setTheme() {
      this.settingConfig.theme = this.settingConfig.theme ? null : darkTheme
    },
    setScreen() {
      this.settingConfig.isScreen = !this.settingConfig.isScreen
    },
    async getDemoTestList() {
      const res = await accountApi.getDemoTestListID(this.id)
      return this.filterResponse(res)
    }
  }
})
