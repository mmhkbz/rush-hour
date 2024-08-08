import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {baseRoleMapSchema} from './useCreateRoleMap'
import {zodResolver} from '@hookform/resolvers/zod'
import {useMutation, useQueryClient} from '@tanstack/react-query'
import {updateRoleMap} from '@/api/role'
import {useToast} from '@/components/ui/use-toast'
import {QUERY_KEYS} from '@/configs'

const editRoleMapForm = z.object({
  ...baseRoleMapSchema,
  id: z.number({
    required_error: 'Required!',
  }),
})

type EditRoleMapFormType = z.infer<typeof editRoleMapForm>

export function useEditRoleMap(successCallback: VoidFunction) {
  const form = useForm<EditRoleMapFormType>({
    resolver: zodResolver(editRoleMapForm),
  })
  const {mutateAsync, isPending} = useMutation({
    mutationKey: ['edit-role'],
    mutationFn: updateRoleMap,
  })
  const {handleSubmit} = form
  const queryClient = useQueryClient()
  const {toast} = useToast()

  const handleEdit = handleSubmit(async (formData) => {
    const response = await mutateAsync({
      id: formData.id,
      RoleType: formData.roleType,
      StaffID: formData.staffId,
      TeamId: formData.teamId,
      TeamName: formData.teamName,
    })
    if (response.Data && response.Data.Message === 'Success.') {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.ROLE_LIST,
      })
      successCallback()
      return toast({
        title: 'Success',
        description: 'Successfully updated!',
      })
    }
    return toast({
      title: 'Error',
      description: 'Failed to update!',
      variant: 'destructive',
    })
  })

  return {
    form,
    isPending,
    handleEdit,
  }
}
