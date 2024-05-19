import { reactive, ref } from 'vue';
import axios from "axios";
export function Utxt() {
    let Sapitxt=reactive<any>([

    ]);
    
      async function hua() {
      let apitxt =await axios.get("https://api.uomg.com/api/rand.qinghua?format=json"); 
       console.log(apitxt.data.content);
       Sapitxt.unshift(apitxt.data.content);
    
      
    }
    return{Sapitxt,hua}
    
}
