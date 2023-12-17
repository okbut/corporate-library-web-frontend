import type { BookFormType } from './../types/books'

const baseUrl = import.meta.env.MODE !== 'production' ? '/' : ''

export const BooksAPI = {
  list: async (pageNum: number) => {
    const response = await fetch(`${baseUrl}api/books?page=${String(pageNum)}&size=30`)

    return response
  },
  detail: async (code: string) => {
    const response = await fetch(`${baseUrl}api/books/${code}`)

    return response
  },
  add: async (bookFormData: BookFormType) => {
    const response = await fetch(`${baseUrl}api/books`, {
      method: 'POST',
      body: JSON.stringify(bookFormData)
    })

    return response
  }
}
