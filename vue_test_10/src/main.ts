

import { createApp } from 'vue'
import App from './App.vue'
import Child from './components/Child.vue'
import Send from './Send.vue'

const app=createApp(App)
app.component("Child",Child)
app.component("Send",Send)
app.mount('#app')
