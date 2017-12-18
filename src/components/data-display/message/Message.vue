<template>
  <div class="overlay message">
    <transition name="bounce">
      <div v-if="isShow" class="popup">
        <div class="hd">{{title}}</div>
        <div class="bd">{{content}}</div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Message',
    data () {
      return {
        isShow: false
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
