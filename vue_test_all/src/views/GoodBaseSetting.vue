<template>
 
    <div class="content-container">
        <el-container>
            <div class="input-tip" width="100px">
                商品名称：
            </div>
            <div class="input-field">
                <el-input v-model="good_base.name">
                </el-input>
            </div>
        </el-container>
        <el-container>
            <div class="input-tip" width="100px">
                商品简介：
            </div>
            <div class="input-field">
                <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入内容" v-model="good_base.detail">
                </el-input>
            </div>
        </el-container>
        <el-container style="margin-top: 40px">
            <div class="input-tip">
                商品封面：
            </div>
            <div class="input-field">
               <el-upload  drag action="#" :before-upload="to_store">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
 
            </div>
            <div v-if="store.img_one">
            <img :src="imageUrl" alt="Uploaded Image" width="130px" />
            
            </div>
        </el-container>
        <el-container style="margin-top: 40px">
            <div class="input-tip">
                列表图片：
            </div>
            <div class="input-field">
               <el-upload  drag action="#" :before-upload="to_store2">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
 
            </div>
            <div v-if="store.img_two">
            <img :src="imageUrl2" alt="Uploaded Image" width="60px" />
            
            </div>
        </el-container>
        <el-container >
            <div class="input-tip">
                上传日期：
            </div>
            <div class="input-field">
                <el-date-picker  type="date" placeholder="选择日期" id="input-field2" v-model="good_base.time">
                        </el-date-picker>

                </div>

        </el-container>
        <el-container >
            <div class="input-tip">
                商品种类：
            </div>
            <div class="input-field">
                <el-select v-model="value" placeholder="全部">
            <el-option v-for="item in store.goodclass" :key="item.value" :label="item.label" :value="item.value">

            </el-option>
          </el-select>
            </div>
            <div class="input-field">
                <el-button @click="add_type" type="primary"> 添加种类 </el-button>

            </div>

        </el-container>
        <el-container>
        <el-button @click="save" type="primary"> 保存 </el-button><!-- change_data3(index_now, row_now) -->
          <el-button @click="close" type="info"> 取消 </el-button>
        </el-container>
    </div>



</template>
<script setup lang="ts">
import { useStore } from '@/stores/counter';
import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessageBox ,ElMessage } from 'element-plus';
import '@/views/all.css'


let store = useStore();
let router = useRouter();
let tag_name = ref('');
let imageUrl = ref<any>();
let imageUrl2 = ref<any>();
let value=ref();
let box=ElMessageBox

 function to_store(data:File) {
    console.log("123");
    console.log(data);
    
    
   
    imageUrl.value=URL.createObjectURL(data)
    store.img_one=imageUrl.value;
    console.log(store.img_one);


    
 }   
 function to_store2(data:File) {

    
   
    imageUrl2.value=URL.createObjectURL(data)
    store.img_two=imageUrl2.value;
   


    
 }   
function handleClick() {

}
function add_type(){
   //
   ElMessageBox.prompt('请输入, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(({ value }) => {
    // 点击确定按钮时的回调
    console.log(value);
    tag_name.value=value
    console.log(tag_name.value);
    if(tag_name.value!==''){
    store.goodclass.push({value:tag_name.value,label:tag_name.value,user:store.userName})
    console.log(store.goodclass);
    tag_name.value='';
    
  }
  }).catch(() => {
    // 点击取消按钮时的回调
    console.log('用户点击了取消');
  });
  console.log(1);
}

function close(){
    router.push({name:"Goods",params: { type: 0 }})
}
let good_base=reactive({
    name:'',
    detail:"",
    time:"",


})

function save(){
    ElMessage({
        message: '成功储存基础数据',
    type: 'success'
    })
    store.good_name=good_base.name
    store.good_info=good_base.detail
    store.good_time=good_base.time
    store.good_type= value.value
    console.log(store.good_name);
    console.log(store.good_info);
    console.log(store.good_time);
    console.log(store.img_one);
    console.log(store.img_two);
    console.log("***",store.good_type);
    
}


</script>

<style scoped>
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }</style>
