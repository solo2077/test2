<script lang="ts">
export default {
  name: "dackdack",
}

</script>


<template>
 {{ sum }}
 <br>
 {{ dackpinsum.allsum }}
 <button type="button" @click="Changallsum">修改allsum</button>
   <br>
   <button type="button" @click="dackpinptxt.hua2">获取土味情话</button>
     <ul>
      <li v-for="(a,index) in dackpinptxt.Sapitxt2":key="index">
      {{ 1+index+"."+"&nbsp"+a }}
    </li>
     </ul>
</template>
<script setup lang="ts">
import{useCounterStore} from"@/stores/counter"
import { usesum2 } from "@/hook/usesum2";
import{useptxtStore} from"@/stores/Ptxt"
let dackpinsum=useCounterStore();
let dackpinptxt=useptxtStore()
function Changallsum(){
    dackpinsum.allsum=8;
}





let {sum,add,jian}=usesum2();
</script>

<style scoped>

</style>
