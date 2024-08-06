import {ROLE_API_URL} from '@/configs'
import axios from 'axios'

export const roleClient = axios.create({
  baseURL: ROLE_API_URL,
  timeout: 1000 * 60, // 1 mins,
  timeoutErrorMessage: 'Connection was timeout!',
})
