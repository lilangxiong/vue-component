import LgForm from '../../form/index'
import LgFormItem from '../../formItem/index'
import LgButton from '../../button/index'
import LgInput from '../../input/index'

export default {
  title: 'lg-form',
  component: LgForm
}

export const Login = () => ({
  components: { LgForm, LgFormItem, LgButton, LgInput },
  template: `
    <lg-form class="form" ref="form" :model="user" :rules="rules">
      <lg-form-item label="用户名" prop="username">
        <!-- <lg-input v-model="user.username"></lg-input> -->
        <lg-input :value="user.username" @input="user.username=$event" placeholder="请输入您的用户名"></lg-input>
      </lg-form-item>
      <lg-form-item label="密码" prop="password">
        <lg-input type="password" placeholder="请输入密码" v-model="user.password"></lg-input>
      </lg-form-item>
      <lg-form-item>
        <lg-button type="primary" @click="login">登 录</lg-button>
      </lg-form-item>
    </lg-form>`,
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