
<template>
   
 <div class="content-container" >
   <el-container >
      <el-button type="primary" @click="add_type">添加按键</el-button>
   </el-container>
         <div>
     
               <el-table ref="myTable"  :data="good_class" style="width: 100%" @selection-change="handleSelectionChange">

                <el-table-column type="selection" width="55">
                </el-table-column>
             

                <el-table-column prop="value" label="商品种类"  width="200" >
              
                </el-table-column>


                <el-table-column prop="user" label="管理员" width="200">
                   
                </el-table-column>

                <el-table-column  label="操作" >
                    <template #default="scope">
                        <el-button @click="del(scope.$index)" type="danger"> 删除 </el-button>
                       
                    </template>
                </el-table-column>
                
       

            </el-table>

         </div>


 </div>



</template>
<script setup lang="ts">
import {useStore} from '@/stores/counter' ;
import { ElMessageBox } from 'element-plus';

import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
let store= useStore();
let router =useRouter();
let good_class =reactive([]);

function gologin(){
   store.userName='';
   store.userPassword='';
   //router.push({name:'Login'})
   console.log(router.currentRoute.value.params); 
   
}
let a = ref<any>('');
function handleSelectionChange(val: any) {
    a.value = val;
    a.value.forEach((item: any) => {
        console.log(item.user);
    });


}
onMounted(()=>{
   console.log(good_class);
   console.log(store.goodclass);
   
   
  Object.assign(good_class,store.goodclass) 
  console.log(good_class);
   console.log(store.goodclass);
})
function del(index: any){
   console.log(index);
   good_class.splice(index,1);
   store.goodclass.splice(0);
   Object.assign(store.goodclass,good_class)


   //console.log(index.value);
   
/*    store.goodclass.splice(index) */
   
}
let value=ref()
let tag_name=ref()
function add_type(){
   //
   ElMessageBox.prompt('请输入, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(({ value }) => {
    // 点击确定按钮时的回调
    console.log(value);
    tag_name.value=value
    console.log(tag_name.value);
    if(tag_name.value!==''){
    store.goodclass.push({value:tag_name.value,label:tag_name.value,user:store.userName})
    console.log(store.goodclass);
    tag_name.value='';
    
  }
  }).catch(() => {
    // 点击取消按钮时的回调
    console.log('用户点击了取消');
  });
 
}
let all=reactive([{a:"1",goodType:'1' },{a:"2",goodType:'2'}])


</script>

<style scoped>

</style>
