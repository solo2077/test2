<template>
  <div>
    <h2>这是子组件</h2>
    <!-- 显示从父组件接收的数据 -->
    <p>{{ dataFromParent }}</p>
  </div>
</template>

<script>
export default {
  props: {
    // 声明从父组件接收的数据
    dataFromParent: {
      type: String,
      required: true, // 如果这个 prop 是必需的
    },
  },
};
</script>