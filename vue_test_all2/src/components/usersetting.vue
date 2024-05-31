<template>
    <!--身份-->
    <div class="card2">
  <div class="card-border-top">
  </div>
  <div class="img">
  </div>
  <span> 用户头像</span>
  <p class="job"> 欢迎您，&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
  <button> 登录
  </button>
</div>
    <!--下标-->
<div class="nav">

<div class="button1" data-tooltip="PRICE $20"@click="gotohome">
<div class="button-wrapper">
<div class="text" style="color: #fafafa;">首页</div>
<span class="icon">
  <img src="../img/分类.svg" alt="" width="100px"height="35px">
</span>
</div>
</div>

<div class="button1" data-tooltip="PRICE $20" @click="gotocart">
<div class="button-wrapper">
<div class="text" style="color: #fafafa;" >购物车</div>
<span class="icon">
  <img src="../img/购物车.svg" alt="" width="100px"height="35px">
</span>
</div>
</div>
<div class="button1" data-tooltip="PRICE $20">
<div class="button-wrapper" @click="gotoinf">
<div class="text" style="color: #fafafa;">商品详情</div>
<span class="icon">
  <img src="../img/客服.svg" alt="" width="100px"height="35px">
</span>
</div>
</div>
<div class="button1" data-tooltip="PRICE $20">
<div class="button-wrapper">
<div class="text" style="color: #fafafa;" @click="gotouser">个人中心</div>
<span class="icon">
  <img src="../img/勋章.svg" alt="" width="100px"height="35px">
</span>
</div>
</div>


</div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue';
import '@/css/usercord.css'
import abc from'../img/风景1.jpg'
import abc1 from'../img/风景2.jpg'
import abc2 from'../img/风景3.jpg'
import abc3 from'../img/风景4.jpg'
import ab from '../img/碧蓝1.jpg'
import ab1 from '../img/碧蓝5.jpg'
import ab2 from '../img/碧蓝3.jpg'
import ab3 from '../img/碧蓝4.jpg'
import cb1 from '../img/尘白1.jpg'
import cb2 from '../img/尘白2.jpg'
import cb3 from '../img/尘白3.jpg'
import cb4 from '../img/尘白4.jpg'
import axios from 'axios';
import _ from 'lodash';
import {useStore} from '@/stores/counter' ;
import { useRouter } from 'vue-router';
import { id } from 'element-plus/es/locales.mjs';
let flag=ref(false)
let key_flag=ref()
let store= useStore();
let router =useRouter();
let num1 =ref<any>(0)
function GoTo(){
console.log("点击有用");
console.log();
gotohome_search();


}
function gotocart(){
  console.log("跳转cart");
  router.push({name:"cart"})
  
}
function gotohome(){
  console.log("跳转home");
  router.push({name:"home"})
  
}
function gotoinf(){
  console.log("跳转inf");
  router.push({name:"inf"})
  
}
function gotohome_search(){
  console.log("跳转home");
  router.push({name:"home_search"})
  
}
function gotouser(){
  console.log("跳转usersetting");
  router.push({name:"usersetting"})
  
}
</script>
