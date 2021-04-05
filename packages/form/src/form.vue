<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'lgForm',
  provide() { // 使用依赖注入的方式，而不使用$parent获取父组件的参数，是因为用户有可能在form组件下面自行增加了另一个嵌套组件，导致$parent获取到的不是form组件
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
