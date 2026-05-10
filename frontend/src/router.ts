import { createRouter, createWebHistory } from 'vue-router';
import { useAuth } from './app/composables/useAuth';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: () => import('./app/features/login/Login.vue'),
    },
    {
      path: '/404',
      component: () => import('./app/features/not-found/NotFound.vue'),
    },
    {
      path: '/',
      component: () => import('./app/layouts/Layout.vue'),
      children: [
        {
          path: '',
          component: () => import('./app/features/dashboard/Dashboard.vue'),
        },
        {
          path: 'integration',
          component: () => import('./app/features/integration/Integration.vue'),
        },
        {
          path: 'docs',
          component: () => import('./app/features/docs/Docs.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
    },
  ],
});

let userFetched = false;

router.beforeEach(async (to) => {
  const { user, fetchUser } = useAuth();

  if (!userFetched) {
    await fetchUser();
    userFetched = true;
  }

  const isLoggedIn = user.value?.isLoggedIn ?? false;
  const isPublic = to.path === '/login' || to.path === '/404';

  if (!isLoggedIn && !isPublic) {
    return '/login';
  }

  if (isLoggedIn && to.path === '/login') {
    return '/';
  }
});
