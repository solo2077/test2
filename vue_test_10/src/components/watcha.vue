
<template>
    <h1>检测模块的练习</h1>
    <p> {{ test }}</p>
    <input type="text" v-model="watcha">
    <p> {{ txt1 }}</p>
   </template>
   
   <script setup lang="ts">
   
  import { computed, ref, watch, watchEffect } from "vue";
   let test = ref("提出问题");
   let watcha =ref();
   let flag =ref(false);
   let txt1=ref();
  let changeStr =computed(()=>watcha+"1")
   function Run(){
    alert("改变了");
  
   }
   watch(watcha,()=>{
   
    console.log(123);
    if (watcha.value.includes("#")) {
      console.log(789);
      
    }
    txt1.value="thinking..."
    setTimeout(()=>{txt1.value=watcha.value},1000)
    
    
    
   })
   </script>
   
   <style scoped>
  
   </style>
   