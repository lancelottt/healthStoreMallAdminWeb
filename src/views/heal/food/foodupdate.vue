<template> 
  <!-- <home-advertise-detail :isEdit="true"></home-advertise-detail> -->
  <food-add-detail :isEdit="true"></food-add-detail>
</template>
<script>
  import FoodAddDetail from './components/foodadd'
  export default {
    name: 'updateHomeAdvertise',
    components: { FoodAddDetail }
  }
</script>
<style></style>


