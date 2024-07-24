
import { defineStore } from 'pinia'
import monitorApi from '@/modules/Monitor/api'

export const useMonitor = defineStore('Monitor', {
  state: () => {
    return {
    }
  },
  actions: {
    async getChartData() {
      const res = await monitorApi.getChartDataApi()
      return this.filterResponse(res)
    },
    async getAlarmChartData() {
      const res = await monitorApi.getAlarmChartDataApi()
      return this.filterResponse(res)
    },
    async getAllEquip() {
      const res = await monitorApi.getAllEquipApi()
      return this.filterResponse(res)
    },
    async settingThreshold(data: any) {
      const res = await monitorApi.settingThresholdApi(data)
      return this.filterResponse(res)
    },
    async getErrorList(params: any) {
      const res = await monitorApi.getErrorListApi(params)
      return this.filterResponse(res)
    },
    async getSOPMonitoring(params: any) {
      const res = await monitorApi.getSOPMonitoringApi(params)
      return this.filterResponse(res)
    }
  }
})
