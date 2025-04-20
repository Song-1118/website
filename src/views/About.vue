<template>
  <h1 class="title">关于我们团队</h1>
  <div class="card">
    <el-card style="max-width: 480px" shadow="always">
      <template #header>
        <div class="card-header">
          <span>宋梓铭</span>
          <span class="position">老板</span>
        </div>
      </template>
      <span>微信:songzimin2013</span>
      <p></p>
      <span>QQ:1428616130</span>
      <p></p>
      <span>邮箱</span>
      <p></p>
      <li>19924539884@163.com</li>
      <li>1428616130@qq.com</li>
      <template #footer>
        <div class="card-footer">
          程序员&网站运营&软件策划&美术&摄影&宣传&广告
        </div>
      </template>
    </el-card>
  </div>
</template>

<script setup>
// 可以添加逻辑代码
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
.card-header {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
}
.card-footer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
   /*外间距 */
   margin: 30px
}
.position {
  font-size: 15px;
  margin-left: 10px;
}
</style>