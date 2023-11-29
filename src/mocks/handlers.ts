import { http, HttpResponse, HttpHandler } from 'msw'
import { dummyBookList } from './data/dummyBookList'
import { dummyBookDetail } from './data/dummyBookDetail'

export const handlers: HttpHandler[] = [
  http.get('http://localhost:5173/books', () => {
    return HttpResponse.json([...dummyBookList])
  }),
  http.get('http://localhost:5173/books/:id', () => {
    return HttpResponse.json({ ...dummyBookDetail })
  })
]
