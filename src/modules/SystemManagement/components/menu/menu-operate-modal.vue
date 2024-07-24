<script lang="ts">
import { defineComponent } from 'vue'
import { useSystemManagement } from 'modules/SystemManagement/store'
import type { FormInst } from 'naive-ui'

type MenuOperateModalProps = {
  /** the type of operation */
  operateType: SystemManagement.Menu.MenuOperateType
  /** the edit menu data or the parent menu data when adding a child menu */
  rowData?: SystemManagement.Menu.SystemMenuTree
}

type MenuOperateModalEmits = {
  (e: 'submitted'): void
}
export default defineComponent({
  name: 'MenuOperateModal'
})
</script>

<script setup lang="ts">
const props = defineProps<MenuOperateModalProps>()
const emit = defineEmits<MenuOperateModalEmits>()
const useSystemManagementStore = useSystemManagement()
const formRef = ref<FormInst | null>(null)

const visible = defineModel<boolean>('visible', {
  default: false
})

const title = computed(() => {
  const titles: Record<SystemManagement.Menu.MenuOperateType, string> = {
    add: '新增菜单',
    addChild: '新增子菜单',
    edit: '编辑菜单'
  }
  return titles[props.operateType]
})

function closeDrawer() {
  visible.value = false
}

const model: SystemManagement.Menu.CreateMenuModel = reactive(createDefaultModel())
function createDefaultModel(): SystemManagement.Menu.CreateMenuModel {
  return {
    'permission': '',
    'name': '',
    'parentId': -1,
    'icon': '',
    'sort': 0,
    'type': '0',
    'path': '',
    'keepAlive': '0',
    'disableMenu': '0',
    'display': '0',
    'systemMenu': '0'
  }
}

type RuleKey = Extract<keyof SystemManagement.Menu.CreateMenuModel, 'name' | 'type'>
const rules: Record<RuleKey, NaiveUI.FormRule> = {
  name: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入标题'
  },
  type: {
    required: true,
    trigger: 'change',
    message: '请选择类型'
  }
}

function handleInitModel() {
  console.log(111)
  Object.assign(model, createDefaultModel())

  if (!props.rowData) return

  if (props.operateType === 'addChild') {
    const { id } = props.rowData

    Object.assign(model, { parentId: id })
  }

  if (props.operateType === 'edit') {
    Object.assign(model, props.rowData, {
      menuId: props.rowData.id
    })
  }
}

async function handleSubmit() {
  formRef.value?.validate(async(errors) => {
    if (!errors) {
      if (props.operateType === 'add' || props.operateType === 'addChild') {
        await useSystemManagementStore.addSystemMenu(model)
      } else {
        await useSystemManagementStore.putSystemMenu(model)
      }
      closeDrawer()
      emit('submitted')
    }
  })
}

watch(visible, () => {
  if (visible.value) {
    handleInitModel()
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
    <NScrollbar class="h-480px pr-20px">
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
            span="24 m:24"
            label="标题"
            path="name"
          >
            <NInput
              v-model:value="model.name"
              placeholder="请输入标题"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 m:24"
            label="类型"
            path="type"
          >
            <NRadioGroup v-model:value="model.type">
              <NRadio
                v-for="item in useSystemManagementStore.menuTypeOptions"
                :key="item.value"
                :value="item.value"
                :label="item.label"
              />
            </NRadioGroup>
          </NFormItemGi>
          <NFormItemGi
            v-if="model.type === '0'"
            span="24 m:24"
            label="地址"
            path="path"
            :rule="{
              required: true,
              message: '请输入地址',
              trigger: ['input', 'blur']
            }"
          >
            <NInput
              v-model:value="model.path"
              placeholder="请输入地址"
            />
          </NFormItemGi>
          <NFormItemGi
            v-if="model.type === '0'"
            span="24 m:24"
            label="图标"
            path="icon"
          >
            <SelectIcons
              v-model:selected="model.icon"
              class="w-full"
            />

            <!-- <NInput
              v-model:value="model.icon"
              placeholder="请输入图标"
            /> -->
          </NFormItemGi>
          <NFormItemGi
            v-if="model.type === '0'"
            span="24 m:24"
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
            v-if="model.type === '0'"
            span="24 m:12"
            label="路由缓存"
            path="keepAlive"
          >
            <NRadioGroup v-model:value="model.keepAlive">
              <NRadio
                v-for="item in useSystemManagementStore.switchOptions"
                :key="item.value"
                :value="item.value"
                :label="item.label"
              />
            </NRadioGroup>
          </NFormItemGi>
          <NFormItemGi
            v-if="model.type === '0'"
            span="24 m:12"
            label="是否启用"
            path="disableMenu"
          >
            <NRadioGroup v-model:value="model.disableMenu">
              <NRadio
                v-for="item in useSystemManagementStore.switchOptions"
                :key="item.value"
                :value="item.value"
                :label="item.label"
              />
            </NRadioGroup>
          </NFormItemGi>
          <NFormItemGi
            v-if="model.type === '0'"
            span="24 m:12"
            label="自动展开"
            path="display"
          >
            <NRadioGroup v-model:value="model.display">
              <NRadio
                v-for="item in useSystemManagementStore.switchOptions"
                :key="item.value"
                :value="item.value"
                :label="item.label"
              />
            </NRadioGroup>
          </NFormItemGi>
          <NFormItemGi
            v-if="model.type === '1'"
            span="24 m:24"
            label="权限标识"
            path="permission"
            :rule="{
              required: true,
              message: '请输入权限标识',
              trigger: ['input', 'blur']
            }"
          >
            <NInput
              v-model:value="model.permission"
              placeholder="请输入权限标识"
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
