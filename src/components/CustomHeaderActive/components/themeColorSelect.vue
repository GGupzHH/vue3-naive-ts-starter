<template>
  <n-divider>
    系统主题
  </n-divider>
  <n-space
    :vertical="true"
    class="pt-12px"
  >
    <n-color-picker
      :value="useThemeStore.themeColor"
      :show-alpha="false"
      @update-value="useThemeStore.setThemeColor"
    />
    <!--    <n-button :block="true" :type="otherColorBtnType" @click="openModal">-->
    <!--      {{ $t('layout.settingDrawer.systemTheme.moreColors') }}-->
    <!--    </n-button>-->
  </n-space>
</template>

<script lang="ts">
import { useTheme } from 'modules/Settings/store'

export default defineComponent({
  name: 'ThemeColorSelect'
})

</script>
<script lang="ts" setup>
const useThemeStore = useTheme()

</script>

<style scoped lang="scss">

</style>

