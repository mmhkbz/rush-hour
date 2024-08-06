import {zodResolver} from '@hookform/resolvers/zod'
import {useMutation} from '@tanstack/react-query'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {createRoleMap} from '@/api/role'

export const baseRoleMapSchema = {
  staffId: z
    .string({
      required_error: 'Please enter staff id!',
    })
    .regex(/^\d+$/, {
      message: 'Invalid staff id format!',
    }),
  roleType: z.number({
    required_error: 'Please select role type!',
  }),
  teamName: z.string({
    required_error: 'Please select team name!',
  }),
}
const createRoleMapSchema = z.object(baseRoleMapSchema)

type CreateRoleMapForm = z.infer<typeof createRoleMapSchema>

export const useCreateRoleMap = () => {
  const form = useForm<CreateRoleMapForm>({
    resolver: zodResolver(createRoleMapSchema),
  })
  const {mutateAsync, isPending} = useMutation({
    mutationKey: ['create-role-map'],
    mutationFn: createRoleMap,
  })

  const {handleSubmit} = form

  const handleCreate = handleSubmit(async (formData) => {
    await mutateAsync({
      StaffID: formData.staffId,
      TeamName: formData.teamName,
      RoleType: formData.roleType,
    })
    // TO DO: continue to check response
  })

  return {
    form,
    isPending,
    handleCreate,
  }
}
