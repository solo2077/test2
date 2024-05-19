<template>
    
 <div class="content-container" direction="vertical">

      <!--真正的商品页面编辑-->
     <div>
            <el-container>
                <div class="input-tip">
                    商品名称：
                </div>
                <div class="input-field">
                    <el-input v-model="search_data.name">
                    </el-input>
                </div>
                <div class="input-tip" style="margin-right:17px">
                    金额：
                </div>
                <div class="input-field">
                    <el-input v-model="search_data.money">
                    </el-input>
                </div>
                <div class="input-tip">
                    支付时间：
                </div>
                <div class="input-field">
                    <el-date-picker type="daterange" rang-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" v-model="search_data.pay_time"
                        ></el-date-picker>

                </div>
            </el-container>
            <el-container>
                <div class="input-tip" >
                    订单编号：
                </div>
                <div class="input-field">
                    <el-input v-model="search_data.id">
                    </el-input>

                </div>
                <div class="input-tip">
                    手机号：
                </div>
                <div class="input-field">
                    <el-input v-model="search_data.phone">
                    </el-input>
                </div>
                <div class="input-tip">
                    发货时间：
                </div>
                <div class="input-field">
                    <el-date-picker type="daterange" rang-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" v-model="search_data.send_time"></el-date-picker>

                </div>
            </el-container>

        </div>
     <div>
         <el-container class="content-row">
             <el-button type="primary " @click="search">筛选</el-button>
             <el-button type="danger" @click="resume">清空筛选</el-button>
             <el-button type="primary" @click="send">导出</el-button>
      
         </el-container>
     </div>
     <!--list--->
     <div>


         <el-table ref="myTable":data="DD_all"  style="width: 100%" @selection-change="handleSelectionChange">
             <el-table-column type="selection" width="55">
             </el-table-column>
             <el-table-column prop="goods" label="订单名" width="100">
             </el-table-column>

             <el-table-column prop="id" label="订单号" width="100">
             </el-table-column>

             <el-table-column prop="name" label="买家信息" width="100">
             </el-table-column>
             <el-table-column prop="price" label="售价" width="100">
             </el-table-column>

             <el-table-column prop="time" label="支付时间">
             </el-table-column>

             <el-table-column prop="go_state" label="通过状态" width="100">
             
             </el-table-column>

 
             <el-table-column prop="state" label="支付状态" width="100">
                
             </el-table-column>

             <el-table-column prop="goodType" label="发货状态" width="100">
                 
             </el-table-column>

             <el-table-column prop="" label="操作" width="300px" >
                 <template #default="scope">
                     <el-button @click="dell(scope.$index, scope.row)" type="info"> 删除 </el-button>
                     <el-button @click="chehui(scope.$index, scope.row)"  type="primary"> 撤回 </el-button>
                     <el-button @click="pass(scope.$index, scope.row)" type="warning"> 通过 </el-button>

                 </template>
             </el-table-column>
   
             <el-table-column prop="phone" label="电话">
             </el-table-column>


         </el-table>



     </div>

 </div>

 
</template>
<script setup lang="ts">
import {useStore} from '@/stores/counter' ;
import { onMounted,ref,reactive,onBeforeUnmount, watch } from 'vue';
import { useRouter } from 'vue-router';
import { Mock } from '@/mock/Mock2';
import { ElMessage, type ElTable } from 'element-plus';
import Tools from '@/Tool';

let tool = Tools
let store= useStore();
let router =useRouter();
let flag = ref<boolean>(false);
let a = ref<any>([]);
let DD_all=reactive<any>([]);
let DD_all2=reactive<any>([]);
let orderList=reactive<any>([]);
let orderList1=reactive<any>([]);
let orderList2=reactive<any>([]);

let mock2 = Mock;
let lest2 = ref();
let lest3 = ref();
let time_Y = ref();
let time_M = ref();
let time_all = ref();
let time_all2 = ref();
let time_all3 = ref();
let search_data=reactive<any>({
    name:"",
    money:"",
    pay_time:"",
    id:"",
    phone:"",
    send_time:""

})
function send() {
    var sendJson = JSON.stringify(DD_all2);
    tool.exportJson("全部订单列表.json", sendJson);

}
function search(){
    DD_all2.splice(0)
    Object.assign(DD_all2,DD_all)
/**商品名称 */
    DD_all.splice(0)
    Object.assign(DD_all, DD_all2.filter((data: any) => { return data.goods.search(search_data.name) != -1 })) 
    DD_all2.splice(0)
    Object.assign(DD_all2,DD_all)
    /**商品金额 */
    DD_all.splice(0)
    Object.assign(DD_all, DD_all2.filter((data: any) => { return data.price.search(search_data.money) != -1 })) 
    DD_all2.splice(0)
    Object.assign(DD_all2,DD_all)
      /**订单id */
    DD_all.splice(0)
    Object.assign(DD_all, DD_all2.filter((data: any) => { return data.id.search(search_data.id) != -1 })) 
    DD_all2.splice(0)
    Object.assign(DD_all2,DD_all)
      /**手机号 */
      DD_all.splice(0)
    Object.assign(DD_all, DD_all2.filter((data: any) => { return data.phone.search(search_data.phone) != -1 })) 
    DD_all2.splice(0)
    Object.assign(DD_all2,DD_all)
    /**时间 */
    console.log(search_data.pay_time[0]);
    
         lest2.value = search_data.pay_time[0];
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


            lest2.value = search_data.pay_time[1];
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
function gologin(){
   store.userName='';
   store.userPassword='';
   //router.push({name:'Login'})
   console.log(router.currentRoute.value.params); 
   
}
function handleSelectionChange(val: any){
a.value=val;
a.value.forEach((item: any) => {
     console.log(item.name);
 });
}
function resume(){
    search_data.name='';
    search_data.money='';
    search_data.pay_time='';
    search_data.id='';
    search_data.phone='';
    search_data.send_time='';
  
    DD_all.splice(0);
            Object.assign(DD_all,store.DD2);
            store.DD2.splice(0);
            Object.assign(store.DD2,DD_all);
}
function pass(index:any, row:any){
    DD_all[index].go_state='通过';
    store.DD2.splice(0);
    Object.assign(store.DD2,DD_all);
    /**重新给订单1单2赋值 */
    for(let i=0;i<DD_all.length;i++){
        if(DD_all[i].goods_type==0&&DD_all[i].go_state=='通过'){
            orderList1.push(DD_all[i]);
        }else if(DD_all[i].goods_type==1&&DD_all[i].go_state=='通过'){
            orderList2.push(DD_all[i]);

        }
    }
    console.log("0",orderList1);
    console.log("1",orderList2);
    
    store.DD1.splice(0);
    store.DD.splice(0);
    Object.assign(store.DD, orderList1);
    Object.assign(store.DD1, orderList2);
}
function chehui(index:any, row:any){
    DD_all[index].go_state='未通过';
    store.DD2.splice(0);
    Object.assign(store.DD2,DD_all);
     /**重新给订单1单2赋值 */
    orderList1.splice(0);
    orderList2.splice(0);
    for(let i=0;i<DD_all.length;i++){
        if(DD_all[i].goods_type==0&&DD_all[i].go_state=='通过'){
            orderList1.push(DD_all[i]);
        }else if(DD_all[i].goods_type==1&&DD_all[i].go_state=='通过'){
            orderList2.push(DD_all[i]);

        }
    }
    console.log("0",orderList1);
    console.log("1",orderList2);
    
    store.DD1.splice(0);
    store.DD.splice(0);
    Object.assign(store.DD, orderList1);
    Object.assign(store.DD1, orderList2);
}
function dell(index:any, row:any){
    DD_all.splice(index,1);
    store.DD2.splice(0);
    Object.assign(store.DD2,DD_all);
    orderList1.splice(0);
    orderList2.splice(0);
    console.log("all",DD_all);
    
    for(let i=0;i<DD_all.length;i++){
        if(DD_all[i].goods_type==0){
            orderList1.push(DD_all[i]);
        }else if(DD_all[i].goods_type==1){
            orderList2.push(DD_all[i]);

        }
    }
    console.log("0",orderList1);
    console.log("1",orderList2);
    
    store.DD1.splice(0);
    store.DD.splice(0);
    Object.assign(store.DD, orderList1);
    Object.assign(store.DD1, orderList2);

}
onMounted(()=>{
    if(store.DD2 == ''){
            if (store.DD == '') {
            orderList.splice(0);
            Object.assign(orderList, mock2.geOrder(0))
            Object.assign(store.DD, orderList)
        } else if (store.DD !== '') {
            orderList.splice(0);
            Object.assign(orderList, store.DD)
        }
        if (store.DD1 == '') {
            orderList.splice(0);
            Object.assign(orderList, mock2.geOrder(1))
            Object.assign(store.DD1, orderList)
        } else if (store.DD1 !== '') {
            orderList.splice(0);
            Object.assign(orderList, store.DD1)
        }

    DD_all.splice(0);
    store.DD2.splice(0);
    Object.assign(store.DD2,store.DD);
    for(let i=0;i<store.DD1.length;i++){
        console.log(store.DD1[i]);
        store.DD2.push(store.DD1[i]);
    
    }
    DD_all.splice(0);
    Object.assign(DD_all,store.DD2);


        }else if(store.DD2 !==''){
            DD_all.splice(0);
            Object.assign(DD_all,store.DD2);
            store.DD2.splice(0);
            Object.assign(store.DD2,DD_all);
        }
       
    
})
watch(
    () => router.currentRoute.value.path, // 监听路由对象的 path 属性
    (newPath, oldPath) => {
        // 路径发生变化时的回调函数
        console.log('路由路径从', oldPath, '变为', newPath);
        // 如果需要的话，更新旧路径的引用
        
        console.log(router.currentRoute.value.params.type);


        // 在这里执行其他操作，比如获取新路由对应的数据等
        if(store.DD2 == ''){
            if (store.DD == '') {
            orderList.splice(0);
            Object.assign(orderList, mock2.geOrder(0))
            Object.assign(store.DD, orderList)
        } else if (store.DD !== '') {
            orderList.splice(0);
            Object.assign(orderList, store.DD)
        }
        if (store.DD1 == '') {
            orderList.splice(0);
            Object.assign(orderList, mock2.geOrder(1))
            Object.assign(store.DD1, orderList)
        } else if (store.DD1 !== '') {
            orderList.splice(0);
            Object.assign(orderList, store.DD1)
        }

    DD_all.splice(0);
    store.DD2.splice(0);
    Object.assign(store.DD2,store.DD);
    for(let i=0;i<store.DD1.length;i++){
        console.log(store.DD1[i]);
        store.DD2.push(store.DD1[i]);
    
    }
    DD_all.splice(0);
    Object.assign(DD_all,store.DD2);


        }else if(store.DD2 !==''){
            DD_all.splice(0);
            Object.assign(DD_all,store.DD2);
            store.DD2.splice(0);
            Object.assign(store.DD2,DD_all);
        }
       
      
    },//到这里赋值结束
    { immediate: false, deep: true } // 立即执行设为 false，深度监听设为 true 来监听对象内部属性的变化
);

</script>

<style scoped>

</style>
