<template>
  <div class="modal" :class="[{'show': onOff}, transition]" @click="close">
    <div class="modal-dialog" :class="{'modal-dialog-centered': isCentered}">
      <div class="modal-content" @click.stop="">
        <template v-if="isDefault">
          <div class="modal-header" v-html="title">
            <!--<slot name="header">{{title}}</slot>-->
          </div>
          <div class="modal-body" v-html="content">
            <!--<slot name="body">{{content}}</slot>-->
          </div>
          <div class="modal-footer" v-html="footer">
            <!--<slot name="footer">{{footer}}</slot>-->
          </div>
        </template>
        <div v-else>
          <slot></slot>
        </div>
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
      },
      show () {
        this.onOff = true
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
      isDefault () {
        return this.title || this.content || this.footer
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
