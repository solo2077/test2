<template>
<div id="txt1">
  <h1>数据比较器</h1>
</div>
<div id="txt2">
 <b>输入数1</b> 
 <input type="text" v-model="a" value="数1">
  <p id="test">{{ a }}</p>
  <b>输入数2</b>
  <input type="text" v-model="b" value="数2">
  <p id="test">{{ b }}</p>
  <button type="button" @click="Run(a,b)">run</button>
  <br/>
  <b>Max：</b>
  <p1 id="test">{{ c }}</p1>

</div>
</template>

<script>
export default{
  name:"指令",
  data(){
    return{
      a:123,
      b:789,
      c:"sda",
      "选手1":0.1,
      "选手2":0.01,
    }
  },
  methods:{
    Run(str1,str2){
      var str3; //str1 为string
      console.log(this[str1]); //需要输出数字0.1
     
    }
  }
}

</script>