import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export default function(){
    let sum = ref(0)

function getSum() {
  sum.value += 1; 
  //console.log(DD[0]);
  
}
return {sum,getSum}

}
