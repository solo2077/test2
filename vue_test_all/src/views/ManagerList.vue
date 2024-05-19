<template>
 
 <div class="content-container" direction="vertical">
 
     <div>
         <el-container>
             <div class="input-tip" style="width: 100px;" >
                 员工名称：
             </div>
             <div class="input-field">
                 <el-input v-model="yuangong_input.name">
                 </el-input>
             </div>
             <div class="input-tip" style="width: 100px;">
                 员工电话：
             </div>
             <div class="input-field">
                 <el-input  v-model="yuangong_input.phone">
                 </el-input>
             </div>
             <div class="input-tip" style="width: 100px;">
                 员工职位：
             </div>
             <div class="input-field">
               
             <el-select v-model="value" placeholder="全部">
               <el-option v-for="item in store.goodclass2" :key="item.value" :label="item.label" :value="item.value">

               </el-option>
             </el-select>
        

             </div>
         </el-container>
     </div>

     <div>
         <el-container class="content-row">
             <el-button type="primary " @click="search">筛选</el-button>
             <el-button type="danger" @click="reconme">清空筛选</el-button>
       
         </el-container>
     </div>
     <!--list--->
     <div>


         <el-table ref="myTable":data="list_yuangong"  style="width: 100%" @selection-change="handleSelectionChange">
             <el-table-column type="selection" width="55">

             </el-table-column>
             <el-table-column prop="goods" label="店员名字" width="100">
             </el-table-column>

             <el-table-column prop="phone" label="店员电话" >
             </el-table-column>

             <el-table-column prop="state" label="状态" >
             </el-table-column>

             <el-table-column prop="get_price" label="收入总额">
             </el-table-column>


             <el-table-column prop="sent_price" label="退款">
                
             </el-table-column>

             <el-table-column prop="send_state" label="来源">
                 
             </el-table-column>

             <el-table-column prop="yuan_sum" label="客户数">
                 
             </el-table-column>
            
             <el-table-column prop="time" label="更新时间">
                 
             </el-table-column>
            


         </el-table>



     </div>

 </div>

 
</template>
<script setup lang="ts">
import {useStore} from '@/stores/counter' ;
import { onMounted,ref,reactive,onBeforeUnmount, watch } from 'vue';
import { useRouter } from 'vue-router';
import { Mock } from '@/mock/Mock2';
import { ElMessage, type ElTable } from 'element-plus';
import Tools from '@/Tool';
let store= useStore();
let router =useRouter();
let flag = ref<boolean>(false);
let a = ref<any>([]);
let value = ref<any>();
let list_yuangong=reactive<any>([])
let list_yuangong2=reactive<any>([])
let yuangong_input=reactive({
    name:"",
    phone:"",
})



let mock2 = Mock;
function gologin(){
   store.userName='';
   store.userPassword='';
   //router.push({name:'Login'})
   console.log(router.currentRoute.value.params); 
   
}


function handleSelectionChange(val: any){
a.value=val;
a.value.forEach((item: any) => {
     console.log(item.name)
 })
}
onMounted(()=>{
    console.log("判断路由", router.currentRoute.value.path)
    list_yuangong.splice(0)
    console.log("模拟的数据",mock2.get_yuangong())
    
    if(store.DD_YG==''){
        Object.assign(list_yuangong,mock2.get_yuangong())
    store.DD_YG.splice(0)
    Object.assign(store.DD_YG, list_yuangong)
    console.log(list_yuangong)

    }else if(store.DD_YG !==''){
        list_yuangong.splice(0)
        Object.assign(list_yuangong,store.DD_YG)
    }
  
    
})
watch( () => router.currentRoute.value.path, // 监听路由对象的 path 属性
  (newPath, oldPath) => {
    // 路径发生变化时的回调函数
    console.log('路由路径从', oldPath, '变为', newPath);
    // 如果需要的话，更新旧路径的引用



    // 在这里执行其他操作，比如获取新路由对应的数据等
    console.log("路由变化时输出type判断取数", router.currentRoute.value.params.type);

  
    if(store.DD_YG==''){
        Object.assign(list_yuangong,mock2.get_yuangong())
    store.DD_YG.splice(0)
    Object.assign(store.DD_YG, list_yuangong)
    console.log(list_yuangong)

    }else if(store.DD_YG !==''){
        list_yuangong.splice(0)
        Object.assign(list_yuangong,store.DD_YG)
    }
}

,
  { immediate: false, deep: true }) // 立即执行设为 false，深度监听设为 true 来监听对象内部属性的变化)
function reconme(){
    yuangong_input.name=''
    yuangong_input.phone=''
    value.value='全部'
    list_yuangong.splice(0)
    Object.assign(list_yuangong,store.DD_YG)
    store.DD_YG.splice(0)
     Object.assign(store.DD_YG, list_yuangong)
      console.log(list_yuangong)
      console.log(store.DD_YG)
}
function search(){
  
    list_yuangong2.splice(0)
    Object.assign(list_yuangong2,list_yuangong)
   
    list_yuangong.splice(0);
        Object.assign(list_yuangong, list_yuangong2.filter((data: any) => { return data.goods.search(yuangong_input.name) != -1 })) 
        list_yuangong2.splice(0);
        Object.assign(list_yuangong2, list_yuangong); 
     
        list_yuangong.splice(0);
        Object.assign(list_yuangong, list_yuangong2.filter((data: any) => { return data.phone.search(yuangong_input.phone) != -1 })) 
        list_yuangong2.splice(0);
        Object.assign(list_yuangong2, list_yuangong); 
console.log(list_yuangong2);
console.log(list_yuangong);

        list_yuangong.splice(0);
        Object.assign(list_yuangong, list_yuangong2.filter((data: any) => { return data.Money_state.search(value.value) != -1 })) 
        list_yuangong2.splice(0);
        Object.assign(list_yuangong2, list_yuangong); 
}

</script>

<style scoped>

</style>
