import {roleClient} from '@/libs'
import {AxiosResponse} from 'axios'

export const getRoleByStaffId = async (id: number | string) => {
  const response: AxiosResponse<APIDataResponse<RoleMapping>> =
    await roleClient.get(`/GetUserRole?staffId=${id}`)
  return response.data
}
