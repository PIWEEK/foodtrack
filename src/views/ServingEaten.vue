<template>
  <div class="serving-eaten">
    <Header></Header>
    <p>te has comido una ración de  {{ name }} estupendérrimamente</p>
    <button type="button" v-on:click="toHome">OK - vamos a  Home</button>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'ServingEaten',
  data: {
    name: null,
  },
  created: {
    this.name = this.$store.state.servingEaten
  },
  methods: {
    toHome() {
      this.$router.push('/')
    }
  }
}
</script>
