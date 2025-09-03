export default [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layouts/tabbar.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
        },
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('@/views/user/index.vue'),
        meta: {
          title: '我的',
        },
      },
    ],
  },
]
