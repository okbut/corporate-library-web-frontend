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
      <div>
        <p class="text-sm">
          {{ bookDetail.title }}
        </p>
        <p>{{ bookDetail.description }}</p>
      </div>
    </div>
  </the-layout>
</template>
