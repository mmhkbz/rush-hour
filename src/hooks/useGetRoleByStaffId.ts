import {getRoleByStaffId} from '@/api/role'
import {QUERY_KEYS} from '@/configs'
import {useQuery} from '@tanstack/react-query'

export const useGetRoleByStaffId = (id: number | string, enabled: boolean) =>
  useQuery({
    queryKey: QUERY_KEYS.ROLE_BY_ID(id),
    queryFn: () => getRoleByStaffId(id),
    enabled,
  })
