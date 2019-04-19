<template> 
  <product-cate-detail :is-edit='false'></product-cate-detail>
</template>
<script>
  import ProductCateDetail from './components/ProductCateDetail'
  export default {
    name: 'addProduct',
    components: { ProductCateDetail }
  }
</script>
<style>
</style>


