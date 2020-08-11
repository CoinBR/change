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
    const bills = [2, 5, 10, 20, 50, 100, 200]
    const coins = [5, 10, 25, 50, 100]
    
    const billsData = bills.map( (v) => {
        return { value: v * 100, qty: 0 }
    })

    const coinsData = bills.map( (v) => {
        return { value: v, qty: 0 }
    })
}

export default {
    data(){ return {
        money: getResetMoneyData() 
    }}   
}
</script>