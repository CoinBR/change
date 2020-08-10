<template>
<div>
  <h1>Passar Troco!</h1>
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