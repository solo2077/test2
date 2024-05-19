<template>
    <div class="headershow">
       <h1>选择栏</h1>
       <p>{{ a }}</p>
    </div>
   </template>
   
   <script>
   export default {
       
   
     props:{
       a:{
         type:String,
       },
   
   
     },
     data(){
       return {
         
       }
     } 
   
   }
   
   </script>
   
   <style scoped>
   .headershow{
       width: 100%;
       height: 70px;
       background-color: rgb(157, 255, 0);
       border: 2px solid black;
   }
   
   </style>