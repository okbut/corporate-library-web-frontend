<script setup lang="ts">
import { ref } from 'vue'

import { AuthAPI } from '@/api/auth'

import TheLayout from '@/components/layouts/TheLayout.vue'

const id = ref('')
const password = ref('')

const submitHandler = async () => {
  const formData = new FormData()
  formData.append('username', id.value)
  formData.append('password', password.value)

  const res = AuthAPI.signIn(formData)

  console.log(res)
}
</script>

<template>
  <the-layout>
    <div class="flex flex-col items-center justify-center h-full">
      <form class="flex flex-col gap-5" @submit.prevent="submitHandler">
        <label>아이디</label>
        <input type="text" class="input input-bordered" v-model="id" />
        <label>비밀번호</label>
        <input type="password" class="input input-bordered" v-model="password" />
        <button class="btn">로그인</button>
      </form>
    </div>
  </the-layout>
</template>
