import state from '../state';
import { getList, getTopNews } from "@/api/articles";

export default {
  namespaced: true,
  state: {
    articles: [],
    latestNews: [],
    hotNews: [],
    frendLinks: [],
    classify: []
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
    },
    classify(state){
      return state.classify
    }
  },
  mutations: {
    setArticles(state, articles){
      let items = articles.map((item,key,arr)=>{
        return {
          id: item.id,
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
        .map((item, key, arr)=>{
          return {
            title: item.title,
            id: item.id,
            user_id: item.user_id,
          }
        })
      state.hotNews = news.hotNews
        .map((item, key, arr) => {
          return {
            title: item.title,
            id: item.id,
            user_id: item.user_id,
          }
        })
      state.frendLinks = news.frendLinks
        .map((item, key, arr) => {
          return {
            title: item.title,
            url: item.url,
          }
        })
      state.classify = news.classify
        .map((item, key, arr) => {
          return {
            title: item.name,
            id: item.value,
          }
        })
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
      return getTopNews()
        .then(res => {
          let {
            latestNews,
            hotNews,
            frendLinks,
            classify
          } = res
          commit('setTopNews', { latestNews, hotNews, frendLinks, classify})
          return res
        })
    }
  },
}