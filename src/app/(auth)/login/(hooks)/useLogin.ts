'use client'

import {useForm} from 'react-hook-form'
import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {useMutation} from '@tanstack/react-query'
import {login} from '@/api/ad-auth'
import {useToast} from '@/components/ui/use-toast'
import {useRouter} from 'next/navigation'

const loginFormSchema = z.object({
  employeeId: z
    .string({
      required_error: 'Please enter employee id!',
    })
    .regex(/^\d+$/, {
      message: 'Invalid employee id format!',
    })
    .min(6, 'Invalid employee id format!')
    .max(6, 'Invalid employee id format!'),
  password: z
    .string({
      required_error: 'Please enter password!',
    })
    .min(1, 'Please enter password!'),
})

type LoginFormType = z.infer<typeof loginFormSchema>

export function useLogin() {
  const form = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      employeeId: '',
      password: '',
    },
  })
  const {handleSubmit} = form
  const {mutateAsync, isPending} = useMutation({
    mutationKey: ['login'],
    mutationFn: login,
  })
  const {toast} = useToast()
  const {replace} = useRouter()

  const handleLogin = handleSubmit(async (formData) => {
    const response = await mutateAsync({
      login_id: formData.employeeId.toString(),
      password: formData.password,
    })
    // API Known Error
    if (response.Error) {
      toast({
        title: 'Error',
        description: 'Invalid employee id or password!',
        variant: 'destructive',
      })
      return
    }
    // API Unknown Error
    if (!response.Data && !response.Error && response.error) {
      toast({
        title: 'Error',
        description: response.message || '',
        variant: 'destructive',
      })
      return
    }
    // Success
    if (response.Data && !response.Error) {
      toast({
        title: 'Success',
        description: 'Successfully logged in!',
      })
      replace('/workspace')
    }
  })

  return {form, handleLogin, isPending}
}
