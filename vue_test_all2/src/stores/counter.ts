import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useStore  = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  let cartlist = reactive<any>([
])
  let goodlist = reactive<any>([
])

let good_key_flag=ref(0);
  return { count, doubleCount, increment,cartlist,goodlist,good_key_flag }
})
