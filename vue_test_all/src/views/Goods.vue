<template>
  <div class="content-container" direction="vertical">
    <div v-if="flag" class="login-modal">
      <div class="login_show">

        <el-container>
          <div class="input-tip2" >
            商品名称：
          </div>
          <div class="input-field">
            <el-input v-model="param.good"> </el-input>

          </div>

          <div class="input-tip2">
            商品售价：
          </div>
          <div class="input-field">
            <el-input  v-model="param.price">
            </el-input>
          </div>
        </el-container>
        <el-container>
          <div class="input-tip2" >
            商品销量：
          </div>
          <div class="input-field" >
            <el-input v-model="param.sum">
            </el-input>
          </div>

          <div class="input-tip2">
            退款数量：
          </div>
          <div class="input-field">
            <el-input v-model="param.t_sum">
            </el-input>
          </div>
        </el-container>
        <el-container>
          <div class="input-tip2">
            在线状态：
          </div>
          <div class="input-field">
            <el-radio v-model="param.state" label="上架">上架</el-radio>
            <el-radio v-model="param.state"  label="下架">下架</el-radio>
          </div>   
          <div class="input-tip2">
            库存数量：
          </div>
          <div class="input-field">
            <el-input v-model="param.save_sum">
            </el-input>
          </div>     
        </el-container>
       
        <el-container>
          <div class="input-tip2">
            买家姓名：
          </div>
          <div class="input-field">
            <el-input v-model="param.buyer">
            </el-input>
          </div>
         
          
        </el-container>
        <el-container style="margin: 0;margin-left: 30%">

          <el-button @click="save" type="primary"> 保存 </el-button><!-- change_data3(index_now, row_now) -->
          <el-button @click="close" type="info"> 取消 </el-button>
      
        </el-container>




      </div>

    </div>
    <!---真正初始界面编写界面-->
    <div>
      <el-container>
        <div class="input-tip" style=" width:100px" >
          商品名称：
        </div>
        <div class="input-field">
          <el-input v-model="tip_search.good">
          </el-input>
        </div>
        <div class="input-tip"style=" width:100px">
          商品编号：
        </div>
        <div class="input-field">
          <el-input v-model="tip_search.id">
          </el-input>
        </div>
        <div class="input-tip"style=" width:100px">
          商品分类：
        </div>
        <div class="input-field">

          <el-select v-model="value" placeholder="请选择商品分类">
            <el-option v-for="item in store.goodclass" :key="item.value" :label="item.label" :value="item.value">

            </el-option>
          </el-select>


        </div>
      </el-container>
      <el-container>
        <div class="input-tip">
          是否上架：
        </div>
        <div class="input-field">
          <el-select v-model="value2" placeholder="请选择商品分类">
            <el-option v-for="item in goodclass2" :key="item.value2" :label="item.label" :value="item.value2">
            </el-option>
          </el-select>
        </div>
        <div class="input-tip">
          是否过期：
        </div>
        <div class="input-field">
          <el-select v-model="valuea" placeholder="请选择商品分类">
            <el-option v-for="item in goodclass3" :key="item.valuea" :label="item.label" :value="item.valuea">
            </el-option>
          </el-select>
        </div>


      </el-container>

    </div>

    <div>
      <el-container class="content-row">
        <el-button type="primary " @click="search">检测</el-button>
        <el-button type="primary" @click="add_gooddata">新增</el-button>
        <el-button type="danger" @click="recome">取消检索</el-button>
    <el-switch v-model="flag2" active-color="#13ce66" inactive-color="#ff4949" style="margin-left: 20px">
</el-switch>

      </el-container>
    </div>
    <!--list--->
    <div>


      <el-table ref="myTable" :data="goodlist" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="goods" label="商品">
        </el-table-column>
        <el-table-column prop="id" label="商品标号">
        </el-table-column>

        <el-table-column prop="price" label="单个价格">
          <template #default="scope">
            <el-tag>{{ goodlist[scope.$index].price + "元" }}</el-tag>
          </template>
        </el-table-column>

        <el-table-column prop="sum" label="销量">
          <template #default="scope">
            <el-tag>{{ goodlist[scope.$index].t_sum }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="t_sum" label="退款数量">
        </el-table-column>
        <el-table-column prop="save_sum" label="库存">

        </el-table-column>
        <el-table-column prop="all_sum" label="库存总数">
          <template #default="scope">
            <el-tag>{{ goodlist[scope.$index].t_sum + goodlist[scope.$index].save_sum }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="t_Money" label="退款金额">
          <template #default="scope">
            <el-tag>{{ goodlist[scope.$index].t_sum * goodlist[scope.$index].price }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="状态">
          <template #default="scope">
            <el-tag>{{ goodlist[scope.$index].state }}</el-tag>
          </template>

        </el-table-column>




        <el-table-column prop="" label="操作" width="200px">
          <template #default="scope">
            <el-button type="primary" @click="up_data(scope.$index, scope.row)"> 下架 </el-button>
            <el-button type="danger"  @click="down_data(scope.$index, scope.row)"> 上架 </el-button>


          </template>
        </el-table-column>

        <el-table-column prop="mag" label="管理员">
        </el-table-column>
        <el-table-column prop="time" label="更新日期">
        </el-table-column>


      </el-table>



    </div>

  </div>


</template>
<script setup lang="ts">
import { useStore } from '@/stores/counter';
import { onMounted, ref, reactive, onBeforeUnmount, watch, computed, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { Mock } from '@/mock/Mock2';
import { ElMessage, type ElTable } from 'element-plus';
import { v4 as uuidv4 } from "uuid"


let store = useStore();
let router = useRouter();
let flag = ref<boolean>(false);
let flag2 = ref<boolean>(false);
let a = ref<any>([]);

let value = ref<any>();
let value2 = ref<any>();
let valuea = ref<any>();
let test = ref<any>();//tip_search.good
let tip_search=reactive({
  good:"",
  id:"",

})
let param = reactive<any>({
  good:"",
  price:"",
  sum:"",
  t_sum:"",
  state:"",
  buyer:"",

})


let goodclass2 = reactive<any>([
  {
  value2: '上架',
  label: '上架'
}, {
  value2: '下架',
  label: '下架'
},])
let goodclass3 = reactive<any>([
  {
  valuea: '已过期',
  label: '已过期'
}, {
  valuea: '未过期',
  label: '未过期'
},])
let mock2 = Mock;
let goodlist = reactive<any>([])
let goodlist2 = reactive<any>([])
let goodlist3 = reactive<any>([])
onMounted(() => {
  if (router.currentRoute.value.params.type == "0") {
    if (store.DD_good == '') {
      goodlist.splice(0);
      Object.assign(goodlist, mock2.getGoods(router.currentRoute.value.params.type))
      store.DD_good.splice(0);
      Object.assign(store.DD_good, goodlist)
    } else if (store.DD_good !== '') {
      goodlist.splice(0);
      Object.assign(goodlist, store.DD_good)
      store.DD_good.splice(0);
      Object.assign(store.DD_good, goodlist)

    }

  }
  else if (router.currentRoute.value.params.type == "1") {
    if (store.DD_good2 == '') {
      goodlist.splice(0);
      Object.assign(goodlist, mock2.getGoods(router.currentRoute.value.params.type))
      store.DD_good2.splice(0);
      Object.assign(store.DD_good2, goodlist)
    } else if (store.DD_good2 !== '') {
      goodlist.splice(0);
      Object.assign(goodlist, store.DD_good2)
      store.DD_good.splice(0);
      Object.assign(store.DD_good2, goodlist)

    }

  }
  else if (router.currentRoute.value.params.type == "2") {
    if (store.DD_good3 == '') {
      goodlist.splice(0);
      Object.assign(goodlist, mock2.getGoods(router.currentRoute.value.params.type))
      store.DD_good3.splice(0);
      Object.assign(store.DD_good3, goodlist)
    } else if (store.DD_good3 !== '') {
      goodlist.splice(0);
      Object.assign(goodlist, store.DD_good3)
      store.DD_good.splice(0);
      Object.assign(store.DD_good3, goodlist)

    }

  }

})
/* 路由变化时取数 */
watch(
  () => router.currentRoute.value.path, // 监听路由对象的 path 属性
  (newPath, oldPath) => {
    // 路径发生变化时的回调函数
    console.log('路由路径从', oldPath, '变为', newPath);
    // 如果需要的话，更新旧路径的引用



    // 在这里执行其他操作，比如获取新路由对应的数据等
    console.log("路由变化时输出type判断取数", router.currentRoute.value.params.type);

    if (router.currentRoute.value.params.type == "0") {
      if (store.DD_good == '') {
        goodlist.splice(0);
        Object.assign(goodlist, mock2.getGoods(router.currentRoute.value.params.type))
        store.DD_good.splice(0);
        Object.assign(store.DD_good, goodlist)
      } else if (store.DD_good !== '') {
        console.log("第二次有没有进来");
        goodlist.splice(0);
        Object.assign(goodlist, store.DD_good)


      }
      console.log("输出dd_good的值看看", store.DD_good);

    }
    else if (router.currentRoute.value.params.type == "1") {
      if (store.DD_good2 == '') {
        goodlist.splice(0);
        Object.assign(goodlist, mock2.getGoods(router.currentRoute.value.params.type))

        store.DD_good2.splice(0);
        Object.assign(store.DD_good2, goodlist)
      } else if (store.DD_good2 !== '') {
        goodlist.splice(0);
        Object.assign(goodlist, store.DD_good2)
      }

    }
    else if (router.currentRoute.value.params.type == "2") {
      if (store.DD_good3 == '') {
        goodlist.splice(0);
        Object.assign(goodlist, mock2.getGoods(router.currentRoute.value.params.type))

        store.DD_good3.splice(0);
        Object.assign(store.DD_good3, goodlist)
      } else if (store.DD_good3 !== '') {
        goodlist.splice(0);
        Object.assign(goodlist, store.DD_good3)
      }

    }

  },
  { immediate: false, deep: true } // 立即执行设为 false，深度监听设为 true 来监听对象内部属性的变化
);
function recome(){
  tip_search.good='';
  tip_search.id='';
  value.value='';
  value2.value='';
  valuea.value='';
  
  
  if(router.currentRoute.value.params.type == "0"){
    console.log("进来了");
      goodlist.splice(0);
      Object.assign(goodlist, store.DD_good);
      console.log(store.DD_good);
      


    }
  if(router.currentRoute.value.params.type == "1"){
      
      goodlist.splice(0);
      Object.assign(goodlist, store.DD_good2);


    }
  if(router.currentRoute.value.params.type == "2"){
      
      goodlist.splice(0);
      Object.assign(goodlist, store.DD_good3);


    }

}
function gologin() {

  console.log(router.currentRoute.value.params);
  flag.value=!flag.value

}
function handleSelectionChange(val: any) {
  a.value = val;
  a.value.forEach((item: any) => {
    console.log(item.name);
  });
}
function up_data(index:any,row:any){
  goodlist[index].state='下架';
  goodlist[index].time=currentTime ;




    for (let i = 0; i < a.value.length; i++) {
        for (let j = 0; j < goodlist.length; j++) {
            console.log("下架对比查找");

            /*  console.log(a.value[i]);
             console.log(orderList[j]);
              */

            if (a.value[i] === goodlist[j]) {
                console.log("下架");
                goodlist[j].state = "下架";
                goodlist[index].time=currentTime ;


            }
        }
    }

    a.value = [];
    ElMessage.success('成功下架');




  if(router.currentRoute.value.params.type == "0"){
      store.DD_good.splice(0);
      Object.assign(store.DD_good, goodlist);
      goodlist.splice(0);
      Object.assign(goodlist, store.DD_good);

    }
 else if(router.currentRoute.value.params.type == "1"){
      store.DD_good2.splice(0);
      Object.assign(store.DD_good2, goodlist);
      goodlist.splice(0);
      Object.assign(goodlist, store.DD_good2);

    }
 else if(router.currentRoute.value.params.type == "2"){
      store.DD_good3.splice(0);
      Object.assign(store.DD_good3, goodlist);
      goodlist.splice(0);
      Object.assign(goodlist, store.DD_good3);

    }

}
let props=defineProps(['a','b'])
function down_data(index:any,row:any){
  goodlist[index].state='上架';
  goodlist[index].time=currentTime ;




    for (let i = 0; i < a.value.length; i++) {
        for (let j = 0; j < goodlist.length; j++) {
            console.log("上架对比查找");

            /*  console.log(a.value[i]);
             console.log(orderList[j]);
              */

            if (a.value[i] === goodlist[j]) {
                console.log("上架");
                goodlist[j].state = "上架";
                goodlist[index].time=currentTime ;


            }
        }
    }

    a.value = [];
    ElMessage.success('成功上架');

  if(router.currentRoute.value.params.type == "0"){
      store.DD_good.splice(0);
      Object.assign(store.DD_good, goodlist);
      goodlist.splice(0);
      Object.assign(goodlist, store.DD_good);

    }
 else if(router.currentRoute.value.params.type == "1"){
      store.DD_good2.splice(0);
      Object.assign(store.DD_good2, goodlist);
      goodlist.splice(0);
      Object.assign(goodlist, store.DD_good2);

    }
 else if(router.currentRoute.value.params.type == "2"){
      store.DD_good3.splice(0);
      Object.assign(store.DD_good3, goodlist);
      goodlist.splice(0);
      Object.assign(goodlist, store.DD_good3);

    }


}
// 创建一个定时器，每秒钟更新当前时间
const currentTime = ref<any>(new Date());
/* function updateCurrentTime() {
  currentTime.value = formatDate(new Date());
}
 */
// 创建一个计算属性来获取格式化后的年月日
function formatDate(date:Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
// 组件挂载时开始更新当前时间
/* onMounted(() => {
  setInterval(updateCurrentTime, 1000);
  updateCurrentTime(); // 立即更新一次
});
 */
// 组件卸载时清除定时器

function add_gooddata(){
  if(flag2.value==true){
    flag.value=!flag.value
  }else if(flag2.value==false){
    router.push({name:"GoodBaseSetting"})

  }
 
 
}
function close(){
  flag.value=false

}
function save(){
  goodlist.unshift({
   goods:param.good ,
   img:"	http://dummyimage.com/60x100/Hello Mock.js",
    price:param.price, 
   sum:param.sum ,
    t_sum:param.t_sum, 
   save_sum:param.save_sum, 
    all_sum:Number(param.save_sum)+ Number(param.t_sum),
    t_Money:Number(param.price)* Number(param.t_sum),
    state:param.state,
   mag:param.buyer ,
   time:currentTime ,
   id: uuidv4(),
    
  


  }
   
  )

  console.log(goodlist);
  
  if(router.currentRoute.value.params.type == "0"){
      store.DD_good.splice(0);
      Object.assign(store.DD_good, goodlist);
      goodlist.splice(0);
      Object.assign(goodlist, store.DD_good);

    }
 else if(router.currentRoute.value.params.type == "1"){
      store.DD_good2.splice(0);
      Object.assign(store.DD_good2, goodlist);
      goodlist.splice(0);
      Object.assign(goodlist, store.DD_good2);

    }
 else if(router.currentRoute.value.params.type == "2"){
      store.DD_good3.splice(0);
      Object.assign(store.DD_good3, goodlist);
      goodlist.splice(0);
      Object.assign(goodlist, store.DD_good3);

    }
    param.good="";
   param.price="";
   param.sum="";
   param.t_sum="";
   param.state="";
   param.buyer="";



}
function search(){
  /**商品名 */
 
  
  /*获取两个当前数据的数组方便操作*/ 
  
         goodlist2.splice(0);
      
        Object.assign(goodlist2, goodlist);

   /*      console.log("数组2",goodlist2);
        console.log("数组1",goodlist);
        
        /**检索goodlist2里有 tip_search.good的值*/

        goodlist.splice(0);
        Object.assign(goodlist, goodlist2.filter((data: any) => { return data.goods.search(tip_search.good) != -1 })) 
        goodlist2.splice(0);
        Object.assign(goodlist2, goodlist);
      
        
        /**商品编号 */
        goodlist.splice(0);
        Object.assign(goodlist, goodlist2.filter((data: any) => { return data.id.search(tip_search.id) != -1 })) 
        goodlist2.splice(0);
        Object.assign(goodlist2, goodlist);
        goodlist3.splice(0);
        Object.assign(goodlist3, goodlist);

        /**男装女装 */
        console.log("关键字",value.value);
         goodlist.splice(0);
      
        
        Object.assign(goodlist, goodlist2.filter((data: any) => { return data.colether_type.search(value.value) != -1 })) 
        goodlist2.splice(0);
        Object.assign(goodlist2, goodlist);  
    
     
      /**上架 */
      
      goodlist.splice(0);
        Object.assign(goodlist, goodlist2.filter((data: any) => { return data.state.search(value2.value) != -1 })) 
        goodlist2.splice(0);
        Object.assign(goodlist2, goodlist); 
    
        console.log(" console.log(goodlist2);",goodlist2);
        console.log(" console.log(goodlist);",goodlist);
        console.log(valuea.value);

        /**过期 */
        goodlist.splice(0);
        Object.assign(goodlist, goodlist2.filter((data: any) => { return data.eat_type.search(valuea.value) != -1 })) 
        console.log(" console.log(goodlist2);",goodlist2);
        console.log(" goodlist",goodlist);
        goodlist2.splice(0);
        Object.assign(goodlist2, goodlist); 
      

       
      
        
        
}
let key=ref(true)

</script>

<style scoped>
.login-modal {
    position: fixed;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    z-index: 10;
    border: 2px solid blue;
    border-radius: 5px;
    background-color: #ffffff7d;
}

.login_show {
    position: fixed;
    margin-left: 20%;
    background-color: rgba(66, 248, 248, 0.966);
    border-radius: 5px;
    width: 50%;
    height: auto;
    padding-left: 10%;

}</style>