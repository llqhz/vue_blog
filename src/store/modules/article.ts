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
    setArticle(state, article){
      state.article = article
    },
    setPublish(state, article) {
      state.publish = article
    }
  },
  actions: {
    getArticle({commit,state},payload){
      var id = payload.id
      setTimeout(() => {
        var article = {
          content : `# Highlight.js
[![Build Status](https://travis-ci.org/highlightjs/highlight.js.svg?branch=master)](https://travis-ci.org/highlightjs/highlight.js)

Highlight.js is a syntax highlighter written in JavaScript. It works in
the browser as well as on the server. It works with pretty much any
markup, doesn’t depend on any framework, and has automatic language
detection.

## Getting Started
          `,
          id: 1,
          title: '从摄影作品中获取网页颜色搭配技巧',
          sub_title: '使人看起来自然、舒畅。色彩是人的视觉最敏感的东西。',
          author: '筱怪',
          image: '/blog/admin/blog_admin/backend/web/uploads/images/20190223/155843/IMG_20150530_164723.gif',
          music: '/blog/admin/blog_admin/backend/web/uploads/files/20190224/034441/2684.txt',
          summary: '作为一个优秀、专业的网页设计师，首先要了解各种颜色的象征，以及不同类型网站常用的色彩搭配。色彩搭配看似复杂,但并不神秘。一般来说,网页的背景色应该柔和一些、素一些、淡一些,再配上深色的文字,使人看起来自然、舒畅。色彩是人的视觉最敏感的东西。主页的色彩处理得好，可以锦上添花，达到事半功倍的效果。',
          content_type: 1,
          classify_id: '网站建设',
          view_num: 22,
          comment_num: 33,
          love_num: 44,
          is_new: 1,
          is_hot: 0,
          updated_at: '2019-02-22 14:00:00',
        }
        commit('setArticle',article)
      }, 2000);
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