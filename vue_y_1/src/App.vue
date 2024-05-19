
<template>
<div>
   <h1>万恶的组合式api的ref的运行</h1>
</div>
<div id="divshow" v-show="flag">
   <ul class="showul" >
      <li v-for="(a,index) in DD":key="a.id">
         {{ index+1+a.name }}

      </li>
   </ul>
</div>
<div>
   <h2>ref的基本用法</h2>
   <p>{{ txt1 }}</p>
   <p>{{ txt2 }}</p>
   <p>{{ sum }}</p>
   <p>{{ DD12[1].pd}}</p>
   <button type="button" @click="Run">run</button>
   <button type="button" @click="Show">show</button>
   <button type="button" @click="openshow">open</button>
</div>
 
</template>


<script lang="ts" setup>
import { ref } from 'vue';
import { reactive } from 'vue';

const flag=ref(true);
 const txt1=ref("钢板赛高");
 const txt2=ref("DD钢板冠军");
 const sum=ref(0);
 const seclc=ref();

 const DD=reactive([
   { name:"lulu",id:1,pd:369},
   { name:"zi",id:2,pd:3786},
   { name:"白菜",id:3,pd:369},

]);
const DD12=ref([
   { name:"lulu",id:1,pd:369},
   { name:"zi",id:2,pd:3786},
   { name:"白菜",id:3,pd:369},

]);


 function Run(){
    sum.value++;

 }
 function Show(){
  
   DD[0].name=DD[0].name+1;
   console.log(DD[0]);
   
 }
 function openshow(){
   flag.value = !flag.value;


 }
</script>

<style scoped>
.showul{
   list-style-type: none;
   margin-left: none;
   padding-left: 0;
  
}

</style>
