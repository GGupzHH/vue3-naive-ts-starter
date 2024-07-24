import request from '@/utils/request'

const sopComparisonApi = {
  // 列表
  getComparisonSOPListApi(params: SopComparison.SOPContrast.QuerySOPList) {
    return request.get(`/api/de/sopName/getList`, params)
  },
  // 新增sop
  addComparisonApi(data: SopComparison.SOPContrast.CreateSOP) {
    return request.post(`/api/de/sopName/add`, data)
  },
  /** SOP-编辑  */
  editComparisonApi(data: SopComparison.SOPContrast.CreateSOP) {
    return request.post(`/api/de/sopName/update`, data)
  },
  /** SOP-根据SOP类型获取具体类型参数  */
  getSOPTypeComparisonApi(data: SopComparison.SOPContrast.QuerySOPTypeComparisonApi) {
    return request.post(`/api/de/sopManageValue/findList`, data)
  },
  /** 获取SOP类型tree  */
  getSOPTypeTreeApi(sopName: string ){
    return request.get(`/api/de/sopManageValue/getNameTree`, {
      sopName
    })
  },
  /** SOP-导入Key 文件上传  */
  uploadCSVKeyFilesApi(data: { file: File; }) {
    return request.post(`/api/de/sopManage/csvInputKey/`, data)
  },
  /** SOP-导入Value 文件上传  */
  uploadCSVValueFilesApi(data: SopComparison.SOPContrast.PostCsvInputValue) {
    return request.post(`/api/de/sopManage/csvInputValue/`, data)
  },
  /** SOP-Value值保存  */
  saveSOPValueApi(data: any) {
    return request.post(`/api/de/sopManageValue/updateList`, data)
  },

  /** SOP-Value表导出  */
  exportSOPValueFileApi(data: { sopName: string; }) {
    return request.post(`/api/de/sopManageValue/export`, data, {
      responseType: 'blob'
    })
  },

  /** SOP-Value值保存  */
  createNewSOPCopyValueApi(data: SopComparison.SOPContrast.createNewSOPCopyValueApi) {
    return request.post(`/api/de/sopName/addNewSopName `, data)
  }

}

export default sopComparisonApi
