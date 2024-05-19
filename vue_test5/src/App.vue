<template>
  <div>
    <h1 style="color: red;">注册界面</h1>
  </div>
  <div id="divscanf">
    <b>用户名：</b><input type="text" v-model="name1">
    <br />
    <b>密码&nbsp;&nbsp;&nbsp;：</b><input type="password" v-model="password1">
    <br />
  </div>
  <div id="divbox">
    <input type="checkbox" value="10" id="box1">
    <p1>请勾选<a href="https://www.bilibili.com" style=" text-decoration: none;color: blue;">用户协议</a></p1>
    <br />
  </div>
  <div id="divrun">
    <button type="button" @click="Run(name1, password1)">run</button>
  </div>
  <div id="divtest" v-show=1>
    <p>接收的JSON文件转化成obj再选择属性打印:{{ txt1 }}</p>
    <p>打印输出的obj文件（DD）:{{ txt2 }}</p>
    <p>输出的obj文件（DD）转了JSON（BB）再转回obj（DD）看能不能输出:{{ txt3 }}</p>
    <p>log输出打印的JSON文件看是否有正确发送数据</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      txt1: 1,
      txt2: 2,

      DD: {
        name: "",
        password: null,
      }

    };
  },
  methods: {
    SendJson() {
      var self = this;
      var xhr;
      var BB;
      var sendjson = JSON.stringify(this.DD);
      this.txt2 = this.DD;
      BB = JSON.parse(sendjson);
      console.log("1下一行是打印输出的JSON文件不是打印obj");
      console.log(sendjson);
      this.txt3 = BB;
      var obj;
      /*1*/
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else { // code for IE6, IE5 兼容
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }
      /*2*/
      xhr.open("POST", "https://api.uomg.com/api/qq.info?qq=2048527261", true);
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8"); // 设置请求头，表明发送的是JSON数据

      /*3*/
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

          obj = JSON.parse(xhr.responseText);
          self.txt1 = obj.qq;
          console.log(xhr.responseText);
          console.log(obj);
          alert(xhr.responseText);
        } else {
          alert('出错了，Err:' + xhr.status);
        }
      };
      /*4*/

      xhr.send(sendjson);

    },

    Run(str1, str2) {
      var c = document.getElementById("box1")
      if (c.checked) {
        this.DD.name = str1;
        this.DD.password = str2;

        this.SendJson();

      } else {
        alert("先先勾选协议")
      }

    },
  }
}

</script>

<style></style>
