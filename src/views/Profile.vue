<template>
  <div class="profile">
    <Header></Header>
    <h1 class="purple">Perfil</h1>
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
      <h1 class="gradient">Frigoríficos compartidos</h1>
      <div class="fridges">
        <div class="fridge" v-for="fridge in fridges" :key="fridge._id">
          <h3>{{fridge.name}}</h3>
          <div class="users">
            <div class="pax" v-for="user in fridge.users" :key="user._id">
              <IconUser className="icon-user"></IconUser>
              <span>{{user.name}}</span>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div class="btn-icon">
        <IconCheck className="icon-check"></IconCheck>
        <button class="btn-primary btn-green" type="submit">Guardar</button>
      </div>
      <a class="delete-link" href="#">
        <span>CERRAR SESIÓN</span>
      </a>
    </form>
  </div>
</template>

<script>
import Header from '@/components/Header'
import IconUser from '@/icons/icon-user.vue'
import IconCheck from '@/icons/icon-check.vue'

export default {
  name: 'Profile',
  components: { Header, IconUser, IconCheck },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.profile {
  h3 {
    font-weight: bold;
    margin-bottom: 1rem;
  }
}

.delete-link {
  align-items: center;
  display: flex;
  color: $red;
  font-size: 14px;
  justify-content: center;
  margin-top: 2rem;
  text-decoration: none;
  text-transform: uppercase;

  svg {
    fill: $red;
    margin-right: 1rem;
    width: 14px;
  }

  span {
    font-weight: bold;
  }
}
</style>
