<template> 
 <div>
  <h1>你好</h1>
 </div>
 <p>这是一个child</p>
<chi />
<chi name="璐璐" gra="0.1"/>
<div>
  <kid />
  <kid a="123753"/>
  <kid />

</div>
<button @click="A">按钮</button>
</template>

<script setup lang="ts">
 import { ref } from 'vue'
 import axios from 'axios'
function A() {
  console.log('按钮被点击了')
  let abc=axios.get('http://192.168.228.147:9090/article/list')
  console.log(abc);
  
}

import request from "./request"
let result = request.get('/article/list')
console.log(result,"wrejerjwrjwelrjwerwjrjwlrj")


</script>