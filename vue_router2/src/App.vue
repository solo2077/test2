
<template>
<div style="background-color: #84BAE8;width: 100%;height: 100vh;margin: 0;padding: 0;border: 0;">


  <div>
   <h1> Vue Router</h1>
  </div>
  <div class="navigation">
    <p>导航栏</p>
 <ul>
  <li><RouterLink  :to="{path:'/home'}">动物园首页</RouterLink></li>
  <li><RouterLink to="/worker">员工手册</RouterLink></li>
  <li><RouterLink to="/customer">游客手册</RouterLink></li>
  <li><RouterLink to="/master">园长守则</RouterLink></li>
  <li><RouterLink to="/us">关于我们</RouterLink></li>
 </ul>
  </div>
  <div class="txt_area">
  
    <RouterView></RouterView>

  </div>
</div>
  
</template>

<script  lang="ts">
export default {

  name: 'App',}

</script>

<script setup lang="ts">
import { RouterLink,RouterView } from 'vue-router';
</script>


<style scoped>

p{
  margin:5px 0 0 5px;
  color:#3333FF;
  font-size:14px;

}
div{
  font-family: "幼圆";
  border-radius: 10px;
}
div ul{

  list-style-type: none;
  margin: 0;padding: 0;

}
div li{
  border-bottom: 1px #ed9f9f solid;
  float:left;
  width: 150px;
}
div li a{
  display: block;
  padding: 5px 5px 5px 0.5em;
  text-decoration: none;
  border-left: 12px solid #EBEBEB;
  border-right: 1px solid #EBEBEB;
  
}
div li a:link,div li a:visited{
  background-color: #ece4e4;
  color: #461737;
}
div li a:hover{
  background-color: #7C7C7C;
  color: #ffff00;
}
.txt_area{
  width:80%;
  height:456px;
  border:1px solid #EBEBEB;
  overflow:hidden;
  position:relative;/*绝对定位定死了用absolute*/ 
  top:-2px;
  left: 60px;
}
.active{
  color: red;
}
</style>
