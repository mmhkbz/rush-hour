import {roleClient} from '@/libs'

type UpdateRoleMapParam = {
  id: number
  StaffID: string
  RoleType: RoleType
  TeamName: string
}

export const updateRoleMap = async ({
  id,
  StaffID,
  RoleType,
  TeamName,
}: UpdateRoleMapParam) => {
  const response = await roleClient.post(`/UpdateRole?id=${id}`, {
    StaffID,
    RoleType,
    TeamName,
  })
}
