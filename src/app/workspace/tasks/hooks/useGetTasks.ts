import {getTasks} from '@/api/task'
import {QUERY_KEYS} from '@/configs'
import {useQuery} from '@tanstack/react-query'

export const useGetTasks = () =>
  useQuery({
    queryKey: QUERY_KEYS.TASKS_LIST,
    queryFn: getTasks,
  })
