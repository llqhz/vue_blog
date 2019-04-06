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
    default: {
      nickname: "筱怪", // 昵称
      avatar:
        "https://thirdwx.qlogo.cn/mmopen/vi_32/rgmtJfdPRoianrDeicYkkl5Y9cukTMCzvD2McCcpJ7ZJK2y23yVgtISrSKUjNFPJvblNuZbSepkVvFCc42xzgKbg/0", // 头像
      signature_title: "执子之手，与子偕老",
      signature_desc: "于千万人之中，我遇见了我所遇见的人....",
      job: "Web前端设计师、网页设计",
      address: "湖北省—武汉市",
      mobile: "13212345678",
      email: "llqhz@qq.com",
      tags: "青空,study,青青唠叨,青空,study,青青唠叨"
    }
  },
  getters: {
    user(state, getters) {
      return state.isLogined ? state.user : state.default;
    }
  },
  mutations: {
    setUser(state, user) {
      state.isLogined = true;
      state.user = user;
    },
    setToken(state,token) {
      setToken(token)
      state.access_token = token
    }
  },
  actions: {
    getUser({ commit, state }, payload) {
      console.log(payload);
      var id = payload.id;
      setTimeout(() => {
        var user = {
          nickname: "筱怪2", // 昵称
          avatar:
            "https://thirdwx.qlogo.cn/mmopen/vi_32/rgmtJfdPRoianrDeicYkkl5Y9cukTMCzvD2McCcpJ7ZJK2y23yVgtISrSKUjNFPJvblNuZbSepkVvFCc42xzgKbg/0", // 头像
          signature_title: "执子之手，与子偕老",
          signature_desc: "于千万人之中，我遇见了我所遇见的人....",
          job: "Web前端设计师、网页设计",
          address: "湖北省—武汉市",
          mobile: "13212345678",
          email: "llqhz@qq.com",
          tags: ""
        };
        commit("setUser", user);
      }, 4000);
    },
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
      return getUserInfo(state.token).then(data => {
        commit("setAvatar", data.avatar);
        commit("setUserName", data.name);
        commit("setUserId", data.user_id);
        commit("setAccess", data.access);
        commit("setHasGetInfo", true);
        return Promise.resolve(data);
      });
    }
  }
};