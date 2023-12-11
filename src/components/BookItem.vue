<script setup lang="ts">
import type { BookType } from '@/types/books'

defineProps<{
  bookData: BookType
}>()
</script>
<template>
  <div class="w-4/5 h-20 p-2 border rounded-lg shadow-md">
    <router-link
      :to="{ name: 'book detail', params: { code: bookData.code } }"
      class="block w-full h-full"
    >
      <span>{{ bookData.title }}</span>
    </router-link>
  </div>
</template>
