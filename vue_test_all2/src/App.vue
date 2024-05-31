<template>
<!--   <p>Hello Vue 3</p>
 <p> <el-button type="danger" @click="handleClick">危险按钮</el-button></p> -->
  <router-view></router-view>
</template>
<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import router from './router';

let username=ref("张三");
let password=ref("123456");
let a=ref<any>('')
let key2=ref<any>("");
  let api ='http://192.168.183.147:9090'// 
async function handleClick() {
  console.log('危险按钮被点击了')
/*   let apitxt = await axios.get("/app1/rand.qinghua?format=json")
  console.log(apitxt);
   */
  
 await axios.request({
        method: 'post',
        url: '/user/register',
        params: {
          username:"考的全会", 
          password:1010
        },
   
        
    }).then((res)=>{
       a.value=res;
        console.log("res",res);
    }) 
    console.log(a.value.data); 
}
onMounted(()=>{
  //router.push('name':)
  router.push({name:"home"})
  
})
</script>

<style >

</style>
