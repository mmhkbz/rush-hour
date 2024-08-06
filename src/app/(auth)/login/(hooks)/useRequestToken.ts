import {requestLoginToken} from '@/api/ad-auth'
import {useMutation} from '@tanstack/react-query'

export const useRequestToken = () =>
  useMutation({
    mutationKey: ['request-token'],
    mutationFn: requestLoginToken,
  })
