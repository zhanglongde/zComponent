<template>
  <div class="overlay message">
    <div class="popup">
      <div class="hd">{{title}}</div>
      <div class="bd">{{content}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Message',
    data () {
      return {
      }
    },
    props: {
      title: String,
      content: String,
      timeout: Number,
      callback: Function
    }
  }
</script>
