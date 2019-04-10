import { baseUrl } from "@/config";
import axios from "@/lib/api.request";

export function imageUpload(file:File) {
  let formdata = new FormData();
  formdata.append('image', file, file.name)
  return axios.request({
      url: 'tools/image-upload',
      method: 'post',
      data: formdata,
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then((res) => {
      // 第二步.将返回的url替换到文本原位置
      if (res.code == 1) {
        return Promise.resolve(res)
      } else {
        return Promise.reject(res);
      }
    })
}