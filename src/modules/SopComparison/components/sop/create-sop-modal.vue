<script lang="ts">
import { defineComponent } from 'vue'
import { useSopComparison } from 'modules/SopComparison/store'
import type { FormInst } from 'naive-ui'
import { useDictTagList } from '@/hooks/common/dictTag'

type SopComparisonCreateModalProps = {
  /** the type of operation */
  operateType: SopComparison.SOPContrast.SOPOperateType
  rowData?: SopComparison.SOPContrast.ComparisonListItem
}

type SopComparisonCreateModalEmits = {
  (e: 'submitted'): void
}
export default defineComponent({
  name: 'DictionaryOperateModal'
})
</script>

<script setup lang="ts">
const props = defineProps<SopComparisonCreateModalProps>()
const emit = defineEmits<SopComparisonCreateModalEmits>()
const useSopComparisonStore = useSopComparison()

const formRoleRef = ref<FormInst | null>(null)

const visible = defineModel<boolean>('visible', {
  default: false
})

const title = computed(() => {
  const titles: Record<SopComparison.SOPContrast.SOPOperateType, string> = {
    add: '新增SOP',
    edit: '编辑SOP'
  }
  return titles[props.operateType]
})

function closeDrawer() {
  visible.value = false
}

const model: SopComparison.SOPContrast.CreateSOP = reactive(createDefaultModel())

function createDefaultModel(): SopComparison.SOPContrast.CreateSOP {
  return {
    stoveType: '',
    hotSpot: '',
    version: '',
    sopName: '',
    mixedEconomy: '',
    prodStandard: '',
    prodModel: '',
    batchCharge: '',
    guidingTubeType: '',
    sopType: 0,
    createTime: '',
    reservedInfo1: '',
    reservedInfo2: '',
    reservedInfo3: ''
  }
}

const rules: Record<
  Extract<
    keyof SopComparison.SOPContrast.CreateSOP,
    'stoveType' |
    'hotSpot' |
    'prodStandard' |
    'prodModel' |
    'batchCharge' |
    'mixedEconomy' |
    'guidingTubeType' |
    'version' |
    'sopName'
  >,
  NaiveUI.FormRule
  > = {
    stoveType: {
      required: true,
      trigger: ['blur', 'change'],
      message: '请选择炉型'
    },
    hotSpot: {
      required: true,
      trigger: ['blur', 'change'],
      message: '请选择热场'
    },
    prodStandard: {
      required: true,
      trigger: ['blur', 'change'],
      message: '请选择产品规格'
    },
    prodModel: {
      required: true,
      trigger: ['blur', 'change'],
      message: '请选择产品型号'
    },
    batchCharge: {
      required: true,
      trigger: ['blur', 'change'],
      message: '请选择满埚料量'
    },
    mixedEconomy: {
      required: true,
      trigger: ['blur', 'change'],
      message: '请选择掺杂剂'
    },
    guidingTubeType: {
      required: true,
      trigger: ['blur', 'change'],
      message: '请选择导流筒类型'
    },
    version: {
      required: true,
      trigger: ['blur', 'change'],
      message: '请选择版本'
    },
    sopName: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入SOP名称'
    }
  }

function handleInitModel() {
  Object.assign(model, createDefaultModel())

  if (!props.rowData) return

  if (props.operateType === 'edit') {
    Object.assign(model, props.rowData, {
      id: props.rowData.id
    })
  }
}

async function handleSubmit() {
  formRoleRef.value?.validate(async(errors) => {
    if (!errors) {
      let res = null as null | any
      if (props.operateType === 'add') {
        res = await useSopComparisonStore.addComparisonApi(model)
      } else {
        res = await useSopComparisonStore.editComparisonApi(model)
      }

      if (res.code === 200) {
        closeDrawer()
        emit('submitted')
      }
    }
  })
}

watch(visible, () => {
  if (visible.value) {
    handleInitModel()
    formRoleRef.value?.restoreValidation()
  }
})
</script>

<template>
  <NModal
    v-model:show="visible"
    :title="title"
    preset="card"
    class="w-800px"
  >
    <NScrollbar class="h-350px pr-20px">
      <NForm
        ref="formRoleRef"
        :model="model"
        :rules="rules"
        label-placement="left"
        :label-width="100"
      >
        <NGrid
          responsive="screen"
          item-responsive
        >
          <NFormItemGi
            span="12 m:12"
            label="炉型"
            path="stoveType"
          >
            <NSelect
              v-model:value="model.stoveType"
              :options="useDictTagList('sop_stove_type')"
              placeholder="请选择炉型"
            />
          </NFormItemGi>
          <NFormItemGi
            span="12 m:12"
            label="热场"
            path="hotSpot"
          >
            <NSelect
              v-model:value="model.hotSpot"
              :options="useDictTagList('sop_hotSpot_type')"
              placeholder="请选择热场"
            />
          </NFormItemGi>
          <NFormItemGi
            span="12 m:12"
            label="产品规格"
            path="prodStandard"
          >
            <NSelect
              v-model:value="model.prodStandard"
              :options="useDictTagList('sop_standard_type')"
              placeholder="请选择产品规格"
            />
          </NFormItemGi>
          <NFormItemGi
            span="12 m:12"
            label="产品型号"
            path="prodModel"
          >
            <NSelect
              v-model:value="model.prodModel"
              :options="useDictTagList('sop_mode_type')"
              placeholder="请选择产品型号"
            />
          </NFormItemGi>
          <NFormItemGi
            span="12 m:12"
            label="满埚料量"
            path="batchCharge"
          >
            <NSelect
              v-model:value="model.batchCharge"
              :options="useDictTagList('sop_batchCharge_type')"
              placeholder="请选择满埚料量"
            />
          </NFormItemGi>
          <NFormItemGi
            span="12 m:12"
            label="掺杂剂"
            path="mixedEconomy"
          >
            <NSelect
              v-model:value="model.mixedEconomy"
              :options="useDictTagList('sop_mixed_economy_type')"
              placeholder="请选择掺杂剂"
            />
          </NFormItemGi>
          <NFormItemGi
            span="12 m:12"
            label="导流筒类型"
            path="guidingTubeType"
          >
            <NSelect
              v-model:value="model.guidingTubeType"
              :options="useDictTagList('sop_guiding_tube_type')"
              placeholder="请选择导流筒类型"
            />
          </NFormItemGi>

          <NFormItemGi
            span="12 m:12"
            label="版本"
            path="version"
          >
            <NSelect
              v-model:value="model.version"
              :disabled="props.operateType === 'edit'"
              :options="useDictTagList('sop_version_type')"
              placeholder="请选择版本"
            />
          </NFormItemGi>
          <NFormItemGi
            span="12 m:12"
            label="sop名称"
            path="sopName"
          >
            <n-input
              v-model:value="model.sopName"
              :disabled="props.operateType === 'edit'"
              placeholder="输入sop名称"
            />
          </NFormItemGi>
          <NFormItemGi
            span="12 m:12"
            label="备注1"
          >
            <n-input
              v-model:value="model.reservedInfo1"
              placeholder="输入备注1"
            />
          </NFormItemGi>
          <NFormItemGi
            span="12 m:12"
            label="备注2"
          >
            <n-input
              v-model:value="model.reservedInfo2"
              placeholder="输入备注2"
            />
          </NFormItemGi>
          <NFormItemGi
            span="12 m:12"
            label="备注3"
          >
            <n-input
              v-model:value="model.reservedInfo3"
              placeholder="输入备注3"
            />
          </NFormItemGi>
        </NGrid>
      </NForm>
    </NScrollbar>
    <template #footer>
      <NSpace
        justify="end"
        :size="16"
      >
        <NButton @click="closeDrawer">取消</NButton>
        <NButton
          type="primary"
          @click="handleSubmit"
        >
          确认
        </NButton>
      </NSpace>
    </template>
  </NModal>
</template>

<style scoped lang="scss"></style>
