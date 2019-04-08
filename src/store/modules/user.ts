import {
  login,
  logout,
  signup,
  getUserInfo,
} from '@/api/user'

import { setToken, getToken } from '@/lib/utils'

export default {
  namespaced: true,
  state: {
    isLogined: false,
    access_token: '',
    user: {},
    default: {}
  },
  getters: {
    user(state, getters) {
      return state.isLogined ? state.user : state.default;
    },
    isLogined(state,getters){
      return state.isLogined
    }
  },
  mutations: {
    setUser(state, user) {
      state.isLogined = true;
      let info = {
        id: user.id,
        nickname: user.nickname, // 昵称
        avatar: user.avatar || 'https://picsum.photos/300/300/?image=648', // 头像
        signature_title: user.signature_title || "缄默不言 ~",
        signature_desc: user.signature_desc || "桃李不言 , 下自成蹊 .",
        job: user.job || "尽职尽责",
        address: user.address || "四海为家",
        mobile: user.mobile || "132********",
        email: user.email || "*****@qq.com",
        tags: user.tags || "暂无标签"
      }
      state.user = info;
    },
    setToken(state,token) {
      setToken(token)
      state.access_token = token
      console.log({ 'getToken':getToken()});
    }
  },
  actions: {
    // 登录
    handleLogin({ state, commit }, { username, password, code, codeHash }) {
      username = username.trim();
      return login({
        username,
        password,
        code,
        codeHash
      }).then(res => {
        if (res.code == -1) {
          return Promise.reject(res);
        }
        commit("setToken", res.access_token);
        return res.access_token;
      });
    },

    // 登录
    handleSignup(
      { state, commit },
      { username, password, repassword, code, codeHash, email, nickname }
    ) {
      username = username.trim();
      return signup({
        username,
        password,
        repassword,
        code,
        codeHash,
        email,
        nickname
      }).then(res => {
        if (res.code == -1) {
          return Promise.reject(res);
        }
        return res;
      });
    },

    // 获取用户相关信息
    getUserInfo({ state, commit }) {
      return getUserInfo(state.access_token).then(data => {
        commit("setUser", data);
        return Promise.resolve(data);
      });
    },

    // 自动登录
    autoLogin({ state, commit, dispatch}){
      let token = getToken()
      commit("setToken", token);
      try {
        if ( !token ) return
        dispatch('getUserInfo')
          .catch(err=>{
            // 自动登录失败
          })
      } catch (error) {
        console.log(error);
      }
    },

    handleLogout({state,commit}){
      commit("setToken", null);
      return logout(state.user.access_token)
    }
  }
};