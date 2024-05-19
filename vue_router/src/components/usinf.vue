<template>
    <p>{{ "欢迎来到"+name1 }}</p>
    <p>随便showshow什么</p>

</template>
<script  lang="ts">
export default {
  name: 'usinf'
  
}
</script>
<script lang="ts" setup>
import { ref } from 'vue'
import {useRoute} from 'vue-router'
const route = useRoute()
console.log(route.query.name1);
defineProps(['id','name1'])

/* name.value = route.params.name */

</script>