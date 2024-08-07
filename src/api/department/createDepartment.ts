import {coreAPIClient} from '@/libs'

type CreateDepartmentParam = {
  code: string
  name: string
}

export const createDepartment = async (param: CreateDepartmentParam) => {
  const response = await coreAPIClient.post('/create-department', param)
  return response.data
}
