<script lang="ts">
import { defineComponent } from 'vue'
import { useSystemManagement } from 'modules/SystemManagement/store'
import type { FormInst } from 'naive-ui'

type RoleOperateModalProps = {
  /** the type of operation */
  operateType: SystemManagement.Role.RoleOperateType
  rowData?: SystemManagement.Role.RoleItem
}

type RoleOperateModalEmits = {
  (e: 'submitted'): void
}
export default defineComponent({
  name: 'RoleOperateModal'
})
</script>

<script setup lang="ts">
const props = defineProps<RoleOperateModalProps>()
const emit = defineEmits<RoleOperateModalEmits>()
const useSystemManagementStore = useSystemManagement()
const formRoleRef = ref<FormInst | null>(null)

const visible = defineModel<boolean>('visible', {
  default: false
})

const title = computed(() => {
  const titles: Record<SystemManagement.Role.RoleOperateType, string> = {
    add: '新增角色',
    edit: '编辑角色'
  }
  return titles[props.operateType]
})

function closeDrawer() {
  visible.value = false
}

const model: SystemManagement.Role.CreateRoleItem = reactive(createDefaultModel())

function createDefaultModel(): SystemManagement.Role.CreateRoleItem {
  return {
    roleName: '',
    roleCode: '',
    dsType: '0',
    disableRole: '0',
    roleDesc: '',
    sortno: 1
  }
}

const rules: Record<
  Extract<
    keyof SystemManagement.Role.CreateRoleItem,
    'roleName' | 'roleCode' | 'dsType'
  >,
  NaiveUI.FormRule
> = {
  roleName: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入角色名称'
  },
  roleCode: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入角色名称'
  },
  dsType: {
    required: true,
    trigger: ['blur', 'change'],
    message: '请选择数据权限'
  }
}

function handleInitModel() {
  Object.assign(model, createDefaultModel())

  if (!props.rowData) return

  if (props.operateType === 'edit') {
    Object.assign(model, props.rowData, {
      id: props.rowData.roleId
    })
  }
}

async function handleSubmit() {
  formRoleRef.value?.validate(async(errors) => {
    if (!errors) {
      if (props.operateType === 'add') {
        await useSystemManagementStore.addSystemRole(model)
      } else {
        await useSystemManagementStore.putSystemRole(model)
      }
      closeDrawer()
      emit('submitted')
    }
  })
}

watch(visible, () => {
  if (visible.value) {
    handleInitModel()
    console.log(model)
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
    <NScrollbar class="h-280px pr-20px">
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
            label="角色名称"
            path="roleName"
          >
            <NInput
              v-model:value="model.roleName"
              placeholder="请输入角色名称"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:12"
            label="角色标识"
            path="roleCode"
          >
            <NInput
              v-model:value="model.roleCode"
              placeholder="请输入角色标识"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:24"
            label="数据权限"
            path="dsType"
          >
            <NSelect
              v-model:value="model.dsType"
              :options="useSystemManagementStore.dsTypeOptions"
              placeholder="请选择数据权限"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:12"
            label="是否启用"
            path="disableRole"
          >
            <NRadioGroup v-model:value="model.disableRole">
              <NRadio
                v-for="item in useSystemManagementStore.roleSwatchOptions"
                :key="item.value"
                :value="item.value"
                :label="item.label"
              />
            </NRadioGroup>
          </NFormItemGi>
          <NFormItemGi
            span="24 m:24"
            label="角色描述"
            path="roleDesc"
          >
            <NInput
              v-model:value="model.roleDesc"
              placeholder="请输入角色描述"
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
