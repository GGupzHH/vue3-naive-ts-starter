<script setup lang="ts" generic="T extends Record<string, unknown>, K = never">
import { VueDraggable } from 'vue-draggable-plus'

export type FilteredColumn = {
  key: string
  title: string
  checked: boolean
}

defineOptions({
  name: 'TableColumnSetting'
})

const columns = defineModel<FilteredColumn[]>('columns', {
  required: true
})
</script>

<template>
  <NPopover
    placement="bottom-end"
    trigger="click"
  >
    <template #trigger>
      <NButton size="small">
        <template #icon>
          <IconFont icon="icon-shezhi1" />
        </template>
        列设置
      </NButton>
    </template>
    <VueDraggable
      v-model="columns"
      class="h-400px overflow-auto"
    >
      <div
        v-for="item in columns"
        :key="item.key"
        class="flex-y-center h-36px hover:(bg-primary bg-opacity-20) rd-4px"
      >
        <IconFont
          icon="icon-qiehuan"
          class="text-18px m-r-8px cursor-move"
        />
        <NCheckbox v-model:checked="item.checked">
          {{ item.title }}
        </NCheckbox>
      </div>
    </VueDraggable>
  </NPopover>
</template>

<style scoped></style>
