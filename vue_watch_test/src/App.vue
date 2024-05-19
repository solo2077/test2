<script setup lang="ts">


import { onBeforeMount, onMounted, onUpdated, reactive, ref, watch, watchEffect } from 'vue'
let showMeTitle=ref()
let givemeDate=ref()
let num=ref(0)
function showmetitle(){
  console.log(showMeTitle.value);
  console.log(givemeDate.value);
  
}
console.log('created');

onUpdated(() => {
  console.log('updated')
  
})
onBeforeMount(() => {
  console.log('123mounted')
})
onMounted(() => { 
  console.log('mounted')
})

</script>

<template>
<h1 ref="showMeTitle">ref的显示测试</h1>
<button type="button" @click="num++">点击+1</button>
<div style="border: 2px solid red;">
  <h1>通过下一个按键获取子组件的数据，就不用emit了</h1>
   <P>这里显示子组件的ref数据p1：{{ }}</P>
   <P>这里显示子组件的ref数据p2：{{  }}</P>
   <P>这里显示子组件的ref数据p3：{{  }}</P>
   <p>{{ num }}</p>
   <pass123 ref="givemeDate"></pass123>
  <button type="button" >获取pass123给的3个ref数据</button>
  <button type="button" @click="showmetitle">点击显示子组件的ref数据</button>

</div>


  
</template>

<style scoped>

</style>
