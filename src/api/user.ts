import axios from "@/lib/api.request"


/**
 * 用户登录
 * @param {username,password}
 */
export const login = ({ username, password, code, codeHash }) => {
  const data = {
    username,
    password,
    code,
    codeHash,
  }
  return axios.request({
    url: 'user/login',
    data,
    method: 'post',
  })
  const expect = {
    token: '',
    code: 0,
    message: '获取成功'
  }
  const error = {
    code: 30004,
    message: '获取数据异常'
  }
}

// 刷新验证码
export function getCodeImage() {
  const data = {
    refresh: 1,
    _t: new Date().getTime()
  }
  return axios.request({
    url: 'user/captcha',
    params: data,
    method: 'get'
  })
}




/**
 * 获取用户信息
 * @param token
 */
export const getUserInfo = (token) => {
  return axios.request({
    url: 'get_info',
    params: {
      token
    },
    method: 'get'
  })
}

/**
 * 用户退出登录
 * @param token
 */
export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}


/**
 * 用户注册
 * @param {username,password}
 */
export const signup = ({ username, password, repassword,code, codeHash,nickname,email }) => {
  const data = {
    username,
    password,
    rePassword:repassword,
    code,
    codeHash,
    email,
    nickname,
  }
  return axios.request({
    url: 'user/signup',
    data,
    method: 'post',
  })
}