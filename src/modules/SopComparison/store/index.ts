
import { defineStore } from 'pinia'
import sopcomparisonApi from '@/modules/SopComparison/api'
const { message } = createDiscreteApi(
  ['message']
)

export const useSopComparison = defineStore('SopComparison', {
  state: () => {
    return {
    }
  },
  actions: {
    // sop列表
    async getComparisonFormulaList(data: SopComparison.SOPContrast.QuerySOPList) {
      const res = await sopcomparisonApi.getComparisonSOPListApi(data)
      return this.filterResponse(res)
    },
    // 新增sop
    async addComparisonApi(data: SopComparison.SOPContrast.CreateSOP) {
      const res = await sopcomparisonApi.addComparisonApi(data)
      return this.filterResponse(res, () => {
        message.success('SOP添加成功')
      })
    },
    /** SOP 编辑 */
    async editComparisonApi(data: SopComparison.SOPContrast.CreateSOP) {
      const res = await sopcomparisonApi.editComparisonApi(data)
      return this.filterResponse(res, () => {
        message.success('SOP编辑成功')
      })
    },
    /** SOP  根据SOP类型获取具体类型参数 */
    async getSOPTypeComparison(data: SopComparison.SOPContrast.QuerySOPTypeComparisonApi) {
      const res = await sopcomparisonApi.getSOPTypeComparisonApi(data)
      return this.filterResponse(res)
    },
    /** SOP  获取SOP类型级联 */
    async getSOPTypeTree(sopName: string) {
      const res = await sopcomparisonApi.getSOPTypeTreeApi(sopName)
      return this.filterResponse(res)
    },
    /** SOP  上传SOP-key 文件 */
    async uploadCSVKeyFiles(data: { file: File; }) {
      const res = await sopcomparisonApi.uploadCSVKeyFilesApi(data)
      return this.filterResponse(res, (res) => {
        message.success(res.message)
      })
    },
    /** SOP  上传SOP-value 文件 */
    async uploadCSVValueFiles(data: SopComparison.SOPContrast.PostCsvInputValue) {
      const res = await sopcomparisonApi.uploadCSVValueFilesApi(data)
      return this.filterResponse(res, (res) => {
        message.success(res.message)
      })
    },
    /** SOP  保存SOP-value内容 */
    async saveSOPValue(data: any) {
      const res = await sopcomparisonApi.saveSOPValueApi(data)
      return this.filterResponse(res, (res) => {
        message.success(res.message)
      })
    },
    /** SOP  导出SOP-value文件 */
    async exportSOPValueFile(data: { sopName: string; }) {
      const res = await sopcomparisonApi.exportSOPValueFileApi(data)
      console.log(res)
      return this.filterResponse(res, (res) => {
        message.success(res.message)
      })
    },
    /** SOP  获取SOP类型级联 */
    async createNewSOPCopyValue(data: SopComparison.SOPContrast.createNewSOPCopyValueApi) {
      const res = await sopcomparisonApi.createNewSOPCopyValueApi(data)
      return this.filterResponse(res, (res) => {
        message.success(res.message)
      })
    }
  }
})
