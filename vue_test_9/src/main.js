import heard from "@/components/heard.vue"
import main from "@/components/main.vue"
import text1 from "@/components/text1.vue"
import text2 from "@/components/text2.vue"
import select from "@/components/select.vue"
import adise from "@/components/adise.vue"
import a1 from "@/components/a1.vue"
import a2 from "@/components/a2.vue"
import a3 from "@/components/a3.vue"


import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.component('heard', heard);
app.component('ma', main);
app.component('text1', text1);
app.component('text2', text2);
app.component('select1', select);
app.component('adise1', adise);
app.component('a1', a1);
app.component('a2', a2);
app.component('a3', a3);
app.mount('#app')