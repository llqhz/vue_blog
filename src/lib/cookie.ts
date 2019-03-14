import config from "@/config";
const { SECRET_KEY } = config

export default {
  encrypt(str){
    return btoa(SECRET_KEY+str)
  },
  decrypt(str){
    let s = atob(str)
    return s.search(SECRET_KEY) > -1 ? s.slice(SECRET_KEY.length) : null
  },
  set(key,val){
    return localStorage.setItem(key,this.encrypt(JSON.stringify(val)))
  },
  get(key){
    let val = localStorage.getItem(key)
    if ( val ) {
      val = this.decrypt(val)    // 获取成功
      if ( val ) {
        val = JSON.parse(val)    // 解密成功
      }
    }
    return val
  },
  clear(){
    localStorage.clear()
  }
}