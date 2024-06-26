import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  let AllDD =reactive([]);
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment ,allsum:7}
})
