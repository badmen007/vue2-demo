<template>
  <div id="app">
    <svg-icon icon-class="404" :size="40"></svg-icon>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <Dialog
      :show="isShow"
      cancelText="取消"
      confirmText="确认"
      :title="'标题'"
      :showCancel="true"
      @cancel="cancel"
      @confirm="confirm"
    >
     fdfsfsfdsf
    </Dialog>
    <button @click="isShow = !isShow" title="标题">show dialog</button>
    <button @click="showDialog">fdsfsffs</button>
    <router-view />
  </div>
</template>

<script>
import Dialog from './components/Dialog.vue'
export default {
  name: 'app',
  components: {
    Dialog
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    cancel (show) {
      console.log(show)
      this.isShow = show
    },
    confirm (show) {
      this.isShow = show
    },
    showDialog () {
      this.$dialog.show({
        title: '标题',
        content: '内容',
        showCancel: true,
        cancelText: '取消',
        confirmText: '确认',
        confirm: () => {
          console.log('confirm')
        },
        cancel: () => {
          console.log('cancel')
        }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
