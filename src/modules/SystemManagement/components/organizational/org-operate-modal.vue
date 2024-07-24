<script lang="ts">
import { defineComponent } from 'vue'
import { useSystemManagement } from 'modules/SystemManagement/store'
import { useDictTagList } from '@/hooks/common/dictTag'
import type { FormInst } from 'naive-ui'

type OrgOperateModalProps = {
  /** the type of operation */
  operateType: SystemManagement.Organizational.OrganizationalOperateType
  /** the edit menu data or the parent menu data when adding a child menu */
  rowData?: SystemManagement.Organizational.OrganizationalTreeItem
}

type OrgOperateModalEmits = {
  (e: 'submitted'): void
}
export default defineComponent({
  name: 'OrganizationalOperateModal'
})
</script>

<script setup lang="ts">
const props = defineProps<OrgOperateModalProps>()
const emit = defineEmits<OrgOperateModalEmits>()
const useSystemManagementStore = useSystemManagement()
const formRef = ref<FormInst | null>(null)

const visible = defineModel<boolean>('visible', {
  default: false
})

const title = computed(() => {
  const titles: Record<SystemManagement.Organizational.OrganizationalOperateType, string> = {
    add: '新增组织',
    addChild: '新增子组织',
    edit: '编辑组织'
  }
  return titles[props.operateType]
})

function closeDrawer() {
  visible.value = false
}

const model: SystemManagement.Organizational.CreateOrganizationalModel = reactive(createDefaultModel())
function createDefaultModel(): SystemManagement.Organizational.CreateOrganizationalModel {
  return {
    name: '',
    sort: 0,
    departCode: '',
    parentId: 0,
    parentCode: '',
    nickName: '',
    type: '0',
    percharge: '',
    phone: '',
    address: ''
  }
}

type RuleKey = Extract<keyof SystemManagement.Organizational.CreateOrganizationalModel, 'name' | 'nickName'>
const rules: Record<RuleKey, NaiveUI.FormRule> = {
  name: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入名称'
  },
  nickName: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入简称'
  }
}

function handleInitModel() {
  Object.assign(model, createDefaultModel())

  if (!props.rowData) return

  if (props.operateType === 'edit') {
    Object.assign(model, props.rowData, {
      orgId: props.rowData?.id
    })
  }
}

async function handleSubmit() {
  formRef.value?.validate(async(errors) => {
    if (!errors) {
      console.log(model)
      if (props.operateType === 'add' || props.operateType === 'addChild') {
        await useSystemManagementStore.addSystemOrganizational(model)
      } else {
        await useSystemManagementStore.putSystemOrganizational(model)
      }
      closeDrawer()
      emit('submitted')
    }
  })
}

watch(visible, () => {
  if (visible.value) {
    handleInitModel()

    if (props.operateType === 'addChild') {
      model.parentId = props.rowData?.id as number
    }

    formRef.value?.restoreValidation()
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
    <NScrollbar class="h-240px pr-20px">
      <NForm
        ref="formRef"
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
            label="名称"
            path="name"
          >
            <NInput
              v-model:value="model.name"
              placeholder="请输入名称"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:12"
            label="简称"
            path="nickName"
          >
            <NInput
              v-model:value="model.nickName"
              placeholder="请输入简称"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:12"
            label="编码"
            path="departCode"
          >
            <NInput
              v-model:value="model.departCode"
              placeholder="请输入编码"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:12"
            label="组织类型"
            path="dsType"
          >
            <NSelect
              v-model:value="model.type"
              :options="useDictTagList('org_type')"
              placeholder="请选择组织类型"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:12"
            label="排序"
            path="sort"
          >
            <NInputNumber
              v-model:value="model.sort"
              class="w-full"
              clearable
              placeholder="请输入菜单顺序"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:12"
            label="联系人"
            path="percharge"
          >
            <NInput
              v-model:value="model.percharge"
              placeholder="请输入联系人"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:12"
            label="联系方式"
            path="phone"
          >
            <NInput
              v-model:value="model.phone"
              placeholder="请输入联系方式"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:12"
            label="联系地址"
            path="address"
          >
            <NInput
              v-model:value="model.address"
              placeholder="请输入联系地址"
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
