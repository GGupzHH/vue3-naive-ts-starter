<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IconFont'
})

interface IconProps {
  icon: string | null
  shadow?: boolean
  verticalCenter?: boolean
  cursor?: boolean
  disabled?: boolean
}
</script>

<script setup lang='ts'>
import { defineProps, defineEmits, toRefs, computed } from 'vue'

// 直接在 withDefaults 中内联默认值
const props = withDefaults(defineProps<IconProps>(), {
  icon: null,
  shadow: false,
  verticalCenter: false,
  cursor: false,
  disabled: false
})

const emit = defineEmits(['click'])

const getClassName = computed(() => {
  const className: string[] = []
  if (props.verticalCenter) {
    className.push('middle')
  }
  if (props.cursor) {
    className.push('cursor')
  }
  if (props.disabled) {
    className.push('disabled')
  }
  return className
})

const handleClick = (): void => {
  if (!props.disabled) {
    emit('click')
  }
}

const getAttrs = () => {
  const attrs: { filter?: string; } = {}
  if (props.shadow) {
    attrs.filter = 'url(#drop-shadow)'
  }
  return attrs
}
</script>

<template>
  <svg
    class="icon-font"
    aria-hidden="true"
    :class="getClassName"
    @click="handleClick"
  >
    <filter
      id="drop-shadow"
      xmlns="http://www.w3.org/2000/svg"
    >
      <feGaussianBlur
        in="SourceAlpha"
        stdDeviation="2"
      />
      <feOffset
        dx="1"
        dy="1"
        result="offsetblur"
      />
      <feComponentTransfer>
        <feFuncA
          type="linear"
          slope="0.2"
        />
      </feComponentTransfer>
      <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <g v-bind="getAttrs()">
      <use :xlink:href="'#' + icon" />
    </g>
  </svg>
</template>

<style lang="scss" scoped>
.icon-font {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color: rgb(var(--primary-color));
  &.middle {
    vertical-align: middle;
  }
  &.cursor {
    cursor: pointer;
  }
  &.disabled {
    color: #c0c4cc;
    cursor: not-allowed;
  }
}
</style>
