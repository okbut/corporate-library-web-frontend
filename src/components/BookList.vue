<script setup lang="ts">
import BookItem from './BookItem.vue'
import ThePaginator from './ThePaginator.vue'

const props = defineProps(['bookList', 'count', 'selectedPageNum'])
const emits = defineEmits(['selectPage'])

const selectPageHandler = (pageNum: number) => {
  emits('selectPage', pageNum)
}
</script>
<template>
  <div class="flex-1 w-full mt-10">
    <div>
      <ul class="flex flex-col gap-3">
        <li v-for="book in props.bookList" :key="book.code" class="flex justify-center">
          <book-item :book-data="book" />
        </li>
      </ul>
      <the-paginator
        :count="props.count"
        :selected-page-num="props.selectedPageNum"
        @select-page="selectPageHandler"
      />
    </div>
  </div>
</template>
