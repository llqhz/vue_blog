import { getArticle } from "@/api/articles";
import articles from './articles';


export default {
  namespaced: true,
  state: {
    article: {
      content: ''
    },
    publish: {

    },
    ops: {
      content_type: [{ 'label': 'HTML', 'value': '0' }, { 'label': 'markdown', 'value': '1' }],
      classify_id: [{ 'label': '其他', 'value': '0' }, { 'label': '网站建设', 'value': '1' }],
    }
  },
  getters: {
    article(state){
      return state.article
    },
    content_type_ops(state){
      return state.ops.content_type
    },
    classify_id_ops(state){
      return state.ops.classify_id
    }
  },
  mutations: {
    setArticle(state, data){
      var article = {
        content: data.content,
        id: data.id,
        title: data.title,
        sub_title: data.sub_title,
        author: data.author,
        image: data.image,
        music: data.music,
        summary: data.summary,
        content_type: data.content_type,
        classify: data.classify,
        classify_id: data.classify_id,
        view_num: data.view_num,
        comment_num: data.comment_num,
        love_num: data.love_num,
        is_new: data.is_new,
        is_hot: data.is_hot,
        updated_at: data.updated_at,
      }
      state.article = article
    },
    setPublish(state, article) {
      state.publish = article
    }
  },
  actions: {
    getArticle({commit,state},params){
      if (params && params.id ) {
        var id = params.id
        return getArticle(id)
          .then(article=>{
            commit('setArticle',article)
          })
      }
      return Promise.reject({message:'获取文章信息出错'})
    },
    getPublish({commit,state},params){
      if ( params.id ) {
        commit('setPublish',state.article)
      } else {
        commit('setPublish', {

        })
      }
    }
  },
}