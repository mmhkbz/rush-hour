import {deleteRoleMap} from '@/api/role'
import {useMutation} from '@tanstack/react-query'

export const useDeleteRoleMap = () =>
  useMutation({
    mutationKey: ['delete-role-map'],
    mutationFn: deleteRoleMap,
  })
