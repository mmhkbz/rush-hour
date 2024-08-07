'use client'

import {useForm} from 'react-hook-form'
import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {useMutation} from '@tanstack/react-query'
import {login, LoginSuccessResponse} from '@/api/ad-auth'
import {useToast} from '@/components/ui/use-toast'
import {useRouter} from 'next/navigation'
import {
  setInfoAction,
  setRoleActon,
  setTokenAction,
  useUserStore,
} from '@/store'
import {useEffect, useState} from 'react'
import {useGetRoleByStaffId} from '@/hooks'

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
  const {
    mutateAsync,
    isPending,
    data: loginResponse,
  } = useMutation({
    mutationKey: ['login'],
    mutationFn: login,
  })
  const {toast} = useToast()
  const {replace} = useRouter()
  const dispatchSetToken = useUserStore(setTokenAction)
  const dispatchSetInfo = useUserStore(setInfoAction)
  const dispatchSetRole = useUserStore(setRoleActon)
  const [isEnabledGetRole, setIsEnabledGetRole] = useState(false)
  const watchedEmployeeId = form.watch('employeeId')
  const {data: roleMapping} = useGetRoleByStaffId(
    watchedEmployeeId,
    isEnabledGetRole
  )

  const handleLogin = handleSubmit(async (formData) => {
    setIsEnabledGetRole(false)
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
      setIsEnabledGetRole(true)
    }
  })

  // listener for role mapping
  useEffect(() => {
    if (isEnabledGetRole && watchedEmployeeId && roleMapping) {
      if (roleMapping.Data && roleMapping.Data.StaffID) {
        const castedResponse = loginResponse as LoginSuccessResponse
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
            teamId: roleMapping.Data.TeamID,
            teamName: roleMapping.Data.TeamName,
          },
        })
        // bind role to global state
        dispatchSetRole({
          role: {
            id: roleMapping.Data.Id,
            name: roleMapping.Data.RoleType === 1 ? 'Admin' : 'User',
          },
        })
        toast({
          title: 'Success',
          description: 'Successfully logged in!',
        })
        replace('/workspace')
      } else {
        // close get listener for employee id change possiblity
        setIsEnabledGetRole(false)
        toast({
          title: 'Error',
          description: 'Please contact admin team to access this application!',
          variant: 'destructive',
        })
      }
    }
  }, [
    isEnabledGetRole,
    watchedEmployeeId,
    roleMapping,
    toast,
    dispatchSetInfo,
    dispatchSetToken,
    dispatchSetRole,
    loginResponse,
    replace,
  ])

  return {form, handleLogin, isPending}
}
