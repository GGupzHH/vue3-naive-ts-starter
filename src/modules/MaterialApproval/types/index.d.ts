declare namespace MaterialApproval {
  namespace Approval {
    type ApprovalItem = {
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

    type QueryApprovalList = {
      current: number
      size: number
    }
  }
  namespace Formula {
    type FormulaOperateType = 'add' | 'edit'

    type CreateFormula = {
      id?: number
      productClassification: string
      area: string
      module: string
      series: string
      furnaceNum: string
      productName: string
      specification: string
      furnaceType: string
      number: string
      targetResistivity: number
      maxResistivity: number
      minResistivity: number
      initFeedTotalWeight: string
      initReuseProportion: number
      segmentFeedTotalWeight: string
      segmentReuseProportion: number
      remark: string
      loadInfo: Array<MaterialInfo>
      initFeedInfo: Array<MaterialInfo>
      segmentFeedInfo: Array<MaterialInfo>
    }

    type MaterialInfo = {
      materialInfo: string
      weight: number
      type?: number
      resubmissionCount: Array<number> | string
    }

    // type MaterialClassification = {
    //   materialInfo: string
    //   weight: number
    //   resubmissionCount?: Array<number>
    // }

    type QueryMaterialClassification = {
      materialClassification: string
      series: string
      current: number
      size: number
    }

    type QueryMaterialFormulaSub = {
      series: string
      materialClassification: string
      current: number
      size: number
    }

    type MaterialFormulaSubItem = {
      id: number
      series: string
      materialNo: string
      materialName: string
      productClassification: string
      rawMaterialClassification: string
      brand: string
      resistivity: string
      materialClassification: string
    }

    type QueryMaterialMaster = {
      code: string
      current: number
      size: number
    }

    type CreateMaterialFormulaSub = {
      series: string
      materialNo: string
      materialName: string
      productClassification: string
      rawMaterialClassification: string
      brand: string
      resistivity: string
      materialClassification: string
    }

    type SearchMaterialFormulaSub = {
      id: number
      code: string
      name: string
      remark: string
      specification: string
      materialTypeId: number
      unitId: number
    }

    type MaterialCategory = 'preparationData' | 'resubmissionData' | 'segmentationData'
  }

}
