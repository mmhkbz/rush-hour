import {roleClient} from '@/libs'

export const deleteRoleMap = async (id: number) => {
  const response = await roleClient.post(`/DeleteRole?id=${id}`)
  return response.data
}
