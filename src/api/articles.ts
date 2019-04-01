import axios from "@/lib/api.request";

/**
 * 用户登录
 * @param {username,password}
 */
export const list = ({ current, pageSize, word, type }) => {
  const data = {
    current,
    pageSize,
    word,
    type
  }
  return axios.request({
    url: 'login',
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
