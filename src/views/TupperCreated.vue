<template>
  <div class="tupper-created">
    <Header></Header>
    <p>Se ha guardado tu tupper de</p>
    <IconTupperOk className="white"></IconTupperOk>
    <h1>{{ name }}</h1>
    <router-link tag="button" class="btn-primary btn-line-transparent" to="/dashboard">
      ¡OK!
    </router-link>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import IconTupperOk from '@/icons/tupper-ok.vue'

export default {
  name: 'TupperCreated',
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
  computed: {
    name() {
      return this.$store.state.tupperCreated.name
    }
  }
}
</script>

<style lang="scss">
.tupper-created {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-top: 6rem;
    margin-bottom: 2rem;
    font-size: 1.4rem;
    text-align: center;
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
