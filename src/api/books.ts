import apiClient from './apiClient'

export const BooksAPI = {
  list: async () => {
    const response = await apiClient.get('/books')

    return response
  }
}
