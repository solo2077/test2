<template>
  <!--商品详情走马灯-->
  <el-carousel height="300px">
    <el-carousel-item v-for="(item, index) in goodlist_good" :key="item.id">
      <img :src=goodlist_good[index] alt="Carousel Image" width="100%" height="100%">
    </el-carousel-item>
  </el-carousel>
  <el-row class="price" style="margin-top: 5px;margin-bottom: 5px;">
    <div>
      {{'$'+price}} <b style="font-size: 10px;">起/每人</b>
    {{ '&nbsp'+'&nbsp'+'&nbsp'+ '&nbsp'+'&nbsp'+'&nbsp&nbsp&nbsp'}}
     <span>儿童价$</span>{{ price2 }}
     <b style="font-size: 10px;">起/每人</b>
     &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 
     &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 
     <span>225人已出行</span>
    </div>
    <div>

    </div>
  </el-row>
  <el-row class="price" style="margin-bottom: 15px;" v-if="kiss">
    <div>
      <el-icon class="el-icon"><check /></el-icon> <span style="font-size: 10px;">和宫子一起研究斐波那契数列</span>      &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 
      <el-icon class="el-icon"><check /></el-icon> <span style="font-size: 10px;">碧蓝档案，启动！</span>   &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 
      <el-icon class="el-icon"><check /></el-icon><span style="font-size: 10px;">邦咔咔邦</span> &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 
      <el-icon class="el-icon"><check /></el-icon><span style="font-size: 10px;">星🐟来喽</span> &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 
      <el-icon class="el-icon"><check /></el-icon><span style="font-size: 10px;">狂暴雷普狼</span>&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 
      <el-icon class="el-icon"><check /></el-icon> <span style="font-size: 10px;">网络非法外之地，大家穿穿裤子</span> 

  
    </div>
  </el-row>
  <div class="main">
    <div class="card1">
<div class="card1__content">
<b style="margin-top:5px ;margin-left: 5px">温馨提示:</b>
<b>{{ goodlist_txt[0] }}</b>
<b>{{ goodlist_txt[1] }}</b>
<b>{{ goodlist_txt[2] }}</b>
<b>{{ goodlist_txt[3] }}</b>
<b>{{ goodlist_txt[4] }}</b>
</div>
</div>
  </div>


 <!--用户评论-->
 <div>
 <div class="tag1" >
  <span style="  font-size: 30px;" >商品评论区</span>
  <el-row>
 
 <div class="img_comment">
  <span class="tag_zi">{{ grate }}</span>
  <span class="tag_zi2">99%满意</span>

</div>
<div class="rating" >
  <input value="5" name="rate" id="star5" type="radio" @click="s1">
  <label title="text" for="star5"></label>
  <input value="4" name="rate" id="star4" type="radio" @click="s2">
  <label title="text" for="star4"></label>
  <input value="3" name="rate" id="star3" type="radio" @click="s3">
  <label title="text" for="star3"></label>
  <input value="2" name="rate" id="star2" type="radio" @click="s4">
  <label title="text" for="star2"></label>
  <input value="1" name="rate" id="star1" type="radio" @click="s5">
  <label title="text" for="star1"></label>
</div>

</el-row>
 </div>

    <div class="task" draggable="true" v-for="(item,index) in list_txt" :key=item.index >
  <div class="tags">
    <span class="tag">用户评价</span>

    <button class="options">
      <svg xml:space="preserve" viewBox="0 0 41.915 41.916" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="Capa_1" version="1.1" fill="#000000"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M11.214,20.956c0,3.091-2.509,5.589-5.607,5.589C2.51,26.544,0,24.046,0,20.956c0-3.082,2.511-5.585,5.607-5.585 C8.705,15.371,11.214,17.874,11.214,20.956z"></path> <path d="M26.564,20.956c0,3.091-2.509,5.589-5.606,5.589c-3.097,0-5.607-2.498-5.607-5.589c0-3.082,2.511-5.585,5.607-5.585 C24.056,15.371,26.564,17.874,26.564,20.956z"></path> <path d="M41.915,20.956c0,3.091-2.509,5.589-5.607,5.589c-3.097,0-5.606-2.498-5.606-5.589c0-3.082,2.511-5.585,5.606-5.585 C39.406,15.371,41.915,17.874,41.915,20.956z"></path> </g> </g> </g></svg>
    </button>
  </div>
  <p>{{ list_txt[index].txt }}</p>
  <div class="stats">
    <div>
      <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" d="M12 8V12L15 15"></path> <circle stroke-width="2" r="9" cy="12" cx="12"></circle> </g></svg>Feb 31</div>
      <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M16 10H16.01M12 10H12.01M8 10H8.01M3 10C3 4.64706 5.11765 3 12 3C18.8824 3 21 4.64706 21 10C21 15.3529 18.8824 17 12 17C11.6592 17 11.3301 16.996 11.0124 16.9876L7 21V16.4939C4.0328 15.6692 3 13.7383 3 10Z"></path> </g></svg>0</div>
      <div><svg fill="#000000" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-2.5 0 32 32"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path fill="#000000" d="M0 10.284l0.505 0.36c0.089 0.064 0.92 0.621 2.604 0.621 0.27 0 0.55-0.015 0.836-0.044 3.752 4.346 6.411 7.472 7.060 8.299-1.227 2.735-1.42 5.808-0.537 8.686l0.256 0.834 7.63-7.631 8.309 8.309 0.742-0.742-8.309-8.309 7.631-7.631-0.834-0.255c-2.829-0.868-5.986-0.672-8.686 0.537-0.825-0.648-3.942-3.3-8.28-7.044 0.11-0.669 0.23-2.183-0.575-3.441l-0.352-0.549-8.001 8.001zM1.729 10.039l6.032-6.033c0.385 1.122 0.090 2.319 0.086 2.334l-0.080 0.314 0.245 0.214c7.409 6.398 8.631 7.39 8.992 7.546l-0.002 0.006 0.195 0.058 0.185-0.087c2.257-1.079 4.903-1.378 7.343-0.836l-13.482 13.481c-0.55-2.47-0.262-5.045 0.837-7.342l0.104-0.218-0.098-0.221-0.031 0.013c-0.322-0.632-1.831-2.38-7.498-8.944l-0.185-0.215-0.282 0.038c-0.338 0.045-0.668 0.069-0.981 0.069-0.595 0-1.053-0.083-1.38-0.176z"> </path> </g></svg>0</div>
    </div>
    <div class="viewer">
      <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-width="2" stroke="#ffffff" d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z"></path> <path stroke-linecap="round" stroke-width="2" stroke="#ffffff" d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21"></path> </g></svg></span>
      <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-width="2" stroke="#ffffff" d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z"></path> <path stroke-linecap="round" stroke-width="2" stroke="#ffffff" d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21"></path> </g></svg></span>
      <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-width="2" stroke="#ffffff" d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z"></path> <path stroke-linecap="round" stroke-width="2" stroke="#ffffff" d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21"></path> </g></svg></span>
      <span>+0</span>
  </div>
  </div>
  
</div>

 <!--输入评论-->
 <el-row>
 
</el-row>
<el-row>
  <el-input
  type="textarea"
  :rows="2"
  placeholder="请输入评论"
  v-model="input2"
  >
</el-input>
</el-row>
<el-row style="margin-bottom: 10px;text-align: right;margin-left: 80%;margin-top: 10px">
  <el-button  width="100px" type="primary" @click="send2"> 发送评论 </el-button>
</el-row>


  </div>
         <div class="btton">
              <el-button  width="100px" type="primary" @click="add1"> 立即购买 </el-button>
            </div>
          <div class="btton">
            <el-button @click="add2" width="100px" type="danger"> 加入购物车 </el-button>
          </div>
         

  <!--下标栏-->
  <div class="nav">

    <div class="button1" data-tooltip="PRICE $20" @click="gotohome">
      <div class="button-wrapper">
        <div class="text" style="color: #fafafa;">首页</div>
        <span class="icon">
          <img src="../img/分类.svg" alt="" width="100px" height="35px">
        </span>
      </div>
    </div>

    <div class="button1" data-tooltip="PRICE $20" @click="gotocart">
      <div class="button-wrapper">
        <div class="text" style="color: #fafafa;">购物车</div>
        <span class="icon">
          <img src="../img/购物车.svg" alt="" width="100px" height="35px">
        </span>
      </div>
    </div>
    <div class="button1" data-tooltip="PRICE $20">
      <div class="button-wrapper" @click="gotoinf">
        <div class="text" style="color: #fafafa;">商品详情</div>
        <span class="icon">
          <img src="../img/客服.svg" alt="" width="100px" height="35px">
        </span>
      </div>
    </div>
    <div class="button1" data-tooltip="PRICE $20">
      <div class="button-wrapper" @click="gotouser">
        <div class="text" style="color: #fafafa;">个人中心</div>
        <span class="icon">
          <img src="../img/勋章.svg" alt="" width="100px" height="35px">
        </span>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import '../css/all.css';
import '../css/Tooltip.css'
import '../css/login.css'
import '../css/cord.css'
import '../css/comment.css'
import '../css/star.css'
/* import abc from '../img/碧蓝1.jpg'
import abc1 from '../img/碧蓝5.jpg'
import abc2 from '../img/碧蓝3.jpg'
import abc3 from '../img/碧蓝4.jpg' */
import axios from 'axios';
import _ from 'lodash';
import { useStore } from '@/stores/counter';
import { useRouter } from 'vue-router';
import { id } from 'element-plus/es/locales.mjs';

let flag = ref(false)
let store= useStore();
let router = useRouter();
let grate = ref('');
let input2 = ref('');
let list = reactive<any>([
  {
  id:1,txt:'非常好的游戏，爱来自崩坏兔女郎❤ '},
  {
  id:2,txt:'非常好的游戏，爱来自崩坏兔女郎❤ 2'},
]);
let list_txt = reactive<any>([]);
list_txt.push({txt:list[0].txt})
list_txt.push({txt:list[1].txt})
let kiss = ref(true);
let kfc = ref('');
kfc.value=list[0].txt
let kiss1 = ref(false);
let kiss2 = ref(false);
function send2(){
  console.log(1);
  list_txt.push({txt:input2.value})
  
}
function s1(){
  grate.value=10+'分'
 
}
function s2(){
  grate.value=8+'分'
 
}
function s3(){
  grate.value=6+'分'
 
}
function s4(){
  grate.value=4+'分'
 
}
function s5(){
  grate.value=2+'分'
 
}
function gotouser(){
  console.log("跳转usersetting");
  router.push({name:"usersetting"})
  
}
const imgShow = reactive<any>([
  '../img/碧蓝1.jpg',
  '../img/风景2.jpg',
  '@/img/风景3.jpg',
  '@/img/风景4.jpg',
]);
let imga = reactive<any>([])
let goodlist_all= reactive<any>([])
let goodlist_good = reactive<any>([])
let goodlist_txt = reactive<any>([])

let key = ref()
let price = ref()
let price2 = ref<any>('')
/**数据初始化 */
onMounted(()=>{
  key.value=store.good_key_flag
  if(key.value==0)
  {
    kiss.value=true;
  }
  console.log(key.value);
  
  goodlist_all.splice(0)
    Object.assign( goodlist_all,store.goodlist )
   console.log("土味描述全部",store.goodlist );
    
console.log("查看商品详细列表的数据有没有传入",goodlist_all);
goodlist_good.splice(0)
goodlist_good.push(goodlist_all[store.good_key_flag].url)
goodlist_good.push(goodlist_all[store.good_key_flag].url2)
goodlist_good.push(goodlist_all[store.good_key_flag].url3)
goodlist_good.push(goodlist_all[store.good_key_flag].url4)
console.log(goodlist_all[key.value].price);
price.value=goodlist_all[key.value].price
price2.value=goodlist_all[key.value].price-299.49
console.log('土味描述',goodlist_all[0].txt1);
goodlist_txt.splice(0)
goodlist_txt.push(goodlist_all[store.good_key_flag].txt1.content)
goodlist_txt.push(goodlist_all[store.good_key_flag].txt2.content)
goodlist_txt.push(goodlist_all[store.good_key_flag].txt3.content)
goodlist_txt.push(goodlist_all[store.good_key_flag].txt4.content)
goodlist_txt.push(goodlist_all[store.good_key_flag].txt5 .content)


})
function add1(){
  let have = ref(0);
  for(let i = 0;i<store.cartlist.length;i++)
  {
    console.log(store.cartlist[i].id,"s数1")
    
      if(store.cartlist[i].id==key.value)
    {
      
      store.cartlist[i].num++;
      have.value = 1;
      store.cartlist[i].state='已支付'
      break;
       
    }  
    
     
    
  } 
  if(have.value==0)
  {
    store.cartlist.push({goods:`中华郡国际旅游度假区${key.value+1}`,url:goodlist_good[key.value],id:key.value,price:499.49,num:1,state:'已支付'})

  }

}
function add2(){
  let have = ref(0);
  for(let i = 0;i<store.cartlist.length;i++)
  {
    console.log(store.cartlist[i].id,"s数1")
    
      if(store.cartlist[i].id==key.value)
    {
      
      store.cartlist[i].num++;
      have.value = 1;
      break;
       
    }  
    
     
    
  } 
  if(have.value==0)
  {
    store.cartlist.push({goods:`中华郡国际旅游度假区${key.value+1}`,url:goodlist_good[key.value],id:key.value,price:499.49,num:1,state:'未支付'})

  }
 
}
/**跳转 */
function gotocart() {
  console.log("跳转cart");
  router.push({ name: "cart" })

}
function gotohome() {
  console.log("跳转home");
  router.push({ name: "home" })

}
function gotoinf() {
  console.log("跳转inf");
  router.push({ name: "inf" })

}
function gotohome_search() {
  console.log("跳转home");
  router.push({ name: "home_search" })

}
</script>
<style scoped>
.el-icon{
  width: 10px; /* 设置新的宽度 */
  height: 10px; /* 设置新的高度 */
  vertical-align: sub;
}
.price{
  border: #0071e24b 1px solid;
  border-radius: 5px ;
  margin: 0;
  padding: 0;
  margin-top: 1px;
  margin-bottom: 3px;
}
.loader {
  display: block;
  --height-of-loader: 4px;
  --loader-color: #0071e2;
  width: 130px;
  height: var(--height-of-loader);
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;
  margin-left: 40%;
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
  width: 100%;
  margin: 20px auto;
  justify-content: flex-start;
  flex-wrap: wrap;

}

.waterfall_child {
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

.menuItem {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  margin-bottom: 6px;
  background-color: #f1f1f1;
  transition: background-color 2s;
  margin-bottom: 0px;
}

.menuItem1 {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
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