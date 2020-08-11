<template>
<div>
  <currency-input v-for="toPay in fields"
                 :key="toPay.i"
                 v-model="toPay.value" />
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
    tst: 1,
    fields: getResetToPays(this.numberOfToPayFields),
  }},
}
</script>