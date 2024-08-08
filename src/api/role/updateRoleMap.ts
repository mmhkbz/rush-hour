import {roleClient} from '@/libs'
import {AxiosResponse} from 'axios'

type UpdateRoleMapParam = {
  id: number
  StaffID: string
  RoleType: RoleType
  TeamName: string
  TeamId: string
}

export const updateRoleMap = async ({
  id,
  StaffID,
  RoleType,
  TeamName,
  TeamId,
}: UpdateRoleMapParam) => {
  const response: AxiosResponse<APIDataResponse<RoleAPIResponse>> =
    await roleClient.post(`/UpdateRole?id=${id}`, {
      StaffID,
      RoleType,
      TeamName,
      TeamID: TeamId,
    })
  return response.data
}
