
import { defineStore } from 'pinia'
import materialApprovalApi from '@/modules/MaterialApproval/api'
const { message } = createDiscreteApi(
  ['message']
)

export const useMaterialApproval = defineStore('MaterialApproval', {
  state: () => {
    return {
      preparationData: [] as Array<MaterialApproval.Formula.MaterialInfo>,
      resubmissionData: [] as Array<MaterialApproval.Formula.MaterialInfo>,
      segmentationData: [] as Array<MaterialApproval.Formula.MaterialInfo>
    }
  },
  actions: {
    addMaterialCategory(key: MaterialApproval.Formula.MaterialCategory, singleMaterial: MaterialApproval.Formula.MaterialInfo) {
      this[key].push(singleMaterial)
    },
    updateMaterialCategory(key: MaterialApproval.Formula.MaterialCategory, data: Array<MaterialApproval.Formula.MaterialInfo>) {
      this[key] = data
    },
    delMaterialCategory(key: MaterialApproval.Formula.MaterialCategory, index: number) {
      this[key].splice(index, 1)
    },
    /** 审批方案-获取配方列表 */
    async getMaterialFormulaList(data: MaterialApproval.Approval.QueryApprovalList) {
      const res = await materialApprovalApi.getMaterialFormulaListApi(data)
      return this.filterResponse(res)
    },
    /** 审批方案-删除配方 */
    async delMaterialFormulaList(id: string) {
      const res = await materialApprovalApi.delMaterialFormulaListApi({
        id
      })
      return this.filterResponse(res, () => {
        message.success('配方移除成功')
      })
    },
    async queryMaterialClassification(data: MaterialApproval.Formula.QueryMaterialClassification) {
      const res = await materialApprovalApi.queryMaterialClassificationApi(data)
      return this.filterResponse(res)
    },
    /* 根据物料大类查询子类列表 */
    async queryMaterialFormulaSub(data: MaterialApproval.Formula.QueryMaterialFormulaSub) {
      const res = await materialApprovalApi.queryMaterialFormulaSubApi(data)
      return this.filterResponse(res)
    },
    /* 根据物料大类添加子类 */
    async addMaterialFormulaSub(data: MaterialApproval.Formula.CreateMaterialFormulaSub) {
      const res = await materialApprovalApi.addMaterialFormulaSubApi(data)
      return this.filterResponse(res, () => {
        message.success('子料添加成功')
      })
    },
    /* 根据编码远程搜索子类列表 */
    async queryMaterialMaster(data: MaterialApproval.Formula.QueryMaterialMaster) {
      const res = await materialApprovalApi.queryMaterialMasterApi(data)
      return this.filterResponse(res)
    },
    /* 根据物料大类删除子类 */
    async deleteMaterialFormulaSub(data: { id: number; }) {
      const res = await materialApprovalApi.deleteMaterialFormulaSubApi(data)
      return this.filterResponse(res, () => {
        message.success('子料移除成功')
      })
    },
    /* 区域查询 */
    async queryAllModule() {
      const res = await materialApprovalApi.queryAllModuleApi()
      return this.filterResponse(res)
    },
    /* 系列查询 */
    async querySeriesByModule(data: { module: string;}) {
      const res = await materialApprovalApi.querySeriesByModuleApi(data)
      return this.filterResponse(res)
    },
    /* 炉台查询 */
    async queryDeviceNums(data: { module: string; series: string; }) {
      const res = await materialApprovalApi.queryDeviceNumsApi(data)
      return this.filterResponse(res)
    },
    /* 新建配方 */
    async addFormula(data: MaterialApproval.Formula.CreateFormula) {
      const res = await materialApprovalApi.addFormulaApi(data)
      return this.filterResponse(res, () => {
        message.success('配方添加成功')
      })
    },
    /* 编辑配方 */
    async editFormula(data: MaterialApproval.Formula.CreateFormula) {
      const res = await materialApprovalApi.editFormulaApi(data)
      return this.filterResponse(res, () => {
        message.success('配方编辑成功')
      })
    }
  }
})
