

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import dackdack from '@/components/dackdack.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("dackdack",dackdack)

app.mount('#app')
