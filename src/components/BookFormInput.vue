<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps<{ label: string; name: string; inputValue: string | null; validation: boolean }>()
defineEmits<{
  (e: 'update:inputValue', value: string): void
}>()
</script>

<template>
  <label class="form-control">
    <div class="label">
      <span class="label-text">{{ label }}</span>
    </div>
    <input
      type="text"
      :name="name"
      :value="inputValue"
      class="input input-bordered"
      :class="{ 'border-red-300': !validation }"
      @input="$emit('update:inputValue', ($event.target as HTMLInputElement).value)"
    />
    <slot />
  </label>
</template>
