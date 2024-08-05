import {AD_CLIENT_ID, AD_CLIENT_SECRET} from '@/configs'
import {adClient} from '@/libs'

export const requestToken = async () => {
  const response = await adClient.post(
    '/requesttoken',
    new URLSearchParams({
      client_id: AD_CLIENT_ID,
      client_secret: AD_CLIENT_SECRET,
    }).toString(),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  )
  return response
}
