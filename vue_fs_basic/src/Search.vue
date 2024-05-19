<template>
<div id="appbody">
    <div class="main">
        <div class="content">
            <el-radio-group v-model="sexFilter">
            <el-radio value="人">全部</el-radio>
              <el-radio value="男">男</el-radio>
            <el-radio value="女">女</el-radio>
           </el-radio-group>
        </div>

        <el-row>
            <el-col :span="2"><div class="txt">搜索：</div> </el-col>
            <el-col :span="12"><el-input placeholder="请输入搜索内容" @focus="focus" prefix-icon="opportunity" v-model="searchKey"></el-input></el-col>
        </el-row>
        <div>

        </div>
        <el-table
      :data="showDatas"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sex" 
        label="性别">
      </el-table-column>
    </el-table>

    </div>

</div>
</template>
<script setup lang="ts">
import { reactive, ref, watch } from 'vue';

import { v4 as uuidv4 } from "uuid"
let sexFilter = ref("人");
let showDatas = reactive<any>([]);
let searchKey = ref("");
let mock = reactive<any>([
    { id: uuidv4(), name: "小王", sex: "男" },
    { id: uuidv4(), name: "小红", sex: "女" },
    { id: uuidv4(), name: "小明", sex: "男" },
    { id: uuidv4(), name: "白菜", sex: "女" },
])
function queryAllData() {
    Object.assign(showDatas, mock)
}
function focus(){
    searchData();
}

watch(sexFilter,(value,old)=>{
    console.log(value,old);
    FilterData();
    
})
watch(searchKey,(value,old)=>{
    console.log(value,old);
    searchData();
    
})
function searchData() {
    sexFilter.value = "人";
    if (searchKey.value.length == 0) {
        showDatas.splice(0)
        Object.assign(showDatas, mock)
    } else {

        showDatas.splice(0)
        Object.assign(showDatas, mock.filter((data:any)=>{return data.name.search(searchKey.value) != -1}))
    }
}
function FilterData() {
    searchKey.value='';
    if (sexFilter.value == "人") {
        showDatas.splice(0)
        Object.assign(showDatas, mock)
    } else {
        showDatas.splice(0)
        
        Object.assign(showDatas, mock.filter((data:any)=>{return data.sex == sexFilter.value}))
    }
}



</script>


<style scoped>
.search{
    width:500px
}
.txt{
    text-align: center;
  display: flex;
  padding-top: 3px;
  
}
</style>