import {coreAPIClient} from '@/libs'

type CreateTaskStatusType = {
  name: string
}

export const createTaskStatus = async (param: CreateTaskStatusType) => {
  const response = await coreAPIClient.post('/create-task-status', param)
  return response.data
}
