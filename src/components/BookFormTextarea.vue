<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{ label: string; modelValue: string | undefined }>()
defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <label class="form-control">
    <div class="label">
      <span class="label-text">{{ label }}</span>
    </div>
    <textarea
      class="textarea textarea-bordered"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <slot />
  </label>
</template>
