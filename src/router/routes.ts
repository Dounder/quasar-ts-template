import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/modules/example/pages/Home.vue') }],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('src/modules/shared/pages/Error404.vue'),
  },
];

export default routes;
