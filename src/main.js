import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css'; // 引入全局样式文件

const app = createApp(App);
app.use(router);
app.mount('#app');

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus)