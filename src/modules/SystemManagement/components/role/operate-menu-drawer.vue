<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useSystemManagement } from 'modules/SystemManagement/store'
import { NDrawer, NDrawerContent, NTree } from 'naive-ui'
import type { TreeInst } from 'naive-ui'

type OperateMenuDrawerProps = {
  rowData?: SystemManagement.Role.RoleItem
}

export default defineComponent({
  name: 'OperateMenuDrawer'
})
</script>

<script setup lang="ts">
const props = defineProps<OperateMenuDrawerProps>()
const useSystemManagementStore = useSystemManagement()
const treeLoading = ref(false)
const treeRef = ref<TreeInst | null>(null)
const visible = defineModel<boolean>('visible', {
  default: false
})

const organizationalTree = ref<SystemManagement.Menu.SystemMenuTree[]>([])
const defaultSelectedKeys = ref<number[]>([])
const checkedKeys = ref<number[]>([])

const getSystemMenuTree = async() => {
  const res = await useSystemManagementStore.getSystemMenuTree()
  if (res.code === 200) {
    organizationalTree.value = res.data
  }
}

const getDefaultSelectedKeys = async() => {
  if (!props.rowData) return

  const res = await useSystemManagementStore.getSystemActiveMenuList(props.rowData.roleId)
  if (res.code === 200) {
    defaultSelectedKeys.value = res.data
    checkedKeys.value = [...defaultSelectedKeys.value]
  }
}

const updateCheckedKeys = (keys: Array<number>) => {
  checkedKeys.value = keys
}

const handleSubmit = async() => {
  if (!props.rowData) return

  // TODO 这里树保存有问题  是否带半选有问题
  const indeterminateData = treeRef.value
    && treeRef.value.getIndeterminateData()
    && treeRef.value.getIndeterminateData().keys as number[]
  const res = await useSystemManagementStore.putSystemAuthMenu({
    roleId: props.rowData.roleId,
    menuIds: checkedKeys.value.concat(indeterminateData ? indeterminateData : [])
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
    await getSystemMenuTree()
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
      title="菜单权限配置"
      :native-scrollbar="false"
    >
      <NTree
        ref="treeRef"
        :loading="treeLoading"
        :checked-keys="checkedKeys"
        :data="organizationalTree"
        key-field="id"
        label-field="label"
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
