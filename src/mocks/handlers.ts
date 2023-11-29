import { http, HttpResponse, HttpHandler } from 'msw'
import { dummyBookList } from './data/dummyBookList'

export const handlers: HttpHandler[] = [
  http.get('http://localhost:5173/books', () => {
    return HttpResponse.json([...dummyBookList])
  })
]
