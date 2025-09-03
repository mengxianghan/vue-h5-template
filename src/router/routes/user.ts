export default [
  {
    path: '/user/login',
    name: 'UserLogin',
    component: () => import('@/views/user/login/index.vue'),
    meta: {
      title: '登录',
    },
  },
]
