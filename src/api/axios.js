/**
 * @author walid
 * @date 2016/11/09
 * @description 网络请求框架封装
 */

import Axios from 'axios'
import QS from 'querystring'
import Call from 'api/call'

function use () {
  // Vue.use(Axios)

  // TODO baseURL
  // Axios.defaults.baseURL = 'http://103.37.145.195:8830'

  // TODO 设置超时时间
  Axios.defaults.timeout = 2000

  // TODO http code 校验
  Axios.defaults.validateStatus = function (status) {
    return status
  }

  // TODO GET 请求 params 序列化
  Axios.defaults.paramsSerializer = function (params) {
    return QS.stringify(params)
  }

  // TODO 设置POST等请求 body 序列化
  Axios.defaults.transformRequest = [function (body) {
    return QS.stringify(body)
  }]

  // TODO 添加请求conig配置
  // Axios.interceptors.request.use(config => {
  //   return config
  // }, error => {
  //   return Promise.reject(error)
  // })

  // TODO 设置统一请求拦截
  Axios.interceptors.response.use(response => {
    if (response.data.code === 0) {
      return response.data
    }
    return Promise.reject(response.data)
  }, error => {
    return Promise.reject(error)
  })
}

/**
 * @description 统一 GET 请求
 * @param url
 * @param params --> GET 请求参数（***?name=walid&age=25）
 */
function get (url, params) {
  return new Call((resolve, reject) => {
    Axios.get(url, {params: params})
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * @description 统一 POST 请求
 * @param url
 * @param body --> POST 请求 data
 */
function post (url, body) {
  return new Call((resolve, reject) => {
    Axios.post(url, body)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

module.exports = {
  use: use,
  get: get,
  post: post
}
