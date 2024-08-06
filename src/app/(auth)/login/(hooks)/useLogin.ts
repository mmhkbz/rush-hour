'use client'

import {useForm} from 'react-hook-form'
import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {useMutation} from '@tanstack/react-query'
import {login, LoginSuccessResponse} from '@/api/ad-auth'
import {useToast} from '@/components/ui/use-toast'
import {useRouter} from 'next/navigation'
import {setInfoAction, setTokenAction, useUserStore} from '@/store'

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
  const dispatchSetToken = useUserStore(setTokenAction)
  const dispatchSetInfo = useUserStore(setInfoAction)

  const handleLogin = handleSubmit(async (formData) => {
    const response = await mutateAsync({
      login_id: formData.employeeId.toString(),
      password: formData.password,
    })
    // No response
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
      const castedResponse = response as LoginSuccessResponse
      // bind to global state
      dispatchSetToken({
        token: {
          access_token: castedResponse.Data.accessToken,
          refresh_token: castedResponse.Data.RefreshToken,
        },
      })
      // bind to global state
      dispatchSetInfo({
        info: {
          employeeId: castedResponse.Data.login_id,
          name: castedResponse.Data.user_name,
          position: castedResponse.Data.position,
        },
      })
      // fetch current user role
      // to keep writing
      toast({
        title: 'Success',
        description: 'Successfully logged in!',
      })
      replace('/workspace')
    }
  })

  return {form, handleLogin, isPending}
}
