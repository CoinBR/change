<template>
<b-message title="Dinheiro que o Cliente te entregou"
           :closable="false"
           class="paid">
    <div v-for="moneyType in ['bills', 'coins']"
     class="money-group">
        <money-card v-for="mn in money[moneyType]" 
                    :key="mn.value"
                    :value="mn.value" />
    </div>
</b-message>
</template>

<script>
import Vue from 'vue'
import 'buefy/dist/buefy.css'
import { Message } from 'buefy'

import MoneyCard from './MoneyCard/MoneyCard.vue'

Vue.use(Message)

function getResetMoneyData() {
    const billsValues = [2, 5, 10, 20, 50, 100, 200]
    const coinsValues = [5, 10, 25, 50, 100].reverse()
    
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
    }},
    computed: {
        allMoney(){
            return this.money.coins.concat(this.money.bills)
        }
    },
    components: { MoneyCard }
}
</script>
<style scoped>

.paid{
    margin-left: auto;
    margin-right: auto;
    max-width: fit-content;
}

.money-group{
    display: flex;
    margin-top: 1rem;
}

.money-group > * + *{
    margin-left: 1rem;
}

</style>