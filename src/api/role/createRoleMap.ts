import {roleClient} from '@/libs'

type CreateRoleMapParam = {
  StaffID: string
  RoleType: RoleType
  TeamName: string
}

export const createRoleMap = async (param: CreateRoleMapParam) => {
  const response = await roleClient.post('/CreateRole', param)
  return response.data
}
