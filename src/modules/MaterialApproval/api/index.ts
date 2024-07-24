import request from '@/utils/request'

const materialApprovalApi = {
  /** 审批方案-获取配方列表  */
  getMaterialFormulaListApi(data: MaterialApproval.Approval.QueryApprovalList) {
    return request.post(`/api/formula/list`, data)
  },
  /** 审批方案-删除配方  */
  delMaterialFormulaListApi(data: { id: string; }) {
    return request.post(`/api/formula/delete`, data)
  },
  /** 审批方案-远程搜索物料大类  */
  queryMaterialClassificationApi(data: MaterialApproval.Formula.QueryMaterialClassification) {
    return request.post(`/api/formulaMaterial/queryMaterialClassification`, data)
  },

  /** 根据物料大类查询子类列表 */
  queryMaterialFormulaSubApi(data: MaterialApproval.Formula.QueryMaterialFormulaSub) {
    return request.post(`/api/formulaMaterial/pageQuery`, data)
  },
  /** 根据物料大类添加子类 */
  addMaterialFormulaSubApi(data: MaterialApproval.Formula.CreateMaterialFormulaSub) {
    return request.post(`/api/formulaMaterial/add`, data)
  },
  /** 根据物料大类搜索子类 */
  queryMaterialMasterApi(data: MaterialApproval.Formula.QueryMaterialMaster) {
    return request.post(`/api/materialMaster/pageQuery`, data)
  },
  /** 根据物料大类删除子类 */
  deleteMaterialFormulaSubApi(data: {id: number;}) {
    return request.post(`/api/formulaMaterial/delete`, data)
  },

  /** 区域查询 */
  queryAllModuleApi() {
    return request.post(`/api/formulaConfig/queryAllModule`, {})
  },
  /** 系列查询 */
  querySeriesByModuleApi(data: { module?: string; }) {
    return request.post(`/api/formulaConfig/querySeriesByModule`, data)
  },
  /** 炉台查询 */
  queryDeviceNumsApi(data: { module: string; series: string; }) {
    return request.post(`/api/formulaConfig/queryDeviceNums`, data)
  },
  /** 新增配方 */
  addFormulaApi(data: MaterialApproval.Formula.CreateFormula) {
    return request.post(`/api/formula/add`, data)
  },
  /** 编辑配方 */
  editFormulaApi(data: MaterialApproval.Formula.CreateFormula) {
    return request.post(`/api/formula/update`, data)
  }
}

export default materialApprovalApi
