import state from '../state';

export default {
  namespaced: true,
  state: {
    articles: [],
    latestNews: [],
    hotNews: [],
    frendLinks: [],
  },
  getters: {
    articles(state){
      return state.articles
    },
    latest(state){
      return state.latestNews
    },
    hot(state){
      return state.hotNews
    },
    frendLinks(state){
      return state.frendLinks
    }
  },
  mutations: {
    setArticles(state, articles){
      state.articles = articles
    },
    setTopNews(state,news){
      state.latestNews = news.latestNews
      state.hotNews = news.hotNews
      state.frendLinks = news.frendLinks
    }
  },
  actions: {
    getArticles({commit,state},payload){
      console.log(payload);
      if ( payload ) {
        setTimeout(() => {
          var articles = [
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
          commit('setArticles', articles)
        }, 2000);
      }
    },
    getTopNews({commit,state}){
      setTimeout(() => {
        var news = [
          {
            url:'#',
            title: '两只蜗牛艰难又浪漫的一吻',
          },
          {
            url: '#',
            title: '琰智国际-Nativ for Life官方网站',
          },
          {
            url: '#',
            title: '个人博客模板（2014草根寻梦）',
          },
          {
            url: '#',
            title: '简单手工纸玫瑰',
          },
          {
            url: '#',
            title: '响应式个人博客模板（蓝色清新）',
          },
          {
            url: '#',
            title: '蓝色政府（卫生计划生育局）网站',
          },
          {
            url: '#',
            title: '犯错了怎么办 ?',
          },
        ];
        var frendLinks = [
          { url: '#', title: '个人空间'},
          { url: '#', title: '个人博客'},
          { url: '#', title: '个人网站'},
          { url: '#', title: '个人收藏'},
        ]
        commit('setTopNews', { latestNews: news, hotNews: news, frendLinks: frendLinks})
      }, 3000);
    }
  },
}