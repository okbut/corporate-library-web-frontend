<script setup lang="ts">
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

import BookFormInput from './BookFormInput.vue'
import BookFormTextarea from './BookFormTextarea.vue'
import { BooksAPI } from '@/api/books'
import type { BookFormType } from '@/types/books'

const schema = yup.object({
  title: yup.string().required(),
  description: yup.string(),
  author: yup.string().required(),
  publisher: yup.string().required(),
  publishYear: yup.string().required()
})

const { value: title, errorMessage: titleError } = useField<string>('title')
const { value: description } = useField<string>('description')
const { value: author, errorMessage: authorError } = useField<string>('author')
const { value: publisher, errorMessage: publisherError } = useField<string>('publisher')
const { value: publishYear, errorMessage: publishYearError } = useField<string>('publishYear')

const { handleSubmit } = useForm<BookFormType>({
  validationSchema: schema
})

const submitHandler = handleSubmit(async (values) => {
  try {
    const data = {
      title: values.title,
      description: values.description ?? '',
      author: values.author,
      publisher: values.publisher,
      publishYear: values.publishYear
    }

    console.log(data)

    await BooksAPI.add(data)
  } catch (err) {
    console.log(err)
    alert('도서 생성에 실패했습니다. 다시 시도해주세요.')
  }
})
</script>

<template>
  <form class="flex flex-col" @submit.prevent="submitHandler">
    <book-form-input label="제목" v-model="title" :error="titleError"></book-form-input>
    <book-form-textarea label="책 소개" v-model="description"></book-form-textarea>
    <book-form-input label="저자" v-model="author" :error="authorError"></book-form-input>
    <book-form-input label="출판사" v-model="publisher" :error="publisherError"></book-form-input>
    <book-form-input
      label="발행 연도"
      v-model="publishYear"
      :error="publishYearError"
    ></book-form-input>
    <button class="mt-10 btn btn-outline">추가</button>
  </form>
</template>
