/**
 * @author walid
 * @description vue router
 */

import VueRouter from 'vue-router'
import map from './map'

export default new VueRouter({
  mode: 'history',
  saveScrollPosition: true,
  scrollBehavior: () => ({
    y: 0
  }),
  routes: map
})
