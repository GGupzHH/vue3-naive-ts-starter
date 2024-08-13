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
  // --------------------------------------------------   dict
  {
    url: '/api/admin/dict/all',
    method: 'get',
    response: () => {
      return {}
    }
  },
  {
    url: '/api/admin/dict/item/page',
    method: 'get',
    response: () => {
      return {
        'code': 200,
        'message': null,
        'data': {
          'records': [
            {
              'id': 624,
              'dictId': 124,
              'value': '0',
              'label': '公司',
              'type': 'org_type',
              'description': '',
              'sort': 0,
              'createTime': '2024-07-04 17:01:12',
              'updateTime': '2024-07-04 17:01:12',
              'remarks': 'primary',
              'delFlag': '0',
              'tenantId': 0
            },
            {
              'id': 625,
              'dictId': 124,
              'value': '1',
              'label': '工厂',
              'type': 'org_type',
              'description': '',
              'sort': 0,
              'createTime': '2024-07-04 17:01:21',
              'updateTime': '2024-07-04 17:01:21',
              'remarks': 'success',
              'delFlag': '0',
              'tenantId': 0
            },
            {
              'id': 626,
              'dictId': 124,
              'value': '2',
              'label': '供应商',
              'type': 'org_type',
              'description': '',
              'sort': 0,
              'createTime': '2024-07-04 17:01:32',
              'updateTime': '2024-07-04 17:01:32',
              'remarks': 'default',
              'delFlag': '0',
              'tenantId': 0
            },
            {
              'id': 627,
              'dictId': 124,
              'value': '3',
              'label': '部门',
              'type': 'org_type',
              'description': '',
              'sort': 0,
              'createTime': '2024-07-04 17:01:44',
              'updateTime': '2024-07-04 17:01:44',
              'remarks': 'warning',
              'delFlag': '0',
              'tenantId': 0
            }
          ],
          'total': 4,
          'size': 10,
          'current': 1,
          'orders': [],
          'optimizeCountSql': true,
          'searchCount': true,
          'countId': null,
          'maxLimit': null,
          'pages': 1
        }
      }
    }
  },
  {
    url: '/api/admin/dict/:id',
    method: 'delete',
    response: () => {
      return {
        'code': 200,
        'message': null,
        'data': null
      }
    }
  },
  // --------------------------------------------------    menu
  {
    url: '/api/admin/menu/tree',
    method: 'get',
    response: ({ body }) => {
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
                'id': 10950,
                'parentId': 1000,
                'weight': 0,
                'name': '菜单授权',
                'path': '',
                'keepAlive': '0',
                'icon': '',
                'permission': 'sys:menu:perm',
                'label': '菜单授权',
                'sort': 0,
                'type': '1'
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
                'type': '0',
                'children': [
                  {
                    'id': 10780,
                    'parentId': 10779,
                    'weight': 1,
                    'name': '查看',
                    'path': null,
                    'keepAlive': '0',
                    'icon': null,
                    'permission': null,
                    'label': '查看',
                    'sort': 1,
                    'type': '1'
                  },
                  {
                    'id': 10781,
                    'parentId': 10779,
                    'weight': 1,
                    'name': '启动任务',
                    'path': null,
                    'keepAlive': '0',
                    'icon': null,
                    'permission': 'Pro_startModuleTask',
                    'label': '启动任务',
                    'sort': 1,
                    'type': '1'
                  },
                  {
                    'id': 10782,
                    'parentId': 10779,
                    'weight': 1,
                    'name': '停止任务',
                    'path': null,
                    'keepAlive': '0',
                    'icon': null,
                    'permission': 'Pro_stopModuleTask',
                    'label': '停止任务',
                    'sort': 1,
                    'type': '1'
                  }
                ]
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
                'type': '0',
                'children': [
                  {
                    'id': 1401,
                    'parentId': 1400,
                    'weight': null,
                    'name': '组织机构新增',
                    'path': null,
                    'keepAlive': '0',
                    'icon': null,
                    'permission': 'sys:org:add',
                    'label': '组织机构新增',
                    'sort': null,
                    'type': '1'
                  },
                  {
                    'id': 1402,
                    'parentId': 1400,
                    'weight': null,
                    'name': '组织机构修改',
                    'path': null,
                    'keepAlive': '0',
                    'icon': null,
                    'permission': 'sys:org:edit',
                    'label': '组织机构修改',
                    'sort': null,
                    'type': '1'
                  },
                  {
                    'id': 1403,
                    'parentId': 1400,
                    'weight': null,
                    'name': '组织机构删除',
                    'path': null,
                    'keepAlive': '0',
                    'icon': null,
                    'permission': 'sys:org:del',
                    'label': '组织机构删除',
                    'sort': null,
                    'type': '1'
                  },
                  {
                    'id': 10458,
                    'parentId': 1400,
                    'weight': 1,
                    'name': '设置领导',
                    'path': null,
                    'keepAlive': '0',
                    'icon': null,
                    'permission': 'sys:org:set',
                    'label': '设置领导',
                    'sort': 1,
                    'type': '1'
                  }
                ]
              },
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
                'type': '0',
                'children': [
                  {
                    'id': 10453,
                    'parentId': 10446,
                    'weight': 1,
                    'name': '用户新增',
                    'path': null,
                    'keepAlive': '0',
                    'icon': null,
                    'permission': 'sys:user:add',
                    'label': '用户新增',
                    'sort': 1,
                    'type': '1'
                  },
                  {
                    'id': 10454,
                    'parentId': 10446,
                    'weight': 1,
                    'name': '用户修改',
                    'path': null,
                    'keepAlive': '0',
                    'icon': null,
                    'permission': 'sys:user:edit',
                    'label': '用户修改',
                    'sort': 1,
                    'type': '1'
                  },
                  {
                    'id': 10455,
                    'parentId': 10446,
                    'weight': 1,
                    'name': '用户删除',
                    'path': null,
                    'keepAlive': '0',
                    'icon': null,
                    'permission': 'sys:user:del',
                    'label': '用户删除',
                    'sort': 1,
                    'type': '1'
                  }
                ]
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
                'type': '0',
                'children': [
                  {
                    'id': 1301,
                    'parentId': 1300,
                    'weight': null,
                    'name': '角色新增',
                    'path': null,
                    'keepAlive': '0',
                    'icon': null,
                    'permission': 'sys:role:add',
                    'label': '角色新增',
                    'sort': null,
                    'type': '1'
                  },
                  {
                    'id': 1302,
                    'parentId': 1300,
                    'weight': null,
                    'name': '角色修改',
                    'path': null,
                    'keepAlive': '0',
                    'icon': null,
                    'permission': 'sys:role:edit',
                    'label': '角色修改',
                    'sort': null,
                    'type': '1'
                  },
                  {
                    'id': 1303,
                    'parentId': 1300,
                    'weight': null,
                    'name': '角色删除',
                    'path': null,
                    'keepAlive': '0',
                    'icon': null,
                    'permission': 'sys:role:del',
                    'label': '角色删除',
                    'sort': null,
                    'type': '1'
                  }
                ]
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
                'type': '0',
                'children': [
                  {
                    'id': 1201,
                    'parentId': 1200,
                    'weight': null,
                    'name': '菜单新增',
                    'path': null,
                    'keepAlive': '0',
                    'icon': null,
                    'permission': 'sys:menu:add',
                    'label': '菜单新增',
                    'sort': null,
                    'type': '1'
                  },
                  {
                    'id': 1202,
                    'parentId': 1200,
                    'weight': null,
                    'name': '菜单修改',
                    'path': null,
                    'keepAlive': '0',
                    'icon': null,
                    'permission': 'sys:menu:edit',
                    'label': '菜单修改',
                    'sort': null,
                    'type': '1'
                  },
                  {
                    'id': 1203,
                    'parentId': 1200,
                    'weight': null,
                    'name': '菜单删除',
                    'path': null,
                    'keepAlive': '0',
                    'icon': null,
                    'permission': 'sys:menu:del',
                    'label': '菜单删除',
                    'sort': null,
                    'type': '1'
                  }
                ]
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
                'type': '0',
                'children': [
                  {
                    'id': 2201,
                    'parentId': 2200,
                    'weight': null,
                    'name': '字典删除',
                    'path': null,
                    'keepAlive': '0',
                    'icon': null,
                    'permission': 'sys:dict:del',
                    'label': '字典删除',
                    'sort': null,
                    'type': '1'
                  },
                  {
                    'id': 2202,
                    'parentId': 2200,
                    'weight': null,
                    'name': '字典新增',
                    'path': null,
                    'keepAlive': '0',
                    'icon': null,
                    'permission': 'sys:dict:add',
                    'label': '字典新增',
                    'sort': null,
                    'type': '1'
                  },
                  {
                    'id': 2203,
                    'parentId': 2200,
                    'weight': null,
                    'name': '字典修改',
                    'path': null,
                    'keepAlive': '0',
                    'icon': null,
                    'permission': 'sys:dict:edit',
                    'label': '字典修改',
                    'sort': null,
                    'type': '1'
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  },
  {
    url: '/api/admin/menu/:id',
    method: 'delete',
    response: () => {
      return {
        'code': 200,
        'message': null,
        'data': null
      }
    }
  },

  // --------------------------------------------------   role
  {
    url: '/api/admin/role/pageList',
    method: 'get',
    response: ({ body }) => {
      return {
        'code': 200,
        'message': null,
        'data': {
          'records': [
            {
              'roleId': 1,
              'roleName': '管理员',
              'roleCode': 'ROLE_admin',
              'roleDesc': '管理员',
              'dsType': 0,
              'dsScope': '2',
              'systemRole': null,
              'disableRole': '0',
              'createTime': '2017-10-30 03:45:51',
              'updateTime': '2022-06-09 06:59:23',
              'delFlag': '0'
            },
            {
              'roleId': 100,
              'roleName': 'pdaA',
              'roleCode': 'ROLE_pda_a',
              'roleDesc': '',
              'dsType': 0,
              'dsScope': null,
              'systemRole': null,
              'disableRole': '0',
              'createTime': '2023-10-11 10:04:27',
              'updateTime': null,
              'delFlag': '0'
            },
            {
              'roleId': 101,
              'roleName': 'pdaB',
              'roleCode': 'ROLE_pda_b',
              'roleDesc': '',
              'dsType': 0,
              'dsScope': null,
              'systemRole': null,
              'disableRole': '0',
              'createTime': '2023-10-11 10:05:00',
              'updateTime': null,
              'delFlag': '0'
            },
            {
              'roleId': 104,
              'roleName': 'test',
              'roleCode': 'tddd_dee',
              'roleDesc': '参数',
              'dsType': 1,
              'dsScope': null,
              'systemRole': null,
              'disableRole': '0',
              'createTime': '2024-05-28 17:29:19',
              'updateTime': '2024-05-28 17:29:28',
              'delFlag': '0'
            },
            {
              'roleId': 114,
              'roleName': 'SOP',
              'roleCode': 'sop:system:search',
              'roleDesc': 'SOP监控页面查看',
              'dsType': 2,
              'dsScope': null,
              'systemRole': null,
              'disableRole': '0',
              'createTime': '2024-06-17 09:23:33',
              'updateTime': null,
              'delFlag': '0'
            },
            {
              'roleId': 115,
              'roleName': 'test',
              'roleCode': '11111',
              'roleDesc': '1111111',
              'dsType': 0,
              'dsScope': null,
              'systemRole': null,
              'disableRole': '0',
              'createTime': '2024-07-10 15:56:12',
              'updateTime': null,
              'delFlag': '0'
            }
          ],
          'total': 6,
          'size': 10,
          'current': 1,
          'orders': [],
          'optimizeCountSql': true,
          'searchCount': true,
          'countId': null,
          'maxLimit': null,
          'pages': 1
        }
      }
    }
  },
  {
    url: '/api/admin/role/:id',
    method: 'delete',
    response: () => {
      return {
        'code': 200,
        'message': null,
        'data': null
      }
    }
  },
  // ------------------------------------------------   user
  {
    url: '/api/admin/user/page',
    method: 'get',
    response: ({ body }) => {
      return {
        'code': 200,
        'message': null,
        'data': {
          'records': [
            {
              'userId': 566,
              'username': 'zzz',
              'workno': '',
              'displayname': 'zzz',
              'classno': null,
              'password': '$2a$10$M/C/4JrWjcuNUmX/QYndEekF028DgzpPiUPaTbhJdRgYpknlIiURq',
              'salt': null,
              'wxOpenid': null,
              'qqOpenid': null,
              'createTime': '2023-10-12 10:35:48',
              'updateTime': '2023-10-12 10:35:54',
              'delFlag': '0',
              'lockFlag': '0',
              'phone': null,
              'avatar': null,
              'mail': '',
              'deptId': 14,
              'tenantId': 0,
              'departName': 'xxxx有限公司',
              'roleList': [
                {
                  'roleId': 1,
                  'roleName': '管理员',
                  'roleCode': 'ROLE_admin',
                  'roleDesc': '管理员',
                  'dsType': 0,
                  'dsScope': '2',
                  'systemRole': null,
                  'disableRole': '0',
                  'createTime': '2017-10-30 03:45:51',
                  'updateTime': '2022-06-09 06:59:23',
                  'delFlag': '0'
                },
                {
                  'roleId': 100,
                  'roleName': 'pdaA',
                  'roleCode': 'ROLE_pda_a',
                  'roleDesc': '',
                  'dsType': 0,
                  'dsScope': null,
                  'systemRole': null,
                  'disableRole': '0',
                  'createTime': '2023-10-11 10:04:27',
                  'updateTime': null,
                  'delFlag': '0'
                },
                {
                  'roleId': 101,
                  'roleName': 'pdaB',
                  'roleCode': 'ROLE_pda_b',
                  'roleDesc': '',
                  'dsType': 0,
                  'dsScope': null,
                  'systemRole': null,
                  'disableRole': '0',
                  'createTime': '2023-10-11 10:05:00',
                  'updateTime': null,
                  'delFlag': '0'
                }
              ],
              'systemUser': '',
              'disableUser': '0',
              'miniOpenid': null
            },
            {
              'userId': 567,
              'username': 'zyg',
              'workno': '',
              'displayname': '',
              'classno': null,
              'password': '$2a$10$JuvVUQMmHLpDJFeamBTVUuPsT33jjgQ52guyd6b8Aw.Q6aNx22o8C',
              'salt': null,
              'wxOpenid': null,
              'qqOpenid': null,
              'createTime': '2023-10-12 16:08:27',
              'updateTime': '2023-10-26 18:45:47',
              'delFlag': '0',
              'lockFlag': '0',
              'phone': null,
              'avatar': null,
              'mail': '',
              'deptId': 15,
              'tenantId': 0,
              'departName': '数字化部',
              'roleList': [
                {
                  'roleId': 1,
                  'roleName': '管理员',
                  'roleCode': 'ROLE_admin',
                  'roleDesc': '管理员',
                  'dsType': 0,
                  'dsScope': '2',
                  'systemRole': null,
                  'disableRole': '0',
                  'createTime': '2017-10-30 03:45:51',
                  'updateTime': '2022-06-09 06:59:23',
                  'delFlag': '0'
                },
                {
                  'roleId': 100,
                  'roleName': 'pdaA',
                  'roleCode': 'ROLE_pda_a',
                  'roleDesc': '',
                  'dsType': 0,
                  'dsScope': null,
                  'systemRole': null,
                  'disableRole': '0',
                  'createTime': '2023-10-11 10:04:27',
                  'updateTime': null,
                  'delFlag': '0'
                },
                {
                  'roleId': 101,
                  'roleName': 'pdaB',
                  'roleCode': 'ROLE_pda_b',
                  'roleDesc': '',
                  'dsType': 0,
                  'dsScope': null,
                  'systemRole': null,
                  'disableRole': '0',
                  'createTime': '2023-10-11 10:05:00',
                  'updateTime': null,
                  'delFlag': '0'
                },
                {
                  'roleId': 114,
                  'roleName': 'SOP',
                  'roleCode': 'sop:system:search',
                  'roleDesc': 'SOP监控页面查看',
                  'dsType': 2,
                  'dsScope': null,
                  'systemRole': null,
                  'disableRole': '0',
                  'createTime': '2024-06-17 09:23:33',
                  'updateTime': null,
                  'delFlag': '0'
                }
              ],
              'systemUser': '',
              'disableUser': '0',
              'miniOpenid': null
            },
            {
              'userId': 572,
              'username': '051716',
              'workno': '051716',
              'displayname': '王娟',
              'classno': null,
              'password': '$2a$10$xcPV8tj9DxjA7wV05G16U.SD3.MRlDTcNZTqyJJsOtKHwCjuMdHGS',
              'salt': null,
              'wxOpenid': null,
              'qqOpenid': null,
              'createTime': '2023-11-21 18:22:08',
              'updateTime': '2023-12-07 12:38:55',
              'delFlag': '0',
              'lockFlag': '0',
              'phone': '13722222',
              'avatar': null,
              'mail': null,
              'deptId': 29,
              'tenantId': 0,
              'departName': 'xxx',
              'roleList': [
                {
                  'roleId': 1,
                  'roleName': '管理员',
                  'roleCode': 'ROLE_admin',
                  'roleDesc': '管理员',
                  'dsType': 0,
                  'dsScope': '2',
                  'systemRole': null,
                  'disableRole': '0',
                  'createTime': '2017-10-30 03:45:51',
                  'updateTime': '2022-06-09 06:59:23',
                  'delFlag': '0'
                },
                {
                  'roleId': 100,
                  'roleName': 'pdaA',
                  'roleCode': 'ROLE_pda_a',
                  'roleDesc': '',
                  'dsType': 0,
                  'dsScope': null,
                  'systemRole': null,
                  'disableRole': '0',
                  'createTime': '2023-10-11 10:04:27',
                  'updateTime': null,
                  'delFlag': '0'
                },
                {
                  'roleId': 101,
                  'roleName': 'pdaB',
                  'roleCode': 'ROLE_pda_b',
                  'roleDesc': '',
                  'dsType': 0,
                  'dsScope': null,
                  'systemRole': null,
                  'disableRole': '0',
                  'createTime': '2023-10-11 10:05:00',
                  'updateTime': null,
                  'delFlag': '0'
                }
              ],
              'systemUser': '',
              'disableUser': '0',
              'miniOpenid': null
            },
            {
              'userId': 595,
              'username': '05172686',
              'workno': '05172686',
              'displayname': '王琦',
              'classno': null,
              'password': '$2a$10$RV6nvCfJlH3KPEMOhErgfeczlDWQxmZq.cRdVbgdKDwQpWdgrA.6G',
              'salt': null,
              'wxOpenid': null,
              'qqOpenid': null,
              'createTime': '2023-12-21 00:53:28',
              'updateTime': null,
              'delFlag': '0',
              'lockFlag': '0',
              'phone': '15000000000',
              'avatar': null,
              'mail': '',
              'deptId': 29,
              'tenantId': 0,
              'departName': 'xxx',
              'roleList': [
                {
                  'roleId': 100,
                  'roleName': 'pdaA',
                  'roleCode': 'ROLE_pda_a',
                  'roleDesc': '',
                  'dsType': 0,
                  'dsScope': null,
                  'systemRole': null,
                  'disableRole': '0',
                  'createTime': '2023-10-11 10:04:27',
                  'updateTime': null,
                  'delFlag': '0'
                },
                {
                  'roleId': 101,
                  'roleName': 'pdaB',
                  'roleCode': 'ROLE_pda_b',
                  'roleDesc': '',
                  'dsType': 0,
                  'dsScope': null,
                  'systemRole': null,
                  'disableRole': '0',
                  'createTime': '2023-10-11 10:05:00',
                  'updateTime': null,
                  'delFlag': '0'
                }
              ],
              'systemUser': '',
              'disableUser': '0',
              'miniOpenid': null
            }
          ],
          'total': 4,
          'size': 10,
          'current': 1,
          'orders': [],
          'optimizeCountSql': true,
          'searchCount': true,
          'countId': null,
          'maxLimit': null,
          'pages': 4
        }
      }
    }
  },
  {
    url: '/api/admin/user/:id',
    method: 'delete',
    response: () => {
      return {
        'code': 200,
        'message': null,
        'data': null
      }
    }
  },
  // --------------------------------------------------   log
  {
    url: '/api/admin/user/page',
    method: 'get',
    response: ({ body }) => {
      return {
        'code': 200,
        'message': null,
        'data': {
          'records': [
            {
              'id': '7192',
              'type': '0',
              'method': 'DELETE',
              'title': '删除角色',
              'createBy': 'admin',
              'createTime': '2024-08-08 09:57:25',
              'updateTime': null,
              'remoteAddr': '10.178.218.54',
              'userAgent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
              'requestUri': '/api/admin/role/115',
              'params': '',
              'bodyParams': null,
              'time': '23',
              'exception': null,
              'serviceId': null,
              'delFlag': '0'
            },
            {
              'id': '7191',
              'type': '0',
              'method': 'DELETE',
              'title': '删除菜单',
              'createBy': 'admin',
              'createTime': '2024-08-08 09:53:58',
              'updateTime': null,
              'remoteAddr': '10.178.218.54',
              'userAgent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
              'requestUri': '/api/admin/menu/10955',
              'params': '',
              'bodyParams': null,
              'time': '58',
              'exception': null,
              'serviceId': null,
              'delFlag': '0'
            },
            {
              'id': '7190',
              'type': '0',
              'method': 'POST',
              'title': '新增菜单',
              'createBy': 'admin',
              'createTime': '2024-08-08 09:53:52',
              'updateTime': null,
              'remoteAddr': '10.178.218.54',
              'userAgent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
              'requestUri': '/api/admin/menu',
              'params': '',
              'bodyParams': null,
              'time': '21',
              'exception': null,
              'serviceId': null,
              'delFlag': '0'
            },
            {
              'id': '7189',
              'type': '0',
              'method': 'DELETE',
              'title': '删除字典',
              'createBy': 'admin',
              'createTime': '2024-08-06 14:54:37',
              'updateTime': null,
              'remoteAddr': '10.178.218.54',
              'userAgent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
              'requestUri': '/api/admin/dict/130',
              'params': '',
              'bodyParams': null,
              'time': '15',
              'exception': null,
              'serviceId': null,
              'delFlag': '0'
            },
            {
              'id': '7188',
              'type': '0',
              'method': 'POST',
              'title': '添加字典',
              'createBy': 'admin',
              'createTime': '2024-08-06 14:52:08',
              'updateTime': null,
              'remoteAddr': '10.178.218.54',
              'userAgent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
              'requestUri': '/api/admin/dict/',
              'params': '',
              'bodyParams': null,
              'time': '7',
              'exception': null,
              'serviceId': null,
              'delFlag': '0'
            },
            {
              'id': '7187',
              'type': '0',
              'method': 'DELETE',
              'title': '删除字典',
              'createBy': 'admin',
              'createTime': '2024-08-06 14:48:55',
              'updateTime': null,
              'remoteAddr': '10.178.218.54',
              'userAgent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
              'requestUri': '/api/admin/dict/129',
              'params': '',
              'bodyParams': null,
              'time': '16',
              'exception': null,
              'serviceId': null,
              'delFlag': '0'
            },
            {
              'id': '7186',
              'type': '0',
              'method': 'POST',
              'title': '添加字典',
              'createBy': 'admin',
              'createTime': '2024-08-06 14:48:52',
              'updateTime': null,
              'remoteAddr': '10.178.218.54',
              'userAgent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
              'requestUri': '/api/admin/dict/',
              'params': '',
              'bodyParams': null,
              'time': '8',
              'exception': null,
              'serviceId': null,
              'delFlag': '0'
            },
            {
              'id': '7185',
              'type': '0',
              'method': 'DELETE',
              'title': '删除字典',
              'createBy': 'admin',
              'createTime': '2024-08-06 14:48:09',
              'updateTime': null,
              'remoteAddr': '10.178.218.54',
              'userAgent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
              'requestUri': '/api/admin/dict/128',
              'params': '',
              'bodyParams': null,
              'time': '16',
              'exception': null,
              'serviceId': null,
              'delFlag': '0'
            },
            {
              'id': '7184',
              'type': '0',
              'method': 'DELETE',
              'title': '删除字典',
              'createBy': 'admin',
              'createTime': '2024-08-06 14:47:18',
              'updateTime': null,
              'remoteAddr': '10.178.218.54',
              'userAgent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
              'requestUri': '/api/admin/dict/23',
              'params': '',
              'bodyParams': null,
              'time': '8',
              'exception': null,
              'serviceId': null,
              'delFlag': '0'
            },
            {
              'id': '7183',
              'type': '0',
              'method': 'POST',
              'title': '添加字典',
              'createBy': 'admin',
              'createTime': '2024-08-06 14:47:03',
              'updateTime': null,
              'remoteAddr': '10.178.218.54',
              'userAgent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
              'requestUri': '/api/admin/dict/',
              'params': '',
              'bodyParams': null,
              'time': '9',
              'exception': null,
              'serviceId': null,
              'delFlag': '0'
            }
          ],
          'total': 6195,
          'size': 10,
          'current': 1,
          'orders': [],
          'optimizeCountSql': true,
          'searchCount': true,
          'countId': null,
          'maxLimit': null,
          'pages': 620
        }
      }
    }
  },
  // --------------------------------------------------   organizational
  {
    url: '/api/admin/org/tree',
    method: 'get',
    response: ({ body }) => {
      return {
        'code': 200,
        'message': null,
        'data': [
          {
            'id': 14,
            'parentId': 0,
            'children': [
              {
                'id': 15,
                'parentId': 14,
                'children': [],
                'name': '数字化部',
                'departCode': '1001',
                'departLeading': null,
                'departLeadingWorkno': null,
                'funcLeadersName': null,
                'funcLeadersId': null,
                'businLeadersId': null,
                'businLeadersWorkno': null,
                'departLeadingId': null,
                'businLeadersName': null,
                'funcLeadersWorkno': null,
                'type': null
              },
              {
                'id': 29,
                'parentId': 14,
                'children': [
                  {
                    'id': 30,
                    'parentId': 29,
                    'children': [],
                    'name': 'xxxxx',
                    'departCode': '',
                    'departLeading': null,
                    'departLeadingWorkno': null,
                    'funcLeadersName': null,
                    'funcLeadersId': null,
                    'businLeadersId': null,
                    'businLeadersWorkno': null,
                    'departLeadingId': null,
                    'businLeadersName': null,
                    'funcLeadersWorkno': null,
                    'type': null
                  },
                  {
                    'id': 31,
                    'parentId': 29,
                    'children': [
                      {
                        'id': 49,
                        'parentId': 31,
                        'children': [],
                        'name': '1',
                        'departCode': '1dsd',
                        'departLeading': null,
                        'departLeadingWorkno': null,
                        'funcLeadersName': null,
                        'funcLeadersId': null,
                        'businLeadersId': null,
                        'businLeadersWorkno': null,
                        'departLeadingId': null,
                        'businLeadersName': null,
                        'funcLeadersWorkno': null,
                        'type': '1'
                      }
                    ],
                    'name': 'xxxxx',
                    'departCode': '',
                    'departLeading': null,
                    'departLeadingWorkno': null,
                    'funcLeadersName': null,
                    'funcLeadersId': null,
                    'businLeadersId': null,
                    'businLeadersWorkno': null,
                    'departLeadingId': null,
                    'businLeadersName': null,
                    'funcLeadersWorkno': null,
                    'type': '2'
                  }
                ],
                'name': 'xxxx',
                'departCode': '1002',
                'departLeading': null,
                'departLeadingWorkno': null,
                'funcLeadersName': null,
                'funcLeadersId': null,
                'businLeadersId': null,
                'businLeadersWorkno': null,
                'departLeadingId': null,
                'businLeadersName': null,
                'funcLeadersWorkno': null,
                'type': '2'
              }
            ],
            'name': 'xxxx有限公司',
            'departCode': '1000',
            'departLeading': null,
            'departLeadingWorkno': null,
            'funcLeadersName': null,
            'funcLeadersId': null,
            'businLeadersId': null,
            'businLeadersWorkno': null,
            'departLeadingId': null,
            'businLeadersName': null,
            'funcLeadersWorkno': null,
            'type': '0'
          }
        ]
      }
    }
  },
  {
    url: '/api/admin/org/:id',
    method: 'delete',
    response: () => {
      return {
        'code': 200,
        'message': null,
        'data': null
      }
    }
  }

]

export default sysMocks
