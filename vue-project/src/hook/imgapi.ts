import { reactive, ref } from 'vue'
import axios from 'axios'
export default function(){

let DD = reactive<any>([
])
let imgapi=ref()
async function getImg() {
  let imgu = await axios.get("https://api.uomg.com/api/rand.img3?sort=胖次猫&format=json");
  console.log(imgu.data.imgurl);
  DD.push(imgu.data.imgurl);
  console.log(DD);
  
}
return{DD,getImg,imgapi}
}

