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
  const data = await res.data

  bookDetail.value = data
}

onMounted(() => {
  fetchBookDetail(route.params.code as string)
})
</script>

<template>
  <TheLayout>
    <div class="grid justify-center gap-10 mt-10" v-if="bookDetail">
      <div class="flex justify-center">
        <div
          class="flex items-center self-center justify-center w-9/12 border border-gray-200 rounded-lg h-60"
        >
          <span>QR 코드 자리</span>
        </div>
      </div>
      <div>
        <p class="text-sm">
          {{ bookDetail.title }}
        </p>
        <p>{{ bookDetail.description }}</p>
      </div>
    </div>
  </TheLayout>
</template>
