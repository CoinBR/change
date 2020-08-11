import Vue from 'vue'
import VueCurrencyInput from 'vue-currency-input'

import App from './App.vue'

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

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
