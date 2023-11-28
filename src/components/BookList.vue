<script setup lang="ts">
import BookItem from './BookItem.vue'
</script>
<template>
  <div class="flex-1 w-full mt-10">
    <ul class="flex flex-col gap-3">
      <li>
        <BookItem title="달과 6펜스" />
      </li>
      <li>
        <BookItem title="인간 실격" />
      </li>
    </ul>
  </div>
</template>
