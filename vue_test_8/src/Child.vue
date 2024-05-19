<template>
  <div>

    <h1>Hello World</h1>
    <p>{{ sum }}</p>
    <p>{{ name }}</p>
    <p>{{ gra }}</p>
  </div>
</template>

<script >


export default {
  props:{
    name:{
      type:String,
    },
    gra:{
      type:String,
    }


  },

  data() {
    return {
      sum:"随便显示点什么"
     
    };
  },
};
</script>