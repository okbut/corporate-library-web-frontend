<script setup lang="ts">
import TheLayout from '@/components/layouts/TheLayout.vue'
</script>

<template>
  <TheLayout>
    <div class="">
      <div></div>
      <div>
        <span>
          {{ $route.params.isbn }}
        </span>
      </div>
    </div>
  </TheLayout>
</template>
