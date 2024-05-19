import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const Store2 = defineStore('counter2', () => {
  const count = ref(0)
  

  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  let username=ref("白菜");
  let userpassword=ref("123");
  let url=ref("https://api.uomg.com/api/rand.qinghua?format=json")
  function islogin(){
    return username.value.length;

  }

  return {islogin,username,userpassword,url}
})
