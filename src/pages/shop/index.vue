<template>
<div>
  <router-link :to="{name: 'salerank'}">
    <h1>购物车demo</h1>
  </router-link>
  <hr>
  <h2>Products</h2>
  <product-list></product-list>
  <hr>
  <cart></cart>
</div>
</template>

<script>
import ProductList from './components/ProductList.vue'
import Cart from './components/Cart.vue'

export default {
  components: {
    ProductList,
    Cart
  }
}
</script>
