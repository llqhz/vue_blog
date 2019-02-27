import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/index/Index.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('@/views/list/List.vue')
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('@/views/article/Article.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(
        /* webpackChunkName: "about" */
          '@/views/about/About.vue'
        )
    },
    {
      path: '/publish',
      name: 'publish',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/publish/Publish.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/Login.vue')
    },
    {
      path: '/submit',
      name: 'Submit',
      component: () => import('@/views/auth/Submit.vue')
    },
    {
      path: '/improve',
      name: 'Improve',
      component: () => import('@/views/auth/Improve.vue')
    }
  ]
})
