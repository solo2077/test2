import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  let DD=reactive<any>([])
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  async  function aj(){
    let apitxt =await axios.get("https://api.uomg.com/api/rand.qinghua?format=json"); 
    console.log(apitxt.data.content);
    DD.unshift(apitxt.data.content);
  }

  return { count, doubleCount, increment }
})
