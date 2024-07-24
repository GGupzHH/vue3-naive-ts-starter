declare namespace SystemManagement {
  /** 用户管理 */
  namespace User {
    type UserOperateType = 'add' | 'edit'

    type UserItemInfo = {
      userId: number // ID
      departName: string // 部门名称
      createTime: string // 创建时间
      displayname: string // 姓名
      mail: string // 邮箱
      phone: string // 电话
      username: string // 登录名
      workno: string // 工号
      disableUser: '0' | '1' // 1停用
    }

    type ParamsGetUserListApi = {
      current: number
      size: number
      deptId: number | null
      username: string
      displayname: string
      level: 1 | 2
    }

    type BodyAddUserApi = {
      username: string
      password: string
      workno: string
      departName: string
      displayname: string
      phone: string
      deptId: number | null
      mail: string
      disableUser: '0' | '1' // 0启用
    }

    type CreateUser = {
      userId?: number
      username: string
      password: string
      workno: string
      departName: string
      displayname: string
      phone: string
      deptId: number | null
      mail: string
      disableUser: '0' | '1' // 0启用
    }

    type ParamsGetByRoleUserListApi = {
      current: number
      size: number
      roleID: number
    }

    type DelByRoleUserItemApi = {
      roleId: number
      userId: number
    }
  }

  /** 菜单管理 */
  namespace Menu {
    type SystemMenuTree = {
      icon: string | null
      id: number
      keepAlive: string
      label: string
      name: string
      parentId: number
      path: string
      permission: null
      sort: number
      type: string
      weight: number
      children: Array<SystemMenuTree> | undefined
    }

    type MenuOperateType = 'add' | 'addChild' | 'edit'

    type MenuOperateModalProps = {
      /** the type of operation */
      operateType: MenuOperateType
      /** the edit menu data or the parent menu data when adding a child menu */
      rowData?: SystemMenuTree
      /** all pages */
      allPages: string[]
    }

    type MenuOperateModalEmits = {
      (e: 'submitted'): void
    }

    type CreateMenuModel = {
      // 按钮权限标识
      permission?: string
      // 标题
      name: string
      // 父节点ID  如果是根节点则为-1
      parentId: number
      // 图标
      icon?: string
      // 排序
      sort?: number
      // 类型 '0'菜单  '1'按钮
      type: '0' | '1'
      path?: string
      // 路由缓存 '0'关闭  '1'开启
      keepAlive?: string
      // 是否启用 '0'关闭  '1'开启
      disableMenu?: string
      // 自动展开'0'关闭  '1'开启
      display?: string
      // 所属系统
      systemMenu: '0'
      // 更新时候需要当前ID
      menuId?: number
    }
  }

  /** 权限管理 */
  namespace Role {
    type RoleItem = {
      roleId: number
      roleName: string
      roleCode: string
      roleDesc: string
      dsType: number
      dsScope: string
      systemRole: null | string
      disableRole: '1' | '0'
      createTime: string
      updateTime: string
      delFlag: string
    }

    type RoleOperateType = 'add' | 'edit'

    type RoleOperateModalProps = {
      /** the type of operation */
      operateType: MenuOperateType
      /** the edit menu data or the parent menu data when adding a child menu */
      rowData?: SystemMenuTree
      /** all pages */
      allPages: string[]
    }

    type RoleOperateModalEmits = {
      (e: 'submitted'): void
    }

    type CreateRoleItem = {
      id?: number
      roleName: string
      roleCode: string
      sortno?: number
      roleDesc?: string
      /** 是否启用  启用；'0'  不启用 '1'  */
      disableRole: string
      dsType: string
    }

    type AssociationUserApi = {
      roleId: number
      userList: Array<AssociationUserItem>
    }

    type AssociationUserItem = {
      userId: number
      deptId: number
      tenantId: number
      username: string
      departName: string
      displayname: string
      createTime: string
      workno: string
      delFlag: string
    }

    type GetUserListByDeptIdParams = {
      deptId: number
    }
  }

  /** 授权管理 */
  namespace Empower {
    type EmpowerDepartmentAddApi = {
      roleId: number
      orgIds: Array<number>
    }

    type EmpowerMenuAddApi = {
      roleId: number
      menuIds: Array<number>
    }

    type EmpowerDepartmentDelApi = {
      roleId: number
      orgId: number
    }

    type EmpowerGetUserListApi = {
      current: number
      size: number
      roleId: number
    }
  }

  /** 组织机构管理 */
  namespace Organizational {
    type OrganizationalTreeItem = {
      name: string
      departCode: number
      id: number
      parentId: number
      type: string
      children: Array<OrganizationalTreeItem> | undefined
    }

    type OrganizationalOperateType = 'add' | 'addChild' | 'edit'

    type CreateOrganizationalModel = {
      id?: number
      orgId?: number
      name: string
      sort: number
      departCode: string
      parentId: number
      parentCode: string
      nickName: string
      type: '0' | '1' | '2' | '3'
      percharge: string
      phone: string
      address: string
    }
  }

  /** 日志管理 */
  namespace Log {
    type ParamsGetLogListApi = {
      current: string
      size: string
      type: string
      title: string
      createBy: string
    }

    type LogItem = {
      id: string
      type: string
      method: string
      title: string
      createBy: string
      createTime: string
      updateTime: null
      remoteAddr: string
      userAgent: string
      params: null
      bodyParams: null
      time: null
      exception: null
      serviceId: string
      delFlag: string
    }
  }

  /** 字典管理 */
  namespace Dictionary {
    type ParamsGetDictionaryTypeListApi = {
      current: number
      size: number
      type: string
    }

    type BodyAddDictionaryTypeApi = {
      description: string
      type: string
    }

    type BodyEditDictionaryTypeApi = {
      id?: number
      description: string
      type: string
      remarks?: string
    }

    type DictionaryItem = {
      id: number
      type: string
      description: string
      createTime: string
      updateTime: string
      system: number
      remarks: string
      delFlag: number
      tenantId: number
    }

    type DictionaryOperateType = 'add' | 'edit'

    type DictionaryInfoOperateType = 'add' | 'edit'

    type ParamsGetDictionaryInfoListApi = {
      current: number
      size: number
      dictId: number
    }

    type BodyAddDictionaryInfoApi = {
      id?: number
      dictId: number
      label: string
      value: string
      sort: number
      remarks: DictInfoTagType
      description: string
    }

    type DictionaryInfoItem = {
      id: number
      dictId: number
      value: string
      label: string
      type: string
      description: string
      sort: number
      createTime: string
      updateTime: string
      remarks: DictInfoTagType
      tenantId: number
    }

    type DictInfoTagType = 'default' | 'primary' | 'success' | 'info' | 'warning' | 'error'
  }

  /** Quartz日志 */
  namespace JobLog {
    /** Quartz日志-获取列表参数 */
    type ParamsGetJobLogListApi = {
      descs: 'create_time'
      current: number
      size: number
      jobName: string
      jobGroup: string
      jobLogStatus: '0' | '1'
    }

    /** Quartz日志-列表 */
    type JobLogItem = {
      jobLogId: number
      jobId: number
      jobName: string
      jobGroup: string
      jobOrder: string
      jobType: '1' | '2' | '3' | '4' | '9'
      executePath: string
      className: string
      methodName: string
      methodParamsValue: string
      cronExpression: string
      jobMessage: string
      jobLogStatus: '1' | '0'
      executeTime: string
      exceptionInfo: string
      createTime: string
      tenantId: number
    }
  }
}
