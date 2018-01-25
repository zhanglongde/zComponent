<template>
  <div :class="['toast', 'toast-' + data.type]" @click="clickToastr" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="toast-title" v-html="data.title"></div>
    <div class="toast-message" v-html="data.msg"></div>
  </div>
</template>
<script>
  import {Log} from '@/utils'
  export default {
    name: 'toastr',
    props: ['data'],
    created () {
      if (this.data.timeout !== undefined && this.data.timeout !== 0) {
        this.setTimeoutClose()
      }
    },
    methods: {
      onMouseEnter () {
        Log('onMouseEnter...')
        if (this.data.onMouseEnter !== undefined) {
          this.data.onMouseEnter()
        }
        if (!this.data.closeOnHover) {
          clearTimeout(this.data.timerId)
        }
      },
      onMouseLeave () {
        Log('onMouseLeave...')
        if (this.data.onMouseLeave !== undefined) {
          this.data.onMouseLeave()
        }
        if (!this.data.closeOnHover) {
          this.setTimeoutClose()
        }
      },
      // Set timeout to close
      setTimeoutClose () {
        this.data.timerId = setTimeout(() => {
          this.close()
        }, this.data.timeout)
      },
      clickToastr () {
        if (this.data.onClicked !== undefined) {
          this.data.onClicked()
        }
        this.clickClose()
      },
      clickClose () {
        if (this.data.clickClose !== undefined && this.data.clickClose === false) {
          return
        }
        this.close()
      },
      // Close Toast
      close () {
        // if toast not manuel closed.
        if (this.$parent !== null) {
          this.$parent.close(this.data)
        }
      }
    }
  }
</script>
