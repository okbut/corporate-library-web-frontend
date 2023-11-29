<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps<{
  bookData: {
    classification: string
    isbn: string
    title: string
    description: string
    author: string
    publisher: string
    publishYear: string
  }
}>()
</script>
<template>
  <div class="w-4/5 h-20 p-2 border rounded-lg shadow-md">
    <RouterLink
      :to="{ name: 'book detail', params: { isbn: bookData.isbn } }"
      class="block w-full h-full"
    >
      <span>{{ bookData.title }}</span>
    </RouterLink>
  </div>
</template>
