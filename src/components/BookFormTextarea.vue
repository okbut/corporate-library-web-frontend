<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{ label: string; name: string }>()
</script>

<template>
  <label class="form-control">
    <div class="label">
      <span class="label-text">{{ label }}</span>
    </div>
    <textarea :name="name" class="textarea textarea-bordered" />
    <slot />
  </label>
</template>
