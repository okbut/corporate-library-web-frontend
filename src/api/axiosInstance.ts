import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

const baseURL = import.meta.env.MODE !== 'production' ? '/' : ''

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
