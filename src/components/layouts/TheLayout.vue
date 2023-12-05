<script setup lang="ts">
import TheHeader from '../ui/TheHeader.vue'
</script>

<template>
  <div class="flex flex-col items-center w-full min-h-screen">
    <div class="artboard artboard-horizontal phone-1">
      <TheHeader />
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>
