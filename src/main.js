import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Dialog from './components/dialog.js'
import '@/icons' // icon
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Dialog)
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
