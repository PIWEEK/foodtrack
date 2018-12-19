<template>
  <div class="home">
    <router-link to="Login" class="btn-primary btn-white" tag="button">Iniciar sesión</router-link>
    <router-link to="Register" class="btn-primary btn-line-transparent" tag="button">Registrarme</router-link>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  created() {
    document.body.classList.add('home')
  },
  destroyed() {
    document.body.classList.remove('home')
  }
}
</script>
