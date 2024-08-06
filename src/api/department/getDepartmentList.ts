import {coreAPIClient} from '@/libs'
import {AxiosResponse} from 'axios'

type GetDepartmentListResponse = APIDataResponse<NamedObject[]>

export const getDepartmentList = async () => {
  const response: AxiosResponse<GetDepartmentListResponse> =
    await coreAPIClient.get('/department-list')
  return response.data
}
