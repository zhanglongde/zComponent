import Vue from 'vue'
import {extend, isPlainObject} from 'lodash'
import ToastrManager from './component/ToastrManager.vue'

let newVm = null // 单例

const defaultOptions = {
  defaultPosition: 'toast-top-right',
  defaultType: 'normal',
  defaultTimeout: 10000
}

/**
 * 获得virtual dom 对象
 * @param options
 * @constructor
 */
function GetInstance (options) {
    options = extend(defaultOptions, [options || {}])

    const Comp = Vue.extend(ToastrManager)
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
 * 第1个参数可以是字符串或者配置对象
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

  let vm = newVm || GetInstance(defaultOptions)
  newVm = vm

  if (isPlainObject(type)) {
    if (type.hasOwnProperty('id') && type.type === 'close') {
      vm.close(type)
      return vm
    }
    vm.add(type)
    return vm
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
  return vm
}

export default Toastr
