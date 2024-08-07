import {coreAPIClient} from '@/libs'
import {AxiosResponse} from 'axios'

export type GetTasksByEmployeeParamType = {
  employee_id: string
  date: string
  task_status_id: string
  task_level_id: string
}

export const getTasksByEmployee = async (
  param: GetTasksByEmployeeParamType
) => {
  const response: AxiosResponse<APIDataResponse<TaskEntity[]>> =
    await coreAPIClient.post('/tasks-by-employee', param)
  return response.data
}
