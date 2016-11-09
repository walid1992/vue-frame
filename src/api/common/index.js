/**
 * @author walid
 * @description commonApi 模块
 * @date 2016/11/09
 */

import Api from '../api.js'

const apiURL = {
  // 排行榜接口
  salerank: 'v1/common/salerank'
}

module.exports = {
  salerank: function () {
    return Api.get(apiURL.salerank, {})
  }
}
