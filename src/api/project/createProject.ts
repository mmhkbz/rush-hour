import {coreAPIClient} from '@/libs'

type CreateProjectParam = {
  name: string
}

export const createProject = async (param: CreateProjectParam) => {
  const response = await coreAPIClient.post('/create-project', param)
  return response.data
}
