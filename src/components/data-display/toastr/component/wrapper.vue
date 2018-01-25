<template>
  <div>
    <div :class="['toast-container', position]" v-for="position in positions">
      <template v-for="(optionsArray, index) in list">
        <Toastr :data="optionsArray" :key="index" v-if="optionsArray.position === position"></Toastr>
      </template>
    </div>
  </div>
</template>
<style lang="scss">
  @import "toastr.scss";
</style>
<script>
  import Toastr from './toastr.vue'
  export default {
    name: 'ToastrWrapper',
    components: {
      Toastr
    },
    data () {
      return {
        positions: ['toast-top-right', 'toast-bottom-right', 'toast-bottom-left', 'toast-top-left', 'toast-top-full-width', 'toast-bottom-full-width', 'toast-top-center', 'toast-bottom-center'],
        list: []
      }
    },
    methods: {
      processObjectData (data) {
        // if Object
        if (typeof data === 'object' && data.msg !== undefined) {
          if (data.position === undefined) {
            data.position = this.defaultPosition
          }
          if (data.type === undefined) {
            data.type = this.defaultType
          }
          if (data.timeout === undefined) {
            data.timeout = this.defaultTimeout
          }
          if (data.closeOnHover === undefined) {
            data.closeOnHover = this.defaultCloseOnHover
          }
          return data
        }
        // if String
        return {
          msg: data.toString(),
          position: this.defaultPosition,
          type: this.defaultType,
          timeout: this.defaultTimeout,
          closeOnHover: this.defaultCloseOnHover
        }
      },
      removeToast (data) {
        if (data.onClosed !== undefined) {
          data.onClosed()
        }
        let id = data.id
        let index = this.list.findIndex(x => x.id === id)
        if (index >= 0) {
          this.list.splice(index, 1)
        }
      },
      close (data) {
        this.removeToast(data)
      },
      addToast (data) {
        this.list.push(data)
        if (typeof data.onCreated !== 'undefined') {
          this.$nextTick(() => {
            data.onCreated()
          })
        }
      },
      addData (data) {
        if (typeof data !== 'object') {
          return
        }
        this.addToast(data)
      },
      add (data) {
        return this.addData(this.processObjectData(data))
      },
      error (msg, title) {
        let data = this.processObjectData(msg)
        data['type'] = 'error'
        if (title !== undefined) {
          data['title'] = title
        }
        return this.addData(data)
      },
      success (msg, title) {
        let data = this.processObjectData(msg)
        data['type'] = 'success'
        if (title !== undefined) {
          data['title'] = title
        }
        return this.addData(data)
      },
      warning (msg, title) {
        let data = this.processObjectData(msg)
        data['type'] = 'warning'
        if (title !== undefined) {
          data['title'] = title
        }
        return this.addData(data)
      },
      info (msg, title) {
        let data = this.processObjectData(msg)
        data['type'] = 'info'
        if (title !== undefined) {
          data['title'] = title
        }
        return this.addData(data)
      },
      normal (msg, title) {
        let data = this.processObjectData(msg)
        data['type'] = 'normal'
        if (title !== undefined) {
          data['title'] = title
        }
        return this.addData(data)
      }
    }
  }
</script>
