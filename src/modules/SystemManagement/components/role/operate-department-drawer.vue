
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useSystemManagement } from 'modules/SystemManagement/store'
import { NDrawer, NDrawerContent, NTree, NSpace, NButton } from 'naive-ui'

type OperateDepartmentDrawerProps = {
  rowData?: SystemManagement.Role.RoleItem
}

export default defineComponent({
  name: 'OperateDepartmentDrawer'
})
</script>

<script setup lang="ts">
const props = defineProps<OperateDepartmentDrawerProps>()
const useSystemManagementStore = useSystemManagement()
const treeLoading = ref(false)
const visible = defineModel<boolean>('visible', {
  default: false
})

const organizationalTree = ref<SystemManagement.Organizational.OrganizationalTreeItem[]>([])
const defaultSelectedKeys = ref<number[]>([])
const checkedKeys = ref<number[]>([])

const getSystemOrganizationalTree = async() => {
  const res = await useSystemManagementStore.getSystemOrganizationalTree()
  if (res.code === 200) {
    organizationalTree.value = res.data
  }
}

const getDefaultSelectedKeys = async() => {
  if (!props.rowData) return

  const res = await useSystemManagementStore.getSystemOrganizationalByRole(props.rowData.roleId)
  if (res.code === 200) {
    defaultSelectedKeys.value = res.data.records.map(item => item.orgId)
    checkedKeys.value = [...defaultSelectedKeys.value]
  }
}

const updateCheckedKeys = (keys: Array<number>) => {
  checkedKeys.value = keys
}

const handleSubmit = async() => {
  if (!props.rowData) return

  const res = await useSystemManagementStore.addSystemDep({
    roleId: props.rowData.roleId,
    orgIds: checkedKeys.value
  })

  if (res.code === 200) {
    closeDrawer()
  }

}

function closeDrawer() {
  visible.value = false
}

watch(visible, async(newValue) => {
  if (newValue) {
    await getSystemOrganizationalTree()
    await getDefaultSelectedKeys()
  }
})

</script>
<template>
  <NDrawer
    v-model:show="visible"
    :width="400"
  >
    <NDrawerContent
      title="部门列表权限配置"
      :native-scrollbar="false"
    >
      <NTree
        :loading="treeLoading"
        :checked-keys="checkedKeys"
        :data="organizationalTree"
        key-field="id"
        label-field="name"
        show-line
        default-expand-all
        checkable
        cascade
        expand-on-click
        selectable
        @update:checked-keys="updateCheckedKeys"
      />
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
    </NDrawerContent>
  </NDrawer>
</template>
