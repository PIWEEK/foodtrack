<template>
  <div class="tupper-eaten">
    <Header></Header>
    <p>te has comido tu tupper super de {{ name }} bien</p>
    <button type="button" v-on:click="toHome">OK - vamos a  Home</button>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import IconTupperOk from '@/icons/tupper-ok.vue'

export default {
  name: 'TupperEaten',
  components: {
    Header,
    IconTupperOk
  },
  created() {
    document.body.classList.add('done')
  },
  destroyed() {
    document.body.classList.remove('done')
  },
  methods: {
    toHome() {
      this.$router.push('/')
    }
  }
}
</script>
