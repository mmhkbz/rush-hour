import {AD_API_BASE_URL} from '@/configs'
import axios from 'axios'

export const adClient = axios.create({
  baseURL: AD_API_BASE_URL,
  timeout: 1000 * 60, // 1 mins,
  timeoutErrorMessage: 'Connection was timeout!',
})
