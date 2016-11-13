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
    executor(function (res) {
      dispatchResolve(res)
    }, function (errRes) {
      dispatchReject(errRes)
    })
  } catch (err) {
    dispatchReject(err)
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

function dispatchResolve (response) {
  if (isFunc(resolve)) {
    resolve(response)
  }
}

function dispatchReject (error) {
  if (isFunc(reject)) {
    reject(error)
  }
}

function isFunc (obj) {
  return obj && typeof obj === 'function'
}

module.exports = Call
