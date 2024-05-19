<template>
    <div>
     <audio ref="audioRef"  autoplay   class="music" loop >
      <source src="./star.mp3" type="audio/mpeg">
    </audio>
</div>
   
    <div id="container">
        <div id="title">
            <h1 @click="playMusic">电商后台管理系统</h1>
        </div>
<div class="input">
    <el-input style="width:500px" prefix-icon="User" v-model="input1" placeholder="请输入用户名" class="input_el"></el-input>
</div>
<div class="input">
    <el-input style="width:500px" prefix-icon="Lock" v-model="input2" placeholder="请输入用密码" class="input_el" type="password"></el-input>
</div>
<div class="input">
    <el-button  style="width:500px" type="primary" @click="login" >注册</el-button>
  <!--   <el-button  style="width:500px" type="primary2" @click="login2" >注册</el-button> -->

</div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import {useStore} from '@/stores/counter';
import { useRouter } from 'vue-router';
import axios from "axios";
let store= useStore();
let router = useRouter();
let data1=reactive({
    username:"xihjao",
    password:"PASORD"
})
let username=ref("123");
let password=ref("123");
let key2=ref<any>("");

let input1 = ref('');
let input2 = ref('');
let data=JSON.stringify(data1)
async function login(){

    console.log("123");
   // let apitxt =await axios.post('/user1/register@',"password":app2.password); 
  // let apitxt =await axios.post("http://192.168.228.147:9090/user/register?username=13155&password=1010")
  // let apitxt =await axios.post("http://192.168.228.147:9090/user/login?username=13155&password=1010")

  //  key2.value=apitxt.data.data;
   // console.log(key2.value);
    
     router.push({name:'Home'}) 

}
/* async function login2(){

 

    console.log("123213");
    let api ='http://192.168.228.147:9090'// 
   // let apitxt =await axios.get(api+'/article/list')
  //  let apitxt =await axios.get(api+`/article/list?id=${key2.value.data}`)
  //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGFpbXMiOnsiaWQiOjE2LCJ1c2VybmFtZSI6IjEzMTU1In0sImV4cCI6MTcxNjEwNzgxNH0.5Nk3CHW6CSmlMQKtLUJcXJS7Z_ZnqbxRZ7KK1pwYQlw
    axios.request({
        method: 'get',
        url: api+'/user/userInfo',
        headers: {
            Authorization: key2.value
        }
        
    }).then((res)=>{
        console.log(res.data);
    }) 
   // console.log(apitxt);0


} */

let audioRef=ref<any>(null)
function playMusic() {
    audioRef.value.play()
}
onMounted(()=>{
    audioRef.value.play()
})
</script>

<style scoped>
#container{
    background:#595959;
    height: 100%;
    width:100%;
    position:absolute;
    background-image:url("./sky.jpg");
    background-repeat: no-repeat;
    background-size: cover;
 
}
#title {
 text-align:center;
 color: azure;
 margin-top: 200px;
}
.input{
    margin :20px auto;
    width: 500px;
}
</style>import express from 'express';import cors from 'cors';
