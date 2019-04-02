import state from '../state';
import { getList } from "@/api/articles";

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
      let items = articles.map((item,key,arr)=>{
        return {
          title: item.title,
          author: item.author,
          updated_at: item.updated_at,
          summary: item.summary,
          view_num: item.view_num,
          comment_num: item.comment_num,
          classify: item.classify
        }
      })
      state.articles = items
    },
    setTopNews(state,news){
      state.latestNews = news.latestNews
      state.hotNews = news.hotNews
      state.frendLinks = news.frendLinks
    }
  },
  actions: {
    getArticles({commit,state},params={}){
      return getList(params)
      .then( res => {
        commit('setArticles', res.items)
        return res
      })
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