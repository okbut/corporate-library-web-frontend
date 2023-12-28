import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

const baseURL = import.meta.env.MODE !== 'production' ? '/api' : ''

export const axiosInstance = axios.create({
  baseURL
})

axiosInstance.interceptors.request.use((config) => {
  const store = useAuthStore()

  if (config.url !== 'api/auth/signin' && config.url !== '/auth/signin') {
    const accessToken = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')

    if (!accessToken || !refreshToken) {
      store.unauthorized()
      throw Error('Token is missing.')
    }

    config.headers.Authorization = 'Bearer ' + accessToken
  }

  return config
})

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const store = useAuthStore()

    const {
      config,
      response: { status }
    } = error

    const originalRequest = config

    if (status === 401) {
      const refreshToken = localStorage.getItem('refreshToken')
      try {
        const res = await axios.post(
          `${import.meta.env.MODE !== 'production' ? '/api' : ''}/auth/refresh`,
          {
            refreshToken
          }
        )

        const data = await res.data

        const newAccessToken = data.accessToken
        const newRefreshToken = data.refreshToken

        originalRequest.headers = {
          Authorization: 'Bearer ' + newAccessToken
        }
        localStorage.setItem('accessToken', newAccessToken)
        localStorage.setItem('refreshToken', newRefreshToken)

        try {
          return await axios(originalRequest)
        } catch (err) {
          console.log('err after refresh')
          return err
        }
      } catch (err) {
        console.log('err in refresh')
        console.log(err)
        store.unauthorized()
        return Promise.reject(err)
      }
    }
  }
)
