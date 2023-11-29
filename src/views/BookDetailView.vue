<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue'
import TheLayout from '@/components/layouts/TheLayout.vue'
import { BooksAPI } from '@/api/books'
import { useRoute } from 'vue-router'
import type { BookDetailType } from '@/types/books'

const route = useRoute()
const bookDetail: Ref<BookDetailType | null> = ref(null)

const fetchBookDetail = async (code: string) => {
  const res = await BooksAPI.detail(code)
  const data = await res.data

  bookDetail.value = data
}

onMounted(() => {
  fetchBookDetail(route.params.code as string)
})
</script>

<template>
  <TheLayout>
    <div v-if="bookDetail">
      <div></div>
      <div class="flex flex-col gap-3">
        <p class="text-center">
          {{ bookDetail.title }}
        </p>
        <p>{{ bookDetail.description }}</p>
      </div>
    </div>
  </TheLayout>
</template>
