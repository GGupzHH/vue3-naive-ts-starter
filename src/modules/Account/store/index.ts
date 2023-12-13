
import { defineStore } from 'pinia'
import accountApi from '@/modules/Account/api'
import {getNaiveThemeOverrides} from "@/utils/common/helpers"
interface ISettingConfig {
  theme: boolean
  isScreen: boolean
  sidebarDeep: boolean
  headerDeep: boolean
  contentDeep: boolean
}

export const useAccount = defineStore('Account', {
  state: () => {
    return {
      settingConfig: {
        theme: false,
        isScreen: false,
        sidebarDeep: false,
        headerDeep: false,
        contentDeep: false
      }
    }
  },
  getters: {
    /** naiveUI的主题配置 */
    naiveThemeOverrides(state) {
      const overrides = getNaiveThemeOverrides({primary: state.themeColor, ...state.otherColor});
      return overrides;
    }
  },
  actions: {
    setTheme() {
      if (this.settingConfig.theme) {
        this.settingConfig.sidebarDeep = false
        this.settingConfig.headerDeep = false
        this.settingConfig.contentDeep = false
      } else {
        this.settingConfig.sidebarDeep = true
        this.settingConfig.headerDeep = true
        this.settingConfig.contentDeep = true
      }
      this.settingConfig.theme = !this.settingConfig.theme
    },
    setSidebarTheme() {
      if (this.settingConfig.theme) return
      this.settingConfig.sidebarDeep = !this.settingConfig.sidebarDeep
    },
    setHeaderTheme() {
      if (this.settingConfig.theme) return
      this.settingConfig.headerDeep = !this.settingConfig.headerDeep
    },
    setScreen() {
      this.settingConfig.isScreen = !this.settingConfig.isScreen
    },
    async getDemoTestList() {
      const res = await accountApi.getDemoTestListID('123')
      return this.filterResponse(res)
    }
  }
})
