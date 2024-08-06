import {getRoleList} from '@/api/role'
import {QUERY_KEYS} from '@/configs'
import {useQuery} from '@tanstack/react-query'

export const useGetRoleList = () =>
  useQuery({
    queryKey: QUERY_KEYS.ROLE_LIST,
    queryFn: getRoleList,
  })
