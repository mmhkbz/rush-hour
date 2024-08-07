import {GetDataListParam} from '@/api/common'
import {GetTasksByEmployeeParamType} from '@/api/task'

export const QUERY_KEYS = {
  TASKS_LIST: ['tasks'],
  ROLE_LIST: ['roles'],
  ROLE_BY_ID: (id: number | string) => ['role', id],
  TEAM_LIST: ['team-list'],
  COMMON_DATA_LIST: (target: GetDataListParam) => [target],
  TASKS_BY_EMPLOYEE: (param: GetTasksByEmployeeParamType) => [
    'tasks-by-employee',
    param,
  ],
}

export const COOKIE_KEYS = {
  ACCESS_TOKEN: 'nekto_ssecca',
  REFRESH_TOKEN: 'hserfer_nekto',
}
