<template>
  <div class="tupper-eaten">
    <Header></Header>
    <p>te has comido tu tupper super de {{ name }} bien</p>
    <button type="button" v-on:click="toHome">OK - vamos a  Home</button>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'TupperEaten',
  data: {
    name: null,
  },
  created: {
    this.name = this.$store.state.tupperEaten
  },
  components: {
      Header
  },
  methods: {
    toHome() {
      this.$router.push('/')
    }
  }
}
</script>
