
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
  <div v-show="!flag" class="body2">
  <div id="Application">
    <audio ref="audioRef"  autoplay @ended="loopAudio"  class="music" loop >
      <source src="./star.mp3" type="audio/mpeg">
    </audio>
    <!--游戏区域-->
    <div class="container">
            <!--游戏底部挡板-->
            <div class="board" :style="{left:boardX +'px'}"></div>
            <!--弹球-->
            <div class="ball":style="{left:ballX+'px',top:ballY +'px'}"></div>
                <!--游戏结束提示-->
                <h1 v-if="fail" @click="reset" style="text-align: center;" class="reset">游戏失败,点击标题重启游戏</h1>
            

    </div>

  </div>
</div>
  
</template>
<script setup lang="ts">

import {ref,onMounted} from 'vue';
let audioRef=ref<any>(true)
let boardX=ref(0);
let ballY=ref(0);
let ballX=ref(0);
let spallX=ref(0.1);
let spallY=ref(0.1);
let fail=ref(false);
let flag=ref(true);
function loopAudio(){
    audioRef.value.play();
}
let timer = setInterval(()=>{
  
    if(ballX.value+spallX.value>=440-30)
    {
      spallX.value *=-1;

    }
    if(ballX.value+spallX.value<=0)
    {
      spallX.value *=-1;

    }
    if(ballY.value+spallY.value<=0)
    {
      spallY.value *=-1;

    }
    ballX.value += spallX.value;
    ballY.value += spallY.value;
    if(ballY.value>=400-10)
{
  if(boardX.value<=ballX.value + 30&&boardX.value+80>=ballX.value){
    spallY.value *=-1;
  }
  else{
   
    clearInterval(timer2);
    clearInterval(timer);
  
    fail.value=true;

  }
}

    
},2) 
let timer2=setInterval(()=>{
  spallX.value *= 1.1;
  spallY.value *= 1.1;
  console.log("加速时刻");
  if(fail.value==true){
    clearInterval(timer2);
  }
  
},30000)
function reset(){
  console.log(123);
  fail.value = false; // 将游戏失败状态重置为 false
  ballX.value = 0; // 重置小球的初始水平位置
  ballY.value = 0; // 重置小球的初始垂直位置
  spallX.value = (Math.random() + 0.1); // 重置小球水平速度
  spallY.value = (Math.random() + 0.1); // 重置小球垂直速度
  timer = setInterval(()=>{
  
  if(ballX.value+spallX.value>=440-30)
  {
    spallX.value *=-1;

  }
  if(ballX.value+spallX.value<=0)
  {
    spallX.value *=-1;

  }
  if(ballY.value+spallY.value<=0)
  {
    spallY.value *=-1;

  }
  ballX.value += spallX.value;
  ballY.value += spallY.value;
  if(ballY.value>=400-10)
{
if(boardX.value<=ballX.value + 30&&boardX.value+80>=ballX.value){
  spallY.value *=-1;
}
else{
  clearInterval(timer);
  clearInterval(timer2);
  timer;
  fail.value=true;

}
}
  
},2) 
 timer2=setInterval(()=>{
  spallX.value *= 2;
  spallY.value *= 2;
  console.log("加速时刻");
  
},30000)

}
spallX.value = (Math.random() + 0.1);
spallY.value = (Math.random() + 0.1);
 setTimeout(()=>{
    flag.value=!flag.value;
},1000) 
onMounted(() => {
  enterKeyup(); 
});
function enterKeyup(){
    document.addEventListener("keydown",keydown);
}
function keydown(event: any){
    console.log("监听到按键");
    console.log(event);
   if(event.key==" "){
    console.log("进入到空格逻辑");
    audioRef.value.play();
    console.log("执行了播放");
    

   }
    
    if(event.key=="a")
    {
      if(boardX.value > 10){
        boardX.value -=35;
      }
    }else if(event.key=="d"){
     
      
        if(boardX.value<440-80){
            boardX.value +=35;
        }

    }
}


</script>

<style scoped>
.reset:hover{
  color: red;
}
.body2{
    margin: 0;
    padding: 0;
    
}
.container{
    position: relative;
    margin: 0 auto;
    width:440px;
    height: 440px;
    background-color: blanchedalmond;

}
.ball{
    position:absolute;
    width: 30px;
    height: 30px;
    left:0px;
    top:0px;
    background-color: orange;
    border-radius:30px;
}
.board{
    position:absolute;
    left:0;
    bottom:0;
    height:10px;
    width:80px;
    border-radius: 5px;
    background-color: red;
}

</style>
