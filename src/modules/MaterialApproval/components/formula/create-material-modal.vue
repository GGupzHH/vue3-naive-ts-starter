<script lang="ts">
import { defineComponent } from 'vue'
import { useMaterialApproval } from 'modules/MaterialApproval/store/index'
import type { FormInst } from 'naive-ui'

type MaterailCreateModalProps = {
  /** the type of operation */
  rowData?: SystemManagement.Role.RoleItem
  materialCategory: MaterialApproval.Formula.MaterialCategory
  series: string
}

type MaterailCreateModalEmits = {
  (e: 'submitted', stages: Array<number>): void
}

export default defineComponent({
  name: 'MaterailCreateModal'
})
</script>

<script setup lang="ts">
const props = defineProps<MaterailCreateModalProps>()
const emit = defineEmits<MaterailCreateModalEmits>()

const useMaterialApprovalStore = useMaterialApproval()
const formRoleRef = ref<FormInst | null>(null)

const visible = defineModel<boolean>('visible', {
  default: false
})

function closeModal() {
  visible.value = false
}

const model: MaterialApproval.Formula.MaterialInfo = reactive(createDefaultModel())

function createDefaultModel(): MaterialApproval.Formula.MaterialInfo {
  return {
    materialInfo: '',
    weight: 0,
    resubmissionCount: ''
  }
}

const rules: Record<
  Extract<
    keyof MaterialApproval.Formula.MaterialInfo,
    'materialInfo' | 'weight'
  >,
  NaiveUI.FormRule
> = {
  materialInfo: {
    required: true,
    trigger: ['blur', 'change'],
    message: '请选择物料大类'
  },
  weight: {
    required: true,
    validator(_, value: string) {
      if (!value) {
        return new Error('需要重量')
      } else if (Number(value) <= 0) {
        return new Error('重量不能为0')
      }
      return true
    },
    trigger: ['input', 'blur']
  }
}

function handleInitModel() {
  Object.assign(model, createDefaultModel())
}

const materialClassificationOptions = ref([])
const materialClassificationLoading = ref(false)
async function handleMaterialSearch(query: string) {
  materialClassificationLoading.value = true

  const res = await useMaterialApprovalStore.queryMaterialClassification({
    current: 1,
    size: 999,
    series: props.series,
    materialClassification: query
  })

  if (res.code === 200) {
    materialClassificationOptions.value = res.data.map((item: string) => {
      return {
        label: item,
        value: item
      }
    })
  }

  materialClassificationLoading.value = false
}
const startStage = ref(1)
const endStage = ref(1)

async function handleSubmit() {
  const stages = [] as Array<number>
  for (let i = startStage.value; i <= endStage.value; i++) {
    stages.push(i)
  }
  emit('submitted', stages)

  formRoleRef.value?.validate(async(errors) => {
    if (!errors) {
      useMaterialApprovalStore.addMaterialCategory(
        props.materialCategory,
        Object.assign(
          {},
          model,
          props.materialCategory === 'segmentationData' ? {
            resubmissionCount: [startStage.value, endStage.value]
          } : {}
        )
      )

      closeModal()
    }
  })
}

watch(visible, () => {
  if (visible.value) {
    handleInitModel()
    materialClassificationOptions.value = []
    console.log(model)
    formRoleRef.value?.restoreValidation()
  }
})
</script>

<template>
  <NModal
    v-model:show="visible"
    title="添加物料大类"
    preset="card"
    class="w-500px"
  >
    <NScrollbar
      class="h-130px pr-20px"
      :class="{
        'h-190px': materialCategory === 'segmentationData'
      }"
    >
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
            v-if="materialCategory === 'segmentationData'"
            span="24 m:24"
            label="复投阶段"
          >
            <NInputNumber
              v-model:value="startStage"
              :step="0.1"
              :min="0"
              :max="endStage"
            />
            <span class="p-x-8px">&lt;</span>
            <NInputNumber
              v-model:value="endStage"
              :step="1"
              :min="startStage"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:24"
            label="物料大类"
            path="materialInfo"
          >
            <NSelect
              v-model:value="model.materialInfo"
              filterable
              placeholder="输入物料名称"
              :options="materialClassificationOptions"
              :loading="materialClassificationLoading"
              clearable
              remote
              @search="handleMaterialSearch"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:24"
            label="装料重量"
            path="weight"
          >
            <NInputNumber
              v-model:value="model.weight"
              class="w-full"
              clearable
              placeholder="请输入装料重量"
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
        <NButton @click="closeModal">取消</NButton>
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
