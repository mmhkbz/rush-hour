import {coreAPIClient} from '@/libs'
import {AxiosResponse} from 'axios'

type UpdateTaskParamType = {
  PK: string
  SK: string
  employee_id: string
  employee_name: string
  task_name: string
  remark: string
  task_category_id: string
  task_category_name: string
  sub_task_category_id: string
  sub_task_category_name: string
  task_start: Date
  task_end: Date
  task_status_id: string
  task_status_name: string
  task_level_id: string
  task_level_name: string
  project_id: string
  project_name: string
  team_id: string
  team_name: string
  department_id: string
  department_name: string
}

export const updateTask = async (param: UpdateTaskParamType) => {
  const response: AxiosResponse<APIDataResponse<{status: string}>> =
    await coreAPIClient.post('/update-task', param)
  return response.data
}
