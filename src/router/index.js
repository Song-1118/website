import { createRouter, createWebHistory } from 'vue-router';

// 确保路径正确，假设 views 文件夹位于 src 目录下
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue') // 修改路径为相对路径
  },
  {
    path: '/download',
    name: 'Download',
    component: () => import('../views/Download.vue') // 修改路径为相对路径
  },
  {
    path: '/design',
    name: 'Design',
    component: () => import('../views/Design.vue') // 修改路径为相对路径
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue') // 修改路径为相对路径
  },
  {
    path: '/other',
    name: 'Other',
    component: () => import('../views/Other.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;