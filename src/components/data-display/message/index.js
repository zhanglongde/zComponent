import Vue from 'vue'

let MsgConstructor = Vue.extend(require('./Message.vue').default)

let instance = new MsgConstructor({
}).$mount(document.createElement('div'))

MsgConstructor.prototype.closeMsg = function () {
  const el = instance.$el
  el.parentNode && el.parentNode.removeChild(el)
  typeof this.callback === 'function' && this.callback()
}

let Message = (options = {}) => {
  instance.title = options.title
  instance.content = options.content
  instance.timeout = options.timeout || 2000
  instance.callback = options.callback
  instance.isShow = true
  document.body.appendChild(instance.$el)

  const timer = setTimeout(() => {
    clearTimeout(timer)
    instance.isShow = false
    instance.closeMsg()
  }, instance.timeout + 100)
}

export default Message
