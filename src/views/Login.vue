<template>
  <div class="login">
    <div class="login-logo">
      <MainLogoColor className="main-logo"></MainLogoColor>
    </div>
    <h1 class="light">Inicio de sesión</h1>
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
        Login
      </button>
    </form>
  </div>
</template>

<script>
import MainLogoColor from '@/icons/foodtrack-logo-color.vue'
import api from '@/api'

export default {
  name: 'Login',
  components: {
    MainLogoColor
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
        const token = await api.auth.login(this.email, this.password)
        document.cookie = `token=${token}`
        this.$router.replace('/dashboard')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.login {
  form {
    animation: fadeInUp .6s ease;
  }
}

.login-logo {
  display: flex;
  justify-content: center;
  width: 100%;

  svg {
    width: 70%;
  }
}

h1.light {
  color: $dark-shade-50;
  font-size: 1.5rem;
  margin: 2rem 0 4rem 0;
  text-align: center;
  width: 100%;
}

</style>
