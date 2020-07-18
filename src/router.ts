import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 修复rooter跳转当前路由报错
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("@/views/index/Index.vue")
    },
    {
      path: "/list",
      name: "list",
      component: () => import("@/views/list/List.vue")
    },
    {
      path: "/article",
      name: "article",
      component: () => import("@/views/article/Article.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "about" */
          "@/views/about/About.vue"
        )
    },
    {
      path: "/publish",
      name: "publish",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/publish/Publish.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/auth/Login.vue")
    },
    {
      path: "/submit",
      name: "submit",
      component: () => import("@/views/auth/Submit.vue")
    },
    {
      path: "/improve",
      name: "improve",
      component: () => import("@/views/auth/Improve.vue")
    },
    { path: "*", component: () => import("@/views/index/NotFound.vue") }
  ]
});
