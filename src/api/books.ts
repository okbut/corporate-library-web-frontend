import type { AxiosResponse } from 'axios'
import apiClient from './apiClient'

export const BooksAPI: {
  list: (pageNum: number) => Promise<AxiosResponse<any, any>>
  detail: (code: string) => Promise<AxiosResponse<any, any>>
} = {
  list: async (pageNum: number) => {
    const response = await apiClient.get(`/books?page=${String(pageNum)}`)

    return response
  },
  detail: async (code: string) => {
    const response = await apiClient.get(`/books/${code}`)

    return response
  }
}
