<template>
<div class="give-change">
  <h1 class="title">Passar Troco!</h1>
  <to-pays :numberOfToPayFields="numberOfToPayFields">
  </to-pays>
</div>
</template>

<script>
import ToPays from './ToPays.vue'

export default {
  name: 'GiveChange',
  components: {
    ToPays,
  },
  
  props: {
    numberOfToPayFields: Number,
  },
 
  data(){ return {
  }}
}
</script>

<style>
.currency-input{
 max-width: 12ch;
 margin: 1rem;
}

.give-change{
  max-width: 70rem;
  text-align: center;
}

</style>