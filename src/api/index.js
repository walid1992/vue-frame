/**
 * Created by walid on 16/11/01.
 * api utils 封装
 */
import Vue from 'vue'

function get (url, body) {
  return new Promise((resolve, reject) => {
    Vue.http.get(url).then(response => {
      // 成功数据回调
      console.log('success callback', response)
      if (response.data.code === 0) {
        resolve(response.data.data)
        return
      } else {
        reject(response.data.data)
        return
      }
    }, response => {
      // console.log('error callback', response)
      reject(response.data.data)
    })
  })
}

function post (url, body) {
  return new Promise((resolve, reject) => {
    Vue.http.post(url).then(response => {
      // 成功数据回调
      console.log('success callback', response)
      if (response.data.code === 0) {
        resolve(response.data.data)
        return
      } else {
        reject(response.data.data)
        return
      }
    }, response => {
      console.log('error callback', response)
      reject(response.data.data)
    })
  })
}

module.exports = {
  get: get,
  post: post
}
