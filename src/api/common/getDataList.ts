import {CORE_API_URL} from '@/configs'

type GetDataListResponse = APIDataResponse<NamedObject>

export type GetDataListParam =
  | 'project-list'
  | 'department-list'
  | 'status-list'
  | 'task-level'
  | 'task-category-list'
  | 'subtask-category-list'
  | 'team-list'

export const getDataList = async (param: GetDataListParam) => {
  // used fetch to optimize caching in nextjs instead of axios in here
  // for rarely unchanged datasources
  const response = await fetch(`${CORE_API_URL}/${param}`).then((res) =>
    res.json(),
  )
  return response as GetDataListResponse
}
