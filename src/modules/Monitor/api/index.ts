import request from '@/utils/request'

const accountApi = {
  getChartDataApi() {
    return request.get(`/api/analyze/getChartData`, {
      series: 'M'
    })
  },
  getAlarmChartDataApi() {
    return request.get(`/api/analyze/getAlarmChartData`, {
      series: 'M'
    })
  },
  getAllEquipApi() {
    return request.get(`/api/managementEquipment/getAllEquip`)
  },
  settingThresholdApi(data: any) {
    return request.post(`/api/analyze/updateBySeries`, data)
  },
  getErrorListApi(params: any) {
    return request.get(`/api/analyze/getAlarmList`, params)
  },
  getSOPMonitoringApi(params: any) {
    return request.get(`/api/admin/InspectSop/listByPage`, params)
  }
}

export default accountApi
