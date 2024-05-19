<template>
    <div ref="editorRef" style="border: 1px solid #ccc; height: 400px;"></div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import E from 'wangeditor';
  
  const editorRef = ref<HTMLElement | null>(null);
  let editor: E | null = null;
  
  onMounted(() => {
    if (editorRef.value) {
      editor = new E(editorRef.value);
  
      // 配置菜单项
      editor.config.menus=["title"] 
      editor.config.menus=['bold'] 
      editor.config.menus=['bold'] 
      editor.config.menus=['bold'] 
      editor.config.menus=['bold'] 
      editor.config.menus=['bold'] 
      editor.config.menus=['bold'] 
      editor.config.menus=['bold'] 
      editor.config.menus=['bold'] 
      editor.config.menus=['bold'] 
      editor.config.menus=['bold'] 
      editor.config.menus=['bold'] 
      editor.config.menus=['bold'] 
      editor.config.menus=['bold'] 
      editor.config.menus=['bold'] 
      editor.config.menus=['bold'] 
      editor.config.menus=['bold'] 
      // 你可以继续添加其他菜单项的配置
  
      // 创建编辑器
      editor.create();
    }
  });
  
  onUnmounted(() => {
    if (editor) {
      editor.destroy();
      editor = null;
    }
  });
  </script>
  
  <style scoped>
  /* 样式 */
  </style>