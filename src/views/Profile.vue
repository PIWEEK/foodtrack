<template>
  <div class="profile">
    <Header></Header>
    <h1>Perfil</h1>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label for="email">Usuario</label>
        <input type="email" id="email" name="email" placeholder="nuevo-email@test.com" required />
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" id="password" name="password" placeholder="Nueva contraseña" required />
      </div>
      <hr/>
      <h2>Frigoríficos compartidos</h2>
      <div class="fridges">
        <div class="fridge" v-for="fridge in fridges" :key="fridge._id">
          <h3>{{fridge.name}}</h3>
          <div class="users">
            <div class="user" v-for="user in fridge.users" :key="user._id">
              {{user.email}}
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <button class="btn-primary" type="submit">
        Guardar
      </button>
    </form>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Profile',
  components: {
    Header
  },
  data() {
    return {
      fridges: []
    }
  },
  methods: {
    async submit(e) {

    }
  }
}
</script>
