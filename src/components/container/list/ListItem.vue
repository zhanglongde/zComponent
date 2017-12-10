<template>
  <li class="list-group-item" :class="[{'active': item.active}, {'disabled': item.disabled}]" @click="handleClick">
    <slot></slot>
  </li>
</template>

<script>
  export default {
    name: 'ListItem',
    data () {
      return {
      }
    },
    props: {
      item: Object,
      index: Number
    },
    methods: {
      handleClick () {
        this.$emit('selected', this.item)
      }
    }
  }
</script>
