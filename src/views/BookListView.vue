<script setup lang="ts">
import { ref } from 'vue'
import { useQuery, useQueryClient } from '@tanstack/vue-query'

import { BooksAPI } from '@/api/books'

import TheLayout from '@/components/layouts/TheLayout.vue'
import TheSpinner from '@/components/ui/TheSpinner.vue'
import SearchInput from '@/components/SearchInput.vue'
import BookList from '@/components/BookList.vue'

const queryClient = useQueryClient()

const selectedPageNum = ref(0)
const enteredKeyword = ref('')

const {
  isPending: bookListIsPending,
  isError: bookListIsError,
  data: bookListData
} = useQuery({
  queryKey: ['bookList', selectedPageNum],
  queryFn: () => BooksAPI.list({ pageNum: selectedPageNum.value, keyword: enteredKeyword.value })
})

const selectPage = (pageNum: number) => {
  selectedPageNum.value = pageNum
}

const submitKeyword = (keyword: string) => {
  enteredKeyword.value = keyword
  queryClient.invalidateQueries({ queryKey: ['bookList'] })
}
</script>

<template>
  <the-layout>
    <div class="flex flex-col items-center w-full h-full p-3">
      <search-input v-model:enteredKeyword="enteredKeyword" @submit-keyword="submitKeyword" />
      <the-spinner v-if="bookListIsPending"></the-spinner>
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
