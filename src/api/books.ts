import { axiosInstance } from './axiosInstance'

import type { AxiosResponse } from 'axios'
import type { BookFormType } from './../types/books'
import type { SearchFormType } from './../types/books'

export const BooksAPI: {
  list: (searchForm: SearchFormType) => Promise<AxiosResponse<any, any>>
  detail: (code: string) => Promise<AxiosResponse<any, any>>
  add: (bookFormData: BookFormType) => Promise<AxiosResponse<any, any>>
} = {
  list: async ({ pageNum, keyword }: SearchFormType) => {
    let query = `?page=${String(pageNum)}&size=10`

    if (keyword !== '') {
      query = query.concat(`&q=${keyword}`)
    }

    const response = await axiosInstance(`/api/books?${query}`)

    return response
  },
  detail: async (code: string) => {
    const response = await axiosInstance(`/api/books/${code}`)

    return response
  },
  add: async (bookFormData: BookFormType) => {
    const response = await axiosInstance.post(`/admin/books`, bookFormData)

    return response
  }
}
