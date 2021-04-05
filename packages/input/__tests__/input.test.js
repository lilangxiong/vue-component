import input from '../src/input.vue'
import { mount } from '@vue/test-utils'

describe('llx-input', () => {
  test('input-text', () => {
    const wrapper = mount(input)
    expect(wrapper.html()).toContain('input type="text"')
  })

  test('input-text', () => {
    const wrapper = mount(input, {
      propsData: {
        type: 'password',
        value: 'admin'
      }
    })
    expect(wrapper.html()).toContain('input type="password"')
  })

  test('input-text', () => {
    const wrapper = mount(input, {
      propsData: {
        type: 'password',
        value: 'admin'
      }
    })
    expect(wrapper.props('value')).toBe('admin')
  })

  test('input-sanpshot', () => {
    const wrapper = mount(input, {
      propsData: {
        type: 'password',
        value: ''
      }
    })
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})