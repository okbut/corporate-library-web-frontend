<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useJwt } from '@vueuse/integrations/useJwt'

import { AuthAPI } from '@/api/auth'
import { useAuthStore } from '@/stores/auth'

import TheLayout from '@/components/layouts/TheLayout.vue'

const router = useRouter()

const store = useAuthStore()

const id = ref('')
const password = ref('')

const submitHandler = async () => {
  const formData = new FormData()
  formData.append('username', id.value)
  formData.append('password', password.value)

  const res = await AuthAPI.signIn(formData)
  const data = res.data

  const { payload } = useJwt<{ exp: number; iat: number; role: string; sub: string }>(
    data.accessToken
  )

  console.log(payload)

  localStorage.setItem('username', payload.value ? payload.value.sub! : '')
  localStorage.setItem('role', payload.value ? payload.value.role! : '')
  localStorage.setItem('accessToken', data.accessToken)
  localStorage.setItem('refreshToken', data.refreshToken)

  store.authenticate()

  router.push('/books')
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
