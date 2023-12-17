<script setup lang="ts">
import { ref, computed } from 'vue'

import BookFormInput from './BookFormInput.vue'
import BookFormTextarea from './BookFormTextarea.vue'
import { BooksAPI } from '@/api/books'

const title = ref<string | null>(null)
const titleValidity = computed(() => {
  if (title.value === '') return false

  return true
})
const description = ref<string | null>(null)
const descriptionValidity = computed(() => {
  if (description.value && description.value === '') return false

  return true
})
const author = ref<string | null>(null)
const authorValidity = computed(() => {
  if (author.value && author.value === '') return false

  return true
})
const publisher = ref<string | null>(null)
const publisherValidity = computed(() => {
  if (publisher.value && publisher.value === '') return false

  return true
})
const publisherYear = ref<string | null>(null)
const publisherYearValidity = computed(() => {
  if (publisherYear.value && publisherYear.value === '') return false

  return true
})

function submitHandler(e: Event) {
  e.preventDefault()

  if (title.value === null) {
    title.value = ''
  }

  if (description.value === null) {
    description.value = ''
  }

  if (author.value === null) {
    author.value = ''
  }

  if (publisher.value === null) {
    publisher.value = ''
  }

  if (publisherYear.value === null) {
    publisherYear.value = ''
  }

  const data = {
    title: title.value,
    description: description.value,
    author: author.value,
    publisher: publisher.value,
    publisherYear: publisherYear.value
  }

  console.log(data)
}
</script>

<template>
  <form class="flex flex-col" @submit="submitHandler">
    <book-form-input
      label="제목"
      name="title"
      v-model:input-value.trim="title"
      :validation="titleValidity"
    ></book-form-input>
    <book-form-textarea
      label="책 소개"
      name="description"
      v-model:input-value.trim="description"
      :validation="descriptionValidity"
    ></book-form-textarea>
    <book-form-input
      label="저자"
      name="author"
      v-model:input-value.trim="author"
      :validation="authorValidity"
    ></book-form-input>
    <book-form-input
      label="출판사"
      name="publisher"
      v-model:input-value.trim="publisher"
      :validation="publisherValidity"
    ></book-form-input>
    <book-form-input
      label="발행 연도"
      name="publisherYear"
      v-model:input-value.trim="publisherYear"
      :validation="publisherYearValidity"
    ></book-form-input>
    <button class="mt-10 btn btn-outline">추가</button>
  </form>
</template>
