import axios from 'axios'

const baseURL = import.meta.env.MODE !== 'production' ? '/' : ''

export const axiosInstance = axios.create({
  baseURL
})
