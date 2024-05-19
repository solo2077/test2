
<template>
   
   <div class="content-container" direction="vertical">


   
     <!--list--->
     <div>
         <el-container>
             <el-tabs @tab-click="click">
                 <el-tab-pane label="日汇总（假）"></el-tab-pane>
                 <el-tab-pane label="月汇总（假）"></el-tab-pane>
                 

             </el-tabs>
         </el-container>

         <el-table ref="myTable":data="date_money"  style="width: 100% " @selection-change="handleSelectionChange">
             <el-table-column type="selection" width="55">
             </el-table-column>

             <el-table-column  label="日期" >
                <template #default="scope">
                        <el-tag>{{ currentDate }}</el-tag>
                    </template>
             </el-table-column>

             <el-table-column prop="get_money" label="收入">
                <template #default="scope">
                        <el-tag>{{ date_money[scope.$index].get_money }}</el-tag>
                    </template>
             </el-table-column>

             <el-table-column prop="sent_money" label="支出" >
                <template #default="scope">
                        <el-tag>{{ date_money[scope.$index].sent_money }}</el-tag>
                    </template>
             </el-table-column>

             <el-table-column prop="time" label="支付时间">
             </el-table-column>


            

         </el-table>



     </div>

 </div>

 
</template>
<script setup lang="ts">
import {useStore} from '@/stores/counter' ;
import { onMounted,ref,reactive,onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { Mock } from '@/mock/Mock2';
import { ElMessage, type ElTable } from 'element-plus';
import Tools from '@/Tool';
let store= useStore();
let router =useRouter();
let flag = ref<boolean>(false);
let flag_nei = ref("0");
let a = ref<any>([]);
let date_money=reactive<any>([]);
let date_money1=reactive<any>([]);
let date_money2=reactive<any>([]);
    const currentDate = ref(new Date().toLocaleString());

let goodclass = reactive<any>(["全部","男的","女的"]) 
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
     console.log(item.name);
 });
}
function click(data: any){
    if(data.props.label == "日汇总（假）"){
        flag_nei.value='0';
        date_money.splice(0)
        Object.assign(date_money,date_money1)


    }else if(data.props.label == "月汇总（假）"){
        flag_nei.value='1';
        date_money.splice(0)
        Object.assign(date_money,date_money2)

    }

}

onMounted(()=>{
    if(store.DD_money=='')
    {
       
        date_money1 = mock2.get_money();
        store.DD_money.splice(0)
        Object.assign(store.DD_money,date_money1)
      
        
        

    }
    else if(store.DD_money!==''){
        date_money1.splice(0)
        Object.assign(date_money1,store.DD_money)

    }
    if(store.DD_money2=='')
    {
       
        date_money2 = mock2.get_money();
        store.DD_money2.splice(0)
        Object.assign(store.DD_money2,date_money2)
      
        
        

    }
    else if(store.DD_money2!==''){
        date_money2.splice(0)
        Object.assign(date_money2,store.DD_money2)

    }
    if(flag_nei.value=="0"){
        date_money.splice(0)
        Object.assign(date_money,date_money1)

    }else if(flag_nei.value=="1"){
        date_money.splice(0)
        Object.assign(date_money,date_money2)


    }
   
})
</script>

<style scoped>

</style>
