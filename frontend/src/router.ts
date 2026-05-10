import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./app/features/dashboard/Dashboard.vue'),
    },
    {
      path: '/integration',
      component: () => import('./app/features/integration/Integration.vue'),
    },
    {
      path: '/docs',
      component: () => import('./app/features/docs/Docs.vue'),
    },
  ],
});
