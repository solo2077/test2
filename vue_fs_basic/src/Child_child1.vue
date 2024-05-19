
<template>
    <div>B_b:{{ b }}</div>
    <div>B_a:{{ a }}</div>
 <button type="button" @click="counta">a+1</button>
 <button type="button" @click="countb">b+1</button>
 </template>
 <script setup lang="ts">
 import { computed, ref ,inject, watch} from 'vue';
 let prop=defineProps({b:{type:Number,default: 1,}})
 let a= inject<any> ("a")
 let b = inject<any> ("b")
 let c = inject("c")
 function counta(){
    a.value++;
 }
 function countb(){
    b.value++;

 }
 watch([a,b],([valueA,valueB],[oldA,oldB])=>{
    console.log("A",valueA,oldA);
    console.log("B",valueB,oldB);
    
 })


 




 </script>
 
 
 <style scoped>
 </style>