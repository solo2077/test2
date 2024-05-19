
<template>
    <div>A:{{ a }}</div>
 <div>
    <Child_child1></Child_child1>
</div>
<div>
    <Child_child2></Child_child2>
</div>
 </template>
 <script setup lang="ts">
 import { computed, ref } from 'vue';
 let prop=defineProps({a:{type:Number,default: 5,}})



 




 </script>
 
 
 <style scoped>
 </style>
 