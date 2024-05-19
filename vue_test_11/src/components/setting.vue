<script setup lang="ts">

import { reactive, ref } from 'vue'
let propes = defineProps(["toS"]);
let emit = defineEmits(["toF"]);
let BBC = ref('123');
let brr = ref('');
let arr = ref('');
function Run(){
    emit("toF",{id:+Date.now(),name:arr.value,pwd:brr.value});
}

</script>
<template>
  <div id="hearder">
<h1>
这是1号子文件头部
</h1>
  </div>
  <div id="scanf">
    
    <b>姓名:</b><input type="text" v-model="arr" placeholder="请输入内容">
    <br/>
    <b>密码：</b><input type="password" v-model="brr" placeholder="请输入密码">
    <br/>
    <button @click="Run">提交</button>
  </div>
 
</template>

<style scoped>

</style>
