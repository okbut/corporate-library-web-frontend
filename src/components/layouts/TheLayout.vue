<script setup lang="ts">
import TheHeader from '../ui/TheHeader.vue'
</script>

<template>
  <div class="flex flex-col items-center w-full h-screen">
    <div class="flex flex-col w-full h-full gap-10 md:w-8/12 lg:w-6/12">
      <the-header />
      <main class="flex-1">
        <slot />
      </main>
    </div>
  </div>
</template>
