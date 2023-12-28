import { axiosInstance } from './axiosInstance'

import type { AxiosResponse } from 'axios'
import type { BookFormType } from './../types/books'

export const BooksAPI: {
  list: (pageNum: number) => Promise<AxiosResponse<any, any>>
  detail: (code: string) => Promise<AxiosResponse<any, any>>
  add: (bookFormData: BookFormType) => Promise<AxiosResponse<any, any>>
} = {
  list: async (pageNum: number) => {
    const response = await axiosInstance(`/api/books?page=${String(pageNum)}&size=30`)

    return response
  },
  detail: async (code: string) => {
    const response = await axiosInstance(`/api/books/${code}`)

    return response
  },
  add: async (bookFormData: BookFormType) => {
    const response = await axiosInstance.post(`/api/books`, bookFormData)

    return response
  }
}
