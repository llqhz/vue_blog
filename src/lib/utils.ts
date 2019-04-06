import config from "@/config/index";
import Cookie from "@/lib/cookie";
import Vue from 'vue';
import router from "@/router";

const { TOKEN_KEY, cookieExpires,baseUrl } = config
const vm: Vue = new Vue()

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
export const pageTo = (name = '', params=null ) => {
  return router.push({
    name,
    params,
  });
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
export const notice = (type: string, title: string, content: string = '', duration: number=4.5) => {
  if ( !(type && vm.$Notice[type]) ) {
    type = 'open'
  }
  return vm.$Notice[type]({
    title,
    content,
    duration
  })
}

export const url = (url_str: string,type='static') => {
  let prefix = '';
  switch (type) {
    case "api":
      prefix = baseUrl.pro;
      break;
    case "api_":
      prefix = baseUrl.pro.substr(0,baseUrl.pro.length-1);
      break;

    default:
      prefix = baseUrl.static;
      break;
  }
  return prefix + url_str;
}


export const isDefined = v => {
  return v !== undefined && v !== null
}



