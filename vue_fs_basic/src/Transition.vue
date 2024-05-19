
<template >
   <div id="app">
    <transition :class="cls">
      <router-view />
    </transition>
  </div>
  <input type="text" @focus="focu">
<button type="button" @click="show">123</button>
<button type="button" @click="show2">123</button>
<el-button type="text" >点击打开 Message Box</el-button>
<el-button type="primary">打开对话框</el-button>
 </template>

 <script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus';
import { onMounted, reactive, ref, watch } from 'vue';
let flag2=ref(true);
let cls=ref('fade1');
let form=reactive({input1:"456",input2:"123"})
   
   


function focu(){
  flag2.value=!flag2.value
    if(cls.value == "fade1"){
        cls.value = "fade3"
    }
    else if(cls.value == "fade3"){
        cls.value = "fade1"

    }
}
function show(){
    if(cls.value == "fade1"){
        cls.value = "fade3"
    }
    else if(cls.value == "fade3"){
        cls.value = "fade1"

    }
    
}
function show2(){
    if(cls.value == "fade3"){
        cls.value = "fade1"

    }
}
function beforeEnter(){
    console.log("1231313221");
    
}

 
 </script>
 
 
 <style scoped>
.fade1 {
  border: 2px solid blue;
  color: blue;
  opacity: 0.5;
  transition: border 0.2s,color 0.2s;
}
.fade2 {
    border: 2px solid black;
  color: black;
}
.fade3 {
  border: 2px solid red;
  color: red;
  
  transition: border 0.2s,color 0.2s; 
}
 </style>
 : any: string: (arg0: Error | undefined) => void: any: string: (arg0: Error | undefined) => void: any: string: (arg0: Error | undefined) => void