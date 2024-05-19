
<template>

 <div class="content-container" >

   <GoodCategory></GoodCategory>

 </div>
 <div class="content-container" >



 </div>



</template>
<script setup lang="ts">
import {useStore} from '@/stores/counter' ;
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
let store= useStore();
let router =useRouter();
let tag_name=ref('');
function handleClick(){
    
}
function gologin(){
   store.userName='';
   store.userPassword='';
   //router.push({name:'Login'})
   console.log(router.currentRoute.value.params); 
   
}


</script>

<style scoped>

</style>
