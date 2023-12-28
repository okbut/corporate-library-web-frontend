import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const isAuth = ref(false)
    const authenticate = () => {
      isAuth.value = true
    }
    const unauthorized = () => {
      isAuth.value = false
    }

    return { isAuth, authenticate, unauthorized }
  },
  {
    persist: true
  }
)
