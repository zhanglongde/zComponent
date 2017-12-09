<template>
  <button class="btn-x btn-x-default btn-x-type1" @click="handleClick">
    <slot></slot>
  </button>
</template>
<style scoped lang="sass">
  @import "../../../assets/component/button.scss";
</style>
<script>
  export default {
    name: 'zButton',
    data () {
      return {
      }
    },
    props: {
    },
    methods: {
      handleClick () {
        this.$emit('click')
      }
    }
  }
</script>
