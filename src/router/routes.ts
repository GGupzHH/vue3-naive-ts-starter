/* global
*/
import { Comment, defineAsyncComponent } from 'vue'
const Layout = () => import('comps/Layout/index.vue')
const CustomLayout = () => import('comps/Layout/customLayout.vue')
import { RouteRecordRaw } from 'vue-router'

/**
 * 为渲染菜单添加的测试路由
 * 若含有 children 路由，则需要将 redirect 设置为 children[0] 的 path 路径
 */

// 系统管理
const systemManagement = [
  {
    path: 'system',
    component: CustomLayout,
    children: [
      {
        path: 'job-log',
        name: 'SystemManagementJobLog',
        meta: {
          title: 'Quartz日志'
        },
        component: () => import('@/modules/SystemManagement/pages/job-log.vue')
      },
      {
        path: 'task-management',
        name: 'SystemManagementTaskManagement',
        meta: {
          title: '定时任务'
        },
        component: () => import('@/modules/SystemManagement/pages/task-management.vue')
      },
      {
        path: 'organizational',
        name: 'SystemManagementOrganizational',
        meta: {
          title: '组织机构管理'
        },
        component: () => import('@/modules/SystemManagement/pages/organizational.vue')
      },
      {
        path: 'log',
        name: 'SystemManagementLog',
        meta: {
          title: '日志管理'
        },
        component: () => import('@/modules/SystemManagement/pages/log.vue')
      },
      {
        path: 'user',
        name: 'SystemManagementUser',
        meta: {
          title: '用户管理'
        },
        component: () => import('@/modules/SystemManagement/pages/user.vue')
      },
      {
        path: 'role',
        name: 'SystemManagementRole',
        meta: {
          title: '角色管理'
        },
        component: () => import('@/modules/SystemManagement/pages/role.vue')
      },
      {
        path: 'menu',
        name: 'SystemManagementMenu',
        meta: {
          title: '菜单管理'
        },
        component: () => import('@/modules/SystemManagement/pages/menu.vue')
      },
      {
        path: 'dictionary',
        name: 'SystemManagementDictionary',
        meta: {
          title: '字典管理'
        },
        component: () => import('@/modules/SystemManagement/pages/dictionary.vue')
      }
    ]
  }
]

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'login',
        name: 'Login',
        meta: {
          title: '登录'
        },
        component: () => import('@/modules/Account/pages/login.vue')
      },
      {
        path: 'home',
        name: 'Home',
        meta: {
          title: 'Home'
        },
        component: CustomLayout,
        children: [
          {
            path: '',
            name: 'HomePage',
            meta: {
              title: '登录'
            },
            component: () => import('@/modules/Home/page/home.vue')
          }
        ]
      },
      ...systemManagement
    ]
  },
  {
    path: '/403',
    name: '403',
    component: defineAsyncComponent(() => import('@/components/ExceptionHandling/403.vue'))
  },
  {
    path: '/500',
    name: '500',
    component: defineAsyncComponent(() => import('@/components/ExceptionHandling/500.vue'))
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: defineAsyncComponent(() => import('@/components/ExceptionHandling/404.vue'))
  }
]

export default routes
