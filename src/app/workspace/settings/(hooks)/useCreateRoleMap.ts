import {zodResolver} from '@hookform/resolvers/zod'
import {useMutation} from '@tanstack/react-query'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {createRoleMap} from '@/api/role'
import {useGetTeams} from '@/hooks/useGetTeams'
import {useEffect} from 'react'
import {useToast} from '@/components/ui/use-toast'

export const baseRoleMapSchema = {
  staffId: z
    .string({
      required_error: 'Please enter staff id!',
    })
    .regex(/^\d+$/, {
      message: 'Invalid staff id format!',
    })
    .min(6, 'Invalid employee id format!')
    .max(6, 'Invalid employee id format!'),
  roleType: z.number({
    required_error: 'Please select role type!',
  }),
  teamId: z.string({
    required_error: 'Please select team name!',
  }),
  teamName: z.string({
    required_error: 'Required!',
  }),
}
const createRoleMapSchema = z.object(baseRoleMapSchema)

type CreateRoleMapForm = z.infer<typeof createRoleMapSchema>

export const useCreateRoleMap = (successCallback: VoidFunction) => {
  const form = useForm<CreateRoleMapForm>({
    resolver: zodResolver(createRoleMapSchema),
    defaultValues: {
      staffId: '',
    },
  })
  const {data: roles} = useGetTeams()
  const {mutateAsync, isPending} = useMutation({
    mutationKey: ['create-role-map'],
    mutationFn: createRoleMap,
  })

  const {handleSubmit, watch, setValue} = form
  const watchedTeamId = watch('teamId')
  const {toast} = useToast()

  useEffect(() => {
    if (!roles) {
      return
    }
    const selectedTeamIndex = roles.findIndex(
      (role) => role.value === watchedTeamId
    )
    if (selectedTeamIndex !== -1) {
      setValue('teamName', roles[selectedTeamIndex].label)
    }
  }, [watchedTeamId, setValue, roles])

  const handleCreate = handleSubmit(async (formData) => {
    const response = await mutateAsync({
      StaffID: formData.staffId,
      TeamName: formData.teamName,
      RoleType: formData.roleType,
      TeamID: formData.teamId,
    })
    if (response.Data) {
      toast({
        title: 'Success',
        description: 'Successfully mapped role!',
      })
      successCallback()
    } else {
      toast({
        title: 'Error',
        description: 'Failed to map role!',
      })
    }
  })

  return {
    form,
    isPending,
    handleCreate,
  }
}
