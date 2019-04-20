<template> 
  <!-- <home-advertise-detail :isEdit="true"></home-advertise-detail> -->
 <food-meun-detail  :isEdit="true"></food-meun-detail>
</template>
<script>
  import FoodMeunDetail from './components/storeListadd'
  export default {
    name: 'updateHomeAdvertise',
    components: { FoodMeunDetail }
  }
</script>
<style></style>


