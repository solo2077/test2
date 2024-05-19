
<template>
   
 <div class="content-container" style="padding: 0;" >
   <div style="background-color:bisque ;height: 50px;width: 100%;line-height: 50px;text-align: left;padding-left: 20px;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ;"><b>价格设置</b></div>
   <el-container>
            <div class="input-tip" width="100px">
                市场价：
            </div>
            <div class="input-field">
                <el-input v-model="good_second_sin.price_mayun">
                </el-input>
            </div>
        </el-container>
   <el-container>
            <div class="input-tip" width="100px">
                展示价：
            </div>
            <div class="input-field">
                <el-input v-model="good_second_sin.price_show">
                </el-input>
            </div>
        </el-container>
   <el-container>
            <div class="input-tip" width="100px">
                积分价：
            </div>
            <div class="input-field">
                <el-input v-model="good_second_sin.price_jifeng">
                </el-input>
            </div>
        </el-container>
   <el-container>
            <div class="input-tip" width="100px">
                成本价：
            </div>
            <div class="input-field">
                <el-input v-model="good_second_sin.price_buy">
                </el-input>
            </div>
        </el-container>
   <el-container>
            <div class="input-tip" width="100px">
                限购数：
            </div>
            <div class="input-field">
                <el-input v-model="good_second_sin.buy_sum">
                </el-input>
            </div>
        </el-container>
   <div style="background-color:bisque ;height: 50px;width: 100%;line-height: 50px;text-align: left;padding-left: 20px;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ;"><b>库存设置</b></div>
   <el-container>
            <div class="input-tip" width="100px">
                库存数量：
            </div>
            <div class="input-field">
                <el-input v-model="good_second_sin.save_sum">
                </el-input>
            </div>
        </el-container>
   <el-container>
            <div class="input-tip" width="100px">
                基础销量：
            </div>
            <div class="input-field">
                <el-input v-model="good_second_sin.poop_basic_sum">
                </el-input>
            </div>
        </el-container>
   <el-container>
            <div class="input-tip" width="100px">
                浏览数量：
            </div>
            <div class="input-field">
                <el-input v-model="good_second_sin.know_sum">
                </el-input>
            </div>
        </el-container>
        <el-container>
        <el-button @click="save" type="primary"> 添加 </el-button><!-- change_data3(index_now, row_now) -->
          <el-button @click="close" type="info"> 取消 </el-button>
        </el-container>
 </div>



</template>
<script setup lang="ts">
import {useStore} from '@/stores/counter' ;
import { ElMessage } from 'element-plus';
import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { v4 as uuidv4 } from "uuid"


let store= useStore();
let router =useRouter();
let tag_name=ref('');
function handleClick(){
    
}
let good_second_sin =reactive({
    price_mayun:"",
    price_show:'',
    price_jifeng:'',
    price_buy:'',
    buy_sum:'',
    save_sum:'',
    poop_basic_sum:'',
    know_sum:'',

  });
function gologin(){
   store.userName='';
   store.userPassword='';
   //router.push({name:'Login'})
   console.log(router.currentRoute.value.params); 
   
}

function close(){
    router.push({name:"Goods",params: { type: 0 }})
}
function save(){
    ElMessage({
        message: '商品价格库存创建成功',
    type: 'success'
    })
    store.good_second.price_mayun=good_second_sin.price_mayun;
    store.good_second.price_show=good_second_sin.price_show;
    store.good_second.price_jifeng=good_second_sin.price_jifeng;
    store.good_second.price_buy=good_second_sin.buy_sum
    store.good_second.buy_sum=good_second_sin.buy_sum
    store.good_second.save_sum=good_second_sin.save_sum
    store.good_second.poop_basic_sum=good_second_sin.poop_basic_sum
    store.good_second.know_sum=good_second_sin.know_sum
    console.log(store.good_second);
    if(store.good_show_type==0){
      store.DD_good.unshift({
         goods:store.good_name,
   
    price:store.good_second.price_mayun, 
   sum:store.good_second.buy_sum,
    t_sum:store.good_second.poop_basic_sum, 
   save_sum:store.good_second.save_sum, 
    all_sum:Number(store.good_second.save_sum)+ Number(store.good_second.poop_basic_sum),
    t_Money:Number(store.good_second.price_mayun)* Number(store.good_second.poop_basic_sum),
    colether_type:store.good_type,
    eat_type:'未过期',
   mag:store.userName ,
   time:store.good_time ,
   id: uuidv4(),
    
      })
      console.log(store.DD_good);
      

    }
    if(store.good_show_type==1){
      store.DD_good2.unshift({
         goods:store.good_name,
   
    price:store.good_second.price_mayun, 
   sum:store.good_second.buy_sum,
    t_sum:store.good_second.poop_basic_sum, 
   save_sum:store.good_second.save_sum, 
    all_sum:Number(store.good_second.save_sum)+ Number(store.good_second.poop_basic_sum),
    t_Money:Number(store.good_second.price_mayun)* Number(store.good_second.poop_basic_sum),
    colether_type:store.good_type,
    eat_type:'未过期',
   mag:store.userName ,
   time:store.good_time ,
   id: uuidv4(),
    
      })
      console.log(store.DD_good2);
      

    }
    if(store.good_show_type==2){
      store.DD_good3.unshift({
         goods:store.good_name,
   
    price:store.good_second.price_mayun, 
   sum:store.good_second.buy_sum,
    t_sum:store.good_second.poop_basic_sum, 
   save_sum:store.good_second.save_sum, 
    all_sum:Number(store.good_second.save_sum)+ Number(store.good_second.poop_basic_sum),
    t_Money:Number(store.good_second.price_mayun)* Number(store.good_second.poop_basic_sum),
    colether_type:store.good_type,
    eat_type:'未过期',
   mag:store.userName ,
   time:store.good_time ,
   id: uuidv4(),
    
      })
      console.log(store.DD_good3);
      

    }
   

    
    
    
}


</script>

<style scoped>

</style>
