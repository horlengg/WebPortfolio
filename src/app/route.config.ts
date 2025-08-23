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
          component: () => import('./blogs/blog-list.vue'), 
        },
        {
          path: ':title',
          component: () => import('./blogs/blog-post.vue'), 
        },
      ],
    },
  ],
});

router.beforeEach((to,_,next)=>{
  const lastPath = to.path.split('/').pop() ?? ''
  const title = lastPath.split('-').join(' ')
  document.title = title ? title : 'Leng ツ'
  next();
})

export default router;
