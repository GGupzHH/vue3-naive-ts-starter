<template>
  <div class="wrap-monitor h-full flex-col">
    <n-form
      ref="formRef"
      :model="formValue"
      inline
      :rules="rules"
      label-placement="left"
      size="small"
    >
      <n-form-item
        label="系列"
        path="series"
      >
        <n-select
          v-model:value="formValue.series"
          class="w-120px"
          :options="seriesOptions"
        />
      </n-form-item>
      <n-form-item
        label="属性"
        path="series"
      >
        <n-select
          v-model:value="formValue.attribute"
          class="w-120px"
          :options="attributeOptions"
        />
      </n-form-item>
      <n-form-item
        label="上限"
        path="upperLimit"
      >
        <n-input
          v-model:value="formValue.upperLimit"
          placeholder="输入上限"
        />
      </n-form-item>
      <n-form-item
        label="下限"
        path="upperLimit"
      >
        <n-input
          v-model:value="formValue.lowerLimit"
          placeholder="输入下限"
        />
      </n-form-item>
      <n-form-item>
        <n-button
          attr-type="button"
          @click="handleValidateClick"
        >
          设置保存
        </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script lang="ts">
import { FormInst, useMessage } from 'naive-ui'

export default defineComponent({
  name: 'MonitorSetting'
})
</script>

<script setup lang="ts">
import { useMonitor } from 'modules/Monitor/store'

const proxy = getCurrentInstance()?.proxy
const message = useMessage()
const useMonitorStore = useMonitor()
const formRef = ref<FormInst | null>(null)
const formValue = ref({
  series: 'M',
  attribute: '炉压',
  lowerLimit: '',
  upperLimit: ''
})
const seriesOptions = ref([
  {
    label: 'M',
    value: 'M'
  }
])
const attributeOptions = ['炉压'].map(
  (v) => ({
    label: v,
    value: v
  })
)
const rules = {
  series: {
    required: true,
    message: '请输入系列',
    trigger: 'blur'
  },
  lowerLimit: {
    required: true,
    message: '请输入下限',
    trigger: 'blur'
  },
  upperLimit: {
    required: true,
    message: '请输入上限',
    trigger: ['blur']
  }
}

const handleValidateClick = (e: MouseEvent) => {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      const formData = new FormData()
      formData.append('series', formValue.value.series)
      formData.append('upperLimit', formValue.value.upperLimit)
      formData.append('lowerLimit', formValue.value.lowerLimit)
      useMonitorStore.settingThreshold(formData)
      message.success('配置成功')
    } else {
      console.log(errors)
      // message.error('Invalid')
    }
  })
}
</script>

<style scoped lang="scss">
</style>
