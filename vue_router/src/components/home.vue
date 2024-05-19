


<script  lang="ts">
export default {

  name: 'App',}

</script>

<script setup lang="ts">
import { onMounted,onUnmounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
onMounted(() => {
    console.log("home 已经挂载");
    setTimeout(() => {
        router.push("/us/usinf?id=1&name1=张三")

    },3000)

},)
    onUnmounted(()=>{
    console.log("home 即将卸载");

}) 
</script>
<template>
    <div>
        <h1>动物园规则怪谈</h1>
    </div>
    <div>
        <span>
            欢迎你们来到本市最大的动物园。我们收录世界上大部分动物，井保证为每一种动物都打造适宜它们的环境，希望您和您的孩子可以观光愉快！在观光游览时，请各位务必遵守以下规则，以确保你们的安全，否则后果自负。 
        </span>
    </div>
</template>