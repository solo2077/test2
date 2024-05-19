<template>
<div><h1 style="color: red;">标题——指令的学习</h1></div>
<div>
  <button type="button" v-on:click="Run()">run</button>
</div>
<div v-show="flag">
  
  <ul>
    <li v-for="a in b":key="a.id">
      {{ a.name }}

    </li>
  </ul>
</div>

</template>
<script >
export default{
  data(){
    return{
      b:[{id:1 ,name:"lulu",num:0.1},
      {id:2 ,name:"zi",num:0.01},
      {id:3 ,name:"m308",num:0.001},
    ],
    flag:1,
    }
  },
  methods:{
    Run(){
      this.flag = !this.flag;
    }
  }
}

</script>
<style >

</style>
