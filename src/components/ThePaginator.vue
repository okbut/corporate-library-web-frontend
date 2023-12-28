<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps(['count', 'selectedPageNum'])
const emits = defineEmits(['selectPage'])

const computedSelectedPageNumber = computed(() => {
  return props.selectedPageNum
})

const pageNumbersArray = computed(() => {
  const pageNumArray = Array.from({ length: props.count }, (value, index) => index + 1)

  if (computedSelectedPageNumber.value < 5) {
    return pageNumArray.slice(0, 5)
  } else if (computedSelectedPageNumber.value >= props.count - 3) {
    return pageNumArray.slice(props.count - 5, props.count)
  }

  return pageNumArray.slice(
    computedSelectedPageNumber.value - 3,
    computedSelectedPageNumber.value + 2
  )
})

const onClickPageButton = (pageNum: number) => {
  emits('selectPage', pageNum)
}
</script>
<template>
  <div class="flex justify-center pt-5 join">
    <button
      class="join-item btn"
      :class="{ 'btn-active': pageNum === props.selectedPageNum + 1 }"
      v-for="pageNum in pageNumbersArray"
      :key="pageNum"
      @click="() => onClickPageButton(pageNum - 1)"
    >
      {{ pageNum }}
    </button>
  </div>
</template>
