/**
 * @author walid
 * @description 路由配置页
 */

import name from './name'

export default [
  {
    title: '售卖榜',
    path: '/salerank',
    name: name.SALERANK,
    component: (resolve) => {
      require(['pages/salerank'], resolve)
    }
  },
  {
    title: '申请筹款页',
    path: '/applyraise',
    name: '申请筹款页',
    component: (resolve) => {
      require(['pages/applyraise/app'], resolve)
    }
  },
  {
    title: '申请成功页',
    path: '/applysuccess',
    name: '申请成功页',
    component: (resolve) => {
      require(['pages/applysuccess/app'], resolve)
    }
  },
  {
    title: '购物车',
    path: '/shop',
    name: name.SHOP,
    component: (resolve) => {
      require(['pages/shop'], resolve)
    }
  }]
