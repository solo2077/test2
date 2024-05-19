<template>
    <div>
  
      <h1>Hello World</h1>
      <p>{{ sum }}</p>
      <p>{{  a }}</p>
    </div>
  </template>
  
  <script >
  
  
  export default {
    props: {
        a: {
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