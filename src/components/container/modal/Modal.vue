<template>
  <div class="modal" :class="[{'show': onOff}, transition]" @click="close">
    <div class="modal-dialog" :class="{'modal-dialog-centered': isCentered}">
      <div class="modal-content" @click.stop="">
        <slot></slot>
      </div>
    </div>
    <div class="modal-backdrop"></div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    data () {
      return {
        onOff: this.value
      }
    },
    props: {
      value: Boolean,
      isCentered: {
        type: Boolean,
        default: false
      },
      transition: {
        type: String,
        default: 'fade'
      }
    },
    methods: {
      close () {
        this.onOff = false
        this.$emit('input', this.onOff)
      }
    },
    watch: {
      value (newValue){
        this.onOff = newValue
        if (newValue) {
//          document.body.classList.add('modal-open')
        } else {
//          document.body.classList.remove('modal-open')
        }
      }
    }
  }
</script>
