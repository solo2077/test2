
<template>
   
 <div class="content-container" >
    <el-tabs v-model="tag_name" @tab-click="handleClick">
    <el-tab-pane label="基础设置" name="first">
        
    </el-tab-pane>
    <el-tab-pane label="价格库存" name="second"></el-tab-pane>
  
  </el-tabs>

  <router-view></router-view>
 </div>



</template>
<script setup lang="ts">
import {useStore} from '@/stores/counter' ;
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
let store= useStore();
let router =useRouter();
let tag_name=ref<any>('');
function handleClick(){
    if(tag_name.value == 'first'){
        router.push({name:'GoodBaseSetting'})

    }else if(tag_name.value == 'second'){
        router.push({name:'GoodPriceSetting'})

    }else if(tag_name.value == 'third'){
        router.push({name:'GoodDetailSetting'})

    }
   
}
function gologin(){
   store.userName='';
   store.userPassword='';
   //router.push({name:'Login'})
   console.log(router.currentRoute.value.params); 
   
}


</script>

<style scoped>

</style>
