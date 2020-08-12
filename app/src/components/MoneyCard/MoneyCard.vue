<template>
<div class="card money-card">
  <div class="card-image">
    <figure class="image">
      <img :src="require(`./assets/imgs/money/${value}.jpg`)" 
           :alt="value"
           class="money-card-img"
           >
    </figure>
  </div>
  <div class="card-content">
    <div class="content">
            <b-numberinput
                v-model="qty"
                :type="status"
                min="0"
            />
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue'

import 'buefy/dist/buefy.css'
import { Field, Numberinput } from 'buefy'

import './assets/icons/style.css'

Vue.use(Field)
Vue.use(Numberinput)


function getResetData() {

}

export default {
    props: {
      value: Number
    },
    
    data(){ return {
      qty: 0
    }},

    computed: {
      status(){
        return this.qty > 0 ? 'is-success' : 'is-primary'
      }
    }
}
</script>

<style scoped>

.money-card{
  width: 12rem;
  padding: 0.7rem 0px 0px 0px;
}

.money-card-img{
  object-fit: contain;
  height: 5rem;
}

</style>