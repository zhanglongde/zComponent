<template>
  <li class="list-group-item" :class="[{'active': index === currentIndex}]" @click="handleClick">
    <slot></slot>
  </li>
</template>

<script>
  export default {
    name: 'Option',
    data () {
      return {
      }
    },
    props: {
      item: Object,
      index: Number,
      currentIndex: Number,
      selectItem: Function
    },
    methods: {
      handleClick () {
        this.$emit('selected', this.item)
        this.selectItem(this.index)
      }
    }
  }
</script>
