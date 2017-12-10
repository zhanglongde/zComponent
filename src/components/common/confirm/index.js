import Vue from 'vue'

let ConfirmConstructor = Vue.extend(require('./Confirm.vue').default)

let instance = new ConfirmConstructor({
}).$mount(document.createElement('div'))

ConfirmConstructor.prototype.closeConfirm = function () {
  const el = instance.$el
  el.parentNode && el.parentNode.removeChild(el)
}

let Confirm = (options = {}) => {
  instance.title = options.title
  instance.content = options.content
  instance.isOKButton = typeof options.isOKButton === 'undefined' ? true : options.isOKButton
  instance.isCancelButton = typeof options.isCancelButton === 'undefined' ? true : options.isCancelButton
  instance.okCallback = function () {
    if (typeof options.okCallback === 'function') {
      options.okCallback()
    }
    instance.closeConfirm()
  }
  instance.cancelCallback = function () {
    if (typeof options.cancelCallback === 'function') {
      options.cancelCallback()
    }
    instance.closeConfirm()
  }
  document.body.appendChild(instance.$el)
}

export default Confirm
