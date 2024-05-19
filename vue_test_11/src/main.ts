import { createApp } from 'vue'
import App from './App.vue'
import setting from './components/setting.vue'
import send from './components/send.vue'

let app = createApp(App)
app.component('setting', setting)
app.component('send', send)
app.mount('#app')
