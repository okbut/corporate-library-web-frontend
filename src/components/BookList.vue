<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue'
import BookItem from './BookItem.vue'
import { BooksAPI } from '@/api/books'
import type { BookType } from '@/types/books'

const bookList: Ref<BookType[]> = ref([])
const fetchBookList = async () => {
  const res = await BooksAPI.list()

  console.log(res)

  const data = await res.data

  bookList.value = data
}

onMounted(() => {
  fetchBookList()
})
</script>
<template>
  <div class="flex-1 w-full mt-10">
    <ul class="flex flex-col gap-3">
      <li v-for="book in bookList" :key="book.code" class="flex justify-center">
        <BookItem :bookData="book" />
      </li>
    </ul>
  </div>
</template>
