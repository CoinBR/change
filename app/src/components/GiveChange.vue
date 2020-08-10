<template>
<div>
  <h1>Passar Troco!</h1>
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
  name: 'GiveChange',
  
  props: {
    numberOfToPayFields: Number,
  },
 
  data(){ return {
    toPays: getResetToPays(this.numberOfToPayFields),
  }}
}
</script>