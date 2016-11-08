/**
 * Created by walid on 16/11/01.
 * common api utils
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
