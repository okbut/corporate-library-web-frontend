import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const isAuth = ref(false)
    const isAdmin = ref(false)
    const setAdmin = () => {
      isAdmin.value = true
    }
    const authenticate = () => {
      isAuth.value = true
    }
    const unauthorized = () => {
      isAuth.value = false
      isAdmin.value = false
    }

    return { isAuth, isAdmin, setAdmin, authenticate, unauthorized }
  },
  {
    persist: true
  }
)
