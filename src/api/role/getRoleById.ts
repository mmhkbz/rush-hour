import {roleClient} from '@/libs'

export const getRoleById = async (id: number | string) => {
  const response = await roleClient.get(`/Role/GetRole/${id}`)
  return response
}
