import {coreAPIClient} from '@/libs'
import {AxiosResponse} from 'axios'

type GetProjectListResponse = APIDataResponse<NamedObject[]>

export const getProjectList = async () => {
  const response: AxiosResponse<GetProjectListResponse> =
    await coreAPIClient.get('/project-list')
  return response.data
}
