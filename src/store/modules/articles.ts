export default {
  namespaced: true,
  state: {
    articles: [
      {
        title: '从摄影作品中获取网页颜色搭配技巧',
        author: '筱怪',
        updated_at: '2019-02-24 11:44:42',
        summary: '作为一个优秀、专业的网页设计师，首先要了解各种颜色的象征，以及不同类型网站常用的色彩搭配。色彩搭配看似复杂,但并不神秘。一般来说,网页的背景色应该柔和一些、素一些、淡一些,再配上深色的文字,使人看起来自然、舒畅。色彩是人的视觉最敏感的东西。主页的色彩处理得好，可以锦上添花，达到事半功倍的效果。',
        classify_id: '网站建设',
        view_num: 243,
        comment_num: 20,
      },
      {
        title: '从摄影作品中获取网页颜色搭配技巧',
        author: '筱怪',
        updated_at: '2019-02-24 11:44:42',
        summary: '作为一个优秀、专业的网页设计师，首先要了解各种颜色的象征，以及不同类型网站常用的色彩搭配。色彩搭配看似复杂,但并不神秘。一般来说,网页的背景色应该柔和一些、素一些、淡一些,再配上深色的文字,使人看起来自然、舒畅。色彩是人的视觉最敏感的东西。主页的色彩处理得好，可以锦上添花，达到事半功倍的效果。',
        classify_id: '网站建设',
        view_num: 243,
        comment_num: 20,
      },
      {
        title: '从摄影作品中获取网页颜色搭配技巧',
        author: '筱怪',
        updated_at: '2019-02-24 11:44:42',
        summary: '作为一个优秀、专业的网页设计师，首先要了解各种颜色的象征，以及不同类型网站常用的色彩搭配。色彩搭配看似复杂,但并不神秘。一般来说,网页的背景色应该柔和一些、素一些、淡一些,再配上深色的文字,使人看起来自然、舒畅。色彩是人的视觉最敏感的东西。主页的色彩处理得好，可以锦上添花，达到事半功倍的效果。',
        classify_id: '网站建设',
        view_num: 243,
        comment_num: 20,
      },
    ]

  },
  getters: {
    articles(state){
      return state.articles
    }
  },
  mutations: {
    updateArticles(state,params){
      state.articles = params.slice(0,1)
    }
  },
  actions: {
    getArticles({commit,state},payload){
      if ( payload ) {
        setTimeout(() => {
          commit('updateArticles',state.articles)
        }, 2000);
      }
    }
  },
}