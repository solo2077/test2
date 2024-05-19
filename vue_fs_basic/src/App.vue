<template>
    <div v-show="flag">
        <Loading></Loading>
    </div>

    <!-- <audio ref="audioRef"  autoplay  class="music" loop >
      <source src="./star.mp3" type="audio/mpeg">
    </audio> -->
   
    <div>
        <router-view></router-view>
    </div>
    <div>
     
    </div>
 
<div>
    <p>{{ a }}</p>
    <Axios></Axios>
</div>


   
      
        


</template>
<script setup lang="ts">
let  drawer=ref(false)
function Drawer(){
    drawer.value=true;
}

 
import {onErrorCaptured, provide, ref } from 'vue';
import  { Store2 } from '@/tools/Storage2';



function play2(){
    audioRef.value.play();
    console.log("daying");
    a.value++;
    
}
let flag = ref(true)
let audioRef=ref()
let message=ref('')
let message2=ref(10)
let a=ref(10)
let b=ref(11)
let c=ref(12)
setTimeout(() => {
    flag.value = !flag.value;
  
}, 1000)
const store = Store2() 
provide("a",a);
provide("b",b);
provide("c",c);

message.value = store.userpassword;

onErrorCaptured(()=>{
    flag.value=true
})
provide("play2",play2)

</script>



<style scoped>
</style>
