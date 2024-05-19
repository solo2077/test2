import { ref } from 'vue';
import{useCounterStore} from"@/stores/counter"
export  function usesum2(){
let sumpin=useCounterStore()
let sum =ref(0)
function add() {
  sum.value += 1;
  console.log("++砖石"+sum.value);
  sumpin.increment();
  console.log(sumpin.count);
  
  
  
}
function jian() {
  sum.value -= 1;
  console.log("--砖石"+sum.value);
  
}
return{sum,add,jian}
}
