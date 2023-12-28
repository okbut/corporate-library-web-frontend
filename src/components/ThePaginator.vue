<script setup lang="ts">
import { computed } from 'vue'

import { pageNumbersGenerator } from '@/utils/pageNumbersGenerator'

const props = defineProps(['count', 'selectedPageNum'])
const emits = defineEmits(['selectPage'])

const computedSelectedPageNumber = computed(() => {
  return props.selectedPageNum
})

const pageCount = computed(() => {
  return Math.floor(props.count / 10) + 1
})

const pageNumbersArray = computed(() => {
  return pageNumbersGenerator(pageCount.value, computedSelectedPageNumber.value)
})

const onClickPageButton = (pageNum: number) => {
  emits('selectPage', pageNum)
}
</script>
<template>
  <div class="flex justify-center pt-5 join">
    <template v-if="computedSelectedPageNumber + 1 > 4">
      <button class="join-item btn" @click="() => onClickPageButton(0)">1</button>
      <button class="join-item btn btn-disabled">...</button>
    </template>
    <button
      class="join-item btn"
      :class="{ 'btn-active': pageNum === props.selectedPageNum + 1 }"
      v-for="pageNum in pageNumbersArray"
      :key="pageNum"
      @click="() => onClickPageButton(pageNum - 1)"
    >
      {{ pageNum }}
    </button>
    <template v-if="computedSelectedPageNumber + 1 < pageCount - 3">
      <button class="join-item btn btn-disabled">...</button>
      <button class="join-item btn" @click="() => onClickPageButton(pageCount - 1)">
        {{ pageCount }}
      </button>
    </template>
  </div>
</template>
