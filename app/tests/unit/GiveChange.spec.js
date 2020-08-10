import { mount } from '@vue/test-utils'
import GiveChange from '@/components/GiveChange.vue'



describe('GiveChange', () => {
  it('has data.toPays set to an array of objs with indexes and values the costumer has to pay', () => {
    const wrapper = mount(GiveChange, {
      propsData: { numberOfToPayFields: 4 }
    })

    expect(wrapper.vm.toPays).toEqual([
      { i: 1, value: 0 },
      { i: 2, value: 0 },
      { i: 3, value: 0 },
      { i: 4, value: 0 }
    ])

    const wrapper7 = mount(GiveChange, {
      propsData: { numberOfToPayFields: 7 }
    })

    expect(wrapper7.vm.toPays).toEqual([
      { i: 1, value: 0 },
      { i: 2, value: 0 },
      { i: 3, value: 0 },
      { i: 4, value: 0 },
      { i: 5, value: 0 },
      { i: 6, value: 0 },
      { i: 7, value: 0 },
    ])
  })
})
