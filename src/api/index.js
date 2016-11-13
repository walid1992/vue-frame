/**
 * @author walid
 * @date 2016/11/09
 * @description 网络请求框架封装
 */

import Vue from 'vue'
import Axios from 'axios'
import Call from 'api/call'

function use () {
  Vue.use(Axios)
  // baseURL
  // Axios.defaults.baseURL = 'http://103.37.145.195:8830'
  // 设置超时时间
  Axios.defaults.timeout = 2000
  Axios.defaults.validateStatus = function (status) {
    return status
  }

  // 添加请求conig配置
  // Axios.interceptors.request.use(config => {
  //   return config
  // }, error => {
  //   return Promise.reject(error)
  // })

  // 设置统一请求拦截
  Axios.interceptors.response.use(response => {
    if (response.data.code === 0) {
      console.log('请求成功 : \n', response)
      return response.data
    }
    console.error('请求失败 : \n', response)
    return Promise.reject(response.data)
  }, error => {
    console.error('请求失败 : \n', error)
    return Promise.reject(error)
  })
}

function get (url, body) {
  return new Call((resolve, reject) => {
    Axios.get(url, {params: body})
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

function post (url, body) {
  return new Call((resolve, reject) => {
    Axios.post(url, {params: body})
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
