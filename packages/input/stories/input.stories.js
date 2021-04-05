import LlxInput from '../index'

export default {
  title: 'Llx-input',
  component: LlxInput
}

export const Text = () => ({
  components: { LlxInput },
  template: '<llx-input type="text" placeholder="请输入用户名" @input="handleInput"></llx-input>',
  methods: {
    handleInput(value) {
      console.log('handleTextInput: ', value)
    }
  },
})

export const Password = () => ({
  components: { LlxInput },
  template: '<llxinput type="password" placeholder="请输入密码" @input="handleInput"></llx-input>',
  methods: {
    handleInput(value) {
      console.log('handlePasswordInput: ', value)
    }
  },
})