import { ref, computed, reactive } from 'vue'
import axios from "axios";
import { defineStore } from 'pinia'


 export const useptxtStore = defineStore('ptxt',{
    state: () =>({
         Sapitxt2:reactive<any>([])
        }),
    actions:{
      async hua2() {
        let apitxt =await axios.get("https://api.uomg.com/api/rand.qinghua?format=json"); 
         console.log(apitxt.data.content);
         this.Sapitxt2.unshift(apitxt.data.content);
      }
    },
    
 })
 
/*  export const useptxtStore = defineStore('ptxt', {
    state: () => ({
      Sapitxt2: reactive<any>([])
    }),
    actions: {
      async hua() {
        let apitxt = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
        console.log(apitxt.data.content);
        this.Sapitxt2.unshift(apitxt.data.content);
      }
    }
  })
    */