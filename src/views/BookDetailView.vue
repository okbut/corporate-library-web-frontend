<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue'
import TheLayout from '@/components/layouts/TheLayout.vue'
import { BooksAPI } from '@/api/books'
import { useRoute } from 'vue-router'
import type { BookType } from '@/types/books'

const route = useRoute()
const bookDetail: Ref<BookType | null> = ref(null)

const fetchBookDetail = async (code: string) => {
  const res = await BooksAPI.detail(code)

  bookDetail.value = res.data
}

onMounted(() => {
  fetchBookDetail(route.params.code as string)
})
</script>

<template>
  <the-layout>
    <div class="flex items-center justify-center w-full h-full gap-10" v-if="bookDetail">
      <div class="flex flex-col gap-5">
        <div class="flex flex-col items-center justify-center w-full">
          <span class="text-sm text-slate-400">ISBN</span>
          <p>{{ bookDetail.isbn ? bookDetail.isbn : '없음' }}</p>
        </div>
        <div class="flex flex-col items-center justify-center w-full">
          <span class="text-sm text-slate-400">제목</span>
          <p>{{ bookDetail.title }}</p>
        </div>
        <div class="flex flex-col items-center justify-center w-full">
          <span class="text-sm text-slate-400">저자</span>
          <p>{{ bookDetail.author }}</p>
        </div>
        <div class="flex flex-col items-center justify-center w-full">
          <span class="text-sm text-slate-400">발행 연도</span>
          <p>{{ bookDetail.publishYear }}</p>
        </div>
        <div class="flex flex-col items-center justify-center w-full">
          <span class="text-sm text-slate-400">출판사</span>
          <p>{{ bookDetail.publisher }}</p>
        </div>
        <div class="flex flex-col items-center justify-center w-full">
          <span class="text-sm text-slate-400">책 소개</span>
          <p>{{ bookDetail.description ? bookDetail.description : '없음' }}</p>
        </div>
      </div>
    </div>
  </the-layout>
</template>
