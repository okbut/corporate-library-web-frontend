import { axiosInstance } from './axiosInstance'

import type { AxiosResponse } from 'axios'

export const AuthAPI: {
  signIn: (data: FormData) => Promise<AxiosResponse<any, any>>
} = {
  signIn: async (data: FormData) => {
    const response = await axiosInstance.post('api/auth/signin', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    return response
  }
}
