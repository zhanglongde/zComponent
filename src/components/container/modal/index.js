import Modal from './Modal.vue';

export default Modal;


// import Vue from 'vue'
//
// let ModalConstructor = Vue.extend(require('./Modal.vue').default)
//
// let instance = new ModalConstructor({}).$mount(document.createElement('div'))
//
// let Modal = (options = {}) => {
//   instance.title = options.title
//   instance.content = options.content
//   instance.footer = options.footer
//   instance.onOff = true
//   instance.value = true
//   // instance.isOKButton = typeof options.isOKButton === 'undefined' ? true : options.isOKButton
//   // instance.isCancelButton = typeof options.isCancelButton === 'undefined' ? true : options.isCancelButton
//   instance.okCallback = function () {
//     if (typeof options.okCallback === 'function') {
//       options.okCallback()
//     }
//     instance.close()
//   }
//   instance.cancelCallback = function () {
//     if (typeof options.cancelCallback === 'function') {
//       options.cancelCallback()
//     }
//     instance.close()
//   }
//   document.body.appendChild(instance.$el)
// }
//
// export default Modal
