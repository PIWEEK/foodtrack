<template>
  <div class="tuppers">
    <Header></Header>
    <div class="tupper-list">
      <h1 class="purple">Congelador</h1>
      <button type="button">
        Ordenar
      </button>
      <div class="tupper" v-for="tupper in freezer" :key="tupper._id">
        {{tupper.name}}
      </div>
      <h1 class="purple">Nevera</h1>
      <button type="button">
        Ordenar
      </button>
      <div class="tupper" v-for="tupper in fridge" :key="tupper._id">
        {{tupper.name}}
      </div>
    </div>
    <div class="free-slots">
      Me quedan <strong>{{slots}} huecos</strong> en el congelador
    </div>
    <router-link tag="button" class="btn-primary" to="/scanning">
      Escanear NFC
    </router-link>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'TupperList',
  components: {
    Header
  },
  created() {
    this.$store.dispatch('tupperList')
  },
  data() {
    return {
      slots: 0
    }
  },
  computed: {
    fridge() {
      return this.$store.state.tuppers
        ? this.$store.state.tuppers.filter(tupper => tupper.storedAt === 'fridge')
        : []
    },
    freezer() {
      return this.$store.state.tuppers
        ? this.$store.state.tuppers.filter(tupper => tupper.storedAt === 'freezer')
        : []
    }
  },
  methods: {
    async submit(e) {

    }
  }
}
</script>
