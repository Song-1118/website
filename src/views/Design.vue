<template>
  <div>
    <h1 class="title">设计广场</h1>
    <div class="card-container">
      <el-card
        v-for="(item, index) in displayedCards"
        :key="index"
        class="card"
      >
        <div class="card-title">{{ item.title }}</div>
        <img :src="item.url" style="width: 100%" />
      </el-card>
    </div>
    <el-pagination
      v-model:current-page="currentPage"
      :page-size="pageSize"
      :total="url.length"
      layout="prev, pager, next"
      @current-change="handlePageChange"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const url = [
  { url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png", title: "设计3" },
  { url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png", title: "设计2" },
  { url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png", title: "设计1" },
  { url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png", title: "设计1" },
  { url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png", title: "设计示例" },
];

const pageSize = 9; // 每页显示 12 个卡片
const currentPage = ref(1);

const displayedCards = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return url.slice(start, end);
});

const handlePageChange = (page) => {
  currentPage.value = page;
};
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 48px;
  margin-bottom: 3px;
  background: linear-gradient(135deg, #81D4FA, #4FC3F7);
  color: white;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
}

.card {
  width: calc(33.33% - 20px);
  margin-bottom: 20px;
}

.card-title {
  text-align: center;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
}

.el-pagination {
  margin-top: 20px;
  justify-content: center;
}
/* 修改卡片布局 */
.design-card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 默认一行3个卡片 */
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* 限制卡片数量为8个 */
.design-card {
  background-color: #424242;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

/* 新增：卡片标题居中，图标和标题水平对齐 */
.design-card .card-title {
  text-align: center; /* 标题居中 */
  display: flex;
  align-items: center; /* 图标和标题水平对齐 */
  justify-content: center; /* 内容居中 */
}
</style>