<template>
  <div :class="['toast', 'toast-' + item.type]" @click="clickToastr" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="toast-title" v-html="item.title"></div>
    <div class="toast-message" v-html="item.msg"></div>
  </div>
</template>
<script>
  import {Log} from '@/utils'
  export default {
    name: 'toastr',
    data () {
      return {
        timerId: null,
        itemData: this.item
      }
    },
    props: {
        item: {
          type: Object
        }
    },
    mounted () {
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
          clearTimeout(this.timerId)
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
        Log('%c-----------------------------------------------------------', 'background-color:#58a;color:#fff;font-size:30px;')
        this.timerId = setTimeout(() => {
          this.closeItem()
        }, this.item.timeout)
        Log(this.item.id, this.timerId)
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
        this.closeItem()
      },
      // Close Toast
      closeItem () {
        // if toast not manuel closed.
        if (this.$parent !== null) {
          console.log(this.itemData)
          this.$parent.close(this.itemData)
        }
      }
    }
  }
</script>
