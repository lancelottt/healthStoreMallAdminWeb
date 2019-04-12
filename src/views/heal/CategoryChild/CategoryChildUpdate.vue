<template> 
  <!-- <home-advertise-detail :isEdit="true"></home-advertise-detail> -->
 <health-grogram-add  :isEdit="true"></health-grogram-add>
</template>
<script>
  import HealthGrogramAdd from './components/CategoryChildAdd'
  export default {
    name: 'updateHomeAdvertise',
    components: { HealthGrogramAdd }
  }
</script>
<style></style>


