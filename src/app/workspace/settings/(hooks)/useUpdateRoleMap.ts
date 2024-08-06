import {z} from 'zod'
import {baseRoleMapSchema} from './useCreateRoleMap'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {useMutation} from '@tanstack/react-query'
import {updateRoleMap} from '@/api/role'

const updateRoleMapSchema = z.object({
  ...baseRoleMapSchema,
  id: z.number({
    required_error: 'Required!',
  }), // no need to show in UI
})

export type UpdateRoleMapSchemaType = z.infer<typeof updateRoleMapSchema>

export const useUpdateRoleMap = () => {
  const form = useForm<UpdateRoleMapSchemaType>({
    resolver: zodResolver(updateRoleMapSchema),
  })
  const {mutateAsync, isPending} = useMutation({
    mutationKey: ['update-role-map'],
    mutationFn: updateRoleMap,
  })
  const {handleSubmit} = form
  const handleUpdate = handleSubmit(async (formData) => {
    await mutateAsync({
      id: formData.id,
      StaffID: formData.staffId,
      TeamName: formData.teamName,
      RoleType: formData.roleType,
    })
  })

  return {
    form,
    isPending,
    handleSubmit,
  }
}
