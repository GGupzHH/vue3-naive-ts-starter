<script lang="ts" setup>
import { computed } from 'vue'
import SvgIcon from '../svg-icon/index.vue'
defineOptions({ name: 'ExceptionBase' })

type ExceptionType = '403' | '404' | '500'
type ExceptionComponentsType = 'NoPermission' | 'NotFound' | 'ServiceError'

interface Props {
  /**
   * Exception type
   *
   * - 403: no permission
   * - 404: not found
   * - 500: service error
   */
  type: ExceptionType
}

const props = defineProps<Props>()

const iconMap: Record<ExceptionType, ExceptionComponentsType> = {
  '403': 'NoPermission',
  '404': 'NotFound',
  '500': 'ServiceError'
}

const icon = computed(() => iconMap[props.type])
</script>

<template>
  <div class="flex flex-col flex-items-center justify-center gap-24px min-h-520px wh-full overflow-hidden">
    <div class="w-full flex flex-items-center justify-center text-400px text-primary">
      <SvgIcon :local-icon="icon" />
    </div>
    <RouterLink to="/">
      <NButton type="primary">回到首页</NButton>
    </RouterLink>
  </div>
</template>

<style scoped></style>
