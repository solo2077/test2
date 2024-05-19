<template>
  <el-container>
    <el-header>
      <div class="header-txt">
        教务系统学生管理
      </div>
    </el-header>
  </el-container>

  <el-container>

    <el-menu :default-active="selectedIndex" @select="selected">
      <el-sub-menu index="1"> <template #title>
          一年级
        </template>
        <el-menu-item index="1-1">1-1班</el-menu-item>
        <el-menu-item index="1-2">1-2班</el-menu-item>
        <el-menu-item index="1-3">1-3班</el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="2">
        <template #title>
          二年级
        </template>
        <el-menu-item index="2-1">2-1班</el-menu-item>
        <el-menu-item index="2-2">2-2班</el-menu-item>
        <el-menu-item index="2-3">2-3班</el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="3">
        <template #title>
          三年级
        </template>
        <el-menu-item index="3-1">3-1班</el-menu-item>
        <el-menu-item index="3-2">3-2班</el-menu-item>
        <el-menu-item index="3-3">3-3班</el-menu-item>
      </el-sub-menu>


    </el-menu>


    <el-main @selection-change="selec" border style="padding: 0;">


      <el-table :data="paginatedData">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="date" label="日期" class="sel">
        </el-table-column>
        <el-table-column prop="name" label="姓名" class="sel">
        </el-table-column>
        <el-table-column prop="sex" label="性别" class="sel">
        </el-table-column>
        <el-table-column prop="age" label="年龄" class="sel">
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button @click="dell(scope.$index, scope.row)"> 删除 </el-button>
            <el-button @click="change_data2(scope.$index, scope.row)"> 编辑 </el-button>

          </template>

        </el-table-column>

      </el-table>

    </el-main>


  </el-container>
  <transition name="el-fade-in-linear">
    <div v-show="show" class="transition-box">
      <el-container>
        <el-input placeholder="请输入姓名" v-model="input_name" clearable>
        </el-input>

      </el-container>
      <el-container>
        <el-input placeholder="请输入性别" v-model="input_sex" clearable>
        </el-input>

      </el-container>
      <el-container>
        <el-input placeholder="请输入年龄" v-model="input_age" clearable>
        </el-input>

      </el-container>
    </div>
  </transition>

  <el-container>
    {{ mergedData }}
  </el-container>
  <el-pagination @current-change="changshow_page" :hide-on-single-page="flag" layout="prev, pager, next" :page-size="3"
    :total="50">
  </el-pagination>
  <el-container>


    <el-button type="primary" round @click="save">保存</el-button>
    <el-button type="warning" round @click="Reset1">重置</el-button>


    <el-button type="info" round @click="Add_data">增加</el-button>
  </el-container>


  <el-container>

  </el-container>

</template>
<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { reactive, toRaw, } from 'vue';
let tableData2 = reactive<any>([])
let tableData_kong = reactive<any>({
  date: "",
  name: "",
  sex: "",
  age: "",

})
let selectedIndex = ref("3")
let mergedData = reactive<any>([])
let show = ref(false);
let input_name = ref('');
let input_sex = ref('');
let input_age = ref('');
let flag = ref(true);
let nowPage = ref<number>(1)
let pageSize = ref<number>(5);
let paginatedData = reactive<any>([]);
Object.assign(paginatedData, tableData2.slice((1 - 1) * 3, (1 - 1) * 3 + 3));


/* function handleCurrentChange(newPage: any) {
      currentPage = newPage;
      updatePaginatedData();
    }

    function updatePaginatedData() {
      const start = (currentPage - 1) * pageSize;
      const end = currentPage * pageSize;
      paginatedData = tableData2.slice(start, end);
    }
 */
function changshow_page(newPage: any) {
  // Object.assign(paginatedData,tableData2)
  /*  console.log("这是paginatedData",paginatedData);
    console.log("这是tableData2.slice(1, 3)",tableData2.slice(1, 3)); */
  /*  if (newPage=='') {
     newPage=1
   } */
  nowPage = newPage;
  paginatedData.splice(0);
  console.log("123456", newPage);
  Object.assign(paginatedData, tableData2.slice((newPage - 1) * 3, (newPage - 1) * 3 + 3));
  console.log("这是paginatedData", paginatedData);



}

let tableData = reactive([

  { date: "2025/1/1", name: "露露", sex: "女", age: "16" },
  { date: "2025/1/2", name: "白菜", sex: "女", age: "17" },
  { date: "2025/1/3", name: "阿紫1", sex: "女", age: "18" },
  { date: "2025/1/2", name: "米莉亚", sex: "女", age: "8" },
  { date: "2022/1/2", name: "日服第一男枪", sex: "男", age: "18" },
  { date: "2022/7/8", name: "山上撤也", sex: "男", age: "1" },
  { date: "2022/7/8", name: "美乐宗的呼唤", sex: "男", age: "8" },
  { date: "2022/7/8", name: "心胸大开", sex: "男", age: "8" },

])
let tableData1 = reactive([
  { date: "2025/1/11", name: "露露1-1", sex: "女", age: "16" },
  { date: "2025/1/2", name: "白菜1-1", sex: "女", age: "17" },
  { date: "2025/1/3", name: "阿紫1-1", sex: "女", age: "18" },
  { date: "2025/1/2", name: "米莉亚1-1", sex: "女", age: "8" },
  { date: "2022/1/2", name: "日服第一男枪1-1", sex: "男", age: "18" },
  { date: "2022/7/8", name: "山上撤也1-1", sex: "男", age: "1" },
  { date: "2022/7/8", name: "美乐宗的呼唤1-1", sex: "男", age: "8" },
  { date: "2022/7/8", name: "心胸大开1-1", sex: "男", age: "8" },

])
let tableData3 = reactive([
  { date: "2025/1/11", name: "露露1-2", sex: "女", age: "16" },
  { date: "2025/1/2", name: "白菜 1年2班", sex: "女", age: "17" },
  { date: "2025/1/3", name: "阿紫", sex: "女", age: "18" },
  { date: "2025/1/2", name: "米莉亚", sex: "女", age: "8" },
  { date: "2022/1/2", name: "日服第一男枪", sex: "男", age: "18" },
  { date: "2022/7/8", name: "山上撤也", sex: "男", age: "1" },
  { date: "2022/7/8", name: "美乐宗的呼唤", sex: "男", age: "8" },
  { date: "2022/7/8", name: "心胸大开", sex: "男", age: "8" },

])
let tableData4 = reactive([
  { date: "2025/1/11", name: "露露1-3", sex: "女", age: "16" },
  { date: "2025/1/2", name: "白菜", sex: "女", age: "17" },
  { date: "2025/1/3", name: "阿紫1年3班", sex: "女", age: "18" },
  { date: "2025/1/2", name: "米莉亚", sex: "女", age: "8" },
  { date: "2022/1/2", name: "日服第一男枪", sex: "男", age: "18" },
  { date: "2022/7/8", name: "山上撤也", sex: "男", age: "1" },
  { date: "2022/7/8", name: "美乐宗的呼唤", sex: "男", age: "8" },
  { date: "2022/7/8", name: "心胸大开", sex: "男", age: "8" },

])
let tableData5 = reactive([
  { date: "2025/1/11", name: "露露2-1", sex: "女", age: "16" },
  { date: "2025/1/2", name: "白菜", sex: "女", age: "17" },
  { date: "2025/1/3", name: "阿紫2年1班", sex: "女", age: "18" },
  { date: "2025/1/2", name: "米莉亚", sex: "女", age: "8" },
  { date: "2022/1/2", name: "日服第一男枪", sex: "男", age: "18" },
  { date: "2022/7/8", name: "山上撤也", sex: "男", age: "1" },
  { date: "2022/7/8", name: "美乐宗的呼唤", sex: "男", age: "8" },
  { date: "2022/7/8", name: "心胸大开", sex: "男", age: "8" },

])
let tableData6 = reactive([
  { date: "2025/1/11", name: "露露2-2", sex: "女", age: "16" },
  { date: "2025/1/2", name: "白菜", sex: "女", age: "17" },
  { date: "2025/1/3", name: "阿紫2年2班", sex: "女", age: "18" },
  { date: "2025/1/2", name: "米莉亚", sex: "女", age: "8" },
  { date: "2022/1/2", name: "日服第一男枪", sex: "男", age: "18" },
  { date: "2022/7/8", name: "山上撤也", sex: "男", age: "1" },
  { date: "2022/7/8", name: "美乐宗的呼唤", sex: "男", age: "8" },
  { date: "2022/7/8", name: "心胸大开", sex: "男", age: "8" },

])
let tableData7 = reactive([
  { date: "2025/1/11", name: "露露2-3", sex: "女", age: "16" },
  { date: "2025/1/2", name: "白菜", sex: "女", age: "17" },
  { date: "2025/1/3", name: "阿紫2年3班", sex: "女", age: "18" },
  { date: "2025/1/2", name: "米莉亚", sex: "女", age: "8" },
  { date: "2022/1/2", name: "日服第一男枪", sex: "男", age: "18" },
  { date: "2022/7/8", name: "山上撤也", sex: "男", age: "1" },
  { date: "2022/7/8", name: "美乐宗的呼唤", sex: "男", age: "8" },
  { date: "2022/7/8", name: "心胸大开", sex: "男", age: "8" },

])
let tableData8 = reactive([
  { date: "2025/1/11", name: "露露3-1", sex: "女", age: "16" },
  { date: "2025/1/2", name: "白菜", sex: "女", age: "17" },
  { date: "2025/1/3", name: "阿紫3年1班", sex: "女", age: "18" },
  { date: "2025/1/2", name: "米莉亚", sex: "女", age: "8" },
  { date: "2022/1/2", name: "日服第一男枪", sex: "男", age: "18" },
  { date: "2022/7/8", name: "山上撤也", sex: "男", age: "1" },
  { date: "2022/7/8", name: "美乐宗的呼唤", sex: "男", age: "8" },
  { date: "2022/7/8", name: "心胸大开", sex: "男", age: "8" },

])
let tableData9 = reactive([
  { date: "2025/1/11", name: "露露3-2", sex: "女", age: "16" },
  { date: "2025/1/2", name: "白菜", sex: "女", age: "17" },
  { date: "2025/1/3", name: "阿紫3年2班", sex: "女", age: "18" },
  { date: "2025/1/2", name: "米莉亚", sex: "女", age: "8" },
  { date: "2022/1/2", name: "日服第一男枪", sex: "男", age: "18" },
  { date: "2022/7/8", name: "山上撤也", sex: "男", age: "1" },
  { date: "2022/7/8", name: "美乐宗的呼唤", sex: "男", age: "8" },
  { date: "2022/7/8", name: "心胸大开", sex: "男", age: "8" },

])
let tableData10 = reactive([
  { date: "2025/1/11", name: "露露3-3", sex: "女", age: "16" },
  { date: "2025/1/2", name: "白菜", sex: "女", age: "17" },
  { date: "2025/1/3", name: "阿紫3年3班", sex: "女", age: "18" },
  { date: "2025/1/2", name: "米莉亚", sex: "女", age: "8" },
  { date: "2022/1/2", name: "日服第一男枪", sex: "男", age: "18" },
  { date: "2022/7/8", name: "山上撤也", sex: "男", age: "1" },
  { date: "2022/7/8", name: "美乐宗的呼唤", sex: "男", age: "8" },
  { date: "2022/7/8", name: "心胸大开", sex: "男", age: "8" },

])


let idarr: any[] = []
/* let selected2=(data:any)=>{
  console.log("复选框里传入的数据",data);
  idarr=[];
  data.array.forEach((value:any) => {
    idarr.push(value)
    
  });
  console.log(idarr);
  
  

} */
let num = ref<any>()
let a=1
function change_data2($index: any, row: any) {
  show.value = true;
  if (show.value == true && input_name.value !== '') {

    a = Number(nowPage)
    tableData2[$index+(a-1)*3].date = new Date().toLocaleDateString();
    tableData2[$index+(a-1)*3].name = input_name.value;
    tableData2[$index+(a-1)*3].sex = input_sex.value;
    tableData2[$index+(a-1)*3].age = input_age.value;
    changshow_page(nowPage);

  }



}

function selec(data: any, data2: any) {
  console.log("进来了");
  console.log(data + data2);
  console.log(data2);


  mergedData = data2
  console.log(mergedData);



}


function dell($index: any, row: any) {
  a = Number(nowPage)
  tableData2.splice($index+(a-1)*3, 1)
  // console.log("输出一下删除后的数组显示data2",tableData2);
  changshow_page(nowPage);

}
let key2 = ref();
let lenght_key = 0;

function Add_data() {
  if (show.value == true && input_name.value == '') {
    alert("姓名不能为空")

  }
  if (show.value == true && input_name.value !== '') {

    /*    tableData_kong.date= new Date().toLocaleDateString()
       tableData_kong.name=input_name.value;
       tableData_kong.sex=input_sex.value;
       tableData_kong.age=input_age.value; */
    /*    console.log("输出显示需要录入的data",input_name.value,input_sex.value,input_age.value);
     console.log("输出显示录入的data类",tableData_kong); */

    tableData2.push({ date: new Date().toLocaleDateString(), name: input_name.value, sex: input_sex.value, age: input_age.value });

    console.log("输出显示已经录入的data2类", tableData2);
  }
  /*  
    console.log("检查是否释放",tableData_kong); */


  changshow_page(nowPage);
  input_name.value = '';
  input_sex.value = '';
  input_age.value = '';
  show.value = !show.value;



  /*    tableData2.name.push(input_name.value);
      tableData2.sex.push(input_sex.value);
      tableData2.age.push(input_age.value);  */



}
function save() {
  // console.log("输出一下即将保存的的数组显示data2",tableData2);
  if (key2.value == '1-1') {
    /*   console.log(key2.value); */

    /*   console.log("保存数据时的data2",tableData2); */
    /*  for (let key in tableData1) {
      if (tableData1.hasOwnProperty(key)) {
        delete tableData1[key];
      }

    } */
    tableData1.splice(0)
    /*     console.log("保存时清除后的data1");
        console.log(tableData1);
        console.log(tableData1.length);
         */

    for (let i = tableData2.length - 1; i >= 0; i--) {

      if (tableData2[i] !== '') {
        tableData1.unshift(tableData2[i]);
        lenght_key++;

      }
    }
    tableData1.splice(lenght_key);
    lenght_key = 0;
    /* 
    
      console.log("保存数据时的data1",tableData1);
      console.log("保存用的数组显示data2",tableData2);
      console.log(tableData1.length);
        */



  }
  if (key2.value == '1-2') {
    tableData3.splice(0)
    for (let i = tableData2.length - 1; i >= 0; i--) {

      if (tableData2[i] !== '') {
        tableData3.unshift(tableData2[i]);
        lenght_key++;

      }
    }
    tableData3.splice(lenght_key);
    lenght_key = 0;

    /*    Object.assign(tableData3,tableData2) */


  }

  if (key2.value == '1-3') {
    tableData4.splice(0)
    for (let i = tableData2.length - 1; i >= 0; i--) {

      if (tableData2[i] !== '') {
        tableData4.unshift(tableData2[i]);
        lenght_key++;

      }
    }
    tableData4.splice(lenght_key);
    lenght_key = 0;
    /*   Object.assign(tableData4,tableData2) */


  }
  if (key2.value == '2-1') {
    tableData5.splice(0)
    for (let i = tableData2.length - 1; i >= 0; i--) {
      tableData5.unshift(tableData2[i]);
      if (tableData2[i] !== '') {
        lenght_key++;

      }
    }
    tableData5.splice(lenght_key);
    lenght_key = 0;

    /*   Object.assign(tableData5,tableData2) */


  }

  if (key2.value == '2-2') {
    tableData6.splice(0)
    for (let i = tableData2.length - 1; i >= 0; i--) {
      tableData6.unshift(tableData2[i]);
      if (tableData2[i] !== '') {
        lenght_key++;

      }
    }
    tableData6.splice(lenght_key);
    lenght_key = 0;

    /*   Object.assign(tableData6,tableData2) */


  }

  if (key2.value == '2-3') {

    tableData7.splice(0)
    for (let i = tableData2.length - 1; i >= 0; i--) {
      tableData7.unshift(tableData2[i]);
      if (tableData2[i] !== '') {
        lenght_key++;

      }
    }
    tableData7.splice(lenght_key);
    lenght_key = 0;
    /*   Object.assign(tableData7,tableData2) */


  }
  if (key2.value == '3-1') {
    tableData8.splice(0)
    for (let i = tableData2.length - 1; i >= 0; i--) {
      tableData8.unshift(tableData2[i]);
      if (tableData2[i] !== '') {
        lenght_key++;

      }
    }
    tableData8.splice(lenght_key);
    lenght_key = 0;
    /* Object.assign(tableData8,tableData2) */


  }

  if (key2.value == '3-2') {
    tableData9.splice(0)
    for (let i = tableData2.length - 1; i >= 0; i--) {
      tableData9.unshift(tableData2[i]);
      if (tableData2[i] !== '') {
        lenght_key++;

      }
    }
    tableData9.splice(lenght_key);
    lenght_key = 0;
    /*   Object.assign(tableData9,tableData2) */


  }

  if (key2.value == '3-3') {
    tableData10.splice(0)
    for (let i = tableData2.length - 1; i >= 0; i--) {
      tableData10.unshift(tableData2[i]);
      if (tableData2[i] !== '') {
        lenght_key++;

      }
    }
    tableData10.splice(lenght_key);
    lenght_key = 0;
    /*  Object.assign(tableData10,tableData2) */


  }




}

let selected = (index2: any, indexPath: any) => {

  console.log("1234564");
  key2.value = index2;
  console.log("***************index", index2, "789888888888" + indexPath);
  if (index2 !== '') {
    /* for (let key in tableData2) {
      if (tableData2.hasOwnProperty(key)) {
        delete tableData2[key];
      }

    } */
    tableData2.splice(0);
    console.log("清空后的数据data2");
    console.log(tableData2);
    console.log(tableData2.length);

  }


  if (index2 == '1-1') {
    /*     for (let i = 0; i < tableData1.length; i++) {
         
          tableData2.push(tableData1[i]);
            
            console.log("没轮放进去的");
            
            console.log(tableData2);
           
        }
        console.log(tableData1); */
    Object.assign(tableData2, tableData1)
    /*  console.log("这里已经放进去了，这还是tableData2");
     console.log(tableData2); */


  }
  if (index2 == '1-2') {
    Object.assign(tableData2, tableData3)
  }
  if (index2 == '1-3') {
    /*  for (let i = 0; i < tableData1.length; i++) {
       tableData2.push(tableData4[i]);
       console.log(tableData2);
 
     } */
    Object.assign(tableData2, tableData4)
  }
  if (index2 == '2-1') {
    /*   for (let i = 0; i < tableData1.length; i++) {
        tableData2.push(tableData5[i]);
        console.log(tableData2);
  
      } */
    Object.assign(tableData2, tableData5)
  }
  if (index2 == '2-2') {
    /*  for (let i = 0; i < tableData1.length; i++) {
       tableData2.push(tableData6[i]);
       console.log(tableData2);
 
     } */
    Object.assign(tableData2, tableData6)
  }
  if (index2 == '2-3') {
    /*   for (let i = 0; i < tableData1.length; i++) {
        tableData2.push(tableData7[i]);
        console.log(tableData2);
  
      } */
    Object.assign(tableData2, tableData7)
  }
  if (index2 == '3-1') {
    /*    for (let i = 0; i < tableData1.length; i++) {
         tableData2.push(tableData8[i]);
         console.log(tableData2);
   
       } */
    Object.assign(tableData2, tableData8)
  }
  if (index2 == '3-2') {
    /*    for (let i = 0; i < tableData1.length; i++) {
         tableData2.push(tableData9[i]);
         console.log(tableData2);
   
       } */
    Object.assign(tableData2, tableData9)

  }
  if (index2 == '3-3') {
    /*     for (let i = 0; i < tableData1.length; i++) {
          tableData2.push(tableData10[i]);
          console.log(tableData2);
    
        } */
    Object.assign(tableData2, tableData10)
  }

  changshow_page(1);

}
function Reset1() {

  for (let key in tableData2) {
    if (tableData2.hasOwnProperty(key)) {
      delete tableData2[key];
    }
  }
  changshow_page(1);
}

function Add() {
  tableData2.push()


}

</script>
<style scoped>
.el-header,
.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.transition-box {

  width: 200px;
  height: 100px;
  border-radius: 4px;


  text-align: center;
  color: #fff;

  box-sizing: border-box;
  margin-right: 20px;
}
</style>