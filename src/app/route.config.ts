import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./home/home.vue'),
    },
    {
      path: '/blogs',
      component: () => import('./blogs/blogs.vue'),
      children: [
        {
          path: '',
          component: () => import('./blogs/blog.list.vue'), 
        },
        {
          path: ':title',
          component: () => import('./blogs/blog.content.vue'), 
        },
      ],
    },
  ],
});

export default router;
