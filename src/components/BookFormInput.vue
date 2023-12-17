<script setup lang="ts">
defineProps<{
  label: string
  modelValue: string | undefined
  error: string | undefined
}>()
defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <label class="form-control">
    <div class="label">
      <span class="label-text">{{ label }}</span>
    </div>
    <input
      type="text"
      class="input input-bordered"
      :class="{ 'border-red-200': error }"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <slot />
  </label>
</template>
