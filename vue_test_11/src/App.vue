<script setup lang="ts">
import { ref , reactive } from 'vue'
let arr = ref('');
let brr = ref('');
let DD = reactive([
    {id:1,name:"璐璐",pass:"123",pwd:"123456"},
])

function getobj( num1:any,num2:any,sum:any) {
  console.log(num1);
  sum.push({id:+Date.now(),name:num1,pass:num2})
  
}

function toFobj(obj:any) {
  console.log("接受数据再发送");
  
  console.log(obj);
  DD.push(obj);
  console.log("DD");
  console.log(DD);
  
}

</script>


<template>
  <div id="hearder">
<h1 style="text-align: center;">
这是父文件头部
</h1>
  </div>
  <div id="scanf" class="scanfshow">
  <setting :settingrun="getobj" @toF="toFobj"></setting>
  </div>

  <div style="height: 250px;">
    <img src="/1.png" alt="从1号头文件发送给2号头文件"height="250" width="100%">
  </div>

  <div id="show" class="scanfshow2">
   <send :DDshow="DD">差曹效果</send>
  </div>
 
</template>

<style scoped>
.scanfshow{
  border: 2px solid #ccc;
  background-color: aqua;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}
.scanfshow2{
  border: 2px solid #ccc;
  background-color: rgb(183, 216, 65);
  padding-left: 0px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}

</style>
