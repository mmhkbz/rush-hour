import {roleClient} from '@/libs'
import {AxiosResponse} from 'axios'

export const deleteRoleMap = async (id: number) => {
  const response: AxiosResponse<
    APIDataResponse<{
      Code: number | string | null
      Message: string
    }>
  > = await roleClient.post(`/DeleteRole?id=${id}`)
  return response.data
}
