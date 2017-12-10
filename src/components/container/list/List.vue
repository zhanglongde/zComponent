<template>
  <ul class="list-group">
    <slot name="item" v-for="(item, index) in items" :item="item" :index="index"></slot>
  </ul>
</template>

<script>
  export default {
    name: 'List',
    data () {
      return {
      }
    },
    props: {
      items: Array
    }
  }
</script>
