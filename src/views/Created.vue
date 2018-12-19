<template>
  <div class="created">
    <Header></Header>
    <p>has creado tu tupper de puturrú de foie</p>
    <button type="button" v-on:click="toHome">OK - vamos a  Home</button>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  methods: {
    toHome() {
      this.$router.push('/')
    }
  }
}
</script>
