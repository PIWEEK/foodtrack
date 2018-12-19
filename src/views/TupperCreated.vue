<template>
  <div class="tupper-created">
    <Header></Header>
    <p>has creado tu tupper de {{ name }} de puturrú de foie</p>
    <router-link type="button" to="/dashboard">
      OK - vamos a  Home
    </router-link>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'TupperCreated',
  components: {
    Header
  },
  computed: {
    name() {
      return this.$store.state.tupperCreated
    }
  }
}
</script>
