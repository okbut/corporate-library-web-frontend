import apiClient from './apiClient'

export const BooksAPI = {
  list: async () => {
    const response = await apiClient.get('/books')

    return response
  },
  detail: async (code: string) => {
    const response = await apiClient.get(`/books/${code}`)

    return response
  }
}
