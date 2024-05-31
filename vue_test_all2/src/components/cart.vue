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
      <el-select v-model="value_address" placeholder="请选择" @change="selectAddress">
        <el-option v-for="item in options" :key="item.value_address" :label="item.label" :value="item.value_address">
        </el-option>
      </el-select>
    </div>
    <div class="tip_input">
      <el-input v-model="input" placeholder="请输入详细商品" @change="searchAll"></el-input>
    </div>
    <div class="tip_home">
      <button class="button" @click="login_in">
        <svg viewBox="0 0 448 512" class="bell">
          <path
            d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z">
          </path>
        </svg>
      </button>
      <!--    <el-button icon="User" circle></el-button> -->
      <!--  <el-icon class="el-icon--right"><User /></el-icon>  -->
    </div>
  </el-container>
  <el-row>
    <button @click="get">添加图片</button>
  </el-row>
  <el-container class="content-row">
    <el-button type="primary" @click="search">全部支付</el-button>
    <el-button type="danger" @click="recome">全部删除</el-button>
  </el-container>
  <div>
    <el-container>
      <el-tabs @tab-click="selectTab">
        <el-tab-pane label="全部"></el-tab-pane>
        <el-tab-pane label="未支付"></el-tab-pane>
        <el-tab-pane label="已支付"></el-tab-pane>
        <el-tab-pane label="未发货"></el-tab-pane>
        <el-tab-pane label="已发货"></el-tab-pane>

      </el-tabs>
    </el-container>

    <el-table ref="myTable" :data="goodlist" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">

      </el-table-column>
      <el-table-column prop="goods" label="商品" width="100">

        <template #default="scope">
          <img :src="goodlist[scope.$index].url" alt="图片" width="100%">
          <p style="margin-left: 10% ;">{{ goodlist[scope.$index].goods }}</p>
        </template>
      </el-table-column>

      <el-table-column prop="price" label="单价" width="100">
      </el-table-column>

      <el-table-column prop="num" label="数量" width="100">
      </el-table-column>




      <el-table-column prop="state" label="支付状态" width="100">
        <template #default="scope">
          <el-tag>{{ goodlist[scope.$index].state }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="" label="操作">
        <template #default="scope">
          <div class="btton">
            <div class="btton">
              <el-button @click="pay(scope.$index, scope.row)" width="100px" type="primary"> 支付 </el-button>
            </div>
          
          <el-button @click="del(scope.$index, scope.row)" width="100px" type="danger"> 删除 </el-button>
          </div>
          

        </template>
      </el-table-column>

      <el-table-column prop="id" label="商品单号">
      </el-table-column>


    </el-table>



  </div>

  <div class="nav">

    <div class="button1" data-tooltip="PRICE $20" @click="gotohome">
      <div class="button-wrapper">
        <div class="text" style="color: #fafafa;">首页</div>
        <span class="icon">
          <img src="../img/分类.svg" alt="" width="100px" height="35px">
        </span>
      </div>
    </div>
    <div class="button1" data-tooltip="PRICE $20">
      <div class="button-wrapper">
        <div class="text" style="color: #fafafa;" @click="gotocart">购物车</div>
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
        <div class="text" style="color: #fafafa;" >个人中心</div>
        <span class="icon">
          <img src="../img/勋章.svg" alt="" width="100px" height="35px">
        </span>
      </div>
    </div>


  </div>

</template>
<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue';
import '../css/all.css'
import '../css/Tooltip.css'
import axios from 'axios';
import { useStore } from '@/stores/counter';
import { useRouter } from 'vue-router';
import _ from 'lodash';
import { Mock } from '@/mock/mock';
function gotouser(){
  console.log("跳转usersetting");
  router.push({name:"usersetting"})
  
}
let mock = Mock;
let store = useStore();
let router = useRouter();

let input = ref<any>('')
let a = ref<any>([])
let value_address = ref<any>('')
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
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 10 },
  { id: 10 },
  { id: 10 },
  { id: 10 },
  { id: 10 },
  { id: 10 },

])
let flag=ref(false)
/**登录 */
function login_in(){
  flag.value = !flag.value ;
  console.log(1234567852);
  console.log(flag);
  
  
}
/*查id*/
function searchAll() {
  console.log("2");
  console.log(input.value);
  goodlist2.splice(0);
  Object.assign(goodlist2, goodlist);
  goodlist.splice(0);
  Object.assign(goodlist, goodlist2.filter((data: any) => { return data.id.search(input.value) != -1 }))
  goodlist2.splice(0);
  Object.assign(goodlist2, goodlist);
  if (input.value == '') {
    goodlist.splice(0);
    Object.assign(goodlist, store.cartlist)
  }



}
/*集体支付*/
function search() {
  for (let i = 0; i < a.value.length; i++) {
    for (let j = 0; j < goodlist.length; j++) {
      console.log("上架对比查找");
      if (a.value[i] === goodlist[j]) {
        console.log("已支付");
        goodlist[j].state = "已支付";
      }
    }
  }
/*   store.cartlist.splice(0);
  Object.assign(store.cartlist, goodlist)
  goodlist.splice(0);
  Object.assign(goodlist, store.cartlist)
 */
}
/*支付*/
function pay(index: any, row: any) {
  goodlist[index].state = '已支付'


  for (let i = 0; i < a.value.length; i++) {
    for (let j = 0; j < goodlist.length; j++) {
      console.log("上架对比查找");
      if (a.value[i] === goodlist[j]) {
        console.log("已支付");
        goodlist[j].state = "已支付";
      }
    }
  }
  /* store.cartlist.splice(0);
  Object.assign(store.cartlist, goodlist)
  goodlist.splice(0);
  Object.assign(goodlist, store.cartlist) */

}
/**选中地区 */
let dataAddress=ref('')

function selectAddress(data: any){
 console.log('data',data);
 dataAddress.value=data
 goodlist2.splice(0);
 goodlist.splice(0);
  Object.assign(goodlist, store.cartlist)
 if( data=='选项1'){
  goodlist.splice(0);
  Object.assign(goodlist, store.cartlist)
  goodlistT1.splice(0);
  Object.assign(goodlistT1, goodlist)

  
}else if( data=='选项2'){

 for (let i = 0; i < goodlist.length; i++) {
     if (goodlist[i].state2 == '中国') {
      
       goodlist2.push(goodlist[i])
     }
   }
   goodlist.splice(0);
   Object.assign(goodlist, goodlist2)
   goodlistT2.splice(0);
 Object.assign(goodlistT2, goodlist)

}
else if( data=='选项4'){

 for (let i = 0; i < goodlist.length; i++) {
     if (goodlist[i].state2 == '中国') {
      
       goodlist2.push(goodlist[i])
     }
   }
   goodlist.splice(0);
   Object.assign(goodlist, goodlist2)
   goodlistT2.splice(0);
 Object.assign(goodlistT2, goodlist)

}
else if( data=='选项3'){
 
  for (let i = 0; i < goodlist.length; i++) {
      if (goodlist[i].state2 == '外国') {
       
        goodlist2.push(goodlist[i])
      }
    }
    goodlist.splice(0);
    Object.assign(goodlist, goodlist2)
    goodlistT3.splice(0);
  Object.assign(goodlistT3, goodlist)

 }
else if( data=='选项5'){
 
  for (let i = 0; i < goodlist.length; i++) {
      if (goodlist[i].state2 == '外国') {
       
        goodlist2.push(goodlist[i])
      }
    }
    goodlist.splice(0);
    Object.assign(goodlist, goodlist2)
    goodlistT3.splice(0);
  Object.assign(goodlistT3, goodlist)

 }
 
}
function selectAddress2(data: any){
 console.log('data',data);
 dataAddress.value=data
 goodlist2.splice(0);
 goodlist.splice(0);
  Object.assign(goodlist, store.cartlist)
 if( data=='选项1'){
  goodlist.splice(0);
  Object.assign(goodlist, store.cartlist)
  goodlistT1.splice(0);
  Object.assign(goodlistT1, goodlist)

  
}else if( data=='选项2'){

 for (let i = 0; i < goodlist.length; i++) {
     if (goodlist[i].state2 == '中国') {
      
       goodlist2.push(goodlist[i])
     }
   }
   goodlist.splice(0);
   Object.assign(goodlist, goodlist2)
   goodlistT2.splice(0);
 Object.assign(goodlistT2, goodlist)

}
else if( data=='选项4'){

 for (let i = 0; i < goodlist.length; i++) {
     if (goodlist[i].state2 == '中国') {
      
       goodlist2.push(goodlist[i])
     }
   }
   goodlist.splice(0);
   Object.assign(goodlist, goodlist2)
   goodlistT2.splice(0);
 Object.assign(goodlistT2, goodlist)

}
else if( data=='选项3'){
 
  for (let i = 0; i < goodlist.length; i++) {
      if (goodlist[i].state2 == '外国') {
       
        goodlist2.push(goodlist[i])
      }
    }
    goodlist.splice(0);
    Object.assign(goodlist, goodlist2)
    goodlistT3.splice(0);
  Object.assign(goodlistT3, goodlist)

 }
else if( data=='选项5'){
 
  for (let i = 0; i < goodlist.length; i++) {
      if (goodlist[i].state2 == '外国') {
       
        goodlist2.push(goodlist[i])
      }
    }
    goodlist.splice(0);
    Object.assign(goodlist, goodlist2)
    goodlistT3.splice(0);
  Object.assign(goodlistT3, goodlist)

 }
 
}
/**选择中标签显示 */
function selectTab(data: any) {
  goodlist2.splice(0);
  goodlist.splice(0);
  Object.assign(goodlist, store.cartlist)
  console.log(data.props.label);
  console.log("查看选项",dataAddress.value );
  console.log("删除前的外国",goodlistT3);
  
  if(dataAddress.value == '选项1'){
    goodlist.splice(0);
  Object.assign(goodlist, store.cartlist)

  }else if(dataAddress.value == '选项2'){
    goodlist.splice(0);
  Object.assign(goodlist, goodlistT2)
  }else if(dataAddress.value == '选项3'){
    goodlist.splice(0);
  Object.assign(goodlist, goodlistT3)
  }else if(dataAddress.value == '选项4'){
    goodlist.splice(0);
  Object.assign(goodlist, goodlistT2)
  }else if(dataAddress.value == '选项5'){
    goodlist.splice(0);
  Object.assign(goodlist, goodlistT3)

  }
  goodlist3.splice(0);
  Object.assign(goodlist3, goodlist)

  if (data.props.label == '未支付') {
 
    for (let i = 0; i < goodlist.length; i++) {
      if (goodlist[i].state == '未支付') {
       
        goodlist2.push(goodlist[i])
      }
    }
    goodlist.splice(0);
    Object.assign(goodlist, goodlist2)
    

  }
  else if (data.props.label == '已支付') {
 
    for (let i = 0; i < goodlist.length; i++) {
      if (goodlist[i].state == '已支付') {
       //
        goodlist2.push(goodlist[i])
      }
    }
    goodlist.splice(0);
    Object.assign(goodlist, goodlist2)

  }
  else if (data.props.label == '未发货') {
 
    for (let i = 0; i < goodlist.length; i++) {
      if (goodlist[i].goodType == '未发货') {
       //
        goodlist2.push(goodlist[i])
      }
    }
    goodlist.splice(0);
    Object.assign(goodlist, goodlist2)

  }
  else if (data.props.label == '已发货') {
 
    for (let i = 0; i < goodlist.length; i++) {
      if (goodlist[i].goodType == '已发货') {
       //
        goodlist2.push(goodlist[i])
      }
    }
    goodlist.splice(0);
    Object.assign(goodlist, goodlist2)

  }
 else if (data.props.label == '全部') {  
    goodlist.splice(0);
    Object.assign(goodlist,goodlist3 )
  }


}
/*集体删除*/
function recome() {
  for (let i = 0; i < a.value.length; i++) {
    for (let j = 0; j < goodlist.length; j++) {
      console.log("上架对比查找");
      if (a.value[i] === goodlist[j]) {

        goodlist.splice(j, 1);
        j--;
      }
    }
  }
  for (let i = 0; i < a.value.length; i++) {
    for (let j = 0; j < store.cartlist.length; j++) {
      console.log("上架对比查找");
      if (a.value[i] === store.cartlist[j]) {

        store.cartlist.splice(j, 1);
        j--;
      }
    }
  }
  for (let i = 0; i < a.value.length; i++) {
    for (let j = 0; j < goodlistT2.length; j++) {
      console.log("上架对比查找");
      if (a.value[i] === goodlistT2[j]) {

        goodlistT2.splice(j, 1);
        j--;
      }
    }
  }
  for (let i = 0; i < a.value.length; i++) {
    for (let j = 0; j < goodlistT3.length; j++) {
      console.log("上架对比查找");
      if (a.value[i] === goodlistT3[j]) {

        goodlistT3.splice(j, 1);
        j--;
      }
    }
  }
  
/*   store.cartlist.splice(0);
  Object.assign(store.cartlist, goodlist)
  goodlist.splice(0);
  Object.assign(goodlist, store.cartlist) */
}
/*删除*/
function del(index: any, row: any) {
  for (let j = 0; j < store.cartlist.length; j++) {
      console.log("对比查找删除库");
      if (goodlist[index] === store.cartlist[j]) {

        store.cartlist.splice(j, 1);
        j--;
      }
    }
  for (let j = 0; j <goodlistT3.length; j++) {
      console.log("对比查找删除库");
      if (goodlist[index] === goodlistT3[j]) {

        goodlistT3.splice(j, 1);
        j--;
      }
    }
  for (let j = 0; j <goodlistT2.length; j++) {
      console.log("对比查找删除库");
      if (goodlist[index] === goodlistT2[j]) {

        goodlistT2.splice(j, 1);
        j--;
      }
    }
  
  goodlist.splice(index, 1);
 

  for (let i = 0; i < a.value.length; i++) {
    for (let j = 0; j < goodlist.length; j++) {
      console.log("对比查找删除");
      if (a.value[i] === goodlist[j]) {

        goodlist.splice(j, 1);
        j--;
      }
    }
  }
  for (let i = 0; i < a.value.length; i++) {
    for (let j = 0; j < store.cartlist.length; j++) {
      console.log("上架对比查找");
      if (a.value[i] === store.cartlist[j]) {

        store.cartlist.splice(j, 1);
        j--;
      }
    }
  }
  for (let i = 0; i < a.value.length; i++) {
    for (let j = 0; j < goodlistT2.length; j++) {
      console.log("上架对比查找");
      if (a.value[i] === goodlistT2[j]) {

        goodlistT2.splice(j, 1);
        j--;
      }
    }
  }
  for (let i = 0; i < a.value.length; i++) {
    for (let j = 0; j < goodlistT3.length; j++) {
      console.log("上架对比查找");
      if (a.value[i] === goodlistT3[j]) {

        goodlistT3.splice(j, 1);
        j--;
      }
    }
  }
  console.log("删除后的外国",goodlistT3);
  

}
let goodlist = reactive<any>([])
let goodlist2 = reactive<any>([])
let goodlist3 = reactive<any>([])
let goodlistT1 = reactive<any>([])
let goodlistT2 = reactive<any>([])
let goodlistT3 = reactive<any>([])
/*初始赋值*/
onMounted(() => {

  if (store.cartlist == '') {
    goodlist.splice(0);
    Object.assign(goodlist, mock.geOrder())
    store.cartlist.splice(0);
    Object.assign(store.cartlist, goodlist)
  } else if (store.cartlist !== '') {
    goodlist.splice(0);
    Object.assign(goodlist, store.cartlist)
    store.cartlist.splice(0);
    Object.assign(store.cartlist, goodlist)

  }
  for (let i = 0; i < goodlist.length; i++) {
      if (goodlist[i].state == '未支付') {    
        goodlist[i].goodType='未发货'
      }
    }
    store.cartlist.splice(0);
    Object.assign(store.cartlist, goodlist)
    goodlist.splice(0);
    Object.assign(goodlist, store.cartlist)

})
/* 路由变化时取数 */
watch(
  () => router.currentRoute.value.path, // 监听路由对象的 path 属性
  (newPath: any, oldPath: any) => {
    // 路径发生变化时的回调函数
    console.log('路由路径从', oldPath, '变为', newPath);

    if (store.cartlist == '') {
      goodlist.splice(0);
      Object.assign(goodlist, mock.geOrder())
      store.cartlist.splice(0);
      Object.assign(store.cartlist, goodlist)
    } else if (store.cartlist !== '') {
      console.log("第二次有没有进来");
      goodlist.splice(0);
      Object.assign(goodlist, store.cartlist)


    }
    console.log("输出cartlist的值看看", store.cartlist);
    store.cartlist.splice(0);
  Object.assign(store.cartlist, goodlist)
  goodlist.splice(0);
  Object.assign(goodlist, store.cartlist)




  },
  { immediate: false, deep: true } // 立即执行设为 false，深度监听设为 true 来监听对象内部属性的变化
);
/**选择内容 */
function handleSelectionChange(val: any) {
  a.value = val;
  a.value.forEach((item: any) => {
    console.log(item.name);
  });
}
let len = ref(list.length);

let imgb = reactive<any>([])
let count = ref<any>(635);
let num = ref<any>(6);
let loading = ref<any>(false);
let end = ref<any>(false);
/**添加图片 */
async function get() {
  for(let i = 0;i<goodlist.length;i++){
    await axios.request({
    method: 'get',
    url: 'https://api.uomg.com/api/rand.img3',
    params: {

      sort: '胖次猫',
      format: 'json',
    }
  }).then((res) => {
    console.log(res.data.imgurl);
    if (res.data.imgurl !== '') {
      console.log("不为空");

      imgb.push(res.data.imgurl)
      console.log(goodlist);
      for (let i = 0; i < goodlist.length; i++) {
        if (goodlist[i].url == '图片') {
          goodlist[i].url = res.data.imgurl
          break;

        }
      }
    }

  })
  }
  /* await axios.request({
    method: 'get',
    url: 'https://api.uomg.com/api/rand.img3',
    params: {

      sort: '胖次猫',
      format: 'json',
    }
  }).then((res) => {
    console.log(res.data.imgurl);
    if (res.data.imgurl !== '') {
      console.log("不为空");

      imgb.push(res.data.imgurl)
      console.log(goodlist);
      for (let i = 0; i < goodlist.length; i++) {
        if (goodlist[i].url == '图片') {
          goodlist[i].url = res.data.imgurl
          break;

        }
      }
    }

  }) */
  console.log(store.cartlist);
  
}
/**没有用上的瀑布流显示 */
let imgNum = ref(0)
const handleWheelEvent = (event: any) => {


  // 获取当前滚动的方向（向上或向下）
  const direction = event.deltaY > 0 ? '向上' : '向下';

  // 打印数字"123"
  //console.log(`滑轮到底，方向为：${direction}，数字为：123`);
  // console.log(event.screenY);
  //console.log(event.y);
  const scrollPosition = window.scrollY; // 获取当前滚动位置
  console.log('Scroll position:', scrollPosition);

  if (scrollPosition >= 635) {
    console.log(1);
    console.log(len.value);
    console.log(list.length);

    console.log();

    if (num.value < len.value) {
      loading.value = true;
    } else {
      loading.value = false;
      end.value = true;
    }

    add()
  }

}
let add = _.debounce(() => {
  num.value = num.value + 2;
  console.log("123");
  loading.value = false;
  end.value = false;
}, 1500)



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
</script>
<style>
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