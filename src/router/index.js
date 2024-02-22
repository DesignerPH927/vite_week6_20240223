import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'frontView',
    component: () => import('../views/frontPages/FrontView.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/frontPages/HomeView.vue'),
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/frontPages/ProductsView.vue'),
      },
      {
        path: 'carts',
        name: 'carts',
        component: () => import('../views/frontPages/CartsView.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/frontPages/LoginView.vue'),
  },
  {
    path: '/admin',
    name: 'dashboard',
    component: () => import('../views/dashboard/DashboardView.vue'),
    children: [
      {
        path: 'items',
        name: 'items',
        component: () => import('../views/dashboard/ProductsView.vue'),
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('../views/dashboard/OrdersView.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404頁面',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to) {
    // console.log(to, from, savedPosition); // eslint-disable-line no-console
    if (to.fullPath.match('/')) {
      return {
        top: 0,
      };
    }
    return {};
  },
  linkActiveClass: 'navText',
  routes,
});

export default router;
