import {toast} from '@/components/ui/use-toast'
import {AD_AUTH_API_URL} from '@/configs'
import axios, {AxiosError} from 'axios'

export const adAuthClient = axios.create({
  baseURL: AD_AUTH_API_URL,
  timeout: 1000 * 5, // 1 mins,
  timeoutErrorMessage: 'Connection was timeout!',
})

// response interceptor
adAuthClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // if (error instanceof AxiosError) {
    //   if (error.code === 'ECONNABORTED') {
    //     toast({
    //       title: 'Error',
    //       description: error.message,
    //       variant: 'destructive',
    //     })
    //   }
    // }
    throw error
  },
)
