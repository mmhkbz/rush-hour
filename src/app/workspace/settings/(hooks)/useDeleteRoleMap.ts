import {deleteRoleMap} from '@/api/role'
import {useToast} from '@/components/ui/use-toast'
import {QUERY_KEYS} from '@/configs'
import {useMutation, useQueryClient} from '@tanstack/react-query'

export const useDeleteRoleMap = (successCallback: VoidFunction) => {
  const queryClient = useQueryClient()
  const {toast} = useToast()
  return useMutation({
    mutationKey: ['delete-role-map'],
    mutationFn: deleteRoleMap,
    onSuccess: (response) => {
      if (response.Data) {
        toast({
          title: 'Success',
          description: 'Successfully deleted!',
        })
        queryClient.invalidateQueries({
          queryKey: QUERY_KEYS.ROLE_LIST,
        })
        successCallback()
      } else {
        toast({
          title: 'Error',
          description: 'Failed to delete!',
          variant: 'destructive',
        })
      }
    },
  })
}
