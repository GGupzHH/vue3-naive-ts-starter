<script lang="ts">
import { defineComponent, VNodeChild } from 'vue'
import { useMaterialApproval } from 'modules/MaterialApproval/store/index'
import type { FormInst, SelectOption } from 'naive-ui'
import { NTag } from 'naive-ui'

type CreateSubMaterialModalProps = {
  /** the type of operation */
}

type CreateSubMaterialModalEmits = {
  (e: 'submitted'): void
}

export default defineComponent({
  name: 'SubMaterailCreateModal'
})
</script>

<script setup lang="ts">
const props = defineProps<CreateSubMaterialModalProps>()
const emit = defineEmits<CreateSubMaterialModalEmits>()

const useMaterialApprovalStore = useMaterialApproval()
const formRoleRef = ref<FormInst | null>(null)
const series = inject<Ref<string>>('series')
const rowData = inject<Ref<MaterialApproval.Formula.MaterialInfo>>('subMaterialRowData')

const visible = defineModel<boolean>('visible', {
  default: false
})

function closeModal() {
  visible.value = false
}

const model: MaterialApproval.Formula.CreateMaterialFormulaSub = reactive(createDefaultModel())

function createDefaultModel(): MaterialApproval.Formula.CreateMaterialFormulaSub {
  return {
    series: '',
    materialNo: '',
    materialName: '',
    productClassification: '',
    rawMaterialClassification: '',
    brand: '',
    resistivity: '',
    materialClassification: ''
  }
}

const rules: Record<
  Extract<
    keyof MaterialApproval.Formula.CreateMaterialFormulaSub,
    'materialNo' | 'brand' | 'resistivity' | 'productClassification' | 'rawMaterialClassification'
  >,
  NaiveUI.FormRule
> = {
  materialNo: {
    required: true,
    trigger: ['blur', 'change'],
    // type: 'number',
    message: '请选择物品条码'
  },
  brand: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入厂牌'
  },
  resistivity: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入电阻率'
  },
  productClassification: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入产品分类'
  },
  rawMaterialClassification: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入原料分类'
  }
}

function handleInitModel() {
  Object.assign(model, createDefaultModel())
}

async function handleSubmit() {
  formRoleRef.value?.validate(async(errors) => {
    if (!errors) {
      const res = await useMaterialApprovalStore.addMaterialFormulaSub({
        series: series?.value as string,
        materialNo: model.materialNo,
        materialName: materialCurrent.value.name,
        productClassification: model.productClassification,
        rawMaterialClassification: model.rawMaterialClassification,
        brand: model.brand,
        resistivity: model.resistivity,
        materialClassification: rowData?.value.materialInfo as string
      })
      emit('submitted')
      closeModal()
    }
  })
}

const codeOptions = ref<Array<MaterialApproval.Formula.SearchMaterialFormulaSub>>([])
const codeLoading = ref(false)
const materialCurrent = ref()
async function handleMaterialSearch(query: string) {
  codeLoading.value = true

  const res = await useMaterialApprovalStore.queryMaterialMaster({
    current: 1,
    size: 999,
    code: query
  })

  if (res.code === 200) {
    codeOptions.value = res.data.records
  }

  codeLoading.value = false
}

const handleMaterialChange = (value: string) => {
  materialCurrent.value = codeOptions.value.find(item => item.code === value)
  console.log(materialCurrent)
}

watch(visible, () => {
  if (visible.value) {
    handleInitModel()
    codeOptions.value = []
    console.log(model)
    formRoleRef.value?.restoreValidation()
  }
})
</script>

<template>
  <NModal
    v-model:show="visible"
    title="添加物料明细"
    preset="card"
    class="w-500px"
  >
    <NScrollbar class="h-300px pr-20px">
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
            span="24 m:24"
            label="物料明细"
            path="materialNo"
          >
            <NSelect
              v-model:value="model.materialNo"
              filterable
              placeholder="搜索物料明细编码"
              :options="codeOptions"
              :loading="codeLoading"
              label-field="code"
              value-field="code"
              :consistent-menu-width="false"
              clearable
              remote
              @search="handleMaterialSearch"
              @change="handleMaterialChange"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:24"
            label="厂牌"
            path="brand"
          >
            <NInput
              v-model:value="model.brand"
              class="w-full"
              clearable
              placeholder="请输入厂牌"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:24"
            label="电阻率"
            path="resistivity"
          >
            <NInput
              v-model:value="model.resistivity"
              class="w-full"
              clearable
              placeholder="请输入电阻率"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:24"
            label="产品分类"
            path="productClassification"
          >
            <NInput
              v-model:value="model.productClassification"
              class="w-full"
              clearable
              placeholder="请输入产品分类"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:24"
            label="原料分类"
            path="rawMaterialClassification"
          >
            <NInput
              v-model:value="model.rawMaterialClassification"
              class="w-full"
              clearable
              placeholder="请输入原料分类"
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
