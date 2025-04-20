<template>
  <el-menu
    :default-active="activeIndex"
    class="menu"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1" :route="{ name: 'Home' }">首页</el-menu-item>
    <el-menu-item index="2" :route="{ name: 'Download' }">下载</el-menu-item>
    <el-menu-item index="3" :route="{ name: 'Design' }">设计</el-menu-item>
    <el-menu-item index="4" :route="{ name: 'About' }">关于</el-menu-item>
    <el-menu-item index="5" :route="{ name: 'Other' }">其他</el-menu-item>
  </el-menu>
  <router-view></router-view>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { ElMessage } from "element-plus";

  const router = useRouter();
  const activeIndex = ref('1');

  const handleSelect = (key) => {
    activeIndex.value = key;
    router.push({ name: ['Home', 'Download', 'Design', 'About', 'Other'][parseInt(key) - 1] });
  };

  const message = () => {
    ElMessage.success("hello world");
  };
</script>

<style scoped>
  .menu {
    background-color: rgba(255, 255, 255, 0.9); /* 调整透明度为 0.8 */
    border-bottom: 1px solid rgba(0, 0, 0, 0.1); /* 增强边框效果 */
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); /* 增强阴影效果 */
    width: 100%;
  }
</style>