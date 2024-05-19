
<template>
    <div>
      <h1>这是一个bilibili日本分部站组件</h1>
    </div>
    <div>
        {{ a }}
        <br>
        {{ b }}
        <br/>
        {{ DD[0].name }}
        <br/>
  
    </div>
    <div id="scanf">
        <p>请输入日本白菜数据</p>
        <b>姓名：</b>
        <input type="text" v-model="name1">
        <br/>
        <b>年龄：</b>
        <input type="text" v-model="age">
        <br/>
        <b>pd&nbsp;&nbsp;：   </b>
        <input type="text" v-model="pd">
        

    </div>
    <div id="rundiv">
         <button type="button" @click="Run">run child</button>
    </div>
   </template>


   <script lang="ts" setup>
//import { emit } from 'process';
import { onMounted, ref} from 'vue';
onMounted(() => {
  console.log('这是child组件的mounted钩子函数');
});

defineProps(["a","b","Run"]);
let emit = defineEmits(["muth"]);

   let name1=ref("白菜");
   let age=ref("18");
   let pd=ref("360$");
   let DD=ref([
    {id:1,name:"白菜",age:18,pd:360},
    {id:2,name:"九重紫",age:17,pd:"180B"},
    {id:3,name:"m308",age:18,pd:0.38},
   ])

  

   function Run(){
    DD.value.push(
        {
            id:1,
            name:name1.value,
            age:Number(age.value),
            pd:pd.value,
        }
    )
    emit('muth',DD.value);
   }
 
   
  
  </script>
   
   <style scoped>
  
   </style>
   