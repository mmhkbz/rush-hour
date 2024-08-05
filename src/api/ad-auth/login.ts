import {AD_CLIENT_ID} from '@/configs'
import {adClient} from '@/libs'

type LoginParamType = {
  login_id: string
  password: string
}

export const login = async ({login_id, password}: LoginParamType) => {
  const body = new URLSearchParams({
    login_id,
    password,
    os_version: '',
    fb_token: '',
    longitude: '',
    latitude: '',
    app_version: '1.0.0',
    device_name: 'PC | Browser : Chrome | Version : 92',
    device_id: 'tjy0bgbpz3ei3jfjiwycnemg',
    app_platform: 'browser',
    client_id: AD_CLIENT_ID,
    service_id: '8cc96819-5d2b-4d3a-8c0d-35e2b6935479',
  })
  const response = await adClient.post('/AdAuth', body.toString(), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  return response
}
