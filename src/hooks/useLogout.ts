'use client'
import {useToast} from '@/components/ui/use-toast'
import {useRouter} from 'next/navigation'

export function useLogout() {
  const {replace} = useRouter()
  const {toast} = useToast()
  return () => {
    // implement required logic
    toast({
      title: 'Success',
      description: 'Successfully logged out!',
    })
    replace('/login')
  }
}
