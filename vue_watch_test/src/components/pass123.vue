<script setup lang="ts">
import { onBeforeMount, onMounted, onUpdated, reactive, ref, watch, watchEffect } from 'vue'
let a = ref("1020");
let b = ref("21");
let c = ref("23");
defineExpose({a,b,c})
console.log('created2');

onUpdated(() => {
  console.log('updated2')
  
})
onBeforeMount(() => {
  console.log('123mounted2')
})
onMounted(() => { 
  console.log('mounted2')
})

</script>

<template>
  
</template>

<style scoped>

</style>
