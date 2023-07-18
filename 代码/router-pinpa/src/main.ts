import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

const app = createApp(App)
app.use(router) // 必须写在mount之前
app.use(store) // 必须写在mount之前
app.mount('#app')
