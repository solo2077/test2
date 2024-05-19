

<template>
 <div>axios练习</div>
 <div>{{ sum }}</div>

 <button type="button" @click="getSum">点击+1</button>
 <button type="button" @click="getImg">点击</button>

 <div>
  <img v-for="(a,index) in DD":src="a" :key="index" alt="免费接收的图片">
</div>
 
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import axios from 'axios'
import imgapi from './hook/imgapi';
import usesum from './hook/usesum';
let {DD,getImg} = imgapi();
let {sum,getSum} = usesum();

</script>

<style scoped>
img{
  height: 70px;
  margin-right: 10px;
}
</style>
