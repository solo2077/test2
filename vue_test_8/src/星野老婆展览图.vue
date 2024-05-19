<template>
    <div>
      <h1 style="color: red;">星鱼来了</h1>
    </div>
    <div>
      <button type="button" @click="run1()">上一张</button>
    </div>
    <div id="boxshow" class="showbox">
      <img :src="list[i]" alt="老婆补充中" class="showimg">
    </div>
  
    <div><button type="button" @click="run2()">下一张</button></div>
  
  </template>
  <script>
  export default {
    data() {
      return {
        i:0,
        list: [
          "/3.jpg", 
          "/老婆1.png", 
          "/老婆2.jpg", 
          "/老婆3.jpg", 
          "/老婆4.png", 
          "/老婆5.jpg",
        ],
  
      }
    },
    methods:{
      run1(){
        if(this.i==0)
        {
          this.i=5;
        }else
        {
          this.i--;
  
        }
      
      },
      run2(){
        if(this.i==5)
        {
          this.i=0;
        }else
        {
          this.i++;
  
        }
  
      }
    }
  }
  </script>
  
  
  
  <style>
  div.showbox {
      width: 570px;
      height: 730px;
      overflow: hidden;
  }
  
  img.showimg {
      max-width: 100%;
      height: auto;
  }</style>
  