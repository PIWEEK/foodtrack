<template>
  <div class="register">
    <Header></Header>
    <h1 class="purple">Inicio de sesión</h1>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="email" id="email" name="email" value="" required v-model="email">
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" id="password" name="password" value="" minlength="8" required v-model="password">
      </div>
      <button class="btn-primary" type="submit">
        Iniciar sesión
      </button>
    </form>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import api from '@/api'

export default {
  name: 'Login',
  components: {
    Header
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async submit(e) {
      try {
        const response = await api.auth.login(this.email, this.password)
        sessionStorage.setItem('token', response)
        this.$router.push('Home')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
