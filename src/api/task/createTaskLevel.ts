import {coreAPIClient} from '@/libs'

type CreateTaskLevelParam = {
  name: string
}

export const createTaskLevel = async (param: CreateTaskLevelParam) => {
  const response = await coreAPIClient.post('/create-task-level', param)
  return response.data
}
