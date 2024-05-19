<template>
    <div class="content-container" direction="vertical">
       <!--  <el-container>
        <div class="info">总交易额：{{}}</div>
            <div class="info">秒杀交易额：{{ }}</div>
            <div class="info">普通商品交易额：{{ }}</div>
            <div class="info">累计用户：{{ }}</div>
            <div class="info">目前总用户：{{  }}</div> 
        </el-container> -->
        <el-container>

            <el-tabs @tab-click="chilk">
                <el-tab-pane label="总交易额"></el-tab-pane>
                <el-tab-pane label="商品交易额"></el-tab-pane>
                <el-tab-pane label="新用户销量"></el-tab-pane>
                <el-tab-pane label="方可转化率"></el-tab-pane>
                <el-tab-pane label="下单转化率"></el-tab-pane>
                <el-tab-pane label="付款转化率"></el-tab-pane>
                <el-tab-pane label="流水"></el-tab-pane>

            </el-tabs>
        </el-container>
        <Charts :a="xData" :b="chartsData" v-if="key==0"></Charts>
        <Charts1 :a="xData" :b="chartsData" v-if="key==1"></Charts1>
        <Charts2 :a="xData" :b="chartsData" v-if="key==2"></Charts2>
        <Charts3 :a="xData" :b="chartsData" v-if="key==3"></Charts3>
        <Charts4 :a="xData" :b="chartsData" v-if="key==4"></Charts4>
        <Charts5 :a="xData" :b="chartsData" v-if="key==5"></Charts5>
        <Charts6 :a="xData" :b="chartsData" v-if="key==6"></Charts6>
        <!-- <chard id="charts" :xData="mock1" :data="chartsData"></chard> -->
        <div class="info2">
            <div>
            <el-container> 实时数据-更新时间：{{ currentTime }}</el-container>
               
                <el-container>
                <div class="block">
                    <div>付款金额：10000</div>
                    <div>当日：1900</div>
                    <div>今日：1020</div>
                </div>
                <div class="block">
                    <div>支付订单数：10000</div>
                    <div>当日：100</div>
                    <div>今日：130</div>
                </div>
                <div class="block">
                    <div>付款人数：503</div>
                    <div>当日：102</div>
                    <div>今日：300</div>
                </div>
                <div class="block">
                    <div>付款转化率：70</div>
                    <div>当日：50</div>
                    <div>今日：70</div>
                </div>
            </el-container>
                <el-container>
                <div class="block">
                    <div>访客数：105310</div>
                    <div>当日：10310</div>
                    <div>今日：20032</div>
                </div>
                <div class="block">
                    <div>访问次数：1022440</div>
                    <div>当日：101230</div>
                    <div>今日：1022120</div>
                </div>
                <div class="block">
                    <div>新增用户：500</div>
                    <div>当日：300</div>
                    <div>今日：200</div>
                </div>
                <div class="block">
                    <div>累计用户：1542200</div>
                    <div>当日：154220</div>
                    <div>今日：154200</div>
                </div>
            </el-container>

            </div>
              

            <el-container>
                <div>

                </div>
            </el-container>

        </div>

    </div>

</template>
<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import { Mock } from '@/mock/Mock2';

let xData = ref<any>(["8月1日","8月2日","8月3日","8月4日","8月5日","8月6日"]);
let data2=reactive<any>({})
let chartsData=reactive<any>([])
let mock1=reactive<any>([])
let chartsData2 = ref<any>([]);
let key = ref<any>("0");

let mock =Mock

// 创建一个定时器，每秒钟更新当前时间
const currentTime = ref<any>(new Date());
function updateCurrentTime() {
  currentTime.value = formatDate(new Date());
}
function chilk(data:any) {
console.log(data.props.label);
if(data.props.label=="总交易额"){
    key.value="0"
}else if(data.props.label=="商品交易额"){
    key.value="1"}else if(data.props.label=="新用户销量"){
    key.value="2"}else if(data.props.label=="方可转化率"){
    key.value="3"}else if(data.props.label=="下单转化率"){
    key.value="4"}else if(data.props.label=="付款转化率"){
    key.value="5"}else if(data.props.label=="流水"){
    key.value="6"}

}

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
onMounted(() => {
  setInterval(updateCurrentTime, 1000);
  updateCurrentTime(); // 立即更新一次
  data2=mock.get_trade_data()
  
  chartsData=mock.get_charts_data()
  
  console.log("b",chartsData);
  
});

// 组件卸载时清除定时器

</script>
<style scoped>
.info {
    margin: 15px 40px;
    font-size: 20px;
    color: #777777;
}

.block {
    margin: 0;
    width: 300px;
    padding: 10px 30px;
}
.info2{
    border: #777777 1px solid;
}
</style>