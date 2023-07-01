import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/layout/BasicLayout/basicLayout.vue'),
      children: [
        // 首页
        {
          path: '/',
          name: 'Index',
          component: () => import('@/views/Index/index.vue')
        },
        // 登录页
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/Login/login.vue')
        },
        // 注册页
        {
          path: '/register',
          name: 'Register',
          component: () => import('@/views/Register/register.vue')
        },
        // 视频列表页
        {
          path: '/video/list/:tag',
          name: 'VideoList',
          component: () => import('@/views/VideoList/videoList.vue')
        },
        // 视频搜索页
        {
          path: '/video/search/:keyword',
          name: 'VideoList',
          component: () => import('@/views/VideoList/videoList.vue')
        },
        // 视频详情页
        {
          path: '/video/detail/:id',
          name: 'VideoDetail',
          component: () => import('@/views/VideoDetail/videoDetail.vue')
        },
        // 视频发布页
        {
          path: '/video/publish',
          name: 'VideoPublish',
          component: () => import('@/views/VideoPublish/videoPublish.vue')
        },
        // 视频编辑页
        {
          path: '/video/edit/:id',
          name: 'VideoEdit',
          component: () => import('@/views/VideoPublish/videoPublish.vue')
        },
        // 作品列表页
        {
          path: '/home/admin',
          name: 'Admin',
          component: () => import('@/views/Home/Admin/admin.vue')
        },
        // 个人资料页
        {
          path: '/home/info',
          name: 'Info',
          component: () => import('@/views/Home/Info/info.vue')
        },
        // 数据中心页
        {
          path: '/home/data',
          name: 'Data',
          component: () => import('@/views/Home/Data/data.vue')
        },
        // 消息通知页
        {
          path: '/home/message/:id',
          name: 'Message',
          component: () => import('@/views/Home/Message/message.vue')
        },
        // 个人主页
        {
          path: '/home/:id',
          name: 'Home',
          component: () => import('@/views/Home/home.vue')
        }
      ]
    }
  ]
})

export default router
