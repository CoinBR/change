<template>
<b-message title="Conta do Cliente"
           :closable="false"
           class="to-pays">
    <currency-input v-for="toPay in fields"
            :key="toPay.i"
            v-model="toPay.value" 
            class="input is-medium currency-input"
            />
</b-message>
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

<style scoped>
.to-pays{
  margin: auto;
  max-width: 45rem;
  text-align: center;
}
</style>
