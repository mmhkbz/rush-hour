import {getRoleById} from '@/api/role'
import {QUERY_KEYS} from '@/configs'
import {useQuery} from '@tanstack/react-query'

export const useGetRoleById = (id: number | string) =>
  useQuery({
    queryKey: QUERY_KEYS.ROLE_BY_ID(id),
    queryFn: () => getRoleById(id),
  })
