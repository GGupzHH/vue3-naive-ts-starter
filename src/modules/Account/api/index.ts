
import request from '@/utils/request'
const accountApi = {
  getDemoTestListID(id: string) {
    return request.get(`/api/${ id }/list`)
  },
  login(data: any) {
    return request.post(`/api/auth/login`, data)
  },
  getUserInfoApi() {
    return request.get(`/api/admin/user/info`)
  },
  logout() {
    return request.delete('/api/auth/logout')
  },
  getMenuList() {
    return request.get('/api/admin/menu/systemMenu?systemMenu=0,1')
  }
}

export default accountApi
