import DialogComponent from './Dialog.vue'

const Dialog = {
  install: function (Vue) {
    const DialogConstructor = Vue.extend(DialogComponent)

    const instance = new DialogConstructor()

    instance.$mount(document.createElement('div'))

    document.body.appendChild(instance.$el)

    Vue.prototype.$dialog = {
      show: ({ title, content, cancel, confirm, showCancel }) => {
        instance.showSelf = true
        instance.cancel = () => {
          instance.showSelf = false
          cancel && cancel()
        }
        instance.confirm = () => {
          instance.showSelf = false
          confirm && confirm()
        }
        instance.title = title
        instance.content = content
        instance.showCancel = showCancel
      }
    }
  }
}

export default Dialog
