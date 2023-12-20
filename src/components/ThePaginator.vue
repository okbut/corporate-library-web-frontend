<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps(['selectedPageNum'])
const emits = defineEmits(['selectPage'])

const pageNumsArray = ref([1, 2, 3, 4])

const onClickPageButton = (pageNum: number) => {
  emits('selectPage', pageNum)
}
</script>
<template>
  <div class="flex justify-center pt-5 join">
    <button
      class="join-item btn"
      :class="{ 'btn-active': pageNum === props.selectedPageNum }"
      v-for="pageNum in pageNumsArray"
      :key="pageNum"
      @click="() => onClickPageButton(pageNum)"
    >
      {{ pageNum }}
    </button>
  </div>
</template>
