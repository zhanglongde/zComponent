<template>
  <div class="banner animate-init animate-banner">
    <div class="hd">{{title}}</div>
    <div class="bd">{{content}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Banner',
    data () {
      return {
      }
    },
    props: {
      title: String,
      content: String,
      callback: Function
    },
    mounted () {
      this.$el.addEventListener("webkitAnimationEnd", () => { //动画结束时事件
        if (typeof this.callback === 'function') {
          this.callback()
        }
//        this.$el.classList.remove('animate-banner')
      }, false)
    }
  }
</script>
