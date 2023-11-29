<script setup lang="ts">
import { ref } from 'vue'
import BookItem from './BookItem.vue'

const dummyList = ref([
  {
    classification: '005.76-ㄱ935ㅇ',
    isbn: '9788937460388',
    title: '달과 6펜스',
    description:
      "'달과 6펜스'는 15종에 이르는 번역본이 이미 소개되어 있을 만큼 국내에서 크게 환영받는 작품이다.",
    author: '서머싯 몸',
    publisher: '민음사',
    publishYear: '2021'
  },
  {
    classification: '005.76-ㄱ935ㅇ',
    isbn: '9788937461033',
    title: '인간 실격',
    description:
      "자살 미수와 약물 중독, 39세의 젊은 나이에 자살로 생을 마감한 다자이 오사무의 작품 '인간 실격'이 출간됐다.",
    author: '다자이 오사무',
    publisher: '민음사',
    publishYear: '2004'
  }
])
</script>
<template>
  <div class="flex-1 w-full mt-10">
    <ul class="flex flex-col gap-3">
      <li v-for="book in dummyList" :key="book.isbn" class="flex justify-center">
        <BookItem :bookData="book" />
      </li>
    </ul>
  </div>
</template>
