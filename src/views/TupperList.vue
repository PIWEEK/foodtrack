<template>
  <div class="tuppers">
    <Header></Header>
    <div class="tupper-list">
      <h1 class="purple">Congelador</h1>
      <button type="button">
        Ordenar
      </button>
      <TupperItem :item="tupper" v-for="tupper in freezer" :key="tupper._id"></TupperItem>
      <h1 class="purple">Nevera</h1>
      <button type="button">
        Ordenar
      </button>
      <TupperItem :item="tupper" v-for="tupper in fridge" :key="tupper._id"></TupperItem>
    </div>
    <div class="free-slots">
      Me quedan <strong>{{slots}} huecos</strong> en el congelador
    </div>
    <div class="btn-icon">
      <IconNfc className="icon-nfc"></IconNfc>
      <router-link tag="button" class="btn-primary" to="/scanning">
        Escanear NFC
      </router-link>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import TupperItem from '@/components/TupperItem'
import IconNfc from '@/icons/icon-nfc'

export default {
  name: 'TupperList',
  components: {
    Header,
    TupperItem,
    IconNfc
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.tuppers {
  .btn-icon {
    svg {
      top: 12px;
    }
  }
}

.free-slots {
  color: $dark-shade-50;
  margin-top: 1rem;
  text-align: center;
}
</style>
