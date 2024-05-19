import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'


export const useStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  let userName=ref('白菜');
  let userPassword=ref("123");
  function isLogin(){
    return userName.value.length
  }
  function clearuer(){
    userName.value='';
    userPassword.value='';
  }
  function getuer(name:any,password:any){
    userName.value=name;
    userPassword.value=password;
  }
let good_show_type = ref()

  let value = reactive<any>([]);
  let DD =reactive<any>([]);
  let DD1 =reactive<any>([]);
  let DD2 =reactive<any>([]);
  let DD_good_all =reactive<any>([]);
  let DD_good =reactive<any>([]);
  let DD_good2 =reactive<any>([]);
  let DD_good3 =reactive<any>([]);
  let DD_good4 =reactive<any>([]);
  let DD_YG =reactive<any>([]);
  let DD_money =reactive<any>([]);
  let DD_money2 =reactive<any>([]);
  let img_one =ref<File>();
  let img_two =ref<File>();
  let good_name =ref<string>();
  let good_info =ref<string>();
  let good_time =ref<string>();
  let good_type =ref<string>();
  let goodclass = reactive<any>([{
    value: '女装',
    label: '女装',
    user:'阿紫',
  }, {
    value: '男装',
    label: '男装',
    user:'魔狼米莉亚',
  },])
  let goodclass2 = reactive<any>([{
    value: '经理',
    label: '经理',
    user:'阿紫',
  }, {
    value: '分销员',
    label: '分销员',
    user:'魔狼米莉亚',
  },])
  let good_second =reactive({
    price_mayun:"",
    price_show:'',
    price_jifeng:'',
    price_buy:'',
    buy_sum:'',
    save_sum:'',
    poop_basic_sum:'',
    know_sum:'',

  });

  return { userName,DD2,DD_money,DD_money2,DD_good_all, userPassword,goodclass2, isLogin ,good_second,DD_YG,clearuer,good_type,getuer,good_show_type,DD,DD1,DD_good,DD_good2,DD_good3,DD_good4,img_one,goodclass,good_name,good_info,good_time,count,doubleCount,increment,img_two}
})
