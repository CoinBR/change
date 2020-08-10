import { mount } from '@vue/test-utils'
import ToPays from '@/components/ToPays.vue'



describe('ToPays', () => {
  it('has data.toPays set to an array of objs with indexes and values the costumer has to pay', () => {
    const wrapper = mount(ToPays, {
      propsData: { numberOfToPayFields: 4 }
    })

    expect(wrapper.vm.fields).toEqual([
      { i: 1, value: 0 },
      { i: 2, value: 0 },
      { i: 3, value: 0 },
      { i: 4, value: 0 }
    ])

    const wrapper7 = mount(ToPays, {
      propsData: { numberOfToPayFields: 7 }
    })

    expect(wrapper7.vm.fields).toEqual([
      { i: 1, value: 0 },
      { i: 2, value: 0 },
      { i: 3, value: 0 },
      { i: 4, value: 0 },
      { i: 5, value: 0 },
      { i: 6, value: 0 },
      { i: 7, value: 0 }
    ])
  })
/*
  it('formats the fields with currency', () => {
    const wrapper = mount(ToPays, {
      propsData: { numberOfToPayFields: 2 }
    })

    wrapper.setData({
      fields: [
        { i: 1, value: 1.11 },
        { i: 2, value: 2500.22 }
      ]
    })

    expect(wrapper.text())
      .toContain('1.11')
      .toContain('2500.22')




  })
  */
})
