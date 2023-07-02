<template>
  <div class="home">
    Home
    <button @click="goToLogin">go to Login view</button>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  },
  methods: {
    goToLogin () {
      const routeUrl = this.$router.resolve({
        path: '/loginView'
      })
      window.open(routeUrl.href, '_blank')
      localStorage.setItem('init', true)
    }
  }
}
</script>
