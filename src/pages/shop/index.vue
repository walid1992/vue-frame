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
  import productList from './components/product-list.vue'
  import cart from './components/cart.vue'
  import pageName from 'router/name'

  export default {
    data () {
      return {}
    },
    components: {
      productList,
      cart
    }
  }
</script>
