import config from "@/config/index";
import Cookie from "@/lib/cookie";
import {  } from "module";

const { TOKEN_KEY, cookieExpires } = config


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

export const setToken = (token) => {
  Cookie.set(TOKEN_KEY,token)
}

export const getToken = () => {
  const token = Cookie.get(TOKEN_KEY)
  if (token) return token
  else return false
}

export const hasChild = (item) => {
  return item.children && item.children.length !== 0
}


export const to = (name) => {

}