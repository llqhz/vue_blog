import {
  login,
  logout,
  signup,
  getUserInfo,
  improve,
} from '@/api/user'

import { setToken, getToken } from '@/lib/utils'

export default {
  namespaced: true,
  state: {
    isLogined: false,
    access_token: "",
    user: {},
    default: {
      name: '匿名',
      nickname: "匿名", // 昵称
      avatar: "https://picsum.photos/300/300/?image=648", // 头像
      signature_title: "桃李不言，下自成蹊！",
      signature_desc: "只可意会，不可言传 ~ ",
      job: 0,
      job_text: "闲人隐士",
      sex: 0,
      sex_text: "未知",
      address: "居无定所",
      mobile: "132********",
      email: "********@qq.com",
      tags: "博客,希望"
    },
    ops: {
      job: [],
      sex: []
    }
  },
  getters: {
    user(state, getters) {
      let user = Object.assign({}, state.user);
      if (state.isLogined) {
        user.avatar || (user.avatar = state.default.avatar);
        user.tags || (user.tags = state.default.tags);
        user.signature_title ||
          (user.signature_title = state.default.signature_title);
        user.signature_desc ||
          (user.signature_desc = state.default.signature_desc);
        user.address || (user.address = state.default.address);
        user.mobile || (user.mobile = state.default.mobile);
        user.job_text || (user.job_text = state.default.job_text);
        user.sex_text || (user.sex_text = state.default.sex_text);
      }
      return state.isLogined ? user : state.default;
    },
    isLogined(state, getters) {
      return state.isLogined;
    },
    ops(state, getters) {
      return state.ops;
    }
  },
  mutations: {
    setUser(state, user) {
      state.isLogined = true;
      let info = {
        id: user.id,
        name: user.name, // 昵称
        nickname: user.nickname, // 昵称
        avatar: user.avatar || state.default.avatar, // 头像
        signature_title: user.signature_title || state.default.signature_title,
        signature_desc: user.signature_desc || state.default.signature_desc,
        job: typeof user.job != "undefined" ? user.job:state.default.job,
        job_text: user.job_text || state.default.job_text,
        address: user.address || state.default.address,
        mobile: user.mobile || state.default.mobile,
        email: user.email || state.default.email,
        tags: user.tags || state.default.tags,
        sex: typeof user.sex != "undefined" ? user.sex : state.default.sex,
        sex_text: user.sex_text || state.default.sex_text
      };
      state.user = info;
    },
    setToken(state, token) {
      setToken(token);
      state.access_token = token;
    },
    setLogout(state) {
      state.user = Object.assign({}, state.default);
      state.isLogined = false;
    },
    setOps(state, { job = [], sex = [] }) {
      state.ops = {
        job,
        sex
      };
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
        commit("setOps", {
          job: data.job_ops,
          sex: data.sex_ops
        });
        return Promise.resolve(data);
      });
    },

    // 自动登录
    autoLogin({ state, commit, dispatch }) {
      let token = getToken();
      commit("setToken", token);
      try {
        if (!token) return;
        dispatch("getUserInfo").catch(err => {
          // 自动登录失败
        });
      } catch (error) {
        console.log(error);
      }
    },

    handleLogout({ state, commit }) {
      commit("setToken", null);
      commit("setLogout");
      return logout(state.user.access_token);
    },

    // 完善信息
    handleImprove(
      { state, commit, dispatch },
      {
        id,
        name,
        nickname, // 昵称
        avatar, // 头像
        signature_title,
        signature_desc,
        job = 0,
        sex = 0,
        address = "居无定所",
        mobile = "132********",
        email = "********@qq.com",
        tags = "博客,希望"
      }
    ) {
      name = name.trim();
      nickname = nickname.trim();
      return improve({
        id,
        name,
        nickname, // 昵称
        avatar, // 头像
        signature_title,
        signature_desc,
        job,
        sex,
        address,
        mobile,
        email,
        tags
      }).then(res => {
        if (res.code == -1) {
          return Promise.reject(res);
        }
        dispatch("getUserInfo");
        return res;
      });
    }
  }
};