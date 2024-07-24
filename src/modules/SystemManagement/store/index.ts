
import { defineStore } from 'pinia'
import systemManagementApi from '@/modules/SystemManagement/api'
const { message } = createDiscreteApi(
  ['message']
)

export const useSystemManagement = defineStore('SystemManagement', {
  state: () => {
    return {
      menuTree: [],
      menuTypeOptions: [
        {
          label: '菜单',
          value: '0'
        },
        {
          label: '按钮',
          value: '1'
        }
      ],
      roleSwatchOptions: [
        {
          label: '开启',
          value: '0'
        },
        {
          label: '关闭',
          value: '1'
        }
      ],
      switchOptions: [
        {
          label: '开启',
          value: '1'
        },
        {
          label: '关闭',
          value: '0'
        }
      ],
      dsTypeOptions: [
        {
          label: '全部',
          value: '0',
          type: 'info'
        },
        {
          label: '自定义',
          value: '1',
          type: 'success'
        },
        {
          label: '本级及子级',
          value: '2',
          type: 'warning'
        },
        {
          label: '本级',
          value: '3',
          type: 'default'
        }
      ] as Array<{
        label: string
        value: string
        type: 'info' | 'success' | 'warning' | 'default'
      }>,
      dictInfoTagType: [
        {
          label: '默认(default)',
          value: 'default'
        },
        {
          label: '主要(primary)',
          value: 'primary'
        },
        {
          label: '成功(success)',
          value: 'success'
        },
        {
          label: '信息(info)',
          value: 'info'
        },
        {
          label: '警告(warning)',
          value: 'warning'
        },
        {
          label: '错误(error)',
          value: 'error'
        }
      ] as Array<{
        label: string
        value: SystemManagement.Dictionary.DictInfoTagType
      }>,
      dictAllMap: {} as Record<string, any>
    }
  },
  actions: {
    /** 角色管理 Store-获取全部字典项 */
    async getSystemDictionaryAllMap() {
      const res = await systemManagementApi.getSystemDictionaryAllMapApi()
      return this.filterResponse(res, (res) => {
        return this.dictAllMap = res.data.data
      })
    },
    async getSystemMenuTree() {
      const res = await systemManagementApi.getSystemMenuTreeApi()
      return this.filterResponse(res, (res) => {
        return this.menuTree = res.data
      })
    },
    async delSystemMenu(id: number) {
      const res = await systemManagementApi.delSystemMenuApi(id)
      return this.filterResponse(res, () => {
        message.success('删除成功')
      })
    },
    async addSystemMenu(data: SystemManagement.Menu.CreateMenuModel) {
      const res = await systemManagementApi.addSystemMenuApi(data)
      return this.filterResponse(res, () => {
        message.success('菜单添加成功')
      })
    },
    async putSystemMenu(data: SystemManagement.Menu.CreateMenuModel) {
      const res = await systemManagementApi.putSystemMenuApi(data)
      return this.filterResponse(res, () => {
        message.success('菜单修改成功')
      })
    },
    /** 角色管理 Store-获取角色列表 */
    async getSystemRoleList(params) {
      const res = await systemManagementApi.getSystemRoleListApi(params)
      return this.filterResponse(res)
    },
    /** 角色管理  Store-添加角色  */
    async addSystemRole(data: SystemManagement.Role.CreateRoleItem) {
      const res = await systemManagementApi.addSystemRoleApi(data)
      return this.filterResponse(res, () => {
        message.success('角色添加成功')
      })
    },
    /** 角色管理  Store-修改角色  */
    async putSystemRole(data: SystemManagement.Role.CreateRoleItem) {
      const res = await systemManagementApi.putSystemRoleApi(data)
      return this.filterResponse(res, () => {
        message.success('角色修改成功')
      })
    },
    /** 角色管理 Store-删除角色 */
    async delSystemRole(id: number) {
      const res = await systemManagementApi.delSystemRoleApi(id)
      return this.filterResponse(res, () => {
        message.success('删除成功')
      })
    },
    /** 角色管理 角色关联用户 */
    async addUserRoleRelation(data: SystemManagement.Role.AssociationUserApi) {
      const res = await systemManagementApi.addUserRoleRelationApi(data)
      return this.filterResponse(res, () => {
        message.success('用户添加成')
      })
    },
    /** 角色管理 根据组织获取员工 */
    async getUserListByDeptId(params: SystemManagement.Role.GetUserListByDeptIdParams) {
      const res = await systemManagementApi.getUserListByDeptIdApi(params)
      return this.filterResponse(res)
    },

    /** 组织机构管理-获取部门Tree */
    async getSystemOrganizationalTree() {
      const res = await systemManagementApi.getSystemOrganizationalTreeApi()
      return this.filterResponse(res, (res) => {
        const handleChileProxyRecursion = (node: Array<SystemManagement.Organizational.OrganizationalTreeItem>) => {
          return node.map(item => {
            return Object.assign(item, {
              children: (item.children?.length && item.children?.length > 0)
                ? handleChileProxyRecursion(item.children)
                : undefined
            })
          })
        }

        return handleChileProxyRecursion(res.data)
      })
    },
    /** 授权管理-部门授权管理-添加部门 */
    async addSystemDep(data: SystemManagement.Empower.EmpowerDepartmentAddApi) {
      const res = await systemManagementApi.addSystemDepApi(data)
      return this.filterResponse(res, () => {
        message.success('部门更新成功')
      })
    },
    /** 授权管理-部门授权管理-删除部门 */
    async delSystemDep(data: SystemManagement.Empower.EmpowerDepartmentDelApi) {
      const res = await systemManagementApi.delSystemDepApi(data)
      return this.filterResponse(res, () => {
        message.success('部门移除成功')
      })
    },
    /** 授权管理-获取当前角色部门权限列表 */
    async getSystemOrganizationalByRole(roleId: number) {
      const res = await systemManagementApi.getSystemOrganizationalByRoleApi({
        roleId
      })
      return this.filterResponse(res)
    },
    /** 组织机构管理-新建组织机构 */
    async addSystemOrganizational(data: SystemManagement.Organizational.CreateOrganizationalModel) {
      const res = await systemManagementApi.addSystemOrganizationalApi(data)
      return this.filterResponse(res, () => {
        message.success('组织机构添加成功')
      })
    },
    /** 组织机构管理-编辑组织机构 */
    async putSystemOrganizational(data: SystemManagement.Organizational.CreateOrganizationalModel) {
      const res = await systemManagementApi.putSystemOrganizationalApi(data)
      return this.filterResponse(res, () => {
        message.success('组织机构编辑成功')
      })
    },
    /** 组织机构管理-删除组织机构 */
    async delSystemOrganizational(id: number) {
      const res = await systemManagementApi.delSystemOrganizationalApi(id)
      return this.filterResponse(res, () => {
        message.success('组织机构删除成功')
      })
    },
    /** 授权管理-菜单管理-菜单提交 */
    async putSystemAuthMenu(data: SystemManagement.Empower.EmpowerMenuAddApi) {
      const res = await systemManagementApi.putSystemAuthMenuApi(data)
      return this.filterResponse(res, () => {
        message.success('角色菜单修改成功')
      })
    },
    /** 授权管理-菜单管理-获取选中菜单 */
    async getSystemActiveMenuList(id: number) {
      const res = await systemManagementApi.getSystemActiveMenuListApi(id)
      return this.filterResponse(res)
    },
    /** 授权管理-菜单管理-根据角色获取用户列表 */
    async getSystemByRoleUserList(data: SystemManagement.User.ParamsGetByRoleUserListApi) {
      const res = await systemManagementApi.getSystemByRoleUserListApi(data)
      return this.filterResponse(res)
    },
    /** 授权管理-菜单管理-根据角色删除用户 */
    async delSystemByRoleUserItem(data: SystemManagement.User.DelByRoleUserItemApi) {
      const res = await systemManagementApi.delSystemByRoleUserItemApi(data)
      return this.filterResponse(res, () => {
        message.success('用户移除成功')
      })
    },

    /** 日志管理-获取日志列表 */
    async getSystemLogList(params: SystemManagement.Log.ParamsGetLogListApi) {
      const res = await systemManagementApi.getSystemLogListApi(params)
      return this.filterResponse(res)
    },
    /** 字典管理-获取字典类型列表 */
    async getSystemDictionaryTypeList(params: SystemManagement.Dictionary.ParamsGetDictionaryTypeListApi) {
      const res = await systemManagementApi.getSystemDictionaryTypeListApi(params)
      return this.filterResponse(res)
    },
    /** 字典管理-删除字典类型列表 */
    async delSystemDictionaryTypeApi(id: number) {
      const res = await systemManagementApi.delSystemDictionaryTypeApi(id)
      return this.filterResponse(res, () => {
        message.success('字典类型删除成功')
      })
    },
    /** 字典管理-添加字典类型 */
    async addSystemDictionaryType(params: SystemManagement.Dictionary.BodyAddDictionaryTypeApi) {
      const res = await systemManagementApi.addSystemDictionaryTypeApi(params)
      return this.filterResponse(res, () => {
        message.success('字典类型添加成功')
      })
    },
    /** 字典管理-修改字典类型 */
    async putSystemDictionaryType(params: SystemManagement.Dictionary.BodyEditDictionaryTypeApi) {
      const res = await systemManagementApi.putSystemDictionaryTypeApi(params)
      return this.filterResponse(res, () => {
        message.success('字典类型编辑成功')
      })
    },
    /** 字典管理-获取字典详情列表 */
    async getSystemDictionaryInfoList(params: SystemManagement.Dictionary.ParamsGetDictionaryInfoListApi) {
      const res = await systemManagementApi.getSystemDictionaryInfoListApi(params)
      return this.filterResponse(res)
    },
    /** 字典管理-删除字典详情列表 */
    async delSystemDictionaryInfo(id: number) {
      const res = await systemManagementApi.delSystemDictionaryInfoApi(id)
      return this.filterResponse(res, () => {
        message.success('字典详情删除成功')
      })
    },
    /** 字典管理-添加字典详情 */
    async addSystemDictionaryInfo(params: SystemManagement.Dictionary.BodyAddDictionaryInfoApi) {
      const res = await systemManagementApi.addSystemDictionaryInfoApi(params)
      return this.filterResponse(res, () => {
        message.success('字典详情添加成功')
      })
    },
    /** 字典管理-修改字典详情 */
    async putSystemDictionaryInfo(params: SystemManagement.Dictionary.BodyAddDictionaryInfoApi) {
      const res = await systemManagementApi.putSystemDictionaryInfoApi(params)
      return this.filterResponse(res, () => {
        message.success('字典详情编辑成功')
      })
    },

    /** 用户管理-获取用户列表 */
    async getSystemUserList(params: SystemManagement.User.ParamsGetUserListApi) {
      const res = await systemManagementApi.getSystemUserListApi(params)
      return this.filterResponse(res)
    },
    /** 用户管理-删除用户 */
    async delSystemUser(id: number) {
      const res = await systemManagementApi.delSystemUserApi(id)
      return this.filterResponse(res, () => {
        message.success('用户删除成功')
      })
    },
    /** 用户管理-添加用户 */
    async addSystemUser(params: SystemManagement.User.BodyAddUserApi) {
      const res = await systemManagementApi.addSystemUserApi(params)
      return this.filterResponse(res, () => {
        message.success('用户添加成功')
      })
    },
    /** 用户管理-修改用户 */
    async putSystemUser(params: SystemManagement.User.CreateUser) {
      const res = await systemManagementApi.putSystemUserApi(params)
      return this.filterResponse(res, () => {
        message.success('用户编辑成功')
      })
    },
    /** 用户管理-密码重置 */
    async putSystemUserResetPwd(id: number) {
      const res = await systemManagementApi.putSystemUserResetPwdApi(id)
      return this.filterResponse(res, () => {
        message.success('用户密码重置成功')
      })
    },
    /** Quartz日志-数据列表 */
    async getSystemJobLogList(params: SystemManagement.JobLog.ParamsGetJobLogListApi) {
      const res = await systemManagementApi.getSystemJobLogListApi(params)
      return this.filterResponse(res)
    }
  }
})
