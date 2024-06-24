import { defineConfig } from '@umijs/max';

export default defineConfig({
  title: 'QR Code Generator',
  antd: {},
  layout: false,
  routes: [
    {
      name: '首页',
      path: '/',
      component: './Home',
    },
  ],
  npmClient: 'pnpm',
});
