<template>


    <!--    <h1>嵌套路由订单界面</h1>
    <h2>{{ router.currentRoute.value.path }}:{{ router.currentRoute.value.params }}</h2>
    <button type="button" @click="gologin">返回登录</button> -->

    <div class="content-container" direction="vertical">
        <div v-if="flag" class="login-modal">
            <div class="login_show">

                <el-container>
                    <div class="input-tip2" style="width: 100px;">
                        商品名称：
                    </div>
                    <div class="input-field">
                        <el-input v-model="DD_Order.good"> </el-input>

                    </div>

                    <div class="input-tip2" style="width: 100px;">
                        商品总价：
                    </div>
                    <div class="input-field">
                        <el-input v-model="DD_Order.mach">
                        </el-input>
                    </div>
                </el-container>
                <el-container>
                    <div class="input-tip2" style="width: 100px;">
                        买家信息：
                    </div>
                    <div class="input-field">
                        <el-input v-model="DD_Order.buyer">
                        </el-input>
                    </div>

                    <div class="input-tip2" style="width: 100px;">
                        支付时间：
                    </div>
                    <div class="input-field">
                        <el-date-picker v-model="DD_Order.payTime" type="date" placeholder="选择日期" id="input-field2">
                        </el-date-picker>
                    </div>
                </el-container>
                <el-container>
                    <div class="input-tip2">
                        交易职位：
                    </div>
                    <div class="input-field">
                        <el-radio v-model="radio" label="经理">经理</el-radio>
                        <el-radio v-model="radio" label="分销员">分销员</el-radio>
                    </div>

                    <div class="input-tip2">
                        支付状态：
                    </div>
                    <div class="input-field">
                        <el-radio v-model="radio2" label="已支付">已支付</el-radio>
                        <el-radio v-model="radio2" label="未支付">未支付</el-radio>
                    </div>
                </el-container>
                <el-container>
                    <div class="input-tip2">
                        支付方式：
                    </div>
                    <div class="input-field">
                        <el-radio v-model="radio3" label="支付宝">支付宝</el-radio>
                        <el-radio v-model="radio3" label="微信">微信</el-radio>
                    </div>
                    <div class="input-tip2">
                        发货状态：
                    </div>
                    <div class="input-field">
                        <el-radio v-model="radio4" label="已发货">已发货</el-radio>
                        <el-radio v-model="radio4" label="未发货">未发货</el-radio>
                    </div>


                </el-container>
                <el-container>
                    <div class="input-tip2">
                        买家电话：
                    </div>
                    <div class="input-field">
                        <el-input v-model="DD_Order.phone">
                        </el-input>
                    </div>
                    <div class="input-tip2">
                        买家来源：
                    </div>
                    <div class="input-field">
                        <el-input v-model="DD_Order.buyer_from">
                        </el-input>
                    </div>
                </el-container>
                <el-container style="margin: 0;margin-left: 30%">

                    <el-button @click="change_data3(index_now, row_now)" type="primary"> 编辑 </el-button>
                    <el-button @click="qu_xiao" type="info"> 取消 </el-button>
                </el-container>




            </div>

        </div>
     
        <div>
            <el-container>
                <div class="input-tip"style="width: 100px;">
                    商品名称：
                </div>
                <div class="input-field">
                    <el-input v-model="queryParam.good">
                    </el-input>
                </div>
                <div class="input-tip" style=" width: 100px;">
                    金额：
                </div>
                <div class="input-field">
                    <el-input v-model="queryParam.consignee">
                    </el-input>
                </div>
                <div class="input-tip">
                    支付时间：
                </div>
                <div class="input-field">
                    <el-date-picker type="daterange" rang-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
                        v-model="queryParam.payTime"></el-date-picker>

                </div>
            </el-container>
            <el-container>
                <div class="input-tip">
                    用户名称：
                </div>
                <div class="input-field">
                    <el-input v-model="queryParam.name">
                    </el-input>

                </div>
                <div class="input-tip">
                    手机号：
                </div>
                <div class="input-field">
                    <el-input v-model="queryParam.phone">
                    </el-input>
                </div>
                <div class="input-tip">
                    发货时间：
                </div>
                <div class="input-field">
                    <el-date-picker type="daterange" rang-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
                        v-model="queryParam.sendTime"></el-date-picker>

                </div>
            </el-container>

        </div>

        <div>
            <el-container class="content-row">
                <el-button type="primary " @click="search">筛选</el-button>
                <el-button type="danger" @click="nosearch">清空筛选</el-button>
                <el-button type="primary" @click="send">导出</el-button>
                <el-button type="primary" @click="change_goodType_together">批量发货</el-button>
                <el-button type="primary" @click="send_all">下载批量发货单</el-button>
            </el-container>
        </div>
        <!--list--->
        <div>
            <el-container>
                <el-tabs @tab-click="click_tip">
                    <el-tab-pane click></el-tab-pane>
                    <el-tab-pane label="未支付"></el-tab-pane>
                    <el-tab-pane label="已支付"></el-tab-pane>
                    <el-tab-pane label="待发货"></el-tab-pane>
                    <el-tab-pane label="已发货"></el-tab-pane>

                </el-tabs>
            </el-container>

            <el-table ref="myTable" :data="orderList" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column prop="goods" label="商品" width="100">
                </el-table-column>

                <el-table-column prop="price" label="总价/数量" width="100">
                </el-table-column>

                <el-table-column prop="name" label="买家信息" width="100">
                </el-table-column>

                <el-table-column prop="time" label="支付时间">
                </el-table-column>


                <el-table-column prop="role" label="分销信息">
                    <template #default="scope">
                        <el-tag v-if="orderList[scope.$index].role">{{ orderList[scope.$index].role }}</el-tag>
                        <el-tag v-if="!orderList[scope.$index].role">{{ orderList[scope.$index].role }}</el-tag>

                    </template>
                </el-table-column>

                <el-table-column prop="state" label="支付状态" width="100">
                    <template #default="scope">
                        <el-tag>{{ orderList[scope.$index].state }}</el-tag>
                    </template>
                </el-table-column>

                <el-table-column prop="goodType" label="发货状态" width="100">
                    <template #default="scope">
                        <el-tag>{{ orderList[scope.$index].goodType }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="role" label="操作" width="270">
                    <template #default="scope">
                        <el-button @click="dell(scope.$index, scope.row)" type="info"> 删除 </el-button>
                        <el-button @click="change_data2(scope.$index, scope.row)" type="primary"> 编辑 </el-button>
                        <el-button @click="change_data4(scope.$index, scope.row)" type="warning"> 发货 </el-button>

                    </template>
                </el-table-column>
                
                <el-table-column prop="payType" label="支付方式">
                    <template #default="scope">
                        <el-tag>{{ orderList[scope.$index].payType }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="source" label="来源">
                </el-table-column>
                <el-table-column prop="phone" label="电话">
                </el-table-column>


            </el-table>



        </div>

    </div>

</template>

<script setup lang="ts">

import { useStore } from '@/stores/counter';
import { onMounted, reactive, ref, watch } from 'vue';
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRouter } from 'vue-router';
import { Mock } from '@/mock/Mock2';
import '@/views/all.css'
import { ElMessage, type ElTable } from 'element-plus';
import Tools from '@/Tool';
let key=ref(true)
let tool = Tools
const myTable = ref<InstanceType<typeof ElTable> | null>(null);
let show = ref(true)
let store = useStore();
let router = useRouter();
let queryParam = reactive({ good: "", consignee: "", phone: "", name: "", payTime: "", sendTime: "" })
let orderList = reactive<any>([])
let orderList1 = reactive<any>([])
let a = ref<any>([]);
let b = reactive<any>([]);

let index_now = ref();
let row_now = ref();
let radio = ref("");
let radio2 = ref("");
let radio3 = ref("");
let radio4 = ref("");
let flag = ref(false)
let flag2 = ref(true)


let DD_Order_select = reactive({
    good: '',
    consignee: '',
    phone: '',
    name: '',
    payTime: '',
    sendTime: '',
})
let DD_Order = reactive({
    good: '',
    mach: '',
    buyer: '',
    payTime: '',
    power: radio.value,
    pay_state: radio2.value,
    pay_way: radio3.value,
    phone: '',
    buyer_from: '',

})
let mock2 = Mock;
function send() {
    var sendJson = JSON.stringify(orderList);
    tool.exportJson("订单列表.json", sendJson);

}
function click_tip(data: any) {
    console.log("******qqqqqqq******", data.props.label)
    orderList1.splice(0);
    orderList.splice(0);
    if(router.currentRoute.value.params.type == "1"){
        Object.assign(orderList, store.DD1);
    }else{
        Object.assign(orderList, store.DD);
    }
   

    for (let i = 0; i < orderList.length; i++) {
        if (data.props.label == "已发货") {
            if (orderList[i].goodType == "已发货") {
                orderList1.unshift(orderList[i]);

            }
        } else if (data.props.label == "待发货") {
            if (orderList[i].goodType == "未发货") {
                orderList1.unshift(orderList[i]);

            }

        }else if (data.props.label == "未支付") {
            if (orderList[i].state == "未支付") {
                orderList1.unshift(orderList[i]);

            }

        }
        else if (data.props.label == "已支付") {
            if (orderList[i].state == "已支付") {
                orderList1.unshift(orderList[i]);
            }
        }else{
            orderList1.splice(0);
            Object.assign(orderList1, orderList);
        }

    }
    orderList.splice(0);
    Object.assign(orderList, orderList1);
}
function send_all() {
    for (let i = 0; i < orderList.length; i++) {
        if (orderList[i].goodType == "已发货") {
            b.push(orderList[i]);

        }
    }
    console.log("b", b);

    var sendJson = JSON.stringify(b);
    tool.exportJson("订单列表.json", sendJson);
}
function search() {

    if (router.currentRoute.value.params.type == "1") {
        /*商品名*/

        orderList1.splice(0);
        Object.assign(orderList1, orderList);

        orderList.splice(0);
        Object.assign(orderList, orderList1.filter((data: any) => { return data.goods.search(queryParam.good) != -1 }))  //L0新  L1

        /*   console.log(store.DD1.filter((data:any)=>{return data.goods.search(queryParam.good) != -1}));  */
        orderList1.splice(0);
        Object.assign(orderList1, orderList);
        //L1新  L0新




        /*金额*/
        orderList.splice(0);
        Object.assign(orderList, orderList1.filter((data: any) => { return data.price.search(queryParam.consignee) != -1 }))
        orderList1.splice(0);
        Object.assign(orderList1, orderList);

        /**用户名 */
        orderList.splice(0);
        Object.assign(orderList, orderList1.filter((data: any) => { return data.name.search(queryParam.name) != -1 }))
        orderList1.splice(0);
        Object.assign(orderList1, orderList);

        //手机号 
        orderList.splice(0);
        Object.assign(orderList, orderList1.filter((data: any) => { return data.phone.search(queryParam.phone) != -1 }))
        orderList1.splice(0);
        Object.assign(orderList1, orderList);

        ///支付时间 起始计算

        lest2.value = queryParam.payTime[0];
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
            /**截至时间计算 */
            lest2.value = ''
            lest3.value = ''
            time_Y.value = ''
            time_M.value = ''


            lest2.value = queryParam.payTime[1];
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



        /*列表里的时间计算*/
        for (let i = 0; i < orderList1.length; i++) {

            lest2.value = ''
            lest3.value = ''
            time_Y.value = ''
            time_M.value = ''

            lest2.value = orderList1[i].time;
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
                    orderList.splice(0);
            key.value=false;
        }  
        
                orderList.unshift(orderList1[i]);
                console.log("支付时间符合");


            }

        }



        key.value=true
        orderList1.splice(0);
        Object.assign(orderList1, orderList);

    }
    if (router.currentRoute.value.params.type == "0") {
        /*商品名*/

        orderList1.splice(0);
        Object.assign(orderList1, orderList);

        orderList.splice(0);
        Object.assign(orderList, orderList1.filter((data: any) => { return data.goods.search(queryParam.good) != -1 }))  //L0新  L1


        orderList1.splice(0);
        Object.assign(orderList1, orderList);
        //L1新  L0新




        /*金额*/
        orderList.splice(0);
        Object.assign(orderList, orderList1.filter((data: any) => { return data.price.search(queryParam.consignee) != -1 }))
        orderList1.splice(0);
        Object.assign(orderList1, orderList);

        /**用户名 */
        orderList.splice(0);
        Object.assign(orderList, orderList1.filter((data: any) => { return data.name.search(queryParam.name) != -1 }))
        orderList1.splice(0);
        Object.assign(orderList1, orderList);

        //手机号 
        orderList.splice(0);
        Object.assign(orderList, orderList1.filter((data: any) => { return data.phone.search(queryParam.phone) != -1 }))
        orderList1.splice(0);
        Object.assign(orderList1, orderList);

        ///支付时间 

        lest2.value = queryParam.payTime[0];
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
            /**截至时间计算 */
            lest2.value = ''
            lest3.value = ''
            time_Y.value = ''
            time_M.value = ''


            lest2.value = queryParam.payTime[1];
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



        /*列表里的时间计算*/
        for (let i = 0; i < orderList1.length; i++) {

            lest2.value = ''
            lest3.value = ''
            time_Y.value = ''
            time_M.value = ''

            lest2.value = orderList1[i].time;
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
                orderList.splice(0);
                orderList.unshift(orderList1[i]);
                console.log("支付时间符合");


            }

        }




        orderList1.splice(0);
        Object.assign(orderList1, orderList);

    }



}

let lest = ref<any>("qwe tyu ghj iop dsa dsa")
let lest2 = ref<any>("")
let lest3 = ref<any>("")
let time_Y = ref<any>("")
let time_M = ref<any>("")
let time_all = ref<any>("")
let time_all2 = ref<any>("")
let time_all3 = ref<any>("")
function change_data4(index: any, row: any) {
    orderList[index].goodType = "已发货";


    for (let i = 0; i < a.value.length; i++) {
        for (let j = 0; j < orderList.length; j++) {
            console.log("发货对比");

            /*  console.log(a.value[i]);
             console.log(orderList[j]);
              */

            if (a.value[i] === orderList[j]) {
                console.log("发货");
                orderList[j].goodType = "已发货";


            }
        }
    }

    a.value = [];
    ElMessage.success('成功发货');



}
function change_goodType_together() {
    for (let i = 0; i < a.value.length; i++) {
        for (let j = 0; j < orderList.length; j++) {
            console.log("发货对比");

            console.log(a.value[i]);
            console.log(orderList[j]);


            if (a.value[i] === orderList[j]) {
                console.log("发货操作");
                orderList[j].goodType = "已发货";


            }

        }
    }
    a.value = [];
    ElMessage.success('成功发货');
}

function handleSelectionChange(val: any) {
    a.value = val;
    a.value.forEach((item: any) => {
        console.log(item.name);
    });


}

function nosearch() {
    if (router.currentRoute.value.params.type == "1") {
        queryParam.good = "";
        queryParam.consignee = "";
        queryParam.name = "";
        queryParam.payTime = "";
        queryParam.sendTime = "";
        queryParam.phone = "";
        orderList.splice(0);
        Object.assign(orderList, store.DD1)
        /*  console.log(store.DD1.filter((data:any)=>{return data.goods.search(queryParam.good) != -1})); */

    }
    if (router.currentRoute.value.params.type == "0") {
        queryParam.good = "";
        queryParam.consignee = "";
        queryParam.name = "";
        queryParam.payTime = "";
        queryParam.sendTime = "";
        queryParam.phone = "";
        orderList.splice(0);
        Object.assign(orderList, store.DD)
        /*  console.log(store.DD1.filter((data:any)=>{return data.goods.search(queryParam.good) != -1})); */

    }
}


onMounted(() => {
    console.log("判断路由", router.currentRoute.value.params.type);

    if (router.currentRoute.value.params.type == "0") {
        if (store.DD == '') {
            orderList.splice(0);
            Object.assign(orderList, mock2.geOrder(router.currentRoute.value.params.type))
            Object.assign(store.DD, orderList)
        } else if (store.DD !== '') {
            orderList.splice(0);
            Object.assign(orderList, store.DD)
        }


    } else if (router.currentRoute.value.params.type == "1") {
        if (store.DD1 == '') {
            orderList.splice(0);
            Object.assign(orderList, mock2.geOrder(router.currentRoute.value.params.type))
            Object.assign(store.DD1, orderList)
        } else if (store.DD1 !== '') {
            orderList.splice(0);
            Object.assign(orderList, store.DD1)
        }


    }
    console.log("***", orderList);
    console.log("store.DD", store.DD);
    console.log("store.DD1", store.DD1);
    console.log(router.currentRoute.value.path);



})

const oldRoutePath = ref(router.currentRoute.value.path);

// 使用 watch 监听路由变化
watch(
    () => router.currentRoute.value.path, // 监听路由对象的 path 属性
    (newPath, oldPath) => {
        // 路径发生变化时的回调函数
        console.log('路由路径从', oldPath, '变为', newPath);
        // 如果需要的话，更新旧路径的引用
        oldRoutePath.value = newPath;
        console.log(router.currentRoute.value.params.type);


        // 在这里执行其他操作，比如获取新路由对应的数据等
        if (router.currentRoute.value.params.type == "0") {

            if (store.DD == '') {
                orderList.splice(0);
                Object.assign(orderList, mock2.geOrder(router.currentRoute.value.params.type))
                Object.assign(store.DD, orderList)
            } else if (store.DD !== '') {
                orderList.splice(0);
                Object.assign(orderList, store.DD)
            }


        } else if (router.currentRoute.value.params.type == "1") {

            if (store.DD1 == '') {
                orderList.splice(0);
                Object.assign(orderList, mock2.geOrder(router.currentRoute.value.params.type))
                Object.assign(store.DD1, orderList)
            } else if (store.DD1 !== '') {
                orderList.splice(0);
                Object.assign(orderList, store.DD1)

            }


        }
        console.log("qwertyuuiiiuda",orderList);

    },
    { immediate: false, deep: true } // 立即执行设为 false，深度监听设为 true 来监听对象内部属性的变化
);

function gologin() {

    //  router.push({name:'Login'})

    console.log(router.currentRoute.value.params.type);
    flag.value = !flag.value;
    console.log("radio", radio.value);
    console.log(queryParam.payTime);


}
function dell(index: any, row: any) {
    orderList.splice(index, 1);
   
    if(router.currentRoute.value.params.type =='0'){
        store.DD.splice(0);
        Object.assign(store.DD, orderList)

    }else if(router.currentRoute.value.params.type =='1'){
        Object.assign(store.DD1, orderList)

    }
 

}
function change_data2(index: any, row: any) {
    flag.value = !flag.value
    index_now.value = index;
    row_now.value = row;
}
function change_data3(index: any, row: any) {
    flag2.value = !flag2.value;
    console.log("变前的临时数据", orderList[index]);
    orderList[index].goods = DD_Order.good
    orderList[index].price = DD_Order.mach
    orderList[index].name = DD_Order.buyer
    orderList[index].time = DD_Order.payTime

    orderList[index].role = radio.value;
    orderList[index].state = radio2.value
    orderList[index].payType = radio3.value

    orderList[index].source = DD_Order.buyer_from
    orderList[index].phone = DD_Order.phone

    orderList[index].goodType = radio4.value
    console.log("变后的临时数据", orderList[index]);
    store.DD.splice(0);
    Object.assign(store.DD, orderList)
    console.log("变后的仓库数据", store.DD);
}
function request() {
    console.log("进入筛选");
    console.log("DD", store.DD);
    console.log(mock2.geOrder(router.currentRoute.value.params.type));
}
function qu_xiao() {
    flag.value = !flag.value;
}


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

}
</style>