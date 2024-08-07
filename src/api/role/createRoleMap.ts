import {roleClient} from '@/libs'

type CreateRoleMapParam = {
  StaffID: string
  RoleType: RoleType
  TeamName: string
  TeamID: string
}

type CreateRoleMapResponse = APIDataResponse<{
  Code?: number | string
  Message: string
}>

export const createRoleMap = async (param: CreateRoleMapParam) => {
  const response = await roleClient.post('/CreateRole', param)
  return response.data
}
