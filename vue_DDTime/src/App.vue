<template>

 <div>
  <h1 style="color: red;">DD钢板天团</h1>
 </div>
 <div>
  <p>Bilibili钢板主播大比拼</p>
  </div>

  <div>
    <p>请从下列选手中选择</p>
    <p>1.紫老师</p>
    <p>2.白菜</p>
    <p>3.璐璐</p>
    <p>4.m308</p>
    <p>5.zero</p>
    <p>6.狗妈</p>
  </div>

  <div>
  <b>选手1:</b>
  <input type="text"  v-model="name1" value="输入选手1的名字">
  <br/>
  <p1>{{ name1 }}</p1>
   <p1>:{{ gra1 }}</p1>
  <br/>


  <b>选手2:</b>
 
  <input type="text" v-model="name2" value="输入选手2的名字">
  <br/>
  <p1>{{ name2 }}</p1>
  <p1>:{{ gra2 }}</p1>
  <br/>

  <input type="checkbox"id="box1" ><b>勾选DD钢板防弹协议</b>
  <br/>
  <button type="button" @click="Run(name1,name2)"  >run</button>
  <p>{{ win }}</p>
  <p>{{ test }}</p>

 </div>
</template>




<script >
export default{
  data(){
    return{
      "璐璐":0.1,
      "紫老师":0.1,
      "白菜":0.01,
      "狗妈":0,
      m308:0.001,
      zero:0,
      win:"获胜的选手",
      test:"测试",
      gra1:"选手1成绩",
      gra2:"选手2成绩",
    }
    
  },
  methods:{
    
      Run(str1,str2){
        var c = document.getElementById("box1");

        if(c.checked){
        var str3;
        this.test = "测试"+str1;
        if(this[str1]<this[str2]){
          this.win = str2+"以"+this[str2]+"的钢板厚度WIN";
          this.test = "对"+this[str1]+"的"+str1+"处以prpr之刑削弱钢板厚度";
          this.gra1=this[str1];
          this.gra2=this[str2];
        }
        else if(this[str1]>this[str2]){
          this.win = str2+"以"+this[str2]+"的钢板厚度WIN";
          this.test = "对"+this[str1]+"的"+str1+"处以prpr之刑削弱钢板厚度";
          this.gra1=this[str1];
          this.gra2=this[str2];
        }
        else{
          this.win = str1+"和"+str2+"以"+this[str2]+"的钢板厚度打成平手";
          this.test = "对双方"+"同时处以prpr测试检验钢板质量";
          this.gra1=this[str1];
          this.gra2=this[str2];

        }
      }
      else {
        alert("请签署DD钢板防弹协议，禁止赛前赛后撕咬、殴打对方钢板等违规行为的发生")
      }





      }



    }

}

</script>


<style >

</style>
