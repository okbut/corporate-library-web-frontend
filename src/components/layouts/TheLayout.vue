<script setup lang="ts">
import TheHeader from '../ui/TheHeader.vue'
</script>

<template>
  <div class="flex flex-col items-center w-full h-screen">
    <div class="flex flex-col w-full h-full md:w-8/12 lg:w-6/12">
      <TheHeader />
      <main class="flex-1">
        <slot />
      </main>
    </div>
  </div>
</template>
