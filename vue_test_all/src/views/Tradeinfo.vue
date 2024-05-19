
<template>

 <div class="content-container" direction="vertical">
    
  
    <el-container>
                <div class="input-tip">
                    商品名称：
                </div>
                <div class="input-field">
                    <el-input v-model="data_get.good">
                    </el-input>
                </div>
                <div class="input-tip" style="margin-right:17px">
                    用户姓名：
                </div>
                <div class="input-field">
                    <el-input  v-model="data_get.name">
                    </el-input>
                </div>
                <div class="input-tip">
                    支付时间：
                </div>
                <div class="input-field">
                    <el-date-picker type="daterange" rang-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
                    style="width: 300px;"  v-model="data_get.pay_time"   ></el-date-picker >

                </div>
            </el-container>
            <el-container>
                <div class="input-tip" >
                    订单编号：
                </div>
                <div class="input-field">
                    <el-input  v-model="data_get.id">
                    </el-input>

                </div>
                <div class="input-tip">
                    手机号：
                </div>
                <div class="input-field">
                    <el-input  v-model="data_get.phone">
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
            <div>
         <el-container class="content-row">
             <el-button type="primary " @click="search">筛选</el-button>
             <el-button type="danger"   @click="recome">清空筛选</el-button>
             <el-button type="primary"  @click="send">导出</el-button>
         </el-container>
     </div>
  <!--list--->
  <div>
       

       <el-table ref="myTable":data="DD_all " style="width: 100%" @selection-change="handleSelectionChange">
           <el-table-column type="selection" width="55">
           </el-table-column>
           <el-table-column prop="goods" label="商品" width="100">
           </el-table-column>

           <el-table-column prop="" label="总额销售" width="100">
            <template #default="scope">
            <el-tag>{{ DD_all[scope.$index].sum * DD_all[scope.$index].price }}</el-tag>
          </template>
           </el-table-column>

           <el-table-column prop="mag" label="买家信息" width="100">
           </el-table-column>

           <el-table-column prop="time" label="支付时间"width="200">
           </el-table-column>


           <el-table-column prop="id" label="订单编号">
              
           </el-table-column>

           <el-table-column prop="phone" label="销售手机号" width="100">
              
           </el-table-column>

           <el-table-column prop="colether_type" label="商品类别" width="100">
              
           </el-table-column>
         

       </el-table>



   </div>
     </div>

   
   


 
</template>
<script setup lang="ts">
import {useStore} from '@/stores/counter' ;
import { onMounted,ref,reactive,onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { Mock } from '@/mock/Mock2';
import { ElMessage, type ElTable } from 'element-plus';
import Tools from '@/Tool';
let tool=Tools
let store= useStore();
let router =useRouter();
let flag = ref<boolean>(false);
let a = ref<any>([]);
let value= ref<any>()
let lest2= ref<any>()
let lest3= ref<any>()
let time_Y= ref<any>()
let time_M= ref<any>()
let time_all3= ref<any>()
let time_all2= ref<any>()
let time_all= ref<any>()

let data_get=reactive({
    name:'',
    good:'',
    pay_time:'',
    id:'',
    phone:'',
    colether_type:'',

})

let goodclass = reactive<any>(["全部","男的","女的"]) 
let mock2 = Mock;
function gologin(){
   store.userName='';
   store.userPassword='';
   //router.push({name:'Login'})
   console.log(router.currentRoute.value.params); 
   
}
let DD_all2=reactive<any>([])
function search(){
    DD_all2.splice(0)
    Object.assign(DD_all2,DD_all)
    /**商品名称 */
    DD_all.splice(0)
    Object.assign(DD_all, DD_all2.filter((data: any) => { return data.goods.search(data_get.good) != -1 })) 
    DD_all2.splice(0)
    Object.assign(DD_all2,DD_all)
    /**用户名 */
    DD_all.splice(0)
    Object.assign(DD_all, DD_all2.filter((data: any) => { return data.mag.search(data_get.name) != -1 })) 
    DD_all2.splice(0)
    Object.assign(DD_all2,DD_all)
      /**订单id */
      DD_all.splice(0)
    Object.assign(DD_all, DD_all2.filter((data: any) => { return data.id.search(data_get.id) != -1 })) 
    DD_all2.splice(0)
    Object.assign(DD_all2,DD_all)
/**手机号 */
DD_all.splice(0)
    Object.assign(DD_all, DD_all2.filter((data: any) => { return data.phone.search(data_get.phone) != -1 })) 
    DD_all2.splice(0)
    Object.assign(DD_all2,DD_all)
    /**分类 */
DD_all.splice(0)
    Object.assign(DD_all, DD_all2.filter((data: any) => { return data.colether_type.search(value.value) != -1 })) 
    DD_all2.splice(0)
    Object.assign(DD_all2,DD_all)
     /**时间 */
     console.log(data_get.pay_time[0]);
    
    lest2.value = data_get.pay_time[0];
   lest3.value = String(lest2.value).split(" ")


   if (lest3.value.length >= 6) {
       time_Y.value = Number(lest3.value[3]) * 365;


       if (lest3.value[1] == "May") {
           time_M.value = 5 * 30;

       } else if (lest3.value[1] == "Jan") {
           time_M.value = 1 * 30;

       } else if (lest3.value[1] == "Feb") {
           time_M.value = 2 * 30;

       } else if (lest3.value[1] == "Mar") {
           time_M.value = 3 * 30;

       } else if (lest3.value[1] == "Apr") {
           time_M.value = 4 * 30;
       } else if (lest3.value[1] == "Jun") {
           time_M.value = 6 * 30;
       } else if (lest3.value[1] == "Jul") {
           time_M.value = 7 * 30;
       } else if (lest3.value[1] == "Aug") {
           time_M.value = 8 * 30;
       } else if (lest3.value[1] == "Sep") {
           time_M.value = 9 * 30;
       } else if (lest3.value[1] == "Oct") {
           time_M.value = 10 * 30;
       } else if (lest3.value[1] == "Nov") {
           time_M.value = 11 * 30;
       } else if (lest3.value[1] == "Dec") {
           time_M.value = 12 * 30;
       }
       time_all.value = time_Y.value + time_M.value + Number(lest3.value[2])
       console.log("选定的起始时间", time_all.value);
      // /**截至时间计算 
       lest2.value = ''
       lest3.value = ''
       time_Y.value = ''
       time_M.value = ''


       lest2.value = data_get.pay_time[1];
       lest3.value = String(lest2.value).split(" ")

       time_Y.value = Number(lest3.value[3]) * 365;
       console.log("字母", lest3.value[1]);

       if (lest3.value[1] == "May") {
           time_M.value = 5 * 30;

       } else if (lest3.value[1] == "Jan") {
           time_M.value = 1 * 30;

       } else if (lest3.value[1] == "Feb") {
           time_M.value = 2 * 30;

       } else if (lest3.value[1] == "Mar") {
           time_M.value = 3 * 30;

       } else if (lest3.value[1] == "Apr") {
           time_M.value = 4 * 30;
       } else if (lest3.value[1] == "Jun") {
           time_M.value = 6 * 30;
       } else if (lest3.value[1] == "Jul") {
           time_M.value = 7 * 30;
       } else if (lest3.value[1] == "Aug") {
           time_M.value = 8 * 30;
       } else if (lest3.value[1] == "Sep") {
           time_M.value = 9 * 30;
       } else if (lest3.value[1] == "Oct") {
           time_M.value = 10 * 30;
       } else if (lest3.value[1] == "Nov") {
           time_M.value = 11 * 30;
       } else if (lest3.value[1] == "Dec") {
           time_M.value = 12 * 30;
       }
       time_all2.value = time_Y.value + time_M.value + Number(lest3.value[2])

       console.log("选定的截至时间", time_all2);



   }



 // /*列表里的时间计算
   for (let i = 0; i < DD_all.length; i++) {

       lest2.value = ''
       lest3.value = ''
       time_Y.value = ''
       time_M.value = ''

       lest2.value = DD_all[i].time;
       lest3.value = String(lest2.value).split(" ")


       if (lest3.value.length <= 3) {

           lest2.value = ''
           lest3.value = String(lest3.value[0]).split("-")
           console.log(lest3.value[0]);
           console.log(lest3.value[1]);
           console.log(lest3.value[2]);

           time_all3.value = Number(lest3.value[0]) * 365 + Number(lest3.value[1]) * 30 + Number(lest3.value[2])
           console.log("支付的截至时间", time_all3.value);
       } else if (lest3.value.length >= 6) {

           time_Y.value = Number(lest3.value[3]) * 365;


           if (lest3.value[1] == "May") {
               time_M.value = 5 * 30;

           } else if (lest3.value[1] == "Jan") {
               time_M.value = 1 * 30;

           } else if (lest3.value[1] == "Feb") {
               time_M.value = 2 * 30;

           } else if (lest3.value[1] == "Mar") {
               time_M.value = 3 * 30;

           } else if (lest3.value[1] == "Apr") {
               time_M.value = 4 * 30;
           } else if (lest3.value[1] == "Jun") {
               time_M.value = 6 * 30;
           } else if (lest3.value[1] == "Jul") {
               time_M.value = 7 * 30;
           } else if (lest3.value[1] == "Aug") {
               time_M.value = 8 * 30;
           } else if (lest3.value[1] == "Sep") {
               time_M.value = 9 * 30;
           } else if (lest3.value[1] == "Oct") {
               time_M.value = 10 * 30;
           } else if (lest3.value[1] == "Nov") {
               time_M.value = 11 * 30;
           } else if (lest3.value[1] == "Dec") {
               time_M.value = 12 * 30;
           }
           time_all3.value = time_Y.value + time_M.value + Number(lest3.value[2])

       }




       if (time_all3.value >= time_all.value && time_all3.value <= time_all2.value) {
        if(key.value) {
            DD_all.splice(0);
            key.value=false;
        }  
        
           
           DD_all.unshift(DD_all2[i]);
           console.log("支付时间符合");


       }

   }



   key.value=true
   DD_all2.splice(0);
   Object.assign(DD_all2, DD_all);
}
let key=ref(true)
function send() {
    var sendJson = JSON.stringify(DD_all);
    tool.exportJson("全部订单列表.json", sendJson);

}
function recome(){
    data_get.name=''
    data_get.colether_type=''
    data_get.good=''
    data_get.id=''
    data_get.pay_time=''
    data_get.phone=''
    value.value=""
    DD_all.splice(0);
            Object.assign(DD_all,store.DD_good_all);
            store.DD2.splice(0);
            Object.assign(store.DD_good_all,DD_all);
}
function handleSelectionChange(val: any){
a.value=val;
a.value.forEach((item: any) => {
     console.log(item.name);
 });
}
let orderList=reactive<any>([])
let DD_all=reactive<any>([])

onMounted(()=>{
    if(store.DD_good_all == ''){
            if (store.DD_good == '') {
            orderList.splice(0);
            Object.assign(orderList, mock2.getGoods(0))
            Object.assign(store.DD_good, orderList)
        } else if (store.DD_good !== '') {
            orderList.splice(0);
            Object.assign(orderList, store.DD_good)
        }
        if (store.DD_good2 == '') {
            orderList.splice(0);
            Object.assign(orderList, mock2.getGoods(1))
            Object.assign(store.DD_good2, orderList)
        } else if (store.DD_good2 !== '') {
            orderList.splice(0);
            Object.assign(orderList, store.DD_good2)
        }
        if (store.DD_good3 == '') {
            orderList.splice(0);
            Object.assign(orderList, mock2.getGoods(2))
            Object.assign(store.DD_good3, orderList)
        } else if (store.DD_good3 !== '') {
            orderList.splice(0);
            Object.assign(orderList, store.DD_good3)
        }

    DD_all.splice(0);
    store.DD_good_all.splice(0);

    Object.assign(store.DD_good_all,store.DD_good);
    console.log("1",store.DD_good_all,);
    

    for(let i=0;i<store.DD_good2.length;i++){
       
        store.DD_good_all.push(store.DD_good2[i]);
    
    }
    console.log("2",store.DD_good_all);
    for(let i=0;i<store.DD_good3.length;i++){
       
        store.DD_good_all.push(store.DD_good3[i]);
    
    }  console.log("3",store.DD_good_all);
   


        }else if(store.DD_good_all !==''){
            DD_all.splice(0);
            Object.assign(DD_all, store.DD_good_all);
            store.DD_good_all.splice(0);
            Object.assign(store.DD_good_all,DD_all);
        }
       console.log(DD_all);
       DD_all.splice(0);
    Object.assign(DD_all, store.DD_good_all);
    console.log(DD_all);
    
})
</script>

<style scoped>

</style>
