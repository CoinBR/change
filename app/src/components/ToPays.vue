<template>
<div>
  <div v-for="toPay in fields" :key="toPay.i">
    <label>Valor à Pagar:
      <input type="number" v-model="toPay.value">
    </label>
  </div>
</div>
</template>

<script>

function getResetToPays(numOfFields){
  return [...Array(numOfFields).keys()].map( (i) => {
    return { 
      i: i + 1,
      value: 0
    }
  })
}


export default {
  name: 'ToPays',
  
  props: {
    numberOfToPayFields: Number,
  },
 
  data(){ return {
    fields: getResetToPays(this.numberOfToPayFields),
  }}
}
</script>