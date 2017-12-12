import notification from './components/wrapper.vue'
import {extend} from 'lodash'
import Vue from 'vue'

let newVm = null // 单例

/**
 * 获得virtual dom 对象
 * @param options
 * @constructor
 */
function GetInstance (options) {
    const defaultOptions = {
        defaultPosition: 'toast-bottom-right',
        defaultType: 'success',
        defaultTimeout: 10000
    }

    options = extend(defaultOptions, [options || {}])

    const Comp = Vue.extend(notification)
    const newInstance = new Comp({
      data: {
        defaultPosition: options.defaultPosition,
        defaultType: options.defaultType,
        defaultTimeout: options.defaultTimeout
      }
    })
    const vm = newInstance.$mount()
    document.body.appendChild(vm.$el)
    return vm
}

/**
 * 第二个参数可以是字符串或者配置对象
 * @param type
 * @param message
 * @param title
 * @constructor
 */
let Toastr = function (type, message, title) {
  if (message === undefined) {
    console.warn('Vue-Toastr: Warning you must specify a message')
    return
  }

  let vm = newVm || GetInstance({
    defaultPosition: 'toast-bottom-left',
    defaultType: 'info',
    defaultTimeout: 1000
  })
  newVm = vm

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
