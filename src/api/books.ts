export const BooksAPI = {
  list: async (pageNum: number) => {
    const response = await fetch(`/api/books?page=${String(pageNum)}&size=30`)

    return response
  },
  detail: async (code: string) => {
    const response = await fetch(`/api/books/${code}`)

    return response
  }
}
