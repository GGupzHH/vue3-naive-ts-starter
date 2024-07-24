<script lang="ts">
import { defineComponent } from 'vue'
import { useSystemManagement } from 'modules/SystemManagement/store'
import type { FormInst } from 'naive-ui'

type DictionaryOperateModalProps = {
  /** the type of operation */
  operateType: SystemManagement.Dictionary.DictionaryOperateType
  rowData?: SystemManagement.Dictionary.DictionaryItem
}

type DictionaryOperateModalEmits = {
  (e: 'submitted'): void
}
export default defineComponent({
  name: 'DictionaryOperateModal'
})
</script>

<script setup lang="ts">
const props = defineProps<DictionaryOperateModalProps>()
const emit = defineEmits<DictionaryOperateModalEmits>()
const useSystemManagementStore = useSystemManagement()
const formRoleRef = ref<FormInst | null>(null)

const visible = defineModel<boolean>('visible', {
  default: false
})

const title = computed(() => {
  const titles: Record<SystemManagement.Dictionary.DictionaryOperateType, string> = {
    add: '新增字典类型',
    edit: '编辑字典类型'
  }
  return titles[props.operateType]
})

function closeDrawer() {
  visible.value = false
}

const model: SystemManagement.Dictionary.BodyEditDictionaryTypeApi = reactive(createDefaultModel())

function createDefaultModel(): SystemManagement.Dictionary.BodyEditDictionaryTypeApi {
  return {
    type: '',
    description: '',
    remarks: ''
  }
}

const rules: Record<
  Extract<
    keyof SystemManagement.Dictionary.DictionaryOperateType,
    'type'
  >,
  NaiveUI.FormRule
> = {
  type: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入字典类型'
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
      if (props.operateType === 'add') {
        await useSystemManagementStore.addSystemDictionaryType(model)
      } else {
        await useSystemManagementStore.putSystemDictionaryType(model)
      }
      closeDrawer()
      emit('submitted')
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
    <NScrollbar class="h-180px pr-20px">
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
            span="24 m:12"
            label="字典类型"
            path="type"
          >
            <NInput
              v-model:value="model.type"
              placeholder="请输入字典类型"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:12"
            label="字典描述"
            path="description"
          >
            <NInput
              v-model:value="model.description"
              placeholder="请输入字典描述"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:24"
            label="备注"
            path="remarks"
          >
            <NInput
              v-model:value="model.remarks"
              type="textarea"
              placeholder="请输入备注"
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
