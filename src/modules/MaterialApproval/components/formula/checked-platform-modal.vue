<script lang="ts">
import { defineComponent, ref, watch, inject, Ref } from 'vue'
import { useMaterialApproval } from 'modules/MaterialApproval/store/index'
import type { FormInst } from 'naive-ui'
import { NTag } from 'naive-ui'

type CheckedPlatformModalProps = {
  /** the type of operation */
  furnaceNum: string
}

type CheckedPlatformModalEmits = {
  (e: 'submitted', deviceString: Array<number>): void
}

export default defineComponent({
  name: 'CheckedPlatformModal'
})
</script>

<script setup lang="ts">
const props = defineProps<CheckedPlatformModalProps>()
const emit = defineEmits<CheckedPlatformModalEmits>()

const useMaterialApprovalStore = useMaterialApproval()
const formRoleRef = ref<FormInst | null>(null)
const module = inject<Ref<string>>('module')
const series = inject<Ref<string>>('series')

const visible = defineModel<boolean>('visible', {
  default: false
})

function closeModal() {
  visible.value = false
}

// 产品分类的输入值
const productClassification = ref('')
const checkboxes = ref(Array.from({ length: 90 }, (_, i) => i + 1 ))
// 选中的复选框状态数组，初始时全部为未选中
const selectedCheckboxes = ref(Array(checkboxes.value.length).fill(false))
// 全选复选框的状态
const selectAll = ref(false)
// 前半段复选框的状态
const selectFirstHalf = ref(false)
// 后半段复选框的状态
const selectSecondHalf = ref(false)

// 计算前半段的长度
const halfLength = Math.ceil(checkboxes.value.length / 2)

// 处理全选操作
const handleSelectAll = () => {
  // 将所有复选框的选中状态设置为selectAll的值
  selectedCheckboxes.value = Array(checkboxes.value.length).fill(selectAll.value)
}

// 处理选择前半段或后半段的操作
const handleSelectHalf = (type) => {
  if (type === 'first') {
    // 选择前半段复选框
    for (let i = 0; i < halfLength; i++) {
      selectedCheckboxes.value[i] = selectFirstHalf.value
    }
  } else if (type === 'second') {
    // 选择后半段复选框
    for (let i = halfLength; i < checkboxes.value.length; i++) {
      selectedCheckboxes.value[i] = selectSecondHalf.value
    }
  }
  updateSelection()
}

// 判断复选框是否处于半选状态
const isIndeterminate = (type) => {
  let selectedCount
  if (type === 'all') {
    const selectedCount = selectedCheckboxes.value.filter(Boolean).length
    return selectedCount > 0 && selectedCount < checkboxes.value.length
  } else if (type === 'first') {
    selectedCount = selectedCheckboxes.value.slice(0, halfLength).filter(Boolean).length
    return selectedCount > 0 && selectedCount < halfLength
  } else if (type === 'second') {
    selectedCount = selectedCheckboxes.value.slice(halfLength).filter(Boolean).length
    return selectedCount > 0 && selectedCount < checkboxes.value.length - halfLength
  }
  return false
}

// 更新选择状态，判断前半段和后半段复选框的状态
const updateSelection = () => {
  const firstHalfSelected = selectedCheckboxes.value.slice(0, halfLength).every(Boolean)
  const secondHalfSelected = selectedCheckboxes.value.slice(halfLength).every(Boolean)
  selectFirstHalf.value = firstHalfSelected
  selectSecondHalf.value = secondHalfSelected
  selectAll.value = firstHalfSelected && secondHalfSelected
}

// 监听selectedCheckboxes的变化，更新前半段、后半段和全选复选框的状态
watch(selectedCheckboxes, updateSelection)

async function handleSubmit() {

  productClassification.value = checkboxes.value
    .filter((_, index) => selectedCheckboxes.value[index])
    .join(', ')

  console.log(checkboxes.value.filter((_, index) => selectedCheckboxes.value[index]))
  emit('submitted', checkboxes.value.filter((_, index) => selectedCheckboxes.value[index]))
  closeModal()
}

watch(visible, async() => {
  console.log(visible)
  if (visible.value) {
    const res = await useMaterialApprovalStore.queryDeviceNums({
      series: series?.value as string,
      module: module?.value as string
    })
    if (res.code === 200) {
      checkboxes.value = res.data
      // 更新选中的复选框状态
      const furnaceNums = props.furnaceNum.split(',').map(num => num.trim())
      console.log(furnaceNums)
      furnaceNums.forEach(num => {
        const index = checkboxes.value.findIndex(checkbox => checkbox === Number(num))
        if (index !== -1) {
          selectedCheckboxes.value[index] = true
        }
      })
      updateSelection()
    }
  }
})
</script>

<template>
  <NModal
    v-model:show="visible"
    title="选择炉台"
    preset="card"
    class="w-900px"
  >
    <div class="button-group m-b-12px">
      <NCheckbox
        v-model:checked="selectAll"
        :indeterminate="isIndeterminate('all')"
        @update:checked="handleSelectAll"
      >
        全选
      </NCheckbox>
      <NCheckbox
        v-model:checked="selectFirstHalf"
        :indeterminate="isIndeterminate('first')"
        @update:checked="handleSelectHalf('first')"
      >
        勾选前半段
      </NCheckbox>
      <NCheckbox
        v-model:checked="selectSecondHalf"
        :indeterminate="isIndeterminate('second')"
        @update:checked="handleSelectHalf('second')"
      >
        勾选后半段
      </NCheckbox>
    </div>
    <NGrid
      x-gap="12"
      y-gap="12"
      cols="6"
    >
      <NGridItem
        v-for="(checkbox, index) in checkboxes"
        :key="index"
      >
        <NCheckbox
          v-model:checked="selectedCheckboxes[index]"
          @update:checked="updateSelection"
        >
          {{ checkbox }}
        </NCheckbox>
      </NGridItem>
    </NGrid>
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
