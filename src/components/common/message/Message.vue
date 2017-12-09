<template>
  <div class='y-mask-white-dialog' v-show='show'>
    <div class='y-message  animated zoomIn' >
      <span v-html="msg"></span>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .y-mask-white-dialog {
    background-color: rgba(0, 0, 0, .4);
    position: fixed;
    z-index: 999;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .y-message {
    min-width: 2.9rem;
    max-width: 5.5rem;
    width:100%;
    padding: 0.32rem;
    font-size: 14px;
    text-align: center;
    border-radius: 4px;
    background :rgba(0,0,0,0.8);
    color: #fff;
    animation: zoomIn .15s ease forwards;
  }
</style>
<script>
  export default {
    name: 'Message',
    props: {
      msg: String,
      timeout: Number,
      callback: Function,
      icon: String,
    },
    data() {
      return {
        show: true,
      };
    }
  }
</script>
