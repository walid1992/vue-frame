/**
 * @author walid
 * @description 根 action
 */

import Vue from 'vue'
import * as types from './mutation-types'

/**
 * 加入购物车
 * @param {[type]} commit  [description]
 * @param {[type]} product [description]
 */
export const addToCart = ({commit}, product) => {
  if (product.inventory > 0) {
    commit(types.ADD_TO_CART, {
      id: product.id
    })
  }
}

/**
 * 检查购物车参数
 * @param  {[type]} commit   [description]
 * @param  {[type]} state    [description]
 * @param  {[type]} products [description]
 * @return {[type]}          [description]
 */
export const checkout = ({commit, state}, products) => {
  const savedCartItems = [...state.cart.added]
  commit(types.CHECKOUT_REQUEST)
  Vue.api.shop.buyProducts(
    products,
    () => commit(types.CHECKOUT_SUCCESS),
    () => commit(types.CHECKOUT_FAILURE, {savedCartItems})
  )
}

/**
 * 获取所有产品
 * @param  {[type]} commit [description]
 * @return {[type]}        [description]
 */
export const getAllProducts = ({commit}) => {
  Vue.api.shop.getProducts(products => {
    commit(types.RECEIVE_PRODUCTS, {products})
  })
}
