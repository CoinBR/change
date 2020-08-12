<template>
<div class="give-change">
  <h1 class="title">Passar Troco!</h1>
  <to-pays :numberOfToPayFields="numberOfToPayFields" />
  <paid />
</div>
</template>

<script>
import ToPays from './ToPays.vue'
import Paid from './Paid.vue'


export default {
  name: 'GiveChange',
  components: {
    ToPays,
    Paid,
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
  width: 100%;
  margin: auto;
  text-align: center;
}

.give-change > * + *  {
  margin-top: 3rem;
}


</style>