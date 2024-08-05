'use client'

import {useForm} from 'react-hook-form'
import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {useMutation} from '@tanstack/react-query'
import {login} from '@/api/ad-auth'
import * as AES from 'aes-everywhere'
import {AES_SECRET} from '@/configs'

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
  password: z.string({
    required_error: 'Please enter password!',
  }),
})

type LoginFormType = z.infer<typeof loginFormSchema>

export function useLogin() {
  const form = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
  })
  const {handleSubmit} = form
  const {mutateAsync, ...otherProps} = useMutation({
    mutationKey: ['login'],
    mutationFn: login,
  })

  const handleLogin = handleSubmit(async (formData) => {
    const cipherPassword = AES.encrypt(formData.password, AES_SECRET)
    await mutateAsync({
      login_id: formData.employeeId.toString(),
      password: cipherPassword,
    })
  })

  return {form, handleLogin, ...otherProps}
}
