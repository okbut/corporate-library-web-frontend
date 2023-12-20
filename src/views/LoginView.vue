<script setup lang="ts">
import { ref } from 'vue'

import TheLayout from '@/components/layouts/TheLayout.vue'

const id = ref('')
const password = ref('')

const submitHandler = () => {
  console.log(id)
  console.log(password)
}
</script>

<template>
  <the-layout>
    <div class="flex flex-col items-center justify-center h-full">
      <form class="flex flex-col gap-5" @submit="submitHandler">
        <label>아이디</label>
        <input type="text" class="input input-bordered" v-model="id" />
        <label>비밀번호</label>
        <input type="text" class="input input-bordered" v-model="password" />
      </form>
    </div>
  </the-layout>
</template>
