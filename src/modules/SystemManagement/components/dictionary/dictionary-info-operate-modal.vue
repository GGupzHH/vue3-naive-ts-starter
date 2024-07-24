<script lang="ts">
import { defineComponent } from 'vue'
import { useSystemManagement } from 'modules/SystemManagement/store'
import type { FormInst } from 'naive-ui'

type DictionaryInfoOperateModalProps = {
  /** the type of operation */
  operateType: SystemManagement.Dictionary.DictionaryInfoOperateType
  rowData?: SystemManagement.Dictionary.DictionaryInfoItem
}

type DictionaryInfoOperateModalEmits = {
  (e: 'submitted'): void
}
export default defineComponent({
  name: 'DictionaryInfoOperateModal'
})
</script>

<script setup lang="ts">
const props = defineProps<DictionaryInfoOperateModalProps>()
const emit = defineEmits<DictionaryInfoOperateModalEmits>()
const useSystemManagementStore = useSystemManagement()
const formRoleRef = ref<FormInst | null>(null)
const dictionaryTypeData = inject<Ref<SystemManagement.Dictionary.DictionaryItem>>('dictionaryTypeData')

const visible = defineModel<boolean>('visible', {
  default: false
})

const title = computed(() => {
  const titles: Record<SystemManagement.Dictionary.DictionaryInfoOperateType, string> = {
    add: '新增字典明细',
    edit: '编辑字典明细'
  }
  return titles[props.operateType]
})

function closeDrawer() {
  visible.value = false
}

const model: SystemManagement.Dictionary.BodyAddDictionaryInfoApi = reactive(createDefaultModel())
function createDefaultModel(): SystemManagement.Dictionary.BodyAddDictionaryInfoApi {
  return {
    dictId: 0,
    label: '',
    value: '',
    sort: 0,
    remarks: 'default',
    description: ''
  }
}

const rules: Record<
  Extract<
    keyof SystemManagement.Dictionary.DictionaryInfoOperateType,
    'label' | 'value'
  >,
  NaiveUI.FormRule
> = {
  label: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入字典详情键'
  },
  value: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入字典详情值'
  }
}

function handleInitModel() {
  Object.assign(model, createDefaultModel(), {
    dictId: dictionaryTypeData?.value.id,
    type: dictionaryTypeData?.value.type
  })
  console.log(dictionaryTypeData)
  console.log(dictionaryTypeData?.value.id)
  if (!props.rowData) return

  Object.assign(model, {
    type: props.rowData.type
  })
  console.log(123123123)

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
        await useSystemManagementStore.addSystemDictionaryInfo(model)
      } else {
        await useSystemManagementStore.putSystemDictionaryInfo(model)
      }
      closeDrawer()
      emit('submitted')
    }
  })
}

watch(visible, () => {
  if (visible.value) {
    console.log(dictionaryTypeData)
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
    <NScrollbar class="h-340px pr-20px">
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
            label="字典类型"
            path="type"
          >
            <NInput
              :default-value="dictionaryTypeData?.type"
              disabled
              placeholder="请输入字典类型"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:12"
            label="键"
            path="label"
          >
            <NInput
              v-model:value="model.label"
              placeholder="请输入键"
            />
          </NFormItemGi>

          <NFormItemGi
            span="24 m:12"
            label="值"
            path="value"
          >
            <NInput
              v-model:value="model.value"
              placeholder="请输入值"
            />
          </NFormItemGi>

          <NFormItemGi
            span="24 m:24"
            label="排序"
            path="sort"
          >
            <NInputNumber
              v-model:value="model.sort"
              class="w-full"
              clearable
              placeholder="请输入排序"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:24"
            label="字典类型"
            path="remarks"
          >
            <NSelect
              v-model:value="model.remarks"
              :options="useSystemManagementStore.dictInfoTagType"
              placeholder="请选择组织类型"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:24"
            label="描述"
            path="description"
          >
            <NInput
              v-model:value="model.description"
              type="textarea"
              placeholder="请输入描述"
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
