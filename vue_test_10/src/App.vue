
<template>
  <div>
    <h1>这是一个bilibili上海总部站父组件</h1>
    {{ txt1 }}
    <p>日本白菜的信息是</p>
    {{ "名字："}}
    <br/>
    {{ "年龄："+age }}
    <br/>
    {{ "pd："+pd }}
    <br/>
  </div>

  <div>
    <Child :a = "1" :b = "12" :Run="run" @muth="sex6" />  
  </div>

  <div>
  <Send  :a="1" :num2="DD2" :num="DD"></Send>
  </div>


 </template>
 <script lang="ts" setup>
import { onMounted, onBeforeMount,ref, reactive } from 'vue';
onMounted(() => {
  console.log('这是appd组件的mounted钩子函数');

});
onBeforeMount(() => {    
  console.log('这是app组件的beforeMount钩子函数');
});

let name=ref();
let age=ref();
let pd=ref("785321");
let DD2=reactive<any>([]);
let DD=reactive<any>([]);
 let txt1=ref(0);

 function run(){
   txt1.value++;
 }

 function sex6(num1: any,num2: any,num3: any){
  console.log(num1);
  DD.push(num1);
  console.log("下面的是收到的数组");
  console.log(DD);
  
  DD2.push(DD);
  console.log("DD2");
  console.log(DD2);
 }

 function run1(){
  DD2.push(DD);
  console.log("DD2");
  console.log(DD2);

 }



</script>
 
 <style scoped>

 </style>
 : {
     /* __placeholder__ */
     a:
     /* __placeholder__ */
     number;
     /* __placeholder__ */
     b:
     /* __placeholder__ */
     number;
   }: any: any