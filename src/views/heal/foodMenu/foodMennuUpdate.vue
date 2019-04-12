<template> 
  <!-- <home-advertise-detail :isEdit="true"></home-advertise-detail> -->
 <food-meun-detail  :isEdit="true"></food-meun-detail>
</template>
<script>
  import FoodMeunDetail from './components/foodMenuadd'
  export default {
    name: 'updateHomeAdvertise',
    components: { FoodMeunDetail }
  }
</script>
<style></style>


