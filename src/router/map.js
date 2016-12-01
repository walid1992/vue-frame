/**
 * @author walid
 * @description 路由配置页
 */

import name from './name'

export default [
  {
    title: '售卖榜',
    path: '/sale-rank',
    name: name.SALERANK,
    component: (resolve) => {
      require(['pages/sale-rank'], resolve)
    }
  },
  {
    title: '申请筹款页',
    path: '/apply-raise',
    name: '申请筹款页',
    component: (resolve) => {
      require(['pages/apply-raise/app'], resolve)
    }
  },
  {
    title: '申请成功页',
    path: '/apply-success',
    name: '申请成功页',
    component: (resolve) => {
      require(['pages/apply-success/app'], resolve)
    }
  },
  {
    title: '购物车',
    path: '/shop',
    name: name.SHOP,
    component: (resolve) => {
      require(['pages/shop'], resolve)
    }
  },
  {
    title: '404',
    path: '*',
    component: (resolve) => {
      require(['pages/404/app'], resolve)
    }
  }
]
