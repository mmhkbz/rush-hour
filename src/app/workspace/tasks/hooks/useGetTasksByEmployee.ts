import {getTasksByEmployee, GetTasksByEmployeeParamType} from '@/api/task'
import {QUERY_KEYS} from '@/configs'
import {useQuery} from '@tanstack/react-query'

export function useGetTasksByEmployee(param: GetTasksByEmployeeParamType) {
  return useQuery({
    queryKey: QUERY_KEYS.TASKS_BY_EMPLOYEE(param),
    queryFn: () => getTasksByEmployee(param),
    enabled: !!param.employee_id.trim(),
    select: (res) =>
      res.Data.sort((a, b) => {
        if (a.log_date > b.log_date) {
          return -1
        } else if (a.log_date < b.log_date) {
          return 1
        }
        return 0
      }),
  })
}
