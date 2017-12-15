<template>
  <div class="modal" :class="[{'show': onOff}, transition]" @click="close">
    <div class="modal-dialog" :class="{'modal-dialog-centered': isCentered}">
      <div class="modal-content" @click.stop="">
        <template>
          <div class="modal-header">
            <slot name="header">{{title}}</slot>
          </div>
          <div class="modal-body" v-if="isBody">
            <slot name="body"></slot>
          </div>
          <div class="modal-footer" v-if="isFooter">
            <slot name="footer"></slot>
          </div>
        </template>
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
      },
      title: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      footer: {
        type: String,
        default: ''
      }
    },
    methods: {
      close () {
        this.onOff = false
        this.$emit('input', this.onOff)
      }
    },
    computed: {
      isHeader () {
        return this.$slots.header !== undefined
      },
      isBody () {
        return this.$slots.body !== undefined
      },
      isFooter () {
        return this.$slots.footer !== undefined
      },
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
