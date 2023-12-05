<script setup lang="ts">
import TheHeader from '../ui/TheHeader.vue'
</script>

<template>
  <div class="flex flex-col items-center w-full h-screen">
    <div class="flex flex-col w-1/2 h-full">
      <TheHeader />
      <main class="flex-1">
        <slot />
      </main>
    </div>
  </div>
</template>
