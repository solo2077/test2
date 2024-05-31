<template>
  <el-container class="tip"> 
    <form class="form" v-if="flag">
       <p class="form-title">分析员，请登陆你的账号</p>
        <div class="input-container">
          <input placeholder="输入用户名" type="email">
          <span>
            <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
            </svg>
          </span>
      </div>
      <div class="input-container">
          <input placeholder="输入密码" type="password">

          <span>
            <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
              <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
            </svg>
          </span>
        </div>
         <button class="submit" type="submit">
          登陆
      </button>

      <p class="signup-link">
       还没有尘白禁区账号?
        <a href="">创建</a>
      </p>
   </form>

<div class="tip_select">
<el-select v-model="value_address" placeholder="请选择" >
<el-option v-for="item in options" :key="item.value_address" :label="item.label" :value="item.value_address">
</el-option>
</el-select> 
</div>
<div class="tip_input" >
<el-input v-model="input" placeholder="请输入详细商品"></el-input>
</div>
<div class="tip_home">
<button class="button" @click="login_in">
<svg viewBox="0 0 448 512" class="bell"><path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path></svg>
</button>
<!--    <el-button icon="User" circle></el-button> -->
<!--  <el-icon class="el-icon--right"><User /></el-icon>  -->
</div>
</el-container>
<el-row>
  <button @click="get">添加图片</button>
</el-row>
<div class="waterfall"  v-on:wheel="handleWheelEvent" >
<!--   <div class="infinite-list-wrapper" style="overflow:auto"> -->
<div v-for="(item,index) in list.slice(0,num)" :key=item.index  class="waterfall_child">
  <div class="card">
<div class="card-img"><img :src=imgb[index] alt="Carousel Image"   width=100% height=100% ></div>
<div class="card-info">
  <p class="text-title">中华郡国际旅游度假区{{ index+1 }}</p>
  <p class="text-body">亲子游乐天堂</p>
</div>
<div class="card-footer">
<span class="text-title">$499.49</span>
<div class="card-button" @click="add(index)">
  <svg class="svg-icon" viewBox="0 0 20 20">
    <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
    <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
    <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
  </svg>
</div>
</div>
</div>
</div>
</div>
<p v-if="loading" style="margin-left: 47%">加载中...</p>
<div class="loader" v-if="loading"></div>
<p v-if="end" style="margin-left: 42%">暂时没有更多了</p>

<div class="nav">

  <div class="button1" data-tooltip="PRICE $20" @click="gotohome">
<div class="button-wrapper">
  <div class="text" style="color: #fafafa;">首页</div>
  <span class="icon">
    <img src="../img/分类.svg" alt="" width="100px"height="35px">
  </span>
</div>
</div>
 <div class="button1" data-tooltip="PRICE $20">
<div class="button-wrapper">
  <div class="text" style="color: #fafafa;" @click="gotocart">购物车</div>
  <span class="icon">
    <img src="../img/购物车.svg" alt="" width="100px"height="35px">
  </span>
</div>
</div>
 <div class="button1" data-tooltip="PRICE $20">
<div class="button-wrapper">
  <div class="text" style="color: #fafafa;">客服</div>
  <span class="icon">
    <img src="../img/客服.svg" alt="" width="100px"height="35px">
  </span>
</div>
</div>
 <div class="button1" data-tooltip="PRICE $20">
<div class="button-wrapper">
  <div class="text" style="color: #fafafa;">个人中心</div>
  <span class="icon">
    <img src="../img/勋章.svg" alt="" width="100px"height="35px">
  </span>
</div>
</div>


</div>

</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import '../css/all.css'
import '../css/Tooltip.css'
import axios from 'axios';
import {useStore} from '@/stores/counter' ;
import { useRouter } from 'vue-router';
import _ from 'lodash';
let store= useStore();
let router =useRouter();
let flag=ref(false)
let input=ref<any>('')
let value_address=ref<any>('')
let options = reactive([{
  value_address: '选项1',
  label: '全球'
}, {
  value_address: '选项2',
  label: '中国'
}, {
  value_address: '选项3',
  label: '外国'
}, {
  value_address: '选项4',
  label: '即将成为中国的外国'
}, {
  value_address: '选项5',
  label: '稍晚一点成为中国的外国'
}])
let imga = reactive<any>([])
let list = reactive<any>([
  {id:1},
  {id:2},
  {id:3},
  {id:4},
  {id:5},
  {id:6},
  {id:7},
  {id:8},
  {id:9},
  {id:10},
  {id:10},
  {id:10},
  {id:10},
  {id:10},
  {id:10},
  {id:10},

])
let len= ref(list.length);

let imgb = reactive<any>([])
let count = ref<any>(635);
let num = ref<any>(6);
let loading = ref<any>(false);
let end = ref<any>(false);
  function login_in(){
  flag.value = !flag.value ;
  console.log(1234567852);
  console.log(flag);
  
  
}
function add(data: any){
  console.log("点击");
  console.log(data);
  console.log(store.cartlist.length);
  console.log(store.cartlist);
  
  let key = ref(0);
   for(let i = 0;i<store.cartlist.length;i++)
  {
    console.log(store.cartlist[i].id,"s数1")
    console.log(list[data].id,"s数2")
      if(store.cartlist[i].id==list[data].id)
    {
      console.log("jingsdhiasd");
      
      store.cartlist[i].num++;
       key.value = 1;
      break;
       
    }  
    
     
    
  } 
  console.log(store.cartlist);
  console.log("kry",key);
  
  if(key.value==0)
  {
    store.cartlist.push({goods:`中华郡国际旅游度假区${data+1}`,url:imgb[data],id:list[data].id,price:499.49,num:1,state:'未支付'})
  }
  
  
}
async function get(){
 await axios.request({
      method: 'get',
      url: 'https://api.uomg.com/api/rand.img3',
      params: {
      
          sort:'胖次猫',
          format:'json',
      }
}).then((res)=>{
      console.log(res.data.imgurl);
      if(res.data.imgurl!=='')
      {
        console.log("不为空");
        
        imgb.push(res.data.imgurl)
        num.value += 2

      }
   
  })
}
const handleWheelEvent = (event: any) => {


// 获取当前滚动的方向（向上或向下）
const direction = event.deltaY > 0 ? '向上' : '向下';

// 打印数字"123"
//console.log(`滑轮到底，方向为：${direction}，数字为：123`);
// console.log(event.screenY);
//console.log(event.y);
const scrollPosition = window.scrollY; // 获取当前滚动位置
console.log('Scroll position:', scrollPosition);

if(scrollPosition>=635){
console.log(1);
console.log(len.value);
console.log(list.length);

console.log();

if(num.value < len.value){
loading.value=true;
}else
{
loading.value=false;
end.value=true;
}

a()
}

}
let a = _.debounce(()=>{ num.value =num.value + 2;
console.log("123") ;
loading.value=false;
end.value=false;
},1500)
function gotohome(){
console.log("跳转");
router.push({name:"home"})

}
function gotocart(){
console.log("跳转");
router.push({name:"cart"})

}
</script>
<style>
.loader {
display: block;
--height-of-loader: 4px;
--loader-color: #0071e2;
width: 130px;
height: var(--height-of-loader);
border-radius: 30px;
background-color: rgba(0,0,0,0.2);
position: relative;
margin-left:40%; 
}

.loader::before {
content: "";
position: absolute;
background: var(--loader-color);
top: 0;
left: 0;
width: 0%;
height: 100%;
border-radius: 30px;
animation: moving 1s ease-in-out infinite;
;
}

@keyframes moving {
50% {
  width: 100%;
}

100% {
  width: 0;
  right: 0;
  left: unset;
}
}
.waterfall {
display: flex;
width:100%;
margin: 20px auto;
justify-content: flex-start;
flex-wrap:wrap;

}
.waterfall_child{
  break-inside: avoid;
  box-sizing: border-box;
  padding: 10px;
  margin: 10px;
width: 45%;

}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.button {
width: 50px;
height: 50px;
position: relative;
display: flex;
align-items: center;
justify-content: center;
background-color: rgb(44, 44, 44);
border-radius: 50%;
cursor: pointer;
transition-duration: .3s;
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.13);
border: none;
}

.bell {
width: 18px;
}

.bell path {
fill: white;
}

.button:hover {
background-color: rgb(56, 56, 56);
}

.button:hover .bell {
animation: bellRing 0.9s both;
}

/* bell ringing animation keyframes*/
@keyframes bellRing {
0%,
100% {
  transform-origin: top;
}

15% {
  transform: rotateZ(10deg);
}

30% {
  transform: rotateZ(-10deg);
}

45% {
  transform: rotateZ(5deg);
}

60% {
  transform: rotateZ(-5deg);
}

75% {
  transform: rotateZ(2deg);
}
}

.button:active {
transform: scale(0.8);
}
.menuItem{
  width:25%;
  display:flex;
  flex-direction:column;
  align-items:center;
  font-size:12px;
  margin-bottom: 6px;
  background-color: #f1f1f1; 
  transition: background-color 2s;
  margin-bottom: 0px;
}
.menuItem1{
  width:20%;
  display:flex;
  flex-direction:column;
  align-items:center;
  font-size:12px;
  margin-bottom: 6px;
  margin-top: 0px;
  background-color: #f1f1f1; 
  transition: background-color 2s;
}
.menuItem:hover {
/* 设置鼠标悬停时的背景色 */
background-color: rgb(238, 228, 142);
}
.menuItem1:hover {
/* 设置鼠标悬停时的背景色 */
background-color: rgb(238, 228, 142);
}
</style>