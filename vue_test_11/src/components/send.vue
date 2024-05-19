<script setup lang="ts">
import { reactive, ref } from 'vue'
let propes = defineProps(["DDshow"]);
let emit = defineEmits(["flag"]);
function sendData() {   
                var sendjson = JSON.stringify(propes.DDshow);
                console.log("打印是propes.DDshow");
                console.log(BB);

                var BB;
                var obj;
                let xhr;
                /*1*/
              
                    xhr = new XMLHttpRequest();
              
                /*2*/
                xhr.open("POST", "https://api.uomg.com/api/qq.info?qq=2338606140", true);
                xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8"); // 设置请求头，表明发送的是JSON数据

                /*3*/
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {

                        obj = JSON.parse(xhr.responseText);
                        console.log("打印是obj");
                        console.log(obj);
                        alert(xhr.responseText);
                    } else {
                        alert('出错了，Err:' + xhr.status);
                    }
                };
                /*4*/
                BB = JSON.parse(sendjson);
                console.log("打印是BB");
                console.log(BB);

                xhr.send(sendjson);

}
</script>
<template>

  <div id="hearder">
<h1>
这是2号子文件头部
<span></span>
</h1>
  </div>

  <div style="list-style-type: none;  margin-left: 0;border: 3px solid #000000;">
    <ul style="list-style-type: none;  margin-left: 0;padding-left: 0px;">
        <li v-for="(item,index) in propes.DDshow" :key="item.id" class="scanfshow">
            {{      index+1+""+"名字是:"+ item.name +"密码是:"+ item.pwd }}

        </li>
    </ul>

   <button type="button" @click="sendData">发送给api</button>
  </div>
 
</template>

<style scoped>
.scanfshow{
  border: 2px solid #ccc;
  background-color: aqua;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
}
</style>
