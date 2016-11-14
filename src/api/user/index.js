/**
 * @author walid
 * @description commonApi 模块
 * @date 2016/11/09
 */

import Api from '../utils'

const apiURL = {
  // TODO 卖家注册
  signin: '/v1/user/signin'
}

module.exports = {
  signin: function (mobile, mobileCode, extendCode) {
    return Api.post(apiURL.signin, {
      'mobile': mobile,
      'mobileCode': mobileCode,
      'extendCode': extendCode
    })
  }
}
