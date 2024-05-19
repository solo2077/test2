import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  let username=ref('');
  let  userpassword=ref('');
  function clear_username() {
    username.value='';
    userpassword.value='';
    
  }
  function registUserInfo(state: any,{name,password}: any) {
    username.value=name;
    userpassword.value=password;
    
  }



  return { count, doubleCount, increment,username ,userpassword,registUserInfo,clear_username}
})
