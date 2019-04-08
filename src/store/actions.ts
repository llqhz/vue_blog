export default {
  init({ dispatch, commit, state}){
    // 执行全局数据初始化工作

    // 用户token登录
    dispatch('user/autoLogin')

    // 最新文章,最热文章,友情链接
    dispatch('articles/getTopNews')
  }
}