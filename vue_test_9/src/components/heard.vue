<template>
 <div class="headershow">
    <h1>头部文件</h1>
    <p>{{ a }}</p>
 </div>
</template>

<script>
export default {
    

  props:{
    a:{
      type:String,
    },


  },
  data(){
    return {
      
    }
  } 

}

</script>

<style scoped>
.headershow{
    width: 100%;
    height: 200px;
    background-color: aqua;
    border: 2px solid black;
}

</style>