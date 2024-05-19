<template>
 
  <div ref="chartContainer" style="width: 600px;height:400px;"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';
let props=defineProps(['a','b'])
// 定义一个 ref 来引用 DOM 元素
const chartContainer = ref<HTMLElement | null>(null);
 
// 初始化图表
const initChart = () => {
  if (chartContainer.value) {
    // 初始化图表实例
    const chartInstance = echarts.init(chartContainer.value);

    // 指定图表的配置项和数据
    const option = {
      title: {
        text: '折线图示例'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data:['销量']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: props.a
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name:'销量',
          type:'line',
          stack: '总量',
          areaStyle: {},
          data: [220, 232, 201, 734, 590, 330, 610]
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    chartInstance.setOption(option);

    // 返回一个函数，用于销毁图表实例，以在组件卸载时清理资源
    return () => {
      chartInstance.dispose();
    };
  }
};

// 组件挂载后初始化图表
onMounted(() => {
  console.log("",props.b);
  
  initChart();

  // 在组件卸载时销毁图表实例

});

</script>

<style scoped>
/* 在这里添加你的样式 */
</style>
