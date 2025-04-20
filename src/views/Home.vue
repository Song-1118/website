<template>
  <div class="home-container">
    <h1 class="title">宋氏集团</h1>
    <p class="description">高质量的图纸设计，只为新一代的设计</p>
    <div class="button-group">
      <el-button class="start-button" @click="start" plain>开始</el-button>
    </div>
  </div>

  <div class="statistic-container">
    <el-card class="statistic-card">
      <el-statistic title="今日收益" :value="100000000" />
    </el-card>
    <el-card class="statistic-card">
      <el-statistic title="今日支出" :value="10000" />
    </el-card>
    <el-card class="statistic-card">
      <el-statistic title="今日排名" :value="114514" />
    </el-card>
    <el-card class="statistic-card">
      <el-statistic title="今日好评" :value="1111" />
    </el-card>
  </div>

  <el-timeline class="timeline" style="max-width: 600px">
    <el-timeline-item center timestamp="2025/4/20" placement="top">
      <el-card>
        <h4>宋氏集团成立</h4>
        <p>2025/4/20 --宋梓铭</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2025/4/20" placement="top">
      <el-card>
        <h4>网站上线</h4>
        <p>2025/4/20 --宋梓铭</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item center timestamp="2025/4/20" placement="top">
      <el-card>
        <h4>宋氏集团第一次招人</h4>
        <p>2025/4/20 --宋梓铭</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>

<script setup>
import { ElMessage } from 'element-plus';

const start = () => {
  ElMessage.success("hello world");
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
}

.title {
  font-size: 48px;
  margin-bottom: 3px;
  background: linear-gradient(135deg, #81D4FA, #4FC3F7);
  color: white;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.description {
  font-size: 20px;
  margin-bottom: 10px;
  text-align: center;
  color: #2A4E6C;
}

.button-group {
  display: flex;
  gap: 20px;
}

.start-button {
  font-size: 16px;
  margin-bottom: 20px;
}

.el-button {
  padding: 12px 24px;
  font-size: 16px;
}

.statistic-container {
  display: flex;
  justify-content: space-around; /* 或者使用 space-between 根据需要 */
  margin: 20px 0;
  width: 100%; /* 确保容器宽度足够 */
  flex-wrap: wrap; /* 允许换行 */
}

.statistic-card {
  margin: 0 5px; /* 调整卡片之间的间距 */
  max-width: 300px; /* 设置卡片的最大宽度 */
  flex: 1 1 300px; /* 确保卡片宽度为300px，并且可以换行 */
}

.timeline {
  margin-left: 20%;
}
</style>