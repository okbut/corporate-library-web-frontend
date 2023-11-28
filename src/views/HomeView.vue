<script setup lang="ts">
import BookList from '@/components/BookList.vue'
import SearchInput from '@/components/SearchInput.vue'
import TheLayout from '@/components/layouts/TheLayout.vue'
</script>

<template>
  <TheLayout>
    <SearchInput />
    <BookList />
  </TheLayout>
</template>
