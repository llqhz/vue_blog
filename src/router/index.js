import Vue from 'vue'
import Router from 'vue-router'
// 导入当前路由列表
import routes from "./routes"

Vue.use(Router)


export default new Router({
    // 路由模式
    mode: 'history',

    // 路由前缀
    base: "",

    // 路由列表
    routes,

    // scrollBehavior(to, from, savedPosition) {
    //     if (savedPosition) {
    //         return savedPosition
    //     } else {
    //         return { x: 0, y: 0 }
    //     }
    // }

})