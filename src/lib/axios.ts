import axios from 'axios'
import store from '@/store'
import state from '@/store/state';
// import { Spin } from 'iview'

const addErrorLog = errorInfo => {
  const { statusText, status, request: { responseURL } } = errorInfo
  let info = {
    type: 'ajax',
    code: status,
    mes: statusText,
    url: responseURL
  }
  return console.log(info)
  if (!responseURL.includes('save_error_logger')) store.dispatch('addErrorLog', info)
}

class HttpRequest {
  protected baseUrl = ''
  protected queue = {}

  constructor(baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig() {
    let token = state.user.access_token ? state.user.access_token : null

    let config = {
      baseURL: this.baseUrl,
      headers: {
        //'X-Api-Key':
      }
    }
    if ( token ) {
      // 添加token
      config.headers['X-Api-Key'] = token
    }


    return config
  }
  destroy(url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  interceptors(instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // Spin.show() // 不建议开启，因为界面不友好
      }
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截和处理
    instance.interceptors.response.use(res => {
      this.destroy(url)
      if (res.status !== 200 ) {
        if ( res && res.data ) {
          return Promise.reject(res.data)
        } else {
          return Promise.reject(res)
        }
      } else {
        // const { data, status } = res
        const { data } = res
        return data
      }
    }, error => {

      this.destroy(url)
      let errorInfo = error.response
      if (!errorInfo) {
        const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
        errorInfo = {
          statusText,
          status,
          request: { responseURL: config.url }
        }
      }
      addErrorLog(errorInfo)
      return Promise.reject(error)
    })
  }
  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}


export default HttpRequest
