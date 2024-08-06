'use server'
import {AD_CLIENT_ID, AD_CLIENT_SECRET} from '@/configs'
import {adClient} from '@/libs'
import {AxiosError, AxiosResponse} from 'axios'

type RequestTokenSuccessResponse = APIDataResponse<{
  access_token: string
}>

export const requestLoginToken = async () => {
  try {
    const response: AxiosResponse<RequestTokenSuccessResponse> =
      await adClient.get('/requesttoken', {
        headers: {
          'Content-Type': 'x-www-form-urlencoded',
        },
        params: new URLSearchParams({
          client_id: AD_CLIENT_ID,
          client_secret: AD_CLIENT_SECRET,
        }).toString(),
      })
    return response
  } catch (e) {
    if (e instanceof AxiosError) {
      console.log(e.response?.data)
      return
    }
    console.log(e)
    return {
      message: 'Somthing went wrong, Please try again later!',
      error: true,
    }
  }
}
