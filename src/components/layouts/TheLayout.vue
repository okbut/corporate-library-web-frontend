<script setup lang="ts">
import TheHeader from '../ui/TheHeader.vue'
</script>

<template>
  <div class="flex flex-col items-center w-full min-h-screen">
    <TheHeader />
    <main class="flex flex-col items-center justify-center flex-1 w-2/5 mt-6">
      <slot />
    </main>
  </div>
</template>
