
<template>
    <div id="title">
     <h1>注册模块</h1>
   </div>
   <div id="scanf">
     <b>姓名：</b>
     <input type="text" v-model="name1" >
     <br/>
     <b>密码：</b>
     <input type="password" v-model="password" value="输入密码">
     <br/>
     <input type="checkbox" id="box1" v-model="flag">请先勾选<a  href="http:\\www.bilibili.com" target="_blank">用户协议</a>
   </div>
   <div id="divrun">
      <button type="button" @click="Run">run</button>
   
   </div>
   <div id="test">
     {{ txt1 }}
     <br/>
     {{ "id"+txt2 }}
     <ul>
       <li v-for="(a,index) in DD":key="a.id">
         {{index+ a.name +a.pd  }}
   
       </li>
     </ul>
   
   </div>
   
   
   </template>
   
   <script setup lang="ts">
   import { ref, toRefs } from "vue";
   import { reactive } from "vue";
   const password=ref();
   let txt1=ref("123");
   let txt2=ref();
   const name1=ref();
   const flag=ref(true);
   
   const DD=ref(
     [
       {id:1,name:"lulu",pd:"0.01"},
       {id:1,name:"zi",pd:"1"},
       {id:1,name:"白菜",pd:"0.1"}
     ]
   )
   function SendJson(){
    
         let xhr;
         var BB;
         var sendjson = JSON.stringify(DD.value);
         console.log("1下一行是打印输出的JSON文件不是打印obj");
         console.log(sendjson);
         var obj;
         
         /*1*/
        //
           xhr = new XMLHttpRequest();
         //
         /*2*/
         xhr.open("POST", "https://api.uomg.com/api/qq.info?qq=2048527261", true);
         xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8"); // 设置请求头，表明发送的是JSON数据
   
         /*3*/
         xhr.onreadystatechange = function () {
           if (xhr.readyState === 4 && xhr.status === 200) {
             obj = JSON.parse(xhr.responseText);
             txt1.value = obj.qq; 
             console.log(2);
             console.log(xhr.responseText);
             console.log(obj);
             alert(xhr.responseText);
           } else {
            // alert('出错了，Err:' + xhr.status);
           }
         };
         /*4*/
  
  
         xhr.send(sendjson);
   
       }
   
   
   function Run(){
   
  
     
     if( flag.value)
     {
       DD.value.push(
       {
             id: +Date.now(),
         name:name1.value,
         pd:password.value
       }
     )
     console.log("0+00");
     
     console.log(DD.value);
     console.log(DD);
     SendJson();
       
   
     }
     else{
       alert("请先勾选");
     }
     
   
   
     
   
   }
   
   </script>
   
   <style scoped>
   
   </style>
   