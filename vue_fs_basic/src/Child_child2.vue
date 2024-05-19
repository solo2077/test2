
<template>
    <div>C:{{ c }}</div>
 
 </template>
 <script setup lang="ts">
 import { computed, ref ,inject} from 'vue';
 let prop=defineProps({c:{type:Number,default: 2,}})

 let a = inject("a")
 let b = inject("b")
 let c = inject("c")

 




 </script>
 
 
 <style scoped>
 </style>