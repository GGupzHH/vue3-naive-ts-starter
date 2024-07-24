<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { Icon } from '@iconify/vue'
import NoPermission from '@/assets/svg/no-permission.svg'
import NotFound from '@/assets/svg/not-found.svg'
import ServiceError from '@/assets/svg/service-error.svg'
defineOptions({ name: 'SvgIcon' })

/**
 * Props
 *
 * - Support iconify and local svg icon
 * - If icon and localIcon are passed at the same time, localIcon will be rendered first
 */
interface Props {
  /** Iconify icon name */
  icon?: string
  /** Local svg icon name */
  localIcon: 'NoPermission' | 'NotFound' | 'ServiceError'
}

const props = defineProps<Props>()

const attrs = useAttrs()

const bindAttrs = computed<{ class: string; style: string; }>(() => ({
  class: (attrs.class as string) || '',
  style: (attrs.style as string) || ''
}))

const iconComponents = computed(() => {
  const iconName = props.localIcon
  const iconComponentsMap: Record<string, any> = {
    'NoPermission': NoPermission,
    'NotFound': NotFound,
    'ServiceError': ServiceError
  }
  return iconComponentsMap[iconName]
})

/** If localIcon is passed, render localIcon first */
const renderLocalIcon = computed(() => props.localIcon || !props.icon)
</script>

<template>
  <template v-if="renderLocalIcon">
    <div class="w-500px h-500px">
      <Component :is="iconComponents" />
    </div>
  </template>
  <template v-else>
    <Icon
      v-if="icon"
      :icon="icon"
      v-bind="bindAttrs"
    />
  </template>
</template>

<style scoped></style>
