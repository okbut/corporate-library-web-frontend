<script setup lang="ts">
const props = defineProps<{
  thumbnail?: string
  title: string
}>()
</script>
<template>
  <div>
    <span>{{ title }}</span>
  </div>
</template>
