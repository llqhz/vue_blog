import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state"
import getters from "./getters";
import mutations from "./mutations"
import actions from './actions'

import user from './modules/user'
import swiper from './modules/swiper'
import articles from './modules/articles'


export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,

  modules: {
    user,
    swiper,
    articles
  }
})
