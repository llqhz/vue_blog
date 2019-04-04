import axios from "@/lib/api.request";

/**
 * 用户登录
 * @param {username,password}
 */
export const getList = ({
    current = null,
    pageSize = 10,
    word = null,
    classify_id=null,
    user_id=null
  }) => {
  const params = {
    page:current,
    pageSize,
    word,
    classify_id,
    user_id,
  }
  return axios.request({
    url: 'articles',
    params,  // get 传参
    method: 'get',
  })
}


export function getTopNews() {
  return axios.request({
    url: 'news',
    method: 'get'
  })
}

