/**
 * @author walid
 * @date 2016/11/13
 * @description Api Call
 */

'use strict'

var resolve
var reject

/**
 * API Call 构造器
 * @param executor
 * @constructor
 */
function Call (executor) {
  try {
    executor(function (x) {
      resolve(x)
    }, function (r) {
      if (reject) {
        reject(r)
      }
    })
  } catch (e) {
    reject(e)
  }
}

Call.prototype.then = function (onResolved) {
  resolve = onResolved
  return this
}

Call.prototype.catch = function (onRejected) {
  reject = onRejected
  return this
}

module.exports = Call
