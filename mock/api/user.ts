// mock/user.ts
import { MockMethod } from 'vite-plugin-mock'

const userMocks: MockMethod[] = [
  {
    url: '/api/auth/login',
    method: 'post',
    response: ({ body }) => {
      return {
        'code': 200,
        'data': {
          'msg': '用户：admin 成功登录系统.',
          'userName': body.userName,
          'access_token': '39c31404-5220-44b6-a2dd-75c6bf832f7c',
          'refresh_token': 'f0d174eb-87d0-4025-a614-aabf30be513f'
        }
      }
    }
  },
  {
    url: '/api/admin/user/info',
    method: 'get',
    response: () => {
      return {
        'code': 200,
        'message': null,
        'data': {
          'userId': 3,
          'username': 'admin',
          'workno': 'admin',
          'displayname': '超级管理员',
          'password': null,
          'delFlag': '0',
          'lockFlag': '0',
          'phone': null,
          'avatar': null,
          'mail': '492738286@qq.com',
          'deptId': null,
          'tenantId': 3,
          'dutiesId': null,
          'postId': null,
          'userCategory': null,
          'disableUser': '0',
          'orgType': '0',
          'companyId': 14,
          'companyCode': '1000',
          'companyName': '内蒙古环晔材料有限公司',
          'supDeptId': null,
          'supDeptCode': null,
          'supDeptName': null,
          'permissions': [
            'sys:role:del',
            'sys:dict:del',
            'sys:dict:edit',
            'Pro_startModuleTask',
            'sys:org:add',
            'sys:menu:del',
            'sys:org:set',
            'sys:menu:add',
            'sys:user:add',
            'sys:role:edit',
            'sys:sop:select',
            'sys:org:del',
            'sys:user:edit',
            'Pro_stopModuleTask',
            'sys:menu:perm',
            'sys:menu:edit',
            'sys:org:edit',
            'sys:dict:add',
            'sys:role:add',
            'sys:user:del'
          ],
          'roles': [
            1,
            100,
            101
          ],
          'notFields': [
            'null.amount',
            'null.wPrice',
            'PoOrderController.selectMaterialsByOrderNum.price'
          ],
          'authorities': [
            {
              'authority': 'sys:role:del'
            },
            {
              'authority': 'ROLE_1'
            },
            {
              'authority': 'sys:dict:del'
            },
            {
              'authority': 'sys:dict:edit'
            },
            {
              'authority': 'Pro_startModuleTask'
            },
            {
              'authority': 'sys:org:add'
            },
            {
              'authority': 'sys:menu:del'
            },
            {
              'authority': 'sys:org:set'
            },
            {
              'authority': 'sys:menu:add'
            },
            {
              'authority': 'sys:user:add'
            },
            {
              'authority': 'sys:role:edit'
            },
            {
              'authority': 'sys:sop:select'
            },
            {
              'authority': 'sys:org:del'
            },
            {
              'authority': 'sys:user:edit'
            },
            {
              'authority': 'Pro_stopModuleTask'
            },
            {
              'authority': 'sys:menu:perm'
            },
            {
              'authority': 'sys:menu:edit'
            },
            {
              'authority': 'ROLE_101'
            },
            {
              'authority': 'sys:org:edit'
            },
            {
              'authority': 'sys:dict:add'
            },
            {
              'authority': 'ROLE_100'
            },
            {
              'authority': 'sys:role:add'
            },
            {
              'authority': 'sys:user:del'
            }
          ],
          'accountNonLocked': false,
          'enabled': true,
          'passwordChangeTime': '2023-12-07 12:39:31'
        }
      }
    }
  },
  {
    url: '/api/admin/dict/all',
    method: 'get',
    response: () => {
      return {
        'code': 200,
        'message': null,
        'data': {
          'code': 200,
          'message': null,
          'data': {
            'job_type': [
              {
                'id': 53,
                'dictId': 4,
                'value': '1',
                'label': 'java类',
                'type': 'job_type',
                'description': 'java类',
                'sort': 1,
                'createTime': '2019-03-19 23:22:37',
                'updateTime': '2019-03-26 00:49:36',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 54,
                'dictId': 4,
                'value': '2',
                'label': 'spring bean',
                'type': 'job_type',
                'description': 'spring bean容器实例',
                'sort': 2,
                'createTime': '2019-03-19 23:23:05',
                'updateTime': '2019-03-26 00:49:36',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 55,
                'dictId': 4,
                'value': '9',
                'label': '其他',
                'type': 'job_type',
                'description': '其他类型',
                'sort': 9,
                'createTime': '2019-03-19 23:23:31',
                'updateTime': '2019-03-26 00:49:36',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 56,
                'dictId': 4,
                'value': '3',
                'label': 'Rest 调用',
                'type': 'job_type',
                'description': 'Rest 调用',
                'sort': 3,
                'createTime': '2019-03-19 23:23:57',
                'updateTime': '2019-03-26 00:49:36',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 57,
                'dictId': 4,
                'value': '4',
                'label': 'jar',
                'type': 'job_type',
                'description': 'jar类型',
                'sort': 4,
                'createTime': '2019-03-19 23:24:20',
                'updateTime': '2019-03-26 00:49:36',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 620,
                'dictId': 19,
                'value': '12222',
                'label': '1',
                'type': 'job_type',
                'description': '111',
                'sort': 0,
                'createTime': '2024-06-21 11:37:16',
                'updateTime': '2024-06-21 11:37:16',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              }
            ],
            'storage_location': [
              {
                'id': 596,
                'dictId': 114,
                'value': '库位2',
                'label': '库位1',
                'type': 'storage_location',
                'description': '',
                'sort': 1,
                'createTime': '2023-10-07 10:02:56',
                'updateTime': '2023-10-07 10:02:56',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              },
              {
                'id': 597,
                'dictId': 114,
                'value': '库位2',
                'label': '库位2',
                'type': 'storage_location',
                'description': '',
                'sort': 1,
                'createTime': '2023-10-07 10:03:07',
                'updateTime': '2023-10-07 10:03:07',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              }
            ],
            'misfire_policy': [
              {
                'id': 63,
                'dictId': 7,
                'value': '1',
                'label': '错失周期立即执行',
                'type': 'misfire_policy',
                'description': '错失周期立即执行',
                'sort': 1,
                'createTime': '2019-03-19 23:27:45',
                'updateTime': '2019-03-26 00:49:36',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 64,
                'dictId': 7,
                'value': '2',
                'label': '错失周期执行一次',
                'type': 'misfire_policy',
                'description': '错失周期执行一次',
                'sort': 2,
                'createTime': '2019-03-19 23:27:57',
                'updateTime': '2019-03-26 00:49:36',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 65,
                'dictId': 7,
                'value': '3',
                'label': '下周期执行',
                'type': 'misfire_policy',
                'description': '下周期执行',
                'sort': 3,
                'createTime': '2019-03-19 23:28:08',
                'updateTime': '2019-03-26 00:49:36',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 589,
                'dictId': 22,
                'value': '高杨',
                'label': '厂家',
                'type': 'misfire_policy',
                'description': '',
                'sort': 1,
                'createTime': '2023-09-26 14:26:20',
                'updateTime': '2023-09-26 14:26:20',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              }
            ],
            'gender': [
              {
                'id': 66,
                'dictId': 8,
                'value': '1',
                'label': '男',
                'type': 'gender',
                'description': '微信-男',
                'sort': 0,
                'createTime': '2019-03-28 01:45:13',
                'updateTime': '2019-03-28 01:45:13',
                'remarks': '微信-男',
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 67,
                'dictId': 8,
                'value': '2',
                'label': '女',
                'type': 'gender',
                'description': '女-微信',
                'sort': 1,
                'createTime': '2019-03-28 01:45:34',
                'updateTime': '2019-03-28 01:45:34',
                'remarks': '女-微信',
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 68,
                'dictId': 8,
                'value': '0',
                'label': '未知',
                'type': 'gender',
                'description': 'x性别未知',
                'sort': 3,
                'createTime': '2019-03-28 01:45:57',
                'updateTime': '2019-03-28 01:45:57',
                'remarks': 'x性别未知',
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 505,
                'dictId': 23,
                'value': '男',
                'label': '1',
                'type': 'gender',
                'description': '',
                'sort': 1,
                'createTime': '2022-04-25 05:58:58',
                'updateTime': '2022-04-25 05:58:58',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              },
              {
                'id': 506,
                'dictId': 23,
                'value': '女',
                'label': '2',
                'type': 'gender',
                'description': '',
                'sort': 1,
                'createTime': '2022-04-25 05:59:09',
                'updateTime': '2022-04-25 05:59:09',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              }
            ],
            'formula_product': [
              {
                'id': 629,
                'dictId': 125,
                'value': '1',
                'label': '产品1',
                'type': 'formula_product',
                'description': '',
                'sort': 0,
                'createTime': '2024-07-26 11:01:13',
                'updateTime': '2024-07-26 11:01:13',
                'remarks': 'success',
                'delFlag': '0',
                'tenantId': 0
              },
              {
                'id': 630,
                'dictId': 125,
                'value': '2',
                'label': '产品2',
                'type': 'formula_product',
                'description': '',
                'sort': 1,
                'createTime': '2024-07-26 11:01:19',
                'updateTime': '2024-07-26 11:01:19',
                'remarks': 'success',
                'delFlag': '0',
                'tenantId': 0
              },
              {
                'id': 631,
                'dictId': 125,
                'value': '3',
                'label': '产品3',
                'type': 'formula_product',
                'description': '',
                'sort': 2,
                'createTime': '2024-07-26 11:01:30',
                'updateTime': '2024-07-26 11:01:30',
                'remarks': 'success',
                'delFlag': '0',
                'tenantId': 0
              }
            ],
            'response_type': [
              {
                'id': 71,
                'dictId': 10,
                'value': '0',
                'label': '未回复',
                'type': 'response_type',
                'description': '微信消息-未回复',
                'sort': 0,
                'createTime': '2019-03-29 09:29:47',
                'updateTime': '2019-03-29 09:29:47',
                'remarks': '微信消息-未回复',
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 72,
                'dictId': 10,
                'value': '1',
                'label': '已回复',
                'type': 'response_type',
                'description': '微信消息-已回复',
                'sort': 1,
                'createTime': '2019-03-29 09:30:08',
                'updateTime': '2019-03-29 09:30:08',
                'remarks': '微信消息-已回复',
                'delFlag': '0',
                'tenantId': 3
              }
            ],
            'experiment_type': [
              {
                'id': 599,
                'dictId': 116,
                'value': '加刷',
                'label': '加刷',
                'type': 'experiment_type',
                'description': '',
                'sort': 1,
                'createTime': '2023-10-18 14:26:40',
                'updateTime': '2023-12-06 11:11:30',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              },
              {
                'id': 600,
                'dictId': 116,
                'value': '正常',
                'label': '正常',
                'type': 'experiment_type',
                'description': '',
                'sort': 1,
                'createTime': '2023-10-18 14:26:46',
                'updateTime': '2023-12-06 11:11:44',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              },
              {
                'id': 607,
                'dictId': 116,
                'value': '加喷',
                'label': '加喷',
                'type': 'experiment_type',
                'description': '',
                'sort': 1,
                'createTime': '2023-12-07 13:50:34',
                'updateTime': '2023-12-07 13:50:43',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              }
            ],
            'workbench_type': [
              {
                'id': 604,
                'dictId': 117,
                'value': '机台1',
                'label': '机台1',
                'type': 'workbench_type',
                'description': '',
                'sort': 1,
                'createTime': '2023-11-06 11:31:33',
                'updateTime': '2023-11-06 11:31:33',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              },
              {
                'id': 605,
                'dictId': 117,
                'value': '机台2',
                'label': '机台2',
                'type': 'workbench_type',
                'description': '',
                'sort': 1,
                'createTime': '2023-11-06 11:31:39',
                'updateTime': '2023-11-06 11:31:39',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              }
            ],
            'crucible_size': [
              {
                'id': 595,
                'dictId': 113,
                'value': 'G7',
                'label': 'G7',
                'type': 'crucible_size',
                'description': '',
                'sort': 1,
                'createTime': '2023-10-07 09:51:32',
                'updateTime': '2023-10-07 09:51:32',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              }
            ],
            'crucible_manufacturer': [
              {
                'id': 592,
                'dictId': 112,
                'value': '太阳光',
                'label': '太阳光',
                'type': 'crucible_manufacturer',
                'description': '',
                'sort': 1,
                'createTime': '2023-10-07 09:50:30',
                'updateTime': '2023-10-27 11:37:30',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              },
              {
                'id': 593,
                'dictId': 112,
                'value': '核晶',
                'label': '核晶',
                'type': 'crucible_manufacturer',
                'description': '',
                'sort': 1,
                'createTime': '2023-10-07 09:50:40',
                'updateTime': '2023-10-27 11:37:39',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              },
              {
                'id': 602,
                'dictId': 112,
                'value': '太阳能',
                'label': '太阳能',
                'type': 'crucible_manufacturer',
                'description': '',
                'sort': 1,
                'createTime': '2023-10-27 11:37:56',
                'updateTime': '2023-10-27 11:37:56',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              }
            ],
            'job_execute_status': [
              {
                'id': 61,
                'dictId': 6,
                'value': '0',
                'label': '正常',
                'type': 'job_execute_status',
                'description': '正常',
                'sort': 0,
                'createTime': '2019-03-19 23:26:27',
                'updateTime': '2019-03-26 00:49:36',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 62,
                'dictId': 6,
                'value': '1',
                'label': '异常',
                'type': 'job_execute_status',
                'description': '异常',
                'sort': 1,
                'createTime': '2019-03-19 23:26:41',
                'updateTime': '2019-03-26 00:49:36',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 3
              }
            ],
            'log_type': [
              {
                'id': 45,
                'dictId': 1,
                'value': '9',
                'label': '异常',
                'type': 'log_type',
                'description': '日志异常',
                'sort': 1,
                'createTime': '2019-03-19 23:08:59',
                'updateTime': '2019-03-26 00:49:13',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 46,
                'dictId': 1,
                'value': '0',
                'label': '正常',
                'type': 'log_type',
                'description': '日志正常',
                'sort': 0,
                'createTime': '2019-03-19 23:09:17',
                'updateTime': '2019-03-26 00:49:18',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 614,
                'dictId': 16,
                'value': 'w',
                'label': 'qwd',
                'type': 'log_type',
                'description': 'qw',
                'sort': 0,
                'createTime': '2024-06-11 14:05:02',
                'updateTime': '2024-06-11 14:05:02',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              },
              {
                'id': 615,
                'dictId': 16,
                'value': '1',
                'label': '测试',
                'type': 'log_type',
                'description': '你好',
                'sort': 100,
                'createTime': '2024-06-11 14:12:03',
                'updateTime': '2024-06-11 14:12:03',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              },
              {
                'id': 623,
                'dictId': 16,
                'value': 'test',
                'label': '11',
                'type': 'log_type',
                'description': '123',
                'sort': 0,
                'createTime': '2024-07-04 16:39:36',
                'updateTime': '2024-07-04 16:39:36',
                'remarks': 'success',
                'delFlag': '0',
                'tenantId': 0
              }
            ],
            'social_type': [
              {
                'id': 47,
                'dictId': 2,
                'value': 'WX',
                'label': '微信',
                'type': 'social_type',
                'description': '微信登录',
                'sort': 0,
                'createTime': '2019-03-19 23:10:02',
                'updateTime': '2019-03-26 00:49:36',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 48,
                'dictId': 2,
                'value': 'QQ',
                'label': 'QQ',
                'type': 'social_type',
                'description': 'QQ登录',
                'sort': 1,
                'createTime': '2019-03-19 23:10:14',
                'updateTime': '2019-03-26 00:49:36',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 628,
                'dictId': 17,
                'value': '1',
                'label': 'test',
                'type': 'social_type',
                'description': '',
                'sort': 0,
                'createTime': '2024-07-08 14:11:40',
                'updateTime': '2024-07-08 14:11:40',
                'remarks': 'warning',
                'delFlag': '0',
                'tenantId': 0
              }
            ],
            'sys_basic_theme': [
              {
                'id': 581,
                'dictId': 110,
                'value': '装灌料',
                'label': '装灌料',
                'type': 'sys_basic_theme',
                'description': '装灌料',
                'sort': 1,
                'createTime': '2023-09-21 15:33:01',
                'updateTime': '2023-09-21 17:28:00',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              },
              {
                'id': 582,
                'dictId': 110,
                'value': '铸锭车间',
                'label': '铸锭车间',
                'type': 'sys_basic_theme',
                'description': '铸锭车间',
                'sort': 2,
                'createTime': '2023-09-21 15:33:35',
                'updateTime': '2023-09-21 17:28:02',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              },
              {
                'id': 590,
                'dictId': 110,
                'value': 'test1',
                'label': 'test1',
                'type': 'sys_basic_theme',
                'description': 'test1',
                'sort': 4,
                'createTime': '2023-09-26 15:00:55',
                'updateTime': '2023-09-26 15:00:55',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              }
            ],
            'dept_type': [
              {
                'id': 91,
                'dictId': 43,
                'value': '0',
                'label': '公司',
                'type': 'dept_type',
                'description': '公司',
                'sort': 0,
                'createTime': '2019-09-10 08:11:17',
                'updateTime': '2019-09-10 08:11:17',
                'remarks': '公司',
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 92,
                'dictId': 43,
                'value': '1',
                'label': '部门',
                'type': 'dept_type',
                'description': '部门',
                'sort': 1,
                'createTime': '2019-09-10 08:11:28',
                'updateTime': '2019-09-10 08:11:28',
                'remarks': '部门',
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 309,
                'dictId': 43,
                'value': '2',
                'label': '工厂',
                'type': 'dept_type',
                'description': '岗位',
                'sort': 2,
                'createTime': '2020-04-07 04:56:06',
                'updateTime': '2021-06-27 01:27:21',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 310,
                'dictId': 43,
                'value': '3',
                'label': '供应商',
                'type': 'dept_type',
                'description': '线别',
                'sort': 3,
                'createTime': '2020-04-07 04:56:22',
                'updateTime': '2021-06-27 01:27:21',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 358,
                'dictId': 43,
                'value': '5',
                'label': '外部公司',
                'type': 'dept_type',
                'description': '',
                'sort': 5,
                'createTime': '2021-04-28 23:13:46',
                'updateTime': '2021-06-27 01:27:21',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 547,
                'dictId': 43,
                'value': '6',
                'label': '组别',
                'type': 'dept_type',
                'description': '',
                'sort': 6,
                'createTime': '2022-09-01 11:42:12',
                'updateTime': '2022-09-01 11:42:12',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              }
            ],
            'apk_version': [
              {
                'id': 606,
                'dictId': 118,
                'value': '3.0',
                'label': '3.0',
                'type': 'apk_version',
                'description': '版本号',
                'sort': 1,
                'createTime': '2023-11-24 14:12:35',
                'updateTime': '2024-01-30 15:11:24',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              }
            ],
            'formula_thermal': [
              {
                'id': 634,
                'dictId': 127,
                'value': '0',
                'label': '热场1',
                'type': 'formula_thermal',
                'description': '',
                'sort': 0,
                'createTime': '2024-07-26 11:02:03',
                'updateTime': '2024-07-26 11:02:03',
                'remarks': 'error',
                'delFlag': '0',
                'tenantId': 0
              },
              {
                'id': 635,
                'dictId': 127,
                'value': '1',
                'label': '热场2',
                'type': 'formula_thermal',
                'description': '',
                'sort': 1,
                'createTime': '2024-07-26 11:02:09',
                'updateTime': '2024-07-26 11:02:09',
                'remarks': 'error',
                'delFlag': '0',
                'tenantId': 0
              }
            ],
            'dict_type': [
              {
                'id': 83,
                'dictId': 13,
                'value': '1',
                'label': '系统类',
                'type': 'dict_type',
                'description': '系统类字典',
                'sort': 0,
                'createTime': '2019-05-17 02:20:40',
                'updateTime': '2019-05-17 02:20:40',
                'remarks': '不能修改删除',
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 84,
                'dictId': 13,
                'value': '0',
                'label': '业务类',
                'type': 'dict_type',
                'description': '业务类字典',
                'sort': 0,
                'createTime': '2019-05-17 02:20:59',
                'updateTime': '2019-05-17 02:20:59',
                'remarks': '可以修改',
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 352,
                'dictId': 28,
                'value': '1',
                'label': '1',
                'type': 'dict_type',
                'description': '1',
                'sort': 1,
                'createTime': '2021-01-08 10:28:12',
                'updateTime': '2021-06-27 01:27:21',
                'remarks': '1',
                'delFlag': '0',
                'tenantId': 3
              }
            ],
            'subscribe': [
              {
                'id': 69,
                'dictId': 9,
                'value': '0',
                'label': '未关注',
                'type': 'subscribe',
                'description': '公众号-未关注',
                'sort': 0,
                'createTime': '2019-03-28 01:49:07',
                'updateTime': '2019-03-28 01:49:07',
                'remarks': '公众号-未关注',
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 70,
                'dictId': 9,
                'value': '1',
                'label': '已关注',
                'type': 'subscribe',
                'description': '公众号-已关注',
                'sort': 1,
                'createTime': '2019-03-28 01:49:26',
                'updateTime': '2019-03-28 01:49:26',
                'remarks': '公众号-已关注',
                'delFlag': '0',
                'tenantId': 3
              }
            ],
            'leave_status': [
              {
                'id': 49,
                'dictId': 3,
                'value': '0',
                'label': '未提交',
                'type': 'leave_status',
                'description': '未提交',
                'sort': 0,
                'createTime': '2019-03-19 23:18:34',
                'updateTime': '2019-03-26 00:49:36',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 50,
                'dictId': 3,
                'value': '1',
                'label': '审批中',
                'type': 'leave_status',
                'description': '审批中',
                'sort': 1,
                'createTime': '2019-03-19 23:18:45',
                'updateTime': '2019-03-26 00:49:36',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 51,
                'dictId': 3,
                'value': '2',
                'label': '完成',
                'type': 'leave_status',
                'description': '完成',
                'sort': 2,
                'createTime': '2019-03-19 23:19:02',
                'updateTime': '2019-03-26 00:49:36',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 52,
                'dictId': 3,
                'value': '9',
                'label': '驳回',
                'type': 'leave_status',
                'description': '驳回',
                'sort': 9,
                'createTime': '2019-03-19 23:19:20',
                'updateTime': '2019-03-26 00:49:36',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 3
              }
            ],
            'origin_place': [
              {
                'id': 608,
                'dictId': 119,
                'value': '三期',
                'label': '三期',
                'type': 'origin_place',
                'description': '',
                'sort': 1,
                'createTime': '2024-01-12 23:07:21',
                'updateTime': '2024-01-25 16:15:13',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              },
              {
                'id': 609,
                'dictId': 119,
                'value': '四期',
                'label': '四期',
                'type': 'origin_place',
                'description': '',
                'sort': 1,
                'createTime': '2024-01-12 23:07:29',
                'updateTime': '2024-01-25 16:15:20',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              }
            ],
            'org_type': [
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
            'param_type': [
              {
                'id': 73,
                'dictId': 11,
                'value': '1',
                'label': '检索',
                'type': 'param_type',
                'description': '检索',
                'sort': 0,
                'createTime': '2019-04-30 06:22:17',
                'updateTime': '2019-04-30 06:22:17',
                'remarks': '检索',
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 74,
                'dictId': 11,
                'value': '2',
                'label': '原文',
                'type': 'param_type',
                'description': '原文',
                'sort': 0,
                'createTime': '2019-04-30 06:22:27',
                'updateTime': '2019-04-30 06:22:27',
                'remarks': '原文',
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 75,
                'dictId': 11,
                'value': '3',
                'label': '报表',
                'type': 'param_type',
                'description': '报表',
                'sort': 0,
                'createTime': '2019-04-30 06:22:36',
                'updateTime': '2019-04-30 06:22:36',
                'remarks': '报表',
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 76,
                'dictId': 11,
                'value': '4',
                'label': '安全',
                'type': 'param_type',
                'description': '安全',
                'sort': 0,
                'createTime': '2019-04-30 06:22:46',
                'updateTime': '2019-04-30 06:22:46',
                'remarks': '安全',
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 77,
                'dictId': 11,
                'value': '5',
                'label': '文档',
                'type': 'param_type',
                'description': '文档',
                'sort': 0,
                'createTime': '2019-04-30 06:22:56',
                'updateTime': '2019-04-30 06:22:56',
                'remarks': '文档',
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 78,
                'dictId': 11,
                'value': '6',
                'label': '消息',
                'type': 'param_type',
                'description': '消息',
                'sort': 0,
                'createTime': '2019-04-30 06:23:05',
                'updateTime': '2019-04-30 06:23:05',
                'remarks': '消息',
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 79,
                'dictId': 11,
                'value': '9',
                'label': '其他',
                'type': 'param_type',
                'description': '其他',
                'sort': 0,
                'createTime': '2019-04-30 06:23:16',
                'updateTime': '2019-04-30 06:23:16',
                'remarks': '其他',
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 80,
                'dictId': 11,
                'value': '0',
                'label': '默认',
                'type': 'param_type',
                'description': '默认',
                'sort': 0,
                'createTime': '2019-04-30 06:23:30',
                'updateTime': '2019-04-30 06:23:30',
                'remarks': '默认',
                'delFlag': '0',
                'tenantId': 3
              }
            ],
            'job_status': [
              {
                'id': 58,
                'dictId': 5,
                'value': '1',
                'label': '未发布',
                'type': 'job_status',
                'description': '未发布',
                'sort': 1,
                'createTime': '2019-03-19 23:25:18',
                'updateTime': '2019-03-26 00:49:36',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 59,
                'dictId': 5,
                'value': '2',
                'label': '运行中',
                'type': 'job_status',
                'description': '运行中',
                'sort': 2,
                'createTime': '2019-03-19 23:25:31',
                'updateTime': '2019-03-26 00:49:36',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 60,
                'dictId': 5,
                'value': '3',
                'label': '暂停',
                'type': 'job_status',
                'description': '暂停',
                'sort': 3,
                'createTime': '2019-03-19 23:25:42',
                'updateTime': '2019-03-26 00:49:36',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 621,
                'dictId': 20,
                'value': '‘0’',
                'label': '正常',
                'type': 'job_status',
                'description': '',
                'sort': 0,
                'createTime': '2024-07-02 10:24:33',
                'updateTime': '2024-07-02 10:24:33',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              },
              {
                'id': 622,
                'dictId': 20,
                'value': '1',
                'label': '异常',
                'type': 'job_status',
                'description': '',
                'sort': 0,
                'createTime': '2024-07-02 10:24:33',
                'updateTime': '2024-07-02 10:24:33',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              }
            ],
            'crucible_status': [
              {
                'id': 598,
                'dictId': 115,
                'value': '报废',
                'label': '报废',
                'type': 'crucible_status',
                'description': '1111',
                'sort': 1,
                'createTime': '2023-10-07 10:07:05',
                'updateTime': '2023-10-07 10:07:05',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              }
            ],
            'sys_menu': [
              {
                'id': 355,
                'dictId': 83,
                'value': '0',
                'label': 'SYSTEM',
                'type': 'sys_menu',
                'description': '',
                'sort': 1,
                'createTime': '2021-04-07 23:19:51',
                'updateTime': '2021-06-27 01:27:21',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 3
              },
              {
                'id': 394,
                'dictId': 83,
                'value': '1',
                'label': 'MES',
                'type': 'sys_menu',
                'description': '',
                'sort': 2,
                'createTime': '2021-12-02 21:37:57',
                'updateTime': '2023-09-18 09:42:59',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              }
            ],
            'formula_model': [
              {
                'id': 632,
                'dictId': 126,
                'value': '1',
                'label': '规格1',
                'type': 'formula_model',
                'description': '',
                'sort': 0,
                'createTime': '2024-07-26 11:01:43',
                'updateTime': '2024-07-26 11:01:43',
                'remarks': 'warning',
                'delFlag': '0',
                'tenantId': 0
              },
              {
                'id': 633,
                'dictId': 126,
                'value': '2',
                'label': '规格2',
                'type': 'formula_model',
                'description': '',
                'sort': 1,
                'createTime': '2024-07-26 11:01:52',
                'updateTime': '2024-07-26 11:01:52',
                'remarks': 'warning',
                'delFlag': '0',
                'tenantId': 0
              }
            ],
            'tenant_status_type': [],
            'entry_type': [
              {
                'id': 584,
                'dictId': 111,
                'value': '类型1',
                'label': '类型1',
                'type': 'entry_type',
                'description': '类型1',
                'sort': 1,
                'createTime': '2023-09-21 17:31:34',
                'updateTime': '2023-09-21 17:31:34',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              },
              {
                'id': 585,
                'dictId': 111,
                'value': '类型2',
                'label': '类型2',
                'type': 'entry_type',
                'description': '类型2',
                'sort': 2,
                'createTime': '2023-09-21 17:31:42',
                'updateTime': '2023-09-21 17:31:42',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              },
              {
                'id': 586,
                'dictId': 111,
                'value': '类型3',
                'label': '类型3',
                'type': 'entry_type',
                'description': '类型3',
                'sort': 1,
                'createTime': '2023-09-21 17:31:49',
                'updateTime': '2023-09-21 17:31:49',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              },
              {
                'id': 591,
                'dictId': 111,
                'value': 'test-type',
                'label': 'test-type',
                'type': 'entry_type',
                'description': 'test-type',
                'sort': 1,
                'createTime': '2023-09-26 15:01:09',
                'updateTime': '2023-09-26 15:01:09',
                'remarks': null,
                'delFlag': '0',
                'tenantId': 0
              }
            ]
          }
        }
      }
    }
  }
]

export default userMocks
