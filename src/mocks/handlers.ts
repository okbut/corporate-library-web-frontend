import { http, HttpResponse, HttpHandler } from 'msw'
import { dummyBookList } from './data/dummyBookList'

export const handlers: HttpHandler[] = [
  http.get('http://localhost:5173/api/books', ({ request }) => {
    const url = new URL(request.url)
    const page = url.searchParams.get('page')

    if (!page) return

    return HttpResponse.json([...dummyBookList[Number(page) - 1]])
  }),
  http.get('http://localhost:5173/api/books/:code', ({ params }) => {
    const { code } = params
    const foundBook = dummyBookList.flat().filter((book) => book.code === code)

    return HttpResponse.json(...foundBook)
  })
]
