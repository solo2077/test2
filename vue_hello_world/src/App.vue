<template>
  <link rel="stylesheet" type="text/css" href="style.css">
  <div class="body1" v-show="flag">
    <div class="loader">
      <span></span>
      <span></span>
      <span></span>
      <h2>Loading...</h2>
    </div>
  </div>
  <div v-show=!flag class="shubiao">
 
    <div class="container">
      <el-button type="info" icon="video-play" circle class="music" @click="changMusic"></el-button>
      
      <audio ref="audioRef"  autoplay @ended="loopAudio"  class="music" loop >
      <source src="./star.mp3" type="audio/mpeg">
    </audio>
      <div class="toptitle">加入我们，一起创建美好世界</div>
   <div class="title">注册*你的账号</div>
     <div class="input">
        <el-input  prefix-icon="User" v-model="input1" placeholder="请输入用户名" class="input_el"></el-input>
        <el-input  prefix-icon="Promotion" v-model="input2" placeholder="请输入邮箱" class="input_el"></el-input>
   
        <el-input  prefix-icon="Lock" v-model="input3" placeholder="请输入密码" class="input_el"></el-input>
        <el-input  prefix-icon="Lock" v-model="input4" placeholder="请确认密码" class="input_el"></el-input>
        <div class="mail_test">
          <el-form-item label="验证码" prop="captcha">
          <el-row align="middle">
        <el-col :span="18" style="margin:5px ;width: 350px;">
            <el-input prefix-icon="Search" v-model="input5" placeholder="请输入验证码" class="input_el"></el-input>
        </el-col>
        <el-col :span="3" style="margin-left:5px ;margin-top: 0;width:100px">
           <img src="./test.jpg" alt="123" width="50px">  
         <!--<span style="background-color: aliceblue;display: inline-block;width: 100%;">{{ img_test.number1+img_test.number2+img_test.number3+img_test.number4 }}</span>--> 
        </el-col>
    </el-row>
  </el-form-item>
      </div>
    
      </div>
      <div class="check">
        <el-checkbox v-model="checked">已经阅读并同意<a href="https://www.bilibili.com" style="text-decoration: none;margin-left: 0">《用户协议》</a>和<a href="https://www.bilibili.com" style="text-decoration: none;margin-left: 0">《用户隐私协议》</a></el-checkbox>
      </div>
     
  
      <div class="button">
        <el-button  style="width:500px" type="primary" @click="login" >注册</el-button>

      </div>
      <div>
       
      </div>
      
      
    </div>
  </div>
  

</template>

<script setup lang="ts">
import axios from "axios";
import { reactive, ref } from 'vue';
import { ElMessage  } from 'element-plus';
import { v4 as uuidv4 } from 'uuid';

let flag_music=ref(true)

let flag=ref(true);
let input1=ref("");
let input2=ref("");
let input3=ref("");
let input4=ref("");
let input5=ref("");
let checked=ref(false);
let mail_test=ref<any>("");
let img_test=reactive({number1:"",number2:"",number3:"",number4:""})
let DD =reactive<any>([]);
let uer_DD=reactive<any>([
{name:'',password:"",email:"",id:""}
]);
async  function get_old(){
  let apitxt =await axios.post("https://luckycola.com.cn/tools/2338606140@qq.com"); 
         console.log("api获取",apitxt);
         DD.unshift(apitxt);
}

function loopAudio(){
  console.log("播放完了");
  
}

Img_get();
setTimeout(()=>{
  flag.value=!flag.value;
},9000)
function changMusic(){
  if(flag_music.value==true){
    audioRef.value.pause();
    flag_music.value=false;
  }else{
    audioRef.value.play();
    flag_music.value=true;
  }
 
}
function math(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function Img_get(){
  let randomNum1 = math(0, 9); //生成0-9随机数
    console.log("随机数1",randomNum1);
  let randomNum2 = math(0, 9); //生成0-9随机数
    console.log("随机数2",randomNum2);
  let randomNum3 = math(0, 9); //生成0-9随机数
    console.log("随机数3",randomNum3);
  let randomNum4 = math(0, 9); //生成0-9随机数
    console.log("随机数4",randomNum4);
    img_test.number1=randomNum1.toString();
    img_test.number2=randomNum2.toString();
    img_test.number3=randomNum3.toString();
    img_test.number4=randomNum4.toString();
    mail_test.value=img_test.number1+img_test.number2+img_test.number3+img_test.number4;
    
    console.log("mail_test******",mail_test);
    
}
let audioRef=ref(null)
let drawer=ref(false)
function login(){
  audioRef.value.play();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (input1.value=="") {
    ElMessage({message:"用户名不能为空",
    type:"error"
  });
    
  }
  else if(!emailRegex.test(input2.value)){
    ElMessage({message:"请输入正确邮箱格式",
    type:"error"
  });

  }
  else if(input3.value.length<6){
    ElMessage({message:"密码长度不能小于6位",
    type:"error"
  });
  }
  else if(input3.value!==input4.value){
    ElMessage({message:"两次密码不一致",
    type:"error"
  });

  }
  else if(input5.value=="")
  {
    ElMessage({message:"验证码不能为空",
    type:"error"
  })}
  else if(input5.value!==mail_test.value)
  {
    console.log(input5.value);
    console.log(mail_test);
    
    
    ElMessage({message:"验证码错误",
    type:"error"

  });
  }
  else if(checked.value==false)
  {
    ElMessage({message:"请阅读并勾选用户协议和用户隐私协议",
    type:"error"
  });

  }else{
    uer_DD.push({id:uuidv4(),name:input1.value,email:input2.value,password:input3.value})
    console.log("录入的用户信息",uer_DD);
    
    ElMessage({message:"这是一个消息提示",
    type:"success"
  });
  }
  Img_get();
 
  

    
}



</script>
<style>
.shubiao{
  cursor: url('https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/default.cur'),auto;
}
.mail_test{
  width: 500px;
  height: 100px;
  margin:  0;
  margin-bottom: 10px;
  

}
.input{
  width: 500px;
  height: 100px;
  margin:  auto;
  margin-bottom: 125px;
  padding: 0;
  text-align: center;
  border:20px color red solid ;
  

}
.check{
 /*  display: inline-block; */
  text-align: left;
  height: 20px;
  margin: 30px auto;
  margin-top: 30px;
  margin-left: 625px;
 


  

}
.input_el{
  margin-bottom: 10px;
}
.toptitle{
  font-size: 10px;
  font-family: 'Courier New', Courier, monospace;
  color: azure;
  margin-top: 100px;
}
.title{
  font-size: 35px;
  font-family: 'Courier New', Courier, monospace;
  color: azure;
  margin-bottom: 10px;
}
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .container{
    text-align: center;
  height: 100%;
  width: 100%;
  background: #595959;
  position: absolute;
  background-image: url("./back.jpg");
}
.music{
  text-align: left;
  height: 20px;
  margin: 30px auto;
  margin-top: 30px;
  margin-left: 1225px;

}

</style>