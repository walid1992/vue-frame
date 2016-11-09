<template>
<div>
  <h1>Shopping Cart Example</h1>
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
