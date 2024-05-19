
<template>
 <el-container id="container">
    <el-aside width="250px">
<el-container>
    <el-header>
        <span style="margin:auto;margin-left: 10px;color: #ffffff;font-size: 17px;"><img style="width:25px;height:25px; margin:auto;margin-right:10px ; vertical-align: -6px;  "  src="@/components/game.jpg">电商后台管理</span>   
</el-header>
</el-container>
<el-menu :default-active=" router.currentRoute.value.path" style="height:100%" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @select="selectItem">
    <el-sub-menu index="1" >
        <template #title>
        <span>订单管理</span>
        </template>
        <el-menu-item index="Home/Order/0">普通订单</el-menu-item>
        <el-menu-item index="Home/Order/1">秒杀订单</el-menu-item>
        
    </el-sub-menu>
    <el-sub-menu index="2">
        <template #title>
        <span>商品管理</span>
        </template>
        <el-menu-item index="Home/Goods/0">普通商品</el-menu-item>
        <el-menu-item index="Home/Goods/1">秒杀商品</el-menu-item>
        <el-menu-item index="Home/Goods/2">今日推荐</el-menu-item>
        <el-menu-item index="Home/AddGoods/0">商品分类</el-menu-item>
        
    </el-sub-menu>
    <el-sub-menu index="3">
        
        <template #title>
        <span>店长管理</span>
        </template>
        <el-menu-item index="Home/ManagerList">店长列表</el-menu-item>
        <el-menu-item index="Home/ManagerChange">店长申请审批列表</el-menu-item>
        
    </el-sub-menu>
    <el-sub-menu index="4">
        <template #title>
        <span>提篮桥进修管理</span>
        </template>
        <el-menu-item index="Home/Tradeinfo">交易明细</el-menu-item>
        <el-menu-item index="Home/Tradelist">财务对账表</el-menu-item>
        
    </el-sub-menu>
    <el-sub-menu index="5">
        <template #title>
        <span>基本管理</span>
        </template>
        <el-menu-item index="Home/Data">数据统计</el-menu-item>

        
    </el-sub-menu>

</el-menu>
</el-aside>
<el-main>
    <el-header style="padding: 0;">
        <el-container style="background-color:blanchedalmond;margin:0;padding:0;height: 60px;">
            <div style="margin:auto;margin-top: 0;;padding-left: 70px;text-align: center;"><h1 style="margin-top: 0;padding: 0;width: 900px;">欢迎您登录后台管理系统,管理员用户！</h1></div> 
            <div style="margin: auto;margin-left: 0;margin-right: 50px;" @click="logout"> <el-button type="primary">注销</el-button></div> 
        </el-container>
    </el-header>
    <router-view></router-view>
</el-main>
 </el-container>
</template>
<script setup lang="ts">
import {useStore} from '@/stores/counter' ;
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
let store= useStore();
let router =useRouter();

function gologin(){
    store.userName='';
    store.userPassword='';
    router.push({name:'Login'})

}

function logout(){
    store.clearuer();
    router.push({name:"Login"})
}
function selectItem(index2: any, indexPath: any){
    console.log(index2);
    if(index2=='Home/Order/0'){
        router.push({name:"Order",params: { type: 0 }})

    }else if(index2=='Home/Order/1'){
     
        router.push({name:"Order",params: { type: 1 }})

    }
    if(index2=='Home/Goods/0'){
        router.push({name:"Goods",params: { type: 0 }})
        store.good_show_type=0

    }
    else if(index2=='Home/Goods/1'){
     
        router.push({name:"Goods",params: { type: 1 }})
       store.good_show_type=1
    }
    else if(index2=='Home/Goods/2'){
     
        router.push({name:"Goods",params: { type: 2 }})
        store.good_show_type=2

    }
    else if(index2=='Home/AddGoods/0'){
     
        router.push({name:"AddGoods",params: { type: 0 }})
      

    }
    else if(index2=='Home/ManagerList'){
     
        router.push({name:"ManagerList"})

    }
    else if(index2=='Home/ManagerChange'){
     
        router.push({name:"ManagerChange"})

    }
    else if(index2=='Home/Tradeinfo'){
     
        router.push({name:"Tradeinfo"})

    }
    else if(index2=='Home/Tradelist'){
     
        router.push({name:"Tradelist"})

    }
    else if(index2=='Home/Data'){
     
        router.push({name:"Data"})

    }
  
    console.log("Home",index2);
    
    

}
</script>

<style scoped>
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
    line-height: 60px;
    padding: 0;
  }
  


</style>
