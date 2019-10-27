import axios from 'axios'
import Vue from "vue"
var vue = new Vue()


class ApiCommon{
  constructor(baseUrl){

    // 创建一个 axios 实例
    this.service = axios.create({
      baseURL: baseUrl,
      timeout: 5000 // 请求超时时间
    })

    // 响应拦截器
    this.service.interceptors.response.use(
      response => {
        // dataAxios 是 axios 返回数据中的 data
        const dataAxios = response.data
        // 这个状态码是和后端约定的
        const { code } = dataAxios
        // 根据 code 进行判断
        if (code === undefined) {
          // 如果没有 code 代表这不是项目后端开发的接口 比如可能是 D2Admin 请求最新版本
          return dataAxios
        } else {
          if(code == 0){
            return dataAxios.data
          }else{
            return Promise.reject(dataAxios.msg);
          }
        }
      },
      error => {
        if (error && error.response) {
          switch (error.response.status) {
            case 400: error.message = '请求错误'; break
            case 401: error.message = '未授权，请登录'; break
            case 403: error.message = '拒绝访问'; break
            case 404: error.message = `请求地址出错: ${error.response.config.url}`; break
            case 408: error.message = '请求超时'; break
            case 500: error.message = '服务器内部错误'; break
            case 501: error.message = '服务未实现'; break
            case 502: error.message = '网关错误'; break
            case 503: error.message = '服务不可用'; break
            case 504: error.message = '网关超时'; break
            case 505: error.message = 'HTTP版本不受支持'; break
            default: break
          }
        }
        return Promise.reject(error.message)
      }
    )
  }

  //基础请求
  async _send_ajax(url,methods='post',data){
    try{
      var res = await this.service({
        url:url,
        method:methods,
        data
      })
    }catch(err){
      vue.$msg({text:err,background:'red',position:"top"})
    }
    console.log(res)
    return res
  }

  //普通请求
  async normal(url,methods,data){
    return await this._send_ajax(url,methods,data)
  }

}


export default ApiCommon
