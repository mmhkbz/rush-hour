'use server'
import {AD_AUTH_CLIENT_ID, AD_AUTH_SERVICE_ID, AES_SECRET} from '@/configs'
import {adAuthClient} from '@/libs'
import * as AES from 'aes-everywhere'
import {AxiosError, AxiosResponse} from 'axios'

type LoginParamType = {
  login_id: string
  password: string
}

export type LoginSuccessResponse = APIDataResponse<{
  accessToken: string
  ExpiresIn: string
  RefreshToken: string
  RefreshTokenExpiresIn: string
  RefreshCount: string
  IssuedAt: string
  RefreshTokenIssuedAt: string
  user_master_id: string
  user_name: string
  login_id: string
  branch_code: string
  position: string
  role_info: string
  dayleft: string
}>

export const login = async ({login_id, password}: LoginParamType) => {
  try {
    const cipherPassword = AES.encrypt(password, AES_SECRET)
    const body = loginRequestBodyFactory({
      login_id,
      password: cipherPassword,
    })
    const response: AxiosResponse<LoginSuccessResponse> =
      await adAuthClient.post('/AdAuth', body.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
    return response.data
  } catch (e) {
    if (e instanceof AxiosError) {
      return e.response?.data
    }
    return {
      message: 'Something went wrong, please try again later!',
      error: true,
    }
  }
}

function loginRequestBodyFactory(param: LoginParamType) {
  return new URLSearchParams({
    login_id: param.login_id,
    password: param.password,
    os_version: '',
    fb_token: '',
    longitude: '',
    latitude: '',
    app_version: '1.0.0',
    device_name: 'PC | Browser : Chrome | Version : 92',
    device_id: 'tjy0bgbpz3ei3jfjiwycnemg',
    app_platform: 'browser',
    client_id: AD_AUTH_CLIENT_ID,
    service_id: AD_AUTH_SERVICE_ID,
  })
}
