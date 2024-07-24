<script lang="ts">
import { defineComponent, ref, reactive, computed, watch } from 'vue'
import { useSystemManagement } from 'modules/SystemManagement/store'
import type { FormInst } from 'naive-ui'

type UserOperateModalProps = {
  /** the type of operation */
  operateType: SystemManagement.User.UserOperateType
  rowData?: SystemManagement.User.UserItemInfo
}

type UserOperateModalEmits = {
  (e: 'submitted'): void
}

export default defineComponent({
  name: 'UserOperateModal'
})
</script>

<script setup lang="ts">
const props = defineProps<UserOperateModalProps>()
const emit = defineEmits<UserOperateModalEmits>()
const useSystemManagementStore = useSystemManagement()
const formRoleRef = ref<FormInst | null>(null)
const organizationalTree = ref<SystemManagement.Organizational.OrganizationalTreeItem[]>([])

const visible = defineModel<boolean>('visible', {
  default: false
})

const title = computed(() => {
  const titles: Record<SystemManagement.User.UserOperateType, string> = {
    add: '新增用户',
    edit: '编辑用户'
  }
  return titles[props.operateType]
})

function closeDrawer() {
  visible.value = false
}

const model: SystemManagement.User.CreateUser = reactive(createDefaultModel())

function createDefaultModel(): SystemManagement.User.CreateUser {
  return {
    username: '',
    password: '',
    workno: '',
    departName: '0',
    displayname: '',
    deptId: null,
    mail: '',
    phone: '',
    disableUser: '0'
  }
}

const rules: Record<
  Extract<
    keyof SystemManagement.User.CreateUser,
    'username' | 'password' | 'deptId' | 'mail' | 'phone'
  >,
  NaiveUI.FormRule
> = {
  username: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入登录名'
  },
  password: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入密码'
  },
  deptId: {
    required: true,
    type: 'number',
    trigger: ['blur', 'change'],
    message: '请选择部门'
  },
  mail: {
    required: false,
    pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    trigger: ['blur'],
    message: '请输入有效的邮箱地址'
  },
  phone: {
    required: false,
    pattern: /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/,
    trigger: ['blur', 'change'],
    message: '请输入有效的电话号码'
  }
}

function handleInitModel() {
  Object.assign(model, createDefaultModel())

  if (!props.rowData) return

  if (props.operateType === 'edit') {
    Object.assign(model, props.rowData, {
      id: props.rowData.userId
    })
  }
}

async function handleSubmit() {
  console.log(model)
  formRoleRef.value?.validate(async(errors) => {
    if (!errors) {
      if (props.operateType === 'add') {
        await useSystemManagementStore.addSystemUser(model)
      } else {
        await useSystemManagementStore.putSystemUser(model)
      }
      closeDrawer()
      emit('submitted')
    }
  })
}

watch(visible, async() => {
  if (visible.value) {
    await getSystemOrganizationalTree()
    handleInitModel()
    console.log(model)
    formRoleRef.value?.restoreValidation()
  }
})

const getSystemOrganizationalTree = async() => {
  const res = await useSystemManagementStore.getSystemOrganizationalTree()

  if (res.code === 200) {
    organizationalTree.value = res.data
  }
}

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
            label="部门"
            path="deptId"
          >
            <NTreeSelect
              v-model:value="model.deptId"
              filterable
              :options="organizationalTree"
              key-field="id"
              label-field="name"
              clearable
              placeholder="请选择部门"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:12"
            label="工号"
            path="workno"
          >
            <NInput
              v-model:value="model.workno"
              placeholder="请输入工号"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:12"
            label="登录名"
            path="username"
          >
            <NInput
              v-model:value="model.username"
              placeholder="请输入登录名"
            />
          </NFormItemGi>
          <NFormItemGi
            v-if="props.operateType === 'add'"
            span="24 m:12"
            label="密码"
            path="password"
          >
            <NInput
              v-model:value="model.password"
              type="password"
              placeholder="请输入密码"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:12"
            label="姓名"
            path="displayname"
          >
            <NInput
              v-model:value="model.displayname"
              placeholder="请输入姓名"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:12"
            label="手机号"
            path="phone"
          >
            <NInput
              v-model:value="model.phone"
              placeholder="请输入手机号"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:12"
            label="邮箱"
            path="mail"
          >
            <NInput
              v-model:value="model.mail"
              placeholder="请输入邮箱"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:12"
            label="是否启用"
            path="disableRole"
          >
            <NRadioGroup v-model:value="model.disableUser">
              <NRadio
                v-for="item in useSystemManagementStore.roleSwatchOptions"
                :key="item.value"
                :value="item.value"
                :label="item.label"
              />
            </NRadioGroup>
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
