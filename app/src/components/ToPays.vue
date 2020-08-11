<template>
<b-message title="Valor(es) que o Cliente vai pagar"
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
import Vue from 'vue'
import 'buefy/dist/buefy.css'
import { Message } from 'buefy'
import VueCurrencyInput from 'vue-currency-input'

const CurrencyInputPluginOptions = {
  globalOptions: {
    currency: 'BRL',
    locale: 'pt-BR',
    'auto-decimal-mode': false,
    'distraction-free': true,
    'value-as-integer': true,
    'allow-negative': false
  }
}
Vue.use(VueCurrencyInput, CurrencyInputPluginOptions)
Vue.use(Message)

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
