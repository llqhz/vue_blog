import Vue from 'vue'


class ErrorHandler {
  public message = '未知错误';
  public code = -1;
  public info = '错误元信息';

  constructor(err, vm, info) {
    this.setInfo(info)
    this.setMessage(err)
    this.setCode(err)
    return this
  }

  /**
   * setCode
   */
  public setCode(err) {
    if (typeof err == 'object' && typeof err.code !== undefined ) {
      this.code = err.code
    }
  }

  public setMessage(err){
    if (!err) {
      this.message = '出现未知错误 : '+this.info
    } else if ( typeof err == 'string' ) {
      this.message = err
    } else if ( err.message ) {
      this.message = err.message
    }
    if ( this.code !== -1 ) {
      this.message += '<br>错误代码：'+this.code
    }
  }

  /**
   * setInfo
   */
  public setInfo(info) {
    this.info = info
  }

}

export default ErrorHandler