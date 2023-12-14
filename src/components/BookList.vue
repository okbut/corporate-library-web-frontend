<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue'
import ThePaginator from './ThePaginator.vue'
import BookItem from './BookItem.vue'

import type { BookType } from '@/types/books'
import { BooksAPI } from '@/api/books'

const bookList: Ref<BookType[]> = ref([])
const fetchBookList = async (pageNum: number) => {
  const res = await BooksAPI.list(pageNum)

  const data = await res.json()

  bookList.value = data
}

onMounted(() => {
  fetchBookList(1)
})

const selectedPageNum = ref(1)

const onSelectedPage = (pageNum: number) => {
  selectedPageNum.value = pageNum
  fetchBookList(pageNum)
}
</script>
<template>
  <div class="flex-1 w-full mt-10">
    <ul class="flex flex-col gap-3">
      <li v-for="book in bookList" :key="book.code" class="flex justify-center">
        <book-item :book-data="book" />
      </li>
    </ul>
    <the-paginator :selected-page-num="selectedPageNum" @on-selected-page="onSelectedPage" />
  </div>
</template>
