declare namespace Account {
  type UserInfo = {
    userId: number
    username: string
    workno: string
    displayname: string
    password: null
    delFlag: string
    lockFlag: string
    phone: string | null
    avatar: string | null
    mail: string | null
    deptId: string | null
    tenantId: number
    dutiesId: null
    postId: null
    userCategory: null
    disableUser: string
    orgType: string
    companyId: number
    companyCode: string
    companyName: string
    supDeptId: null
    supDeptCode: string
    supDeptName: string
    permissions: Array<string>
    roles: Array<number>
    notFields: Array<string>
    authorities: Array<{
      authority: string
    }>
    accountNonLocked: boolean
    enabled: boolean
    passwordChangeTime: string
  }
}
