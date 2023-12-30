<script setup lang="ts">
import BookList from '@/components/BookList.vue'
import SearchInput from '@/components/SearchInput.vue'
import TheLayout from '@/components/layouts/TheLayout.vue'
</script>

<template>
  <the-layout>
    <div class="flex flex-col items-center p-3">
      <search-input />
      <book-list />
    </div>
  </the-layout>
</template>
