<template>
  <div>
    <router-link :to="{name: this.$routerName.SALERANK}">
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
  import pageName from 'router/name'

  export default {
    data () {
      return {}
    },
    components: {
      ProductList,
      Cart
    }
  }
</script>
