'use client'
import {logout} from '@/api/account'
import {useToast} from '@/components/ui/use-toast'
import {useMutation} from '@tanstack/react-query'
import {useRouter} from 'next/navigation'
import {useCallback} from 'react'

export function useLogout() {
  const {replace} = useRouter()
  const {toast} = useToast()
  const {mutateAsync, isPending} = useMutation({
    mutationKey: ['logout'],
    mutationFn: logout,
  })

  const handleLogout = useCallback(async () => {
    // implement required logic
    await mutateAsync()
    toast({
      title: 'Success',
      description: 'Successfully logged out!',
    })
    replace('/login')
  }, [mutateAsync, replace, toast])

  return {handleLogout, isPending}
}
