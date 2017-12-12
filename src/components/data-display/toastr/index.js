import notification from './components/wrapper.vue'
import {extend} from 'lodash'
import Vue from 'vue'

function Instance (options) {
    const defaultOptions = {
        defaultPosition: 'toast-bottom-right',
        defaultType: 'success',
        defaultTimeout: 5000
    }

    options = extend(defaultOptions, [options || {}])

    const Comp = Vue.extend(notification)
    const vm = new Comp({
        data: {
            defaultPosition: options.defaultPosition,
            defaultType: options.defaultType,
            defaultTimeout: options.defaultTimeout
        }
    }).$mount()
    document.body.appendChild(vm.$el)
    return vm
}

let Toastr = function (type, message, title) {
  if (message === undefined) {
    console.warn('Vue-Toastr: Warning you must specify a message')
    return
  }
  let vm = Instance()
  switch (type) {
    case 'success':
      vm.success(message, title)
      break
    case 'error':
      vm.error(message, title)
      break
    case 'warning':
      vm.warning(message, title)
      break
    case 'info':
      vm.info(message, title)
      break
    case 'add':
      vm.Add(message)
      break
  }
}

export default Toastr
