import {roleClient} from '@/libs'
import {AxiosResponse} from 'axios'

type CreateRoleMapParam = {
  StaffID: string
  RoleType: RoleType
  TeamName: string
  TeamID: string
}

export const createRoleMap = async (param: CreateRoleMapParam) => {
  const response: AxiosResponse<APIDataResponse<RoleAPIResponse>> =
    await roleClient.post('/CreateRole', param)
  return response.data
}
