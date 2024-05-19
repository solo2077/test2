<template>
  <div>

 
{{ num }}

<br>
{{ num2 }}
<br>
<br>
{{ a }}
<br>
{{ txt1 }}
<div>
    <button type="button" @click="runTest">runtest</button>
</div>
<slot></slot>
</div>
</template>
<script lang="ts" setup>
import { onBeforeMount, onMounted, ref } from 'vue';
let txt1 = ref("这是send组件的txt1");
onMounted(() => {
  console.log('这是send组件的mounted钩子函数');
});
onBeforeMount(() => {    
  console.log('这是send组件的beforeMount钩子函数');
});

let props = defineProps(["a","num", "num2"])

function runTest() {
    console.log(123);
    
  //  
    txt1.value="2";
    console.log(props.num);
   //setTimeout(()=>{let props = defineProps(["a","num", "num2","ppp"])},1000);
    
}


</script>