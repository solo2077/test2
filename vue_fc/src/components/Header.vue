<template>
<h4>Header</h4>

<Footer ref=mun></Footer>
</template>


<script setup lang="ts">
import emitter from '@/views/mitt'
import {onMounted, ref} from "vue"
let Ha=ref(1);
let Hb=ref(2);
defineExpose({Ha,Hb})




</script>