//import './assets/main.css'

import Child from "./Child.vue"

import { createApp } from 'vue'
import App from './App.vue'

var app = createApp(App)
app.component('chi', Child)
app.mount('#app')