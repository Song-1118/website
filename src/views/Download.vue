<template>
  <el-alert center title="由于github的对于文件的大小限制，下载功能暂时不可用" show-icon type="warning" />
  <div>
    <h1 class="title">下载</h1>
    <div class="wechat">
      <el-card style="max-width: 480px">
        <template #header>
          <img src="../assets/wechat.png" alt="微信" class="card-image"></img>
          <span class="card-title">微信</span>
        </template>
        <el-button type="primary" @click="downloadWeChat">
          下载{{ selectedVersion || userAgent }}版
        </el-button>
        <el-dropdown @command="handleVersionSelect">
          <el-button type="primary">
            <el-icon class="el-icon--right"><ArrowDown /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu class="dropdown-menu-A">
              <el-dropdown-item command="Windows4.0.3">Windows 4.0.3</el-dropdown-item>
              <el-dropdown-item command="Windows3.9.12 x64">Windows 3.9.12 x64</el-dropdown-item>
              <el-dropdown-item command="Windows3.9.12 x86">Windows 3.9.12 x86</el-dropdown-item>
              <el-dropdown-item command="Mac4.0.3">Mac 4.0.3</el-dropdown-item>
              <el-dropdown-item command="Mac3.8.10">Mac 3.8.10</el-dropdown-item>
              <el-dropdown-item command="Android x64">Android x64</el-dropdown-item>
              <el-dropdown-item command="Android x86">Android x86</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <template #footer>
          <el-link :icon="Link" href="https://weixin.qq.com/" type="primary">微信官网</el-link>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Link, Bell } from '@element-plus/icons-vue';
import { ElMessage } from "element-plus";
import { ArrowDown } from '@element-plus/icons-vue';

const downloadLink = ref('');
const userAgent = ref('');
const selectedVersion = ref(''); // 存储用户选择的版本

const setWeChatDownloadLink = (os) => {
  switch (os) {
    case 'Windows4.0.3':
      downloadLink.value = "/download/wechat/WeChatV4.0.3.exe"; // 确保路径正确
      selectedVersion.value = 'Windows 4.0.3';
      break;
    case 'Windows3.9.12 x64':
      downloadLink.value = "/download/wechat/WeChat_x64.exe"; // 确保路径正确
      selectedVersion.value = 'Windows 3.9.12 x64';
      break;
    case 'Windows3.9.12 x86':
      downloadLink.value = "/download/wechat/WeChat_x86.exe"; // 确保路径正确
      selectedVersion.value = 'Windows 3.9.12 x86';
      break;
    case 'Mac4.0.3':
      downloadLink.value = "/download/wechat/WeChatMacV4.0.3.dmg"; // 确保路径正确
      selectedVersion.value = 'Mac 4.0.3';
      break;
    case 'Mac3.8.10':
      downloadLink.value = "/download/wechat/WeChatMacV3.8.10.dmg"; // 确保路径正确
      selectedVersion.value = 'Mac 3.8.10';
      break;
    case 'Android x64':
      downloadLink.value = "/download/wechat/WeChat_x64.apk"; // 确保路径正确
      selectedVersion.value = 'Android x64';
      break;
    case 'Android x86':
      downloadLink.value = "/download/wechat/WeChat_x86.apk"; // 确保路径正确
      selectedVersion.value = 'Android x86';
      break;
    default:
      downloadLink.value = ''; // 其他操作系统安装包链接
      selectedVersion.value = '';
      userAgent.value = '未知';
      break;
  }
};

const downloadWeChat = () => {
  if (downloadLink.value) {
    const link = document.createElement('a');
    link.href = downloadLink.value;
    link.download = downloadLink.value.split('/').pop(); // 设置下载文件名
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    ElMessage({
      message: '下载开始',
      type: 'success',
    });
  } else {
    ElMessage.error('请选择一个版本');
  }
};

// 处理用户选择版本的逻辑
const handleVersionSelect = (command) => {
  setWeChatDownloadLink(command);
};

onMounted(() => {
  const userAgentString = navigator.userAgent.toLowerCase();
  if (userAgentString.indexOf('win') > -1) {
    setWeChatDownloadLink('Windows4.0.3'); // 设置默认版本
  } else if (userAgentString.indexOf('mac') > -1) {
    setWeChatDownloadLink('Mac4.0.3'); // 设置默认版本
  } else if (userAgentString.indexOf('android') > -1) {
    setWeChatDownloadLink('Android x64'); // 设置默认版本
  } else {
    userAgent.value = '未知';
  }
});
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

.card-title {
  font-size: 30px;
  margin-bottom: 10px;
  text-align: center;
  color: #000000;
}

.dropdown-menu-A {
  margin-left: 0%;
}
</style>