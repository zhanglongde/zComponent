<template>
  <div v-if="isManager" class="toastr-container-wrapper">
    <div v-for="position in positions" v-if="isPosition(position)" :class="['toast-container', position]">
      <template v-for="(optionsObject, index) in list">
        <!--<div style="color:#000;">{{optionsObject}}{{index}}</div>-->
        <Toastr :item="optionsObject" :key="index" v-if="optionsObject.position === position"></Toastr>
      </template>
    </div>
  </div>
</template>
<style lang="scss">
  @import "toastr.scss";
</style>
<script>
  import Toastr from './Toastr.vue'
  export default {
    name: 'ToastrWrapper',
    components: {
      Toastr
    },
    data () {
      return {
        positions: ['toast-top-right', 'toast-bottom-right', 'toast-bottom-left', 'toast-top-left', 'toast-top-full-width', 'toast-bottom-full-width', 'toast-top-auto-width', 'toast-bottom-auto-width', 'toast-top-center', 'toast-bottom-center'],
        list: []
      }
    },
    computed: {
      isManager () {
        return this.list.length > 0
      }
    },
    methods: {
      isPosition (position) {
        return this.list.some(x => x.position === position)
      },
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
          if (data.id === undefined) {
//            data.id = new Date().getTime()
          }
          return data
        }
        // if String
        return {
          msg: data.toString(),
//          id: new Date().getTime(),
          position: this.defaultPosition,
          type: this.defaultType,
          timeout: this.defaultTimeout,
          closeOnHover: this.defaultCloseOnHover
        }
      },
      removeItemById (id) {
        let index = this.list.findIndex(x => x.id === id)
        console.log(index, this.list.map(x => x.id), id)
        if (index >= 0) {
          this.list.splice(index, 1)
          console.log(this.list.map(x => x.id))
        }
      },
//      外部调用
      close (data) {
        console.log('%c-----------------------------------------------------------', 'background-color:#85a;color:#fff;font-size:30px;')
        console.log(data.id)
        if (data.onClosed !== undefined) {
          data.onClosed()
        }
        this.removeItemById(data.id)
      },
      addToast (data) {
        console.log(data)
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
