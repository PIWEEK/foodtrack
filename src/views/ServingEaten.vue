<template>
  <div class="serving-eaten">
    <Header></Header>
    <p>Te has comido <span>{{ servings }} ración</span> de</p>
    <IconTupperOk className="white"></IconTupperOk>
    <h1>{{ name }}Pollo al curry</h1>
    <p class="servings">Me {{ verb }} <strong>{{ availableServings }} raciones</strong></p>
    <router-link class="btn-primary btn-line-transparent" tag="button" to="/dashboard">
      ¡ÑAM!
    </router-link>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import IconTupperOk from '@/icons/tupper-ok.vue'

export default {
  name: 'ServingEaten',
  components: {
    Header,
    IconTupperOk
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

<style lang="scss">
.serving-eaten {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-top: 6rem;
    margin-bottom: 2rem;
    font-size: 1.4rem;
    text-align: center;

    strong {
      font-weight: bold;
    }

    &.servings {
      margin-top: 2rem;
    }
  }

  h1 {
    margin-top: 3rem;
    margin-bottom: 4rem;
    font-size: 2.5rem;
  }
}

.white {
  fill: white;
}
</style>
