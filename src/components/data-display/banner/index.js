import Vue from 'vue'

let BannerConstructor = Vue.extend(require('./Banner.vue').default)

let instance = new BannerConstructor({
}).$mount(document.createElement('div'))

BannerConstructor.prototype.closeMsg = function () {
  const el = instance.$el
  el.parentNode && el.parentNode.removeChild(el)
  typeof this.callback === 'function' && this.callback()
}

let Banner = (options = {}) => {
  instance.title = options.title
  instance.content = options.content
  instance.callback = options.callback
  document.body.appendChild(instance.$el)
}

export default Banner
