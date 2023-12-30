<script setup lang="ts">
import type { BookType } from '@/types/books'

defineProps<{
  bookData: BookType
}>()
</script>
<template>
  <div class="w-4/5 p-5 border rounded-lg shadow-md min-h-52">
    <div class="relative">
      <span class="absolute top-0 left-0 text-xs select-none text-slate-300">도서명</span>
      <router-link
        :to="{ name: 'book detail', params: { code: bookData.code } }"
        class="block py-6"
      >
        <span class="underline underline-offset-4 decoration-1 decoration-slate-400">
          {{ bookData.title }}
        </span>
      </router-link>
    </div>
    <div class="relative">
      <span class="absolute top-0 left-0 text-xs select-none text-slate-300">저자</span>
      <p class="py-6">{{ bookData.author }}</p>
    </div>
    <div class="grid grid-cols-2">
      <div class="relative">
        <span class="absolute top-0 left-0 text-xs select-none text-slate-300">출판사</span>
        <p class="py-6">{{ bookData.publisher }}</p>
      </div>
      <div class="relative">
        <span class="absolute top-0 left-0 text-xs select-none text-slate-300">발행 연도</span>
        <p class="py-6">{{ bookData.publishYear }}</p>
      </div>
    </div>
  </div>
</template>
