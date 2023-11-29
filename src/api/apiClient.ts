import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.BASE_URL
})

export default apiClient
