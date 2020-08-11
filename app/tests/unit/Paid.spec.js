import { shallowMount } from '@vue/test-utils'
import Paid from '@/components/Paid.vue'



describe('Paid', () => {
  it('Starts with money data(), so we can v-model it', () => {
    const wrapper = shallowMount(Paid)
    const coins = wrapper.vm.money.coins
    const bills = wrapper.vm.money.bills

    expect(coins).toEqual([
      { value: 5, qty: 0 },
      { value: 10, qty: 0 },
      { value: 25, qty: 0 },
      { value: 50, qty: 0 },
      { value: 100, qty: 0 }
    ])

    expect(bills).toEqual([
      { value: 200, qty: 0 },
      { value: 500, qty: 0 },
      { value: 1000, qty: 0 },
      { value: 2000, qty: 0 },
      { value: 5000, qty: 0 },
      { value: 10000, qty: 0 },
      { value: 20000, qty: 0 }
    ])
  })
})
