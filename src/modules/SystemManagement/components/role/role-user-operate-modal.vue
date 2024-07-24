<script lang="ts">
import { defineComponent } from 'vue'
import { useSystemManagement } from 'modules/SystemManagement/store'
import type { FormInst, TransferRenderTargetLabel } from 'naive-ui'

type TransferValue = {
  label: string
  value: number
  userInfo: SystemManagement.Role.AssociationUserItem
}

type NTransferValue = {
  transferValue: Array<TransferValue>
}

type RoleUserOperateModalProps = {
  /** the type of operation */
  rowData?: SystemManagement.Role.RoleItem
}

type RoleOperateModalEmits = {
  (e: 'submitted'): void
}
export default defineComponent({
  name: 'RoleUserOperateModal'
})
</script>

<script setup lang="ts">
const props = defineProps<RoleUserOperateModalProps>()
const emit = defineEmits<RoleOperateModalEmits>()
const useSystemManagementStore = useSystemManagement()
const formRoleRef = ref<FormInst | null>(null)

const visible = defineModel<boolean>('visible', {
  default: false
})

function closeModal() {
  visible.value = false
}

const generalOptions = ref<Array<TransferValue>>([])
const selectedUsers = ref<Array<SystemManagement.Role.AssociationUserItem>>([])
const model: { transferValue: Array<number>; } = reactive(createDefaultModel())

function createDefaultModel(): { transferValue: Array<number>; } {
  return {
    transferValue: []
  }
}

const rules: Record<
  Extract<
    keyof NTransferValue,
    'transferValue'
  >,
  NaiveUI.FormRule
> = {
  transferValue: {
    type: 'array',
    required: true,
    trigger: 'change',
    message: '请选择人员'
  }
}

function handleInitModel() {
  Object.assign(model, createDefaultModel())

  if (!props.rowData) return

  // if (props.operateType === 'edit') {
  //   Object.assign(model, props.rowData, {
  //     id: props.rowData.roleId
  //   })
  // }
}

const handleDeptChange = (value) => {
  deptId.value = value
  getUserListByDeptId(deptId.value)
}

async function handleSubmit() {
  formRoleRef.value?.validate(async(errors) => {
    if (!errors && props.rowData) {
      await useSystemManagementStore.addUserRoleRelation({
        roleId: props.rowData.roleId,
        userList: selectedUsers.value
      })

      closeModal()
      emit('submitted')
    }
  })
}

const deptId = ref()
const organizationalTree = ref<SystemManagement.Organizational.OrganizationalTreeItem[]>([])

const getSystemOrganizationalTree = async() => {
  const res = await useSystemManagementStore.getSystemOrganizationalTree()

  if (res.code === 200) {
    organizationalTree.value = res.data
  }
}

const getUserListByDeptId = async(deptId: number) => {
  const res = await useSystemManagementStore.getUserListByDeptId({
    deptId
  })

  if (res.code === 200) {
    generalOptions.value = res.data.map((item: SystemManagement.Role.AssociationUserItem) => {
      return {
        label: item.displayname,
        value: item.userId,
        userInfo: item
      }
    })
  }
}

watch(() => model.transferValue, (newValue) => {
  console.log(newValue)
  console.log(generalOptions)
  selectedUsers.value = generalOptions.value
    .filter(option =>
      newValue.includes(option.value)
    )
    .map(option =>
      option.userInfo
    )
})

watch(visible, async() => {
  if (visible.value) {
    handleInitModel()
    console.log(model)
    formRoleRef.value?.restoreValidation()
    await getSystemOrganizationalTree()
  }
})
</script>

<template>
  <NModal
    v-model:show="visible"
    title="人员关联"
    preset="card"
    class="w-800px"
  >
    <NScrollbar>
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
            path="username"
          >
            <NTreeSelect
              v-model:value="deptId"
              filterable
              :options="organizationalTree"
              default-value="Drive My Car"
              key-field="id"
              label-field="name"
              clearable
              placeholder="请选择组织架构"
              :on-update:value="handleDeptChange"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:24"
            path="roleName"
          >
            <NTransfer
              v-model:value="model.transferValue"
              virtual-scroll
              source-filterable
              :options="generalOptions"
              class="h-420px"
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
