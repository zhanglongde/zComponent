<template>
  <div :class="['toast', 'toast-' + item.type]" @click="clickToastr" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    {{item.id}}<div class="toast-title" v-html="item.title"></div>
    <div class="toast-message" v-html="item.msg"></div>
  </div>
</template>
<script>
  import {Log} from '@/utils'
  export default {
    name: 'toastr',
    props: ['item'],
    created () {
      if (this.item.timeout !== undefined && this.item.timeout !== 0) {
        this.setTimeoutClose()
      }
    },
    methods: {
      onMouseEnter () {
        Log('onMouseEnter...')
        if (this.item.onMouseEnter !== undefined) {
          this.item.onMouseEnter()
        }
        if (!this.item.closeOnHover) {
          clearTimeout(this.item.timerId)
        }
      },
      onMouseLeave () {
        Log('onMouseLeave...')
        if (this.item.onMouseLeave !== undefined) {
          this.item.onMouseLeave()
        }
        if (!this.item.closeOnHover) {
          this.setTimeoutClose()
        }
      },
      // Set timeout to close
      setTimeoutClose () {
        this.item.timerId = setTimeout(() => {
          console.log('%c-----------------------------------------------------------', 'background-color:#58a;color:#fff;font-size:30px;')
          console.log(this.item)
          this.close()
        }, this.item.timeout)
      },
      clickToastr () {
        if (this.item.onClicked !== undefined) {
          this.item.onClicked()
        }
        this.clickClose()
      },
      clickClose () {
        if (this.item.clickClose !== undefined && this.item.clickClose === false) {
          return
        }
        this.close()
      },
      // Close Toast
      close () {
        // if toast not manuel closed.
        if (this.$parent !== null) {
          this.$parent.close(this.item)
        }
      }
    }
  }
</script>
