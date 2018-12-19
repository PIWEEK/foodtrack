<template>
  <div class="home">
    <div class="login-logo">
      <MainLogoWhite className="main-logo"></MainLogoWhite>
    </div>
    <router-link to="login" class="btn-primary btn-white" tag="button">Iniciar sesión</router-link>
    <router-link to="register" class="btn-primary btn-line-transparent" tag="button">Registrarme</router-link>
  </div>
</template>

<script>
import MainLogoWhite from '@/icons/foodtrack-logo-white.vue'

export default {
  name: 'Home',
  components: { MainLogoWhite },
  mounted() {
    document.body.classList.add('home')
  },
  destroyed() {
    document.body.classList.remove('home')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login-logo {
  display: flex;
  justify-content: center;
  width: 100%;

  svg {
    width: 70%;
  }
}

</style>
