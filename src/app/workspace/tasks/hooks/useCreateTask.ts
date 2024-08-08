import {createTask} from '@/api/task'
import {useToast} from '@/components/ui/use-toast'
import {selectInfo, useUserStore} from '@/store'
import {zodResolver} from '@hookform/resolvers/zod'
import {useMutation} from '@tanstack/react-query'
import {addHours} from 'date-fns'
import {useForm} from 'react-hook-form'
import {z} from 'zod'

const taskSchemaBase = {
  task_name: z
    .string({
      required_error: 'Please enter task name!',
    })
    .min(10, 'Should be at least 10 characters!')
    .max(200, 'Should not over than 200 charcters!'),
  remark: z
    .string({
      required_error: 'Please enter remark!',
    })
    .max(200, 'Should not over than 200 charcters!'),
  task_category_id: z
    .string({
      required_error: 'Please select Task Category!',
    })
    .min(1, 'Please select task category'),
  task_category_name: z.string({
    required_error: 'Please enter Task Category!',
  }),
  sub_task_category_id: z
    .string({
      required_error: 'Please select Task Sub-Category!',
    })
    .min(1, 'Please select sub-task category'),
  sub_task_category_name: z.string({
    required_error: 'Please enter Task Sub-Category!',
  }),
  task_start: z.date({
    required_error: "Please select Task's Start Date!",
  }),
  task_end: z.date({
    required_error: "Please select Task's End Date!",
  }),
  task_status_id: z
    .string({
      required_error: "Please select Task's status!",
    })
    .min(1, 'Please select task status id!'),
  task_status_name: z.string({
    required_error: "Please enter Task's status name!",
  }),
  task_level_id: z
    .string({
      required_error: "Please select Task's level!",
    })
    .min(1, 'Please select task level!'),
  task_level_name: z.string({
    required_error: "Please enter Task's level name!",
  }),
  project_id: z
    .string({
      required_error: "Please select Project's Id!",
    })
    .min(1, 'Please select project!'),
  project_name: z.string({
    required_error: "Please enter Project's name!",
  }),
  department_id: z
    .string({
      required_error: 'Please select Department!',
    })
    .min(1, 'Please select department!'),
  department_name: z.string({
    required_error: "Please enter Department's name!",
  }),
}

const createTaskSchema = z.object({
  ...taskSchemaBase,
})

type CreateTaskFormType = z.infer<typeof createTaskSchema>

export function useCreateTask(successCallback: VoidFunction) {
  const form = useForm<CreateTaskFormType>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      remark: '-',
      task_name: '',
      task_start: new Date(),
      task_end: addHours(new Date(), 1),
    },
  })
  const userInfo = useUserStore(selectInfo)

  const {mutateAsync, isPending} = useMutation({
    mutationKey: ['create-task'],
    mutationFn: createTask,
  })
  const {handleSubmit} = form
  const {toast} = useToast()

  const handleCreate = handleSubmit(async (formData) => {
    const response = await mutateAsync({
      ...formData,
      employee_id: userInfo ? userInfo.employeeId : '',
      employee_name: userInfo ? userInfo.name : '',
      team_id: userInfo ? userInfo.teamId : '',
      team_name: userInfo ? userInfo.teamName : '',
    })
    if (response.Data && response.Data.status === 'SUCCESS') {
      successCallback()
      return toast({
        title: 'Succcess',
        description: 'Successfully added new task!',
      })
    }
    toast({
      title: 'Error',
      description: 'Failed to add task!',
      variant: 'destructive',
    })
  })

  return {form, isPending, handleCreate}
}
