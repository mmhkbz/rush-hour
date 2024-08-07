import {coreAPIClient} from '@/libs'

type CreateTaskCategoryType = {
  name: string
}

export const createTaskCategory = async (param: CreateTaskCategoryType) => {
  const response = await coreAPIClient.post('/create-task-category', param)
  return response.data
}
