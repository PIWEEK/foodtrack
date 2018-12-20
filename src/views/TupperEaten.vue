<template>
  <div class="tupper-eaten">
    <Header></Header>
    <p>Te has comido tu tupper de</p>
    <IconTupperOk className="white"></IconTupperOk>
    <h1>{{ name }}</h1>
    <router-link class="btn-primary btn-line-transparent" tag="button" to="/dashboard">
      ¡OK!
    </router-link>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import IconTupperOk from '@/icons/tupper-ok.vue'
import IconClose from '@/icons/icon-close.vue'
import IconBell from '@/icons/icon-bell.vue'
import tupper50 from '@/icons/tupper-50'

export default {
  name: 'TupperEaten',
  components: {
    Header,
    IconTupperOk,
    IconClose,
    IconBell,
    tupper50
  },
  mounted() {
    document.body.classList.add('done')
  },
  destroyed() {
    document.body.classList.remove('done')
  },
  computed: {
    verb() {
      return this.$store.state.servingEaten.availableServings > 1 ? 'quedan' : 'queda'
    },
    availableServings() {
      return this.$store.state.servingEaten.availableServings
    },
    servings() {
      return this.$store.state.servingEaten.servings
    },
    name() {
      return this.$store.state.servingEaten.name
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.tupper-eaten {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-top: 6rem;
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  h1 {
    margin-top: 2rem;
    margin-bottom: 4rem;
    font-size: 3rem;
  }
}

.white {
  fill: white;
}
</style>
