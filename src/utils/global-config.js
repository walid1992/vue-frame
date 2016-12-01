/**
 * @author walid
 * @date 2016/11/30
 * @description api 初始化
 */

import api from 'api'
import router from 'router'
import routerName from 'router/name'

export default function plugin(Vue) {
  Vue.api = api
  Vue.prototype.$api = api
  Vue.routerName = routerName
  Vue.prototype.$routerName = routerName
}
