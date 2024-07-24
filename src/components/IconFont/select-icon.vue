<script lang="ts">
import { defineComponent, h, VNodeChild } from 'vue'
import { NSpace, NSelect, NIcon } from 'naive-ui'
import iconJson from '@/assets/fonts/iconfont.json'
import IconFont from '@/components/IconFont/index.vue'

export default defineComponent({
  name: 'SelectIcons'
})
</script>
<script setup lang="ts">

interface Emits {
  (e: 'add'): void
  (e: 'delete'): void
  (e: 'refresh'): void
}

const emit = defineEmits<Emits>()

const selected = defineModel<string>('selected', {
  default: false
})

const iconsOptions = ref(iconJson.glyphs.map(item => {
  return {
    ...item,
    font_class: `icon-${ item.font_class }`
  }
}))

const renderLabel = (option): VNodeChild => {
  return [
    h(IconFont, {
      class: 'text-22px m-r-6px',
      icon: option.font_class
    }),
    option.font_class as string
  ]
}

</script>

<template>
  <NSpace
    vertical
  >
    <NSelect
      v-model:value="selected"
      :options="iconsOptions"
      value-field="font_class"
      filterable
      :render-label="renderLabel"
    />
  </NSpace>
</template>

<style scoped>
.icon-option {
  display: flex;
  align-items: center;
  width: 33.33%;
  box-sizing: border-box;
  padding: 4px;
}
</style>
