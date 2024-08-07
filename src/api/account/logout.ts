'use server'

import {COOKIE_KEYS} from '@/configs'
import {cookies} from 'next/headers'

export const logout = async () => {
  const cookieStore = cookies()
  cookieStore.delete(COOKIE_KEYS.ACCESS_TOKEN)
  cookieStore.delete(COOKIE_KEYS.REFRESH_TOKEN)
  return
}
