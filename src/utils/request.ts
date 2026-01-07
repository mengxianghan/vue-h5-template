import type { HttpOptions } from 'xy-http'
import { showToast } from 'vant'
import { createHttp } from 'xy-http'
import { config } from '@/configs'
import { ResponseError } from './throw'

const options: HttpOptions = {
  interceptorRequest: (request) => {
    request.headers = request.headers || {}

    return request
  },
  interceptorResponse: (response) => {
    const { code, message } = response.data

    if (!config.includes('code.ignore', code)) {
      showToast({
        message,
        forbidClick: true,
        duration: 1000,
      })
      throw new ResponseError(message, code)
    }

    return response.data
  },
}

export const basic = createHttp({
  ...options,
  baseURL: config.get('url.apiBasic'),
})
