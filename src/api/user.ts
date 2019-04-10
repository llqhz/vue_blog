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
    url: 'user/info',
    method: 'get'
  })
}

/**
 * 用户退出登录
 * @param token
 */
export const logout = (token) => {
  return axios.request({
    url: 'user/logout',
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

/**
 * 完善信息
 * @param {username,password}
 */
export const improve = ({
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
  }) => {
  const data = {
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
  }
  return axios.request({
    url: 'user/improve',
    data,
    method: 'put',
  })
}