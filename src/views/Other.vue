<template>
    <h1 class="title">为什么选择我们</h1>

    <el-tree
      style="max-width: 600px"
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
    />
  </template>
  
  <script lang="ts" setup>
  interface Tree {
    label: string
    children?: Tree[]
  }
  
  const handleNodeClick = (data: Tree) => {
    console.log(data)
  }
  
  const data: Tree[] = [
    {
      label: '为什么选择我们',
      children: [
        {
          label: '因为我们团队可以轻松完成您的任务'
        }
      ],
    },
    {
      label: '选择我们需要多少报酬',
      children: [
        {
          label: '1元即可，我们承诺用最少的钱，做最好的事'
        }
    ]
    },
    {
      label: '如何联系我们',
      children: [
        {
          label: '仅需在关于板块的联系方式联系我们即可',
          
        }
      ],
    },
    {
        label: '如何加入我们',
        children: [
          {
            label: '私聊宋梓铭即可，我们欢迎您的加入.我们特别欢迎程沐阳加入我们团队',
          }
        ],
    }
  ]
  
  const defaultProps = {
    children: 'children',
    label: 'label',
  }
  </script>
  
<style scoped>
.title {
  text-align: center;
  font-size: 48px;
  margin-bottom: 3px;
  background: linear-gradient(135deg, #81D4FA, #4FC3F7);
  color: white; /* 文字用纯白保证对比度 */
  background-clip: text; /* 新增：确保渐变只应用于文字 */
  -webkit-background-clip: text; /* 新增：兼容性处理 */
  color: transparent; /* 新增：使渐变背景可见 */
}
.design-card {
  margin-top: 20px;
  margin-left: 20px;
}
</style>
