<template>
  <div>
    <input v-bind="$attrs" :type="type" :value="value" @input="handleInput">
  </div>
</template>

<script>
export default {
  name: 'lgInput',
  inheritAttrs: false, // 不让div继承属性，通过v-bind="$attrs"实现指定继承
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    handleInput(evt) {
      this.$emit('input', evt.target.value)

      // 不推荐使用依赖注入，因为input组件可以被单独使用，此时是没有form-item组件的
      const findParent = (parent) => {
        while(parent) {
          if (parent.$options.name === 'lgFormItem') {
            break
          } else {
            parent = parent.$parent
          }
        }
        return parent
      }

      const parent = findParent(this.$parent)
      if (parent) parent.$emit('validate')
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
