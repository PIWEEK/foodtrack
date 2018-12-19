<template>
  <div class="register">
    <div class="login-logo">
      <MainLogoColor className="main-logo"></MainLogoColor>
    </div>
    <h1 class="light">Registro</h1>
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
      <button class="btn-primary btn-line" type="submit">
        Registrarse
      </button>
    </form>
  </div>
</template>

<script>
import MainLogoColor from '@/icons/foodtrack-logo-color.vue'
import api from '@/api'

export default {
  name: 'Register',
  components: {
    MainLogoColor
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
        this.$router.push('/home')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.register {
  form {
    animation: fadeInUp .6s ease;
  }

  .btn-line {
    margin-top: 3rem;
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
