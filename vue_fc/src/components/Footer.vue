<template>
      <div class="footer">
    <h4>Footer</h4>
    <p>{{ "*****"+inject_a }}</p>


  </div>
</template>

<script setup lang="ts">
import emitter from '@/views/mitt'
import {onMounted, ref,inject} from "vue"

let fa=ref(3);
let fb=ref(4);
  let inject_a = inject("provide_a")
defineExpose({fa,fb})


</script>