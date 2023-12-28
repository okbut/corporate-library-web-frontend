<script setup lang="ts">
import { ref } from 'vue'
import { useQuery } from '@tanstack/vue-query'

import ThePaginator from './ThePaginator.vue'
import BookItem from './BookItem.vue'

import { BooksAPI } from '@/api/books'

const selectedPageNum = ref(0)

const {
  isPending: bookListIsPending,
  isError: bookListIsError,
  data: bookListData
} = useQuery({
  queryKey: ['bookList', selectedPageNum],
  queryFn: () => BooksAPI.list(selectedPageNum.value)
})

const selectPage = (pageNum: number) => {
  selectedPageNum.value = pageNum
}
</script>
<template>
  <div class="flex-1 w-full mt-10">
    <div v-if="bookListData && !bookListIsPending && !bookListIsError">
      <ul class="flex flex-col gap-3">
        <li v-for="book in bookListData.data.books" :key="book.code" class="flex justify-center">
          <book-item :book-data="book" />
        </li>
      </ul>
      <the-paginator
        :count="bookListData.data.totalCount"
        :selected-page-num="selectedPageNum"
        @select-page="selectPage"
      />
    </div>
  </div>
</template>
