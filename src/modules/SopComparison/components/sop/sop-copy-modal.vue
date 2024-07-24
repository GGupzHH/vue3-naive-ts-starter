<script lang="ts">
import { defineComponent } from 'vue'
import { useSopComparison } from 'modules/SopComparison/store'
import type { FormInst } from 'naive-ui'
import { useDictTagList } from '@/hooks/common/dictTag'

type SopModel = {
  newSopName: string
}

type SopCopyCreateModalProps = {
  /** the type of operation */
  rowData?: SopComparison.SOPContrast.ComparisonListItem
}

type SopCopyCreateModalEmits = {
  (e: 'submitted'): void
}
export default defineComponent({
  name: 'SOPCopyOperateModal'
})
</script>

<script setup lang="ts">
const props = defineProps<SopCopyCreateModalProps>()
const emit = defineEmits<SopCopyCreateModalEmits>()
const useSopComparisonStore = useSopComparison()

const formRoleRef = ref<FormInst | null>(null)

const visible = defineModel<boolean>('visible', {
  default: false
})

function closeModal() {
  visible.value = false
}

const model: SopModel = reactive(createDefaultModel())

function createDefaultModel(): SopModel {
  return {
    newSopName: ''
  }
}

const rules: Record<
  Extract<
    keyof SopModel,
    'newSopName'
  >,
  NaiveUI.FormRule
  > = {
    newSopName: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入新的SOP名称'
    }
  }

function handleInitModel() {
  Object.assign(model, createDefaultModel())
}

async function handleSubmit() {
  formRoleRef.value?.validate(async(errors) => {
    if (!errors) {
      let res = null as null | any
      res = await useSopComparisonStore.createNewSOPCopyValue({
        ...model,
        sopName: props.rowData
      })

      if (res.code === 200) {
        closeModal()
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
    title="复制"
    preset="card"
    class="w-800px"
  >
    <NScrollbar class="h-58px pr-20px">
      <NForm
        ref="formRoleRef"
        :model="model"
        :rules="rules"
        label-placement="left"
        :label-width="120"
      >
        <NGrid
          responsive="screen"
          item-responsive
        >
          <NFormItemGi
            span="12 m:24"
            label="新SOP文件名"
            path="newSopName"
          >
            <n-input
              v-model:value="model.newSopName"
              placeholder="输入新SOP文件名"
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
