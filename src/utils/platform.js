/**
 * @author walid
 * @description 平台容器工具类
 * @date 2016/11/30
 */

const showPlatformEnum = {
  WECHAT: 1,
  BROWSER: 2,
  ANDROID: 3,
  IOS: 4
}

const systemPlatformEnum = {
  ANDROID: 3,
  IOS: 4
}

const getShowPlatform = function () {
  let ua = window.navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return showPlatformEnum.WECHAT
  } else if (ua.match(/rock\//i) == 'rock/' && ua.match(/Android/i) == 'android') {
    return showPlatformEnum.ANDROID
  } else if (ua.match(/rock\//i) == 'rock/' && ua.match(/iPhone\sOS/i) == 'iphone os') {
    return showPlatformEnum.IOS
  } else {
    return showPlatformEnum.BROWSER
  }
}

const isShowInWechat = function () {
  let ua = window.navigator.userAgent.toLowerCase()
  return ua.match(/MicroMessenger/i) == 'micromessenger'
}

const isShowInAndroid = function () {
  let ua = window.navigator.userAgent.toLowerCase()
  return ua.match(/rock\//i) == 'rock/' && ua.match(/Android/i) == 'android'
}

const isShowInIOS = function () {
  let ua = window.navigator.userAgent.toLowerCase()
  return ua.match(/rock\//i) == 'rock/' && ua.match(/iPhone\sOS/i) == 'iphone os'
}

const isShowInBrowser = function () {
  return !isShowInWechat() && !isShowInAndroid() && !isShowInIOS()
}

const isAndroidSystem = function () {
  let ua = window.navigator.userAgent.toLowerCase()
  return ua.match(/Android/i) == 'android'
}

const isIOSSystem = function () {
  let ua = window.navigator.userAgent.toLowerCase()
  return ua.match(/iPhone\sOS/i) == 'iphone os'
}

export default {
  // 显示平台
  showPlatformEnum: showPlatformEnum,
  getShowPlatform: getShowPlatform,
  isShowInWechat: isShowInWechat,
  isShowInAndroid: isShowInAndroid,
  isShowInIOS: isShowInIOS,
  isShowInBrowser: isShowInBrowser,

  // 系统平台
  systemPlatformEnum: systemPlatformEnum,
  isAndroidSystem: isAndroidSystem,
  isIOSSystem: isIOSSystem
}
