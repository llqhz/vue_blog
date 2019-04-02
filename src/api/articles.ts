import axios from "@/lib/api.request";

/**
 * 用户登录
 * @param {username,password}
 */
export const getList = ({
  current = null,
  pageSize = null,
  word = null,
  classify_id=null,
  user_id=null
 }) => {
  const data = {
    current,
    pageSize,
    word,
    classify_id,
    user_id,
  }
  return axios.request({
    url: 'articles',
    data,
    method: 'get',
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
