<script setup lang="ts">
defineOptions({
  name: 'TableHeaderOperation'
})

interface Props {
  itemAlign?: NaiveUI.Align
  disabledDelete?: boolean
  isDeleteBtn?: boolean
  isAddBtn?: boolean
  addBtnText?: string
  loading?: boolean
}

withDefaults(defineProps<Props>(), {
  isAddBtn: true,
  addBtnText: '添加'
})

interface Emits {
  (e: 'add'): void
  (e: 'delete'): void
  (e: 'refresh'): void
}

const emit = defineEmits<Emits>()

const columns = defineModel<NaiveUI.TableColumnCheck[]>('columns', {
  default: () => []
})

function add() {
  emit('add')
}

function batchDelete() {
  emit('delete')
}

function refresh() {
  emit('refresh')
}
</script>

<template>
  <NSpace
    :align="itemAlign"
    wrap
    justify="end"
    class="lt-sm:w-200px"
  >
    <slot name="prefix"></slot>
    <slot name="default">
      <NButton
        v-if="isAddBtn"
        size="small"
        ghost
        type="primary"
        @click="add"
      >
        <template #icon>
          <IconFont icon="icon-xinjian" />
        </template>
        {{ addBtnText }}
      </NButton>
      <NPopconfirm
        v-if="isDeleteBtn"
        @positive-click="batchDelete"
      >
        <template #trigger>
          <NButton
            size="small"
            ghost
            type="error"
            :disabled="disabledDelete"
          >
            <template #icon>
              <IconFont
                icon="icon-shanchu1"
              />
            </template>
            批量删除
          </NButton>
        </template>
        确认删除吗？
      </NPopconfirm>
    </slot>
    <NButton
      size="small"
      @click="refresh"
    >
      <template #icon>
        <IconFont
          icon="icon-shuaxin-01"
          :class="{ 'animate-spin': loading }"
        />
      </template>
      刷新
    </NButton>
    <TableColumnSetting v-model:columns="columns" />
    <slot name="suffix"></slot>
  </NSpace>
</template>

<style scoped></style>
