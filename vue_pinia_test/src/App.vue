<script lang="ts">
export default {
  name: "App",
}

</script>


<template>
   <div>
      <dackdack></dackdack>
   </div>
  <div>
    {{ "111---"+apppinCounter.allsum }}<br/>
    {{"222---"+ sum }}<br/>
    {{"3333---" +apppinCounter.count }}<br/>
    <br/>
    <button type="button" @click="add">Add</button>
    <button type="button" @click="jian">减少</button>
  </div>
  <div>
     <button type="button" @click="apppinPtxt.hua2">获取土味情话</button>
     <ul>
      <li v-for="(a,index) in Sapitxt2":key="index">
      {{ 1+index+"."+"&nbsp"+a }}
    </li>
     </ul>
  </div>
  
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { usesum2 } from "./hook/usesum2";
import { Utxt } from "./hook/Utxt";
import{useCounterStore} from"./stores/counter"
import{useptxtStore} from"./stores/Ptxt"
let {sum,add,jian}=usesum2();

let apppinCounter=useCounterStore()
let apppinPtxt=useptxtStore()
//let {Sapitxt2,hua2}=storeToRefs( apppinPtxt)  这里有问题，找人看一下
console.log("iiii",apppinPtxt);

let { Sapitxt2 } = storeToRefs(apppinPtxt);

    
</script>

<style scoped>
div{
  font-family: "幼圆";
  border-radius: 10px;
  border:  1px #454744 solid;
  overflow:hidden;
}
div ul{

list-style-type: none;
margin: 0;padding: 0;

}
div li{
  border-bottom: 1px #ed9f9f solid;
 
  width:700px ;
}
div li a:hover{
  background-color: #7C7C7C;
  color: #ffff00;
}

</style>
