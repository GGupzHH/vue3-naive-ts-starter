import request from '@/utils/request'

const systemManagementApi = {
  getSystemMenuTreeApi() {
    return request.get(`/api/admin/menu/tree`)
  },
  getSystemMenuBelongingApi() {
    return request.get(`/api/admin/dict/type/sys_menu`)
  },
  addSystemMenuApi(data: SystemManagement.Menu.CreateMenuModel) {
    return request.post(`/api/admin/menu`, data)
  },
  putSystemMenuApi(data: SystemManagement.Menu.CreateMenuModel) {
    return request.put(`/api/admin/menu`, data)
  },
  delSystemMenuApi(id: number) {
    return request.delete(`/api/admin/menu/${ id }`)
  },
  settingThresholdApi(data: any) {
    return request.post(`/api/analyze/updateBySeries`, data)
  },
  getErrorListApi(params: any) {
    return request.get(`/api/analyze/getAlarmList`, params)
  },

  /** 角色管理-获取角色列表 */
  getSystemRoleListApi(params) {
    return request.get(`/api/admin/role/pageList`, params)
  },
  /** 角色管理-新增角色 */
  addSystemRoleApi(data: SystemManagement.Role.CreateRoleItem) {
    return request.post(`/api/admin/role`, data)
  },
  /** 角色管理-编辑角色 */
  putSystemRoleApi(data: SystemManagement.Role.CreateRoleItem) {
    return request.put(`/api/admin/role`, data)
  },
  /** 角色管理-删除角色 */
  delSystemRoleApi(id: number) {
    return request.delete(`/api/admin/role/${ id }`)
  },
  /** 角色管理-添加人员 */
  addUserRoleRelationApi(data: SystemManagement.Role.AssociationUserApi) {
    return request.post(`/api/admin/permission/addUserRoleRelation`, data)
  },
  /** 角色管理-根据组织获取人员 */
  getUserListByDeptIdApi(params: SystemManagement.Role.GetUserListByDeptIdParams) {
    return request.get(`/api/admin/user/getListByDeptId`, params)
  },

  /** 组织机构管理-获取部门Tree */
  getSystemOrganizationalTreeApi() {
    return request.get(`/api/admin/org/tree`)
  },
  /** 组织机构管理-获取当前角色组织列表 */
  getSystemOrganizationalByRoleApi(params: { roleId: number; }) {
    return request.get(`/api/admin/org/getOrgListByRoleId`, params)
  },
  /** 组织机构管理-新建组织机构 */
  addSystemOrganizationalApi(data: SystemManagement.Organizational.CreateOrganizationalModel) {
    return request.post(`/api/admin/org/`, data)
  },
  /** 组织机构管理-编辑组织机构 */
  putSystemOrganizationalApi(data: SystemManagement.Organizational.CreateOrganizationalModel) {
    return request.put(`/api/admin/org/`, data)
  },
  /** 组织机构管理-删除组织机构 */
  delSystemOrganizationalApi(id: number) {
    return request.delete(`/api/admin/org/${ id }`)
  },
  /** 授权管理-部门授权管理-添加部门 */
  addSystemDepApi(data: SystemManagement.Empower.EmpowerDepartmentAddApi) {
    return request.post(`/api/admin/role/saveDeptRole`, {
      ...data,
      currentPage: 1,
      pageSize: 10
    })
  },
  /** 授权管理-部门授权管理-删除部门 */
  delSystemDepApi(data: SystemManagement.Empower.EmpowerDepartmentDelApi) {
    return request.post(`/api/admin/roleAssociate/delOrgRole`, data)
  },

  /** 授权管理-菜单管理-添加菜单<全量更新> */
  putSystemAuthMenuApi(params: SystemManagement.Empower.EmpowerMenuAddApi) {
    return request.put(`/api/admin/role/menu`, null, {
      params: {
        roleId: params.roleId,
        menuIds: params.menuIds.join(',')
      }
    })
  },

  /** 授权管理-菜单管理-获取选中菜单列表ID */
  getSystemActiveMenuListApi(id: number) {
    return request.get(`/api/admin/menu/tree/${ id }`)
  },

  /** 授权管理-用户管理-根据角色获取用户列表 */
  getSystemByRoleUserListApi(params: SystemManagement.User.ParamsGetByRoleUserListApi) {
    return request.get(`/api/admin/role/getUserListByRoleId`, params)
  },
  /** 授权管理-用户管理-根据角色移除单个用户 */
  delSystemByRoleUserItemApi(data: SystemManagement.User.DelByRoleUserItemApi) {
    return request.post(`/api/admin/permission/deleteUserRoleRelation`, data)
  },

  /** 日志管理-获取日志列表 */
  getSystemLogListApi(params: SystemManagement.Log.ParamsGetLogListApi) {
    return request.get(`/api/admin/log/page`, params)
  },

  /** 字典管理-获取字典类型列表 */
  getSystemDictionaryTypeListApi(params: SystemManagement.Dictionary.ParamsGetDictionaryTypeListApi) {
    return request.get(`/api/admin/dict/page`, params)
  },
  /** 字典管理-删除字典类型列表 */
  delSystemDictionaryTypeApi(id: number) {
    return request.delete(`/api/admin/dict/${ id }`)
  },
  /** 字典管理-添加字典类型 */
  addSystemDictionaryTypeApi(params: SystemManagement.Dictionary.BodyAddDictionaryTypeApi) {
    return request.post(`/api/admin/dict/`, params)
  },
  /** 字典管理-修改字典类型 */
  putSystemDictionaryTypeApi(params: SystemManagement.Dictionary.BodyEditDictionaryTypeApi) {
    return request.put(`/api/admin/dict/`, params)
  },

  /** 字典管理-获取字典详情列表 */
  getSystemDictionaryInfoListApi(params: SystemManagement.Dictionary.ParamsGetDictionaryInfoListApi) {
    return request.get(`/api/admin/dict/item/page`, params)
  },
  /** 字典管理-删除字典详情列表 */
  delSystemDictionaryInfoApi(id: number) {
    return request.delete(`/api/admin/dict/item/${ id }`)
  },
  /** 字典管理-添加字典详情 */
  addSystemDictionaryInfoApi(params: SystemManagement.Dictionary.BodyAddDictionaryInfoApi) {
    return request.post(`/api/admin/dict/item`, params)
  },
  /** 字典管理-修改字典详情 */
  putSystemDictionaryInfoApi(params: SystemManagement.Dictionary.BodyAddDictionaryInfoApi) {
    return request.put(`/api/admin/dict/item`, params)
  },
  /** 字典管理-获取全部字典 */
  getSystemDictionaryAllMapApi() {
    return request.get(`/api/admin/dict/all`)
  },

  /** 用户管理-获取用户列表 */
  getSystemUserListApi(params: SystemManagement.User.ParamsGetUserListApi) {
    return request.get(`/api/admin/user/page`, params)
  },
  /** 用户管理-新增用户 */
  addSystemUserApi(params: SystemManagement.User.BodyAddUserApi) {
    return request.post(`/api/admin/user`, params)
  },
  /** 用户管理-修改用户 */
  putSystemUserApi(params: SystemManagement.User.CreateUser) {
    return request.put(`/api/admin/user`, params)
  },
  /** 用户管理-密码重置 */
  putSystemUserResetPwdApi(userId: number) {
    return request.put(`/api/admin/user/editPassword/${ userId }`)
  },
  /** 用户管理-删除用户 */
  delSystemUserApi(userId: number) {
    return request.delete(`/api/admin/user/${ userId }`)
  },

  /** Quartz日志-数据列表 */
  getSystemJobLogListApi(params: SystemManagement.JobLog.ParamsGetJobLogListApi) {
    return request.get(`/api/job/sys-job/job-log`, params)
  }
}

export default systemManagementApi
