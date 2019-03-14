import axios from "@/lib/api.request"

/**
 * 用户登录
 * @param {username,password}
 */
export const login = ({ username, password, code }) => {
  const data = {
    username,
    password,
    code
  }
  return axios.request({
    url: 'login',
    data,
    method: 'post',
  })
  /**
   * {
   *    token => ''
   * }
   */
}

/**
 * 获取用户信息
 * @param token
 */
export const getUserInfo = (token) => {
  return axios.create({
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