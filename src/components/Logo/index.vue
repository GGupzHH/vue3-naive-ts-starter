<script lang="ts">
export default defineComponent({
  name: 'Logo'
})

interface LogoProps {
  collapsed: boolean
}
</script>

<script setup lang="ts">
const proxy = getCurrentInstance()?.proxy
const props = defineProps<LogoProps>()
</script>

<template>
  <div class="w-100% h-50px flex justify-center items-center transition-all-700 text-16px text-primary font-bold transition duration-300 ease-in-out whitespace-pre">
    {{ props.collapsed ? 'FDC' : '缺陷分类监控系统' }}
  </div>
</template>
