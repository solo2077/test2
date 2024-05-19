

<template>
   <!--  -->
<div class="shubiao">
  <router-view></router-view>
  </div>
 
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'
let router=useRouter()
onMounted(()=>{
  router.push({name:"Login"})
})
</script>
function loopAudio(){
  console.log("播放完了");
  
}<!--  -->
<style >
.shubiao{
  cursor: url('https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/default.cur'),auto;
}

</style>
