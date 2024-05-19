<template>
<button type="button" @click="get_old">axios</button>
        


</template>
<script setup ts>
import axios from "axios";
import path from "./path"
async  function get_old(){
  let apitxt =await axios.get("https://api.uomg.com/api/rand.qinghua?format=json"); 
         console.log(apitxt.data.content);
         
}

</script>



<style scoped>
</style>
