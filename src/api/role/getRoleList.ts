import {roleClient} from '@/libs'

export const getRoleList = async () => {
  const response = await roleClient.get('/Role/GetRoleList')
  return response
}
