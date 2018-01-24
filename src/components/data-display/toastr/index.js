import notification from './component/wrapper.vue'
import {extend, isPlainObject} from 'lodash'
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
        defaultType: 'normal',
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
  if (type === undefined) {
    console.warn('toastr: Warning you must specify a type or object')
    return
  }

  let vm = newVm || GetInstance({
    defaultPosition: 'toast-bottom-left',
    defaultType: 'normal',
    defaultTimeout: 1000
  })
  newVm = vm

  if (isPlainObject(type)) {
    if (type.hasOwnProperty('id') && type.type === 'close') {
      return vm.close(type)
    }
    return vm.add(type)
  }

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
    case 'close':
      vm.close(message, title)
      break
    default:
      vm.Add(type)
      break
  }
}

export default Toastr
