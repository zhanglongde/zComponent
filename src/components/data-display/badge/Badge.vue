<template>
  <div class="badge-box">
    <slot name="before"></slot>
    <slot name="icon"></slot>
    <slot></slot>
    <slot name="after"></slot>
  </div>
</template>

<script>
  export default {
    name: 'Badge',
    data () {
      return {
      }
    },
    props: {
    }
  }
</script>
