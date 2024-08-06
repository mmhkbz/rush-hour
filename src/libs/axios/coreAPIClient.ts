import {CORE_API_URL} from '@/configs'
import axios from 'axios'

export const coreAPIClient = axios.create({
  baseURL: CORE_API_URL,
  timeout: 1000 * 60, // 1 mins,
  timeoutErrorMessage: 'Connection was timeout!',
})
