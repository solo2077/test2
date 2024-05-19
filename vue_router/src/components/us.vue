

<script  lang="ts">
export default {
  name: 'us'
  
}

</script>


<template>
    <div>
        <h1>关于我们</h1>
    </div>
    <div>
        <span>
            如果你有幸能看见这张告示，请不要声张。让其他人发现你能看见是忌讳的。相信你可以从地图上的守则看出来，这个动物园井不安全，甚至诡异。我们是立志于保护无辜游客的

暗访政府组织，请务必遵循以下规定以保证你的生命安全，这是你逃出这个动物园的唯一渠道。

        </span>
    </div>
    <div class="list-container">
        <ul class="list">
            <li v-for="(item,index) in BB":key="index">
                <button type="button" @click="goUsinf(item)">点击按钮跳转</button>
               <RouterLink :to="{name:'usinf',query: {id:item.id,name1:item.name}}"> {{ index+1+item.name }}</RouterLink>

            </li>
        </ul>
    </div>
    <div class="router-view">
        <RouterView></RouterView>
    </div>
</template>

<script lang="ts" setup>
import { RouterLink,RouterView,useRouter } from 'vue-router';
import { reactive } from 'vue';
let router=useRouter();

let DD=reactive([
    {}
])
let BB=reactive([
    {id:1,name:'张三',age:20,gender:'男',phone:'13800138000'},
    {id:2,name:'lisi',age:20,gender:'男',phone:'13800138000'},
    {id:3,name:'wangwu',age:20,gender:'男',phone:'13800138000'},
    {id:4,name:'zhaoliu',age:20,gender:'男',phone:'13800138000'},
    {id:5,name:'konglaoqi',age:20,gender:'男',phone:'13800138000'},
])
function goUsinf(item: any) {
    router.replace({name:'usinf',query: {id:item.id,name1:item.name}})
    
}
</script>
<style scoped>
div ul{
    list-style: none;
    margin: 0;
    padding: 0;
    float: left;

}

.list-container
{
    width: 200px;
}
div li a{
    display: block;
    padding: 5px 5px 5px 0.5em;
    text-decoration: none;
    margin-bottom: 5px;
    border-left: 12px solid #6EC61C;
    border-right: 1px solid #6EC61C;
}
div li a:link:div li a:visited{
    background-color: #F0F0F0;
    color: #461737;
}
div li a:hover{
    background-color: #e22d2d;
    color: #FFFF00;
}
.router-view{
    width: 800px;
    height: auto;
    border: 5px solid #0f0f0f;
    padding: 10px;
    margin-top: 20px;
    float: left;
}
</style>