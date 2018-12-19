<template>
  <div class="register">
    <Header></Header>
    <h1 class="purple">Registro</h1>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text" id="name" name="name" value="" minlength="1" required v-model="name">
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="email" id="email" name="email" value="" required v-model="email">
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" id="password" name="password" value="" minlength="8" required v-model="password">
      </div>
      <button class="btn-primary" type="submit">
        Registrarse
      </button>
    </form>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import api from '@/api'

export default {
  name: 'Register',
  components: {
    Header
  },
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async submit(e) {
      try {
        const response = await api.users.register(this.name, this.email, this.password)
        console.log(response)
        this.$router.push('Home')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
