/**
 * @author walid
 * @description 路由配置页
 */

import name from './name'

const map = [{
  title: '售卖榜',
  path: '/salerank',
  name: name.SALERANK,
  component: (resolve) => {
    require(['pages/salerank'], resolve)
  }
}, {
  title: '购物车',
  path: '/shop',
  name: name.SHOP,
  component: (resolve) => {
    require(['pages/shop'], resolve)
  }
}]

module.exports = map
