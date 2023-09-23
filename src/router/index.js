import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { transition: 'list' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { transition: 'list' }
    },
    {
      path: '/achievement',
      name: 'achievement',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RealisationsView.vue'),
      meta: { transition: 'list' }
    },
    {
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: () => import("../views/NotFoundView.vue"),
    }
  ]
})

export default router
