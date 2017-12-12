import notification from './components/wrapper.vue'
import {extend} from 'lodash'
import Vue from 'vue'

function toastr (type, options) {
    const defaultOptions = {
        defaultPosition: 'toast-top-full-width',
        defaultType: 'success',
        defaultTimeout: 5000
    }

    options = extend(defaultOptions, options)

    const Comp = Vue.extend(notification)
    const vm = new Comp({
        data: {
            defaultPosition: options.defaultPosition,
            defaultType: options.defaultType,
            defaultTimeout: options.defaultTimeout
        }
    }).$mount()
    document.body.appendChild(vm.$el)

    console.log(type, options)
    vm[type](options.message, options.title)
}

export default {
  add (options) {
    return toastr('add', options);
  },
  info (options) {
    return toastr('info', options);
  },
  success (options) {
    return toastr('success', options);
  },
  warning (options) {
    return toastr('warning', options);
  },
  error (options) {
    return toastr('error', options);
  }
};
