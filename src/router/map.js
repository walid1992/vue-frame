/**
 * @author walid
 * @description 路由配置页
 */

module.exports = [{
  path: '/salerank',
  name: '排行榜界面',
  component: (resolve) => {
    require(['pages/salerank'], resolve)
  }
}, {
  path: '/shop',
  name: '购物',
  component: (resolve) => {
    require(['pages/shop'], resolve)
  }
}]
