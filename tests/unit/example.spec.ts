import { mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  it('renders home vue', () => {
    const wrapper = mount(Home)
    expect(wrapper.text().includes('UNDER CONSTRUCTION')).toBe(true);
  })
})
