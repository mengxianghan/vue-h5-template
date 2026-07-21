import type { HttpOptions } from 'xy-http'
import { showToast } from 'vant'
import { createHttp } from 'xy-http'
import { HTTP_CODE_IGNORE, URL_API_BASIC } from '@/constants'
import { ResponseError } from './errors'

const options: HttpOptions = {
  interceptorRequest: (request) => {
    request.headers = request.headers || {}

    return request
  },
  interceptorResponse: (response) => {
    const { code, message } = response.data

    if (!HTTP_CODE_IGNORE.includes(code)) {
      showToast({
        message,
        forbidClick: true,
        duration: 1000,
      })
      throw new ResponseError(message, code)
    }

    return response
  },
}

export const basic = createHttp({
  ...options,
  baseURL: URL_API_BASIC,
})
