export type BookType = {
  code: string
  classification: string | null
  isbn: string | null
  title: string
  description: string | null
  author: string
  publisher: string
  publishYear: string
}

export type BookFormType = Pick<
  BookType,
  'title' | 'description' | 'author' | 'publisher' | 'publishYear'
>
