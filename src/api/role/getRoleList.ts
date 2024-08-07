import {ROLE_API_URL} from '@/configs'

export const getRoleList = async () => {
  const response = await fetch(`${ROLE_API_URL}/GetRoleList`).then((res) =>
    res.json()
  )
  return response as APIDataResponse<RoleMapping[]> | APIErrorResponse
}
