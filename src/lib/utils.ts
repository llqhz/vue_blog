import config from "@/config/index";
import Cookie from "@/lib/cookie";
import Vue from 'vue';

const { TOKEN_KEY, cookieExpires } = config
const vm = new Vue()

export default {
  load: (src) => {
    console.log('sssssss')
    let s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = src,
    document.body.appendChild(s);
  },
  // 转换文件到blob前端展示
  fileToImage(file) {
    let image = null,url = null;
    if (window.createObjectURL != undefined) {
      url = window.createObjectURL;
    } else if (window.URL != undefined) {
      url = window.URL.createObjectURL;
    } else if (window.webkitURL != undefined) {
      url = window.webkitURL.createObjectURL;
    }
    if (file) {
      image = url.createObjectURL(file)
    }
    return image
  },
}

// 保存token
export const setToken = (token) => {
  Cookie.set(TOKEN_KEY,token)
}

// 获取token
export const getToken = () => {
  const token = Cookie.get(TOKEN_KEY)
  if (token) return token
  else return false
}

export const hasChild = (item) => {
  return item.children && item.children.length !== 0
}

// 跳转到指定页面
export const pageTo = (name='', query=null ) => {
  return Vue.$router.push({
    name,
    query
  })
}

// iview message 提示
export const message = (type,content, duration=1.5) => {
  if (!(type && vm.$Notice[type])) {
    type = 'info'
  }
  return vm.$Message[type]({
    content,
    duration: type=='loading'?0:duration,
    closable: true
  })
}

// iview notice提示
export const notice = (type,title, content = '', duration=4.5) => {
  if ( !(type && vm.$Notice[type]) ) {
    type = 'open'
  }
  return vm.$Notice[type]({
    title,
    content,
    duration
  })
}

