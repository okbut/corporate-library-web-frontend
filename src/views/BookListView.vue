<script setup lang="ts">
import { ref } from 'vue'
import { useQuery } from '@tanstack/vue-query'

import { BooksAPI } from '@/api/books'

import BookList from '@/components/BookList.vue'
import SearchInput from '@/components/SearchInput.vue'
import TheLayout from '@/components/layouts/TheLayout.vue'

const selectedPageNum = ref(0)
const enteredKeyword = ref('')

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
  <the-layout>
    <div class="flex flex-col items-center p-3">
      <search-input v-model:enteredKeyword="enteredKeyword" />
      <book-list
        v-if="!bookListIsPending && !bookListIsError && bookListData"
        :book-list="bookListData.data.books"
        :count="bookListData.data.totalCount"
        :selected-page-num="selectedPageNum"
        @select-page="selectPage"
      />
    </div>
  </the-layout>
</template>
