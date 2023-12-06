<script setup lang="ts">
import BookList from '@/components/BookList.vue'
import SearchInput from '@/components/SearchInput.vue'
import TheLayout from '@/components/layouts/TheLayout.vue'
</script>

<template>
  <TheLayout>
    <div class="flex flex-col items-center p-3 mt-5">
      <SearchInput />
      <BookList />
    </div>
  </TheLayout>
</template>
