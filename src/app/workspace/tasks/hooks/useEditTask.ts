import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {taskSchemaBase} from './useCreateTask'
import {zodResolver} from '@hookform/resolvers/zod'
import {useMutation, useQueryClient} from '@tanstack/react-query'
import {updateTask} from '@/api/task/updateTask'
import {selectInfo, selectRole, useUserStore} from '@/store'
import {useToast} from '@/components/ui/use-toast'
import {QUERY_KEYS} from '@/configs'
import {useTaskViewContext} from '../context/TaskViewContext'

const editSchema = z.object({
  ...taskSchemaBase,
  PK: z.string({
    required_error: 'Required!',
  }),
  SK: z.string({
    required_error: 'Required!',
  }),
  task_id: z.string({
    required_error: 'Required!',
  }),
})

type EditTaskFormType = z.infer<typeof editSchema>

export function useEditTask() {
  const form = useForm<EditTaskFormType>({
    resolver: zodResolver(editSchema),
  })
  const userInfo = useUserStore(selectInfo)
  const roleInfo = useUserStore(selectRole)
  const {mutateAsync, isPending} = useMutation({
    mutationKey: ['edit-task'],
    mutationFn: updateTask,
  })
  const {handleSubmit} = form
  const {toast} = useToast()
  const queryClient = useQueryClient()
  const context = useTaskViewContext()
  const handleEdit = handleSubmit(async (formData) => {
    const response = await mutateAsync({
      ...formData,
      employee_id: userInfo?.employeeId || '',
      employee_name: userInfo?.name || '',
      team_id: userInfo?.teamId || '',
      team_name: userInfo?.teamName || '',
    })
    if (response.Data) {
      if (roleInfo?.isAdmin) {
        queryClient.invalidateQueries({
          queryKey: QUERY_KEYS.TASKS_BY_TEAM({
            team_id: userInfo?.teamId || '',
            date: new Date().toDateString(),
            search_item: '',
            task_level_id: '',
            task_status_id: '',
          }),
        })
      } else {
        queryClient.invalidateQueries({
          queryKey: QUERY_KEYS.TASKS_BY_EMPLOYEE({
            employee_id: userInfo?.employeeId || '',
            date: new Date().toDateString(),
            task_level_id: '',
            task_status_id: '',
          }),
        })
      }
      context?.setEditTaskModal({
        editTaskModal: {
          show: false,
        },
      })
      return toast({
        title: 'Success',
        description: 'Successfully updated!',
      })
    }
    toast({
      title: 'Error',
      description: 'Failed to update!',
      variant: 'destructive',
    })
  })

  return {form, isPending, handleEdit}
}
