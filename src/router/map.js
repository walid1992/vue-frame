/**
 * @author walid
 * @description 路由配置页
 */

module.exports = [{
  title: '售卖榜',
  path: '/salerank',
  name: 'salerank',
  component: (resolve) => {
    require(['pages/salerank'], resolve)
  }
}, {
  title: '购物车',
  path: '/shop',
  name: 'shop',
  component: (resolve) => {
    require(['pages/shop'], resolve)
  }
}]
