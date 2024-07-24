import router from './index'
import NProgress from 'nprogress'
import Cookie from 'js-cookie'
import 'nprogress/nprogress.css'
import { useAccount } from 'modules/Account/store'
import { useSystemManagement } from 'modules/SystemManagement/store'

NProgress.configure({
  showSpinner: false
})

const allowlist = [
  'Login',
  '403',
  '404',
  '500'
]

router.beforeEach(async(to, from, next) => {
  NProgress.start()
  const token = Cookie.get('access_token')
  const useAccountStore = useAccount()
  const systemManagement = useSystemManagement()
  if (
    allowlist.find(
      name => to.name === name
    )
  ) {
    next()
    return
  }

  if (token) {
    const res = await useAccountStore.getUserInfo()
    if (res.code === 200) {
      useAccountStore.userInfo = res.data

      const menuRes = await useAccountStore.getMenuListApi()

      await systemManagement.getSystemDictionaryAllMap()

      if (menuRes.code !== 200) {
        next('/login')
      }

      if (to.path === '/' && menuRes.data.length) {
        if (menuRes.data[0].children?.length) {
          const path = menuRes.data[0].children[0].path
          next(path)
          return
        } else {
          const path = menuRes.data[0].path
          next(path)
          return
        }
      }

      next()
    } else {
      Cookie.set('access_token', '')
      Cookie.set('userName', '')
      Cookie.set('refresh_token', '')
      useAccountStore.userInfo = null
      next('/login')
    }
  } else {
    next('/login')
  }

})

router.afterEach((to) => {
  NProgress.done()
  // eslint-disable-next-line no-undef
  // if (_hmt) {
  //   if (to.path) {
  //     // eslint-disable-next-line no-undef
  //     _hmt.push(['_trackPageview', to.fullPath])
  //   }
  // }
})
