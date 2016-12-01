/**
 * @author walid
 * @description url params
 * @date 2016/11/30
 */

export default {
  getParams: (name, url = window.location.href) => {
    let results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url)
    if (!results) {
      return ''
    }
    return results[1] || ''
  }
}
