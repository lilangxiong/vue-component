import LgInput from '../index'

export default {
  title: 'lg-input',
  component: LgInput
}

export const Text = () => ({
  components: { LgInput },
  template: '<lg-input type="text" placeholder="请输入用户名" @input="handleInput"></lg-input>',
  methods: {
    handleInput(value) {
      console.log('handleTextInput: ', value)
    }
  },
})

export const Password = () => ({
  components: { LgInput },
  template: '<lg-input type="password" placeholder="请输入密码" @input="handleInput"></lg-input>',
  methods: {
    handleInput(value) {
      console.log('handlePasswordInput: ', value)
    }
  },
})