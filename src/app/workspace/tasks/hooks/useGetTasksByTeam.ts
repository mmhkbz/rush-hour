import {getTasksByTeam, GetTasksByTeamParamType} from '@/api/task'
import {QUERY_KEYS} from '@/configs'
import {useQuery} from '@tanstack/react-query'

export function useGetTasksByTeam(
  param: GetTasksByTeamParamType,
  enabled: boolean
) {
  return useQuery({
    queryKey: QUERY_KEYS.TASKS_BY_TEAM(param),
    queryFn: () => getTasksByTeam(param),
    enabled: !!param.team_id.trim() && enabled,
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
