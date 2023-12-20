import type { BookFormType } from './../types/books'

const baseUrl = import.meta.env.MODE !== 'production' ? '/' : ''

export const BooksAPI = {
  list: async (pageNum: number) => {
    const response = await fetch(`${baseUrl}api/books?page=${String(pageNum)}&size=30`)
    const data = await response.json()

    return data
  },
  detail: async (code: string) => {
    const response = await fetch(`${baseUrl}api/books/${code}`)

    return response
  },
  add: async (bookFormData: BookFormType) => {
    console.log(JSON.stringify(bookFormData))

    const response = await fetch(`${baseUrl}api/books`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookFormData)
    })

    return response
  }
}
