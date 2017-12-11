import Vue from 'vue'

let ConfirmConstructor = Vue.extend(require('./Alert.vue').default)

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
  instance.okCallback = function () {
    if (typeof options.okCallback === 'function') {
      options.okCallback()
    }
    instance.closeConfirm()
  }
  document.body.appendChild(instance.$el)
}

export default Confirm
