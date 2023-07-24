
import MessageBox from '@/components/MessageBox'

const showMessage = {
  install: function (Vue) {
    const MessageBoxConstructor = Vue.extend(MessageBox)

    const instance = new MessageBoxConstructor()

    instance.$mount(document.createElement('div'))

    document.body.appendChild(instance.$el)

    Vue.prototype.$alert = {
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

export default showMessage
