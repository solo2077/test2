import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import pass123 from "./components/pass123.vue"

const app = createApp(App)

app.use(createPinia())
app.component('pass123', pass123)

app.mount('#app')
