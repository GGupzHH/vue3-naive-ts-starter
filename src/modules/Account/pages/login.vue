<template>
  <div
    class="wrap-login w-100% h-100%"
  >
    <div class="wrap-login__content w-438px h-424px bg-white border-rd-12px absolute top-50% right-100px py-60px px-34px">
      <h1 class="text-center">系统管理模板</h1>
      <div class="wrap-title flex flex-items-center m-t-12px">
        <LoginTitleSvg />
        <span class="color-#303133 text-18px pl-12px">欢迎登录</span>
      </div>
      <n-form
        ref="formRef"
        class="m-t-24px"
        label-placement="left"
        label-width="auto"
        :model="userAccount"
        :rules="userAccountRules"
        @submit.self="onSubmit"
      >
        <n-form-item
          path="userName"
        >
          <n-input
            v-model:value="userAccount.userName"
            :autofocus="true"
            placeholder="请输入用户名"
          />
        </n-form-item>
        <n-form-item
          path="password"
        >
          <n-input
            v-model:value="userAccount.password"
            type="password"
            show-password-on="mousedown"
            placeholder="请输入密码"
            @keydown.enter="onSubmit"
          />
        </n-form-item>
        <div class="m-b-12px">
          <n-checkbox v-model:checked="rememberPwd">
            记住我
          </n-checkbox>
        </div>
        <n-form-item>
          <n-button
            type="primary"
            class="w-full"
            @click="onSubmit"
            @keydown.enter="onSubmit"
          >
            登录
          </n-button>
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>

<script lang="ts">
import LoginTitleSvg from '@/assets/svg/login_title.svg'
import { FormInst, FormRules } from 'naive-ui'
import { useAccount } from 'modules/Account/store'

import Cookie from 'js-cookie'
export default defineComponent({
  name: 'Login'
})
</script>

<script setup lang="ts">
const proxy = getCurrentInstance()?.proxy
const useAccountStore = useAccount()

const formRef = ref<FormInst | null>(null)
const message = useMessage()
const router = useRouter()
const userAccount = reactive({
  userName: '',
  password: ''
})
const userAccountRules: FormRules = reactive({
  userName: [
    {
      required: true,
      message: '请输入用户名',
      trigger: ['input', 'blur']
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: ['input', 'blur']
    }
  ]
})

const rememberPwd = ref(false)

const onSubmit = (e: MouseEvent) => {
  e.preventDefault()
  formRef.value?.validate(async(errors) => {
    if (errors) {
      message.error('校验通过了')
    } else {
      const formData = new FormData()
      formData.append('username', userAccount.userName)
      formData.append('password', userAccount.password)
      const res = await useAccountStore.login(formData)
      if (res.code === 200) {
        Cookie.set('access_token', res.data.access_token)
        Cookie.set('userName', res.data.userName)
        Cookie.set('refresh_token', res.data.refresh_token)
        message.success('登录成功')

        router.push({
          path: '/'
        })
      }
    }
  })
}
</script>

<style scoped lang="scss">
.wrap-login {
  background-image: url('/src/assets/svg/login_bg.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  .wrap-login__content {
    transform: translateY(-50%);
    :deep() {
      .el-form {
        .el-form-item__label {
          color: #303133;
          font-size: 14px;
          margin-bottom: 6px;
        }
      }
    }
  }
}
</style>
