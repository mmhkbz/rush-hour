import {coreAPIClient} from '@/libs'
import {AxiosResponse} from 'axios'

type GetTasksByTeamParamType = {
  team_id: string
  date: string
  task_status_id: string
  task_level_id: string
  search_item: string
}

export const getTasksByTeam = async (param: GetTasksByTeamParamType) => {
  const response: AxiosResponse<APIDataResponse<TaskEntity[]>> =
    await coreAPIClient.post('/tasks-by-employee', param)
  return response.data
}
