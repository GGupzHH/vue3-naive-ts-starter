// mock/user.ts
import { MockMethod } from 'vite-plugin-mock'

const sysMocks: MockMethod[] = [
  {
    url: '/api/admin/menu/systemMenu',
    method: 'get',
    response: ({ query }) => {
      return {
        'code': 200,
        'message': null,
        'data': [
          {
            'id': 10953,
            'parentId': -1,
            'weight': 0,
            'name': '首页',
            'path': '/home',
            'keepAlive': '0',
            'icon': 'icon-hukou',
            'permission': '',
            'label': '首页',
            'sort': 0,
            'type': '0'
          },
          {
            'id': 10936,
            'parentId': -1,
            'weight': 1,
            'name': '过程参数监控',
            'path': '/process-monitoring',
            'keepAlive': '0',
            'icon': 'icon-hecha',
            'permission': '',
            'label': '过程参数监控',
            'sort': 1,
            'type': '0',
            'children': [
              {
                'id': 10938,
                'parentId': 10936,
                'weight': 0,
                'name': '阈值配置',
                'path': '/process-monitoring/setting',
                'keepAlive': '0',
                'icon': 'xxx',
                'permission': '',
                'label': '阈值配置',
                'sort': 0,
                'type': '0'
              },
              {
                'id': 10939,
                'parentId': 10936,
                'weight': 0,
                'name': '告警列表',
                'path': '/process-monitoring/alarm',
                'keepAlive': '0',
                'icon': '',
                'permission': '',
                'label': '告警列表',
                'sort': 0,
                'type': '0'
              }
            ]
          },
          {
            'id': 10937,
            'parentId': -1,
            'weight': 2,
            'name': '工艺SOP文件监控',
            'path': '/sop-monitoring',
            'keepAlive': '0',
            'icon': 'icon-huizong',
            'permission': '',
            'label': '工艺SOP文件监控',
            'sort': 2,
            'type': '0',
            'children': [
              {
                'id': 10940,
                'parentId': 10937,
                'weight': 0,
                'name': 'SOP参数异常监控',
                'path': '/sop-monitoring/parameter',
                'keepAlive': '0',
                'icon': '',
                'permission': '',
                'label': 'SOP参数异常监控',
                'sort': 0,
                'type': '0'
              }
            ]
          },
          {
            'id': 10944,
            'parentId': -1,
            'weight': 3,
            'name': '原料审批',
            'path': '/material-approval',
            'keepAlive': '0',
            'icon': 'icon-daifahuo',
            'permission': '',
            'label': '原料审批',
            'sort': 3,
            'type': '0',
            'children': [
              {
                'id': 10945,
                'parentId': 10944,
                'weight': 0,
                'name': '审批方案版本列表',
                'path': '/material-approval/approval',
                'keepAlive': '0',
                'icon': '',
                'permission': '',
                'label': '审批方案版本列表',
                'sort': 0,
                'type': '0'
              },
              {
                'id': 10946,
                'parentId': 10944,
                'weight': 1,
                'name': '新建方案',
                'path': '/material-approval/formula',
                'keepAlive': '0',
                'icon': '',
                'permission': '',
                'label': '新建方案',
                'sort': 1,
                'type': '0'
              }
            ]
          },
          {
            'id': 10947,
            'parentId': -1,
            'weight': 4,
            'name': 'SOP比对',
            'path': '/sopcomparison',
            'keepAlive': '0',
            'icon': 'icon-icon_find_friend',
            'permission': '',
            'label': 'SOP比对',
            'sort': 4,
            'type': '0',
            'children': [
              {
                'id': 10948,
                'parentId': 10947,
                'weight': 0,
                'name': 'SOP列表',
                'path': '/sopcomparison/soplist',
                'keepAlive': '0',
                'icon': '',
                'permission': '',
                'label': 'SOP列表',
                'sort': 0,
                'type': '0'
              }
            ]
          },
          {
            'id': 1000,
            'parentId': -1,
            'weight': 9998,
            'name': '系统管理',
            'path': '/system',
            'keepAlive': '0',
            'icon': 'icon-icon_setting_1',
            'permission': null,
            'label': '系统管理',
            'sort': 9998,
            'type': '0',
            'children': [
              {
                'id': 10643,
                'parentId': 1000,
                'weight': 1,
                'name': 'Quartz日志',
                'path': '/system/job-log',
                'keepAlive': '0',
                'icon': 'icon-zijinrizhi',
                'permission': null,
                'label': 'Quartz日志',
                'sort': 1,
                'type': '0'
              },
              {
                'id': 1400,
                'parentId': 1000,
                'weight': 1,
                'name': '组织机构管理',
                'path': '/system/organizational',
                'keepAlive': '0',
                'icon': 'icon-fenxiang2',
                'permission': null,
                'label': '组织机构管理',
                'sort': 1,
                'type': '0'
              },
              {
                'id': 10779,
                'parentId': 1000,
                'weight': 1,
                'name': '定时任务',
                'path': '/system/task-management',
                'keepAlive': '1',
                'icon': 'icon-erji-dingshirenwu',
                'permission': null,
                'label': '定时任务',
                'sort': 1,
                'type': '0'
              },
              {
                'id': 10494,
                'parentId': 1000,
                'weight': 1,
                'name': '日志管理',
                'path': '/system/log',
                'keepAlive': '0',
                'icon': 'icon-wj-rz',
                'permission': null,
                'label': '日志管理',
                'sort': 1,
                'type': '0'
              },
              {
                'id': 10446,
                'parentId': 1000,
                'weight': 2,
                'name': '用户管理',
                'path': '/system/user',
                'keepAlive': '0',
                'icon': 'icon-wode11',
                'permission': null,
                'label': '用户管理',
                'sort': 2,
                'type': '0'
              },
              {
                'id': 1300,
                'parentId': 1000,
                'weight': 3,
                'name': '角色管理',
                'path': '/system/role',
                'keepAlive': '0',
                'icon': 'icon-zuzhi',
                'permission': null,
                'label': '角色管理',
                'sort': 3,
                'type': '0'
              },
              {
                'id': 1200,
                'parentId': 1000,
                'weight': 4,
                'name': '菜单管理',
                'path': '/system/menu',
                'keepAlive': '0',
                'icon': 'icon-icon_setting_2',
                'permission': null,
                'label': '菜单管理',
                'sort': 4,
                'type': '0'
              },
              {
                'id': 2200,
                'parentId': 1000,
                'weight': 6,
                'name': '字典管理',
                'path': '/system/dictionary',
                'keepAlive': '0',
                'icon': 'icon-zhidao',
                'permission': null,
                'label': '字典管理',
                'sort': 6,
                'type': '0'
              }
            ]
          }
        ]
      }
    }
  },
  {
    url: '/api/admin/user/info',
    method: 'get',
    response: () => {
      return {}
    }
  },
  {
    url: '/api/admin/dict/all',
    method: 'get',
    response: () => {
      return {}
    }
  },
  {
    url: '/api/updateUser',
    method: 'post',
    response: ({ body }) => {
      return {
        code: 0,
        data: body
      }
    }
  }
]

export default sysMocks
