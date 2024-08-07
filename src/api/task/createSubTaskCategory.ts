import {coreAPIClient} from '@/libs'

type CreateSubTaskCategoryType = {
  name: string
}

export const createSubTaskCategory = async (
  param: CreateSubTaskCategoryType
) => {
  const response = await coreAPIClient.post('/create-subtask-category', param)
  return response.data
}
