<template>
  <div>
    <button @click="handleClick">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'LlxButton',
  methods: {
    handleClick(evt) {
      evt.preventDefault()
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
