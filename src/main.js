import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Loader from '@/components/Loader.vue'
import './assets/main.css'
const pinia = createPinia()

const app = createApp(App)

app.component('Loader', Loader)

app.use(router)
app.use(pinia)

app.mount('#app')
