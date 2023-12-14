<script setup lang="ts">
import BookFormInput from './BookFormInput.vue'
import BookFormTextarea from './BookFormTextarea.vue'
</script>

<template>
  <form class="flex flex-col">
    <book-form-input label="제목" name="title"></book-form-input>
    <book-form-textarea label="책 소개" name="description"></book-form-textarea>
    <book-form-input label="저자" name="author"></book-form-input>
    <book-form-input label="출판사" name="publisher"></book-form-input>
    <book-form-input label="발행 연도" name="publisherYear"></book-form-input>
    <button class="mt-10 btn btn-outline">추가</button>
  </form>
</template>
