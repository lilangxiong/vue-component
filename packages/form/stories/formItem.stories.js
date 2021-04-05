import LlxForm from '../../form/index'
import LlxFormItem from '../../formItem/index'
import LlxButton from '../../button/index'
import LlxInput from '../../input/index'

export default {
  title: 'llx-form',
  component: LlxForm
}

export const Login = () => ({
  components: { LlxForm, LlxFormItem, LlxButton, LlxInput },
  template: `
    <llx-form class="form" ref="form" :model="user" :rules="rules">
      <llx-form-item label="用户名" prop="username">
        <llx-input :value="user.username" @input="user.username=$event" placeholder="请输入您的用户名"></llx-input>
      </llx-form-item>
      <llx-form-item label="密码" prop="password">
        <llx-input type="password" placeholder="请输入密码" v-model="user.password"></llx-input>
      </llx-form-item>
      <llx-form-item>
        <llx-button type="primary" @click="login">登 录</llx-button>
      </llx-form-item>
    </llx-form>`,
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login() {
      console.log('button')
      return false
      // this.$refs.form.validate(valid => {
      //   if (valid) {
      //     alert('验证成功')
      //   } else {
      //     alert('验证失败')
      //     return false
      //   }
      // })
    }
  }
})