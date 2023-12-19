//@ts-nocheck
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueMathjax from "vue-mathjax-next"
import App from './App.vue'

import './assets/main.css'

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

axios.defaults.baseURL = import.meta.env.VITE_API_URL

const pinia = createPinia()
const app = createApp(App)
app.use(VueMathjax)
app.use(pinia)
app.use(router)
app.mount('#app')
