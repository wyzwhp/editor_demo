import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // dynamicImport: {
  //   loading: '@/Loading',
  // },
  dva: {
    immer: true,
    hmr: false,
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
