declare namespace SopComparison {
  namespace SOPContrast {
    type PostCsvInputValue = {
      file: File
      version: string
      id: number
    }

    type ComparisonListItem = {
      id: string
      area: string
      series: string
      formulaNum: string
      furnaceNum: string
      productName: string
      specification: string
      furnaceType: string
      number: string
      targetResistivity: string
      maxResistivity: string
      minResistivity: string
      approvalBatch: string
      status: string
      initFeedTotalWeight: string
      initReuseProportion: number
      segmentFeedTotalWeight: string
      segmentReuseProportion: number
      loadInfo: Array<Formula.MaterialInfo>
      initFeedInfo: Array<Formula.MaterialInfo>
      segmentFeedInfo: Array<Formula.MaterialInfo>
      remark: string
    }

    type QuerySOPList = {
      current: number
      size: number
    }

    type QuerySOPTypeComparisonApi = {
      type: string
      sopName: string
    }

    type SOPOperateType = 'add' | 'edit'

    type CreateSOP = {
      id?: number
      stoveType: string
      hotSpot: string
      version: string
      sopName: string
      mixedEconomy: string
      prodStandard: string
      prodModel: string
      batchCharge: string
      guidingTubeType: string
      sopType: number
      createTime: string
      reservedInfo1: strings
      reservedInfo2: string
      reservedInfo3: string
    }

    type SOPValueItem = {
      id: string
      type: string
      name: string
      sopKey: number
      sopValue: string
      sopName: string
      version: string
      totalCells: number
      columns: number
      arranges: number
    }

    type createNewSOPCopyValueApi = {
      newSopName: string
      sopName: CreateSOP
    }
  }
}
