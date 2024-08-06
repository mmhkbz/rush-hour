import {AD_AUTH_API_URL} from '@/configs'
import axios from 'axios'

export const adAuthClient = axios.create({
  baseURL: AD_AUTH_API_URL,
  timeout: 1000 * 60, // 1 mins,
  timeoutErrorMessage: 'Connection was timeout!',
})
