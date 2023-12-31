import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { VueQueryPlugin } from '@tanstack/vue-query'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(VueQueryPlugin)

// const enableMocking = async () => {
//   if (import.meta.env.MODE !== 'development') return

//   const { worker } = await import('./mocks/browser')
//   return worker.start({ onUnhandledRequest: 'bypass' })
// }

// enableMocking().then(() => app.mount('#app'))

app.mount('#app')
