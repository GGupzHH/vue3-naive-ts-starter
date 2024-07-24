import { useSystemManagement } from 'modules/SystemManagement/store'
import { NTag } from 'naive-ui'

type SingleDictItem = {
  id: number
  dictId: number
  value: string
  label: string
  type: string
  description: string
  sort: number
  createTime: string
  updateTime: string
  remarks: SystemManagement.Dictionary.DictInfoTagType
  delFlag: string
  tenantId: number
}

export function useDictTag(dictName: string, dictValue: string) {
  const systemManagement = useSystemManagement()

  const singleDictList: Array<SingleDictItem> = systemManagement.dictAllMap[dictName]

  if (!singleDictList || !singleDictList.length) return h('span')

  const result: SingleDictItem | undefined = singleDictList.find(item => item.value === dictValue)

  if (!result) return h('span')

  return h(
    NTag,
    {
      type: result.remarks,
      bordered: false
    },
    {
      default: () => result.label
    }
  )
}

export function useDictTagList(dictName: string): Array<SingleDictItem> {
  const systemManagement = useSystemManagement()
  const singleDictList: Array<SingleDictItem> = systemManagement.dictAllMap[dictName]

  if (!singleDictList || !singleDictList.length) return []

  return singleDictList
}
