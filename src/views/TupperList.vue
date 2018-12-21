<template>
  <div class="tuppers">
    <Header></Header>
    <div class="tupper-list">
      <div class="list-header">
        <h1 class="gradient">{{title}}</h1>
        <div class="tupper-counter">
          <tupper50 className="tupper-50"></tupper50>
          <span>{{items.length}} tuppers</span>
        </div>
        <div class="tupper-filter">
          <span>ORDENAR</span>
          <IconOrder className="icon-order"></IconOrder>
        </div>
      </div>
      <TupperItem :item="tupper" v-for="tupper in items" :key="tupper._id"></TupperItem>
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
import IconOrder from '@/icons/icon-order'
import tupper50 from '@/icons/tupper-50.vue'

export default {
  name: 'TupperList',
  components: {
    Header,
    TupperItem,
    IconNfc,
    IconOrder,
    tupper50
  },
  props: {
    view: String
  },
  mounted() {
    this.$store.dispatch('tupperList')
  },
  data() {
    return {
      slots: 0
    }
  },
  computed: {
    title() {
      return this.view === 'fridge' ? 'Nevera' : 'Congelador'
    },
    items() {
      return this.view === 'fridge'
        ? this.fridge
        : this.freezer
    },
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

.list-header {
  align-items: center;
  border-bottom: 1px solid $dark-shade-5;
  display: flex;
  margin-bottom: 1rem;
  padding-bottom: 1.5rem;
  position: relative;

  h1 {
    margin: 0;
  }
}

.tupper-filter {
  align-items: center;
  background: white;
  bottom: -16px;
  color: $dark-shade-75;
  display: flex;
  padding: .3rem 0 .3rem .8rem;
  position: absolute;
  right: 0;

  svg {
    fill: $dark-shade-75;
    margin-left: .2rem;
    width: 25px;
  }

  span {
    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase;
  }
}

.tupper-counter {
  align-items: center;
  display: flex;
  margin-left: auto;

  svg {
    fill: black;
    margin-right: .6rem;
    width: 17px;
  }
}

.free-slots {
  color: $dark-shade-50;
  margin-top: 1rem;
  text-align: center;
}
</style>
