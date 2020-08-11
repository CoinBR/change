<template>
<b-message title="Dinheiro que o Cliente te entregou"
           :closable="false"
           class="paid">
    testando
</b-message>
</template>

<script>
import Vue from 'vue'
import 'buefy/dist/buefy.css'
import { Message } from 'buefy'

Vue.use(Message)

function getResetMoneyData() {
    const billsValues = [2, 5, 10, 20, 50, 100, 200]
    const coinsValues= [5, 10, 25, 50, 100]
    
    const bills = billsValues.map( (v) => {
        return { value: v * 100, qty: 0 }
    })

    const coins = coinsValues.map( (v) => {
        return { value: v, qty: 0 }
    })

    return {
        bills,
        coins
    } 
}

export default {
    data(){ return {
        money: getResetMoneyData() 
    }}   
}
</script>