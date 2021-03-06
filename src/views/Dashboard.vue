<template>
  <div class="dashboard">
    <Header></Header>
    <div class="fridge-content">
      <router-link class="btn-primary btn-line" tag="button" to="/tupper-list?view=fridge">NEVERA</router-link>
      <div class="fridge-tuppers">
        <div class="tupperholder" v-if="fridge.length === 0">
          <span>Tu nevera está vacía</span>
        </div>
        <div class="home-fridge-list" v-else>
          <div class="list-item" v-for="tupper in fridge" :key="tupper.tagId" @click.prevent="detail(tupper)">
            <h3>{{tupper.name}}</h3>
            <div class="alarm-date">
              <IconBellGradient className="icon-bell-gradient"></IconBellGradient>
              <span>{{formatDate(tupper.notifyMeAt)}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cold-content">
      <router-link class="btn-primary btn-line" tag="button" to="/tupper-list?view=freezer">CONGELADOR</router-link>
      <div class="cold-tuppers">
        <div class="tupperholder" v-if="freezer.length === 0">
          <span>Tu congelador está vacío</span>
        </div>
        <div class="home-cold-list" v-else>
          <tupper50 className="tupper-50"></tupper50>
          <h3>{{freezer.length}} tuppers</h3>
        </div>
      </div>
    </div>
    <div class="btn-icon">
      <IconNFC className="icon-nfc"></IconNFC>
      <router-link tag="button" class="btn-primary" to="/scanning">
        Escanear NFC
      </router-link>
    </div>
    <button class="btn-primary btn-line" @click.prevent="shareFridge">
      <IconFridge className="icon-fridge"></IconFridge>
      <span>Compartir frigorífico</span>
    </button>
  </div>
</template>

<script>
import moment from 'moment'

import Header from '@/components/Header'
import IconFridge from '@/icons/icon-fridge'
import IconNFC from '@/icons/icon-nfc'
import tupper50 from '@/icons/tupper-50'
import IconBellGradient from '@/icons/icon-bell-gradient'

export default {
  name: 'Dashboard',
  components: {
    Header,
    IconFridge,
    IconNFC,
    IconBellGradient,
    tupper50
  },
  mounted() {
    this.$store.dispatch('tupperList')
    // ÑAPAZA
    setTimeout(() => {
      this.$store.dispatch('tupperList')
    }, 2000)
  },
  methods: {
    detail(tupper) {
      this.$store.dispatch('tupperRead', { tagId: tupper.tagId })
      this.$router.replace('/tupper-detail')
    },
    shareFridge() {
      this.$store.dispatch('lightboxShareFridge')
    },
    formatDate(date) {
      return moment(date).fromNow(true)
    }
  },
  computed: {
    fridge() {
      const fridge = this.$store.state.tuppers
        ? this.$store.state.tuppers.filter(tupper => tupper.storedAt === 'fridge')
        : []

      fridge.sort((a, b) => b.notifyMeAt - a.notifyMeAt)
      return fridge.slice(0, 3)
    },
    freezer() {
      return this.$store.state.tuppers
        ? this.$store.state.tuppers.filter(tupper => tupper.storedAt === 'freezer')
        : []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dashboard {
  margin-top: -12px;

  .btn-icon {
    svg {
      top: 12px;
    }
  }
  .btn-line {
    flex: 0;
  }

  .btn-primary {
    margin-top: 1rem;
  }
}

.fridge-content,
.cold-content {
  border: 6px solid $dark-shade-5;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  margin: .5rem 0;
  padding: .8rem;
  position: relative;

  .btn-line {
    margin-top: 0;
  }
}

.fridge-content {
  min-height: 37vh;
}

.cold-content {
  min-height: 14vh;
}

.fridge-tuppers,
.cold-tuppers {
  display: flex;
  flex: 1;
}

.tupperholder {
  align-items: center;
  color: $dark-shade-50;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;

  svg {
    fill: $dark-shade-50;
    margin-bottom: .5rem;
    width: 40px;
  }
}

.home-fridge-list {
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: .4rem;
}

.list-item {
  align-items: flex-start;
  border: 1px solid $dark-shade-25;
  border-radius: 4px;
  display: flex;
  margin: .4rem;
  padding: .8rem 1rem;

  h3 {
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5;
    max-height: 50px;
    overflow: hidden;
  }

  .alarm-date {
    align-items: center;
    display: flex;
    flex-shrink: 0;
    margin-left: auto;

    svg {
      margin-right: .5rem;
    }

    span {
      color: $dark-shade-50;
      text-transform: uppercase;
      font-size: .8rem;
      font-weight: bold;
    }
  }
}

.home-cold-list {
  align-items: center;
  display: flex;
  flex: 1;
  padding: .8rem .8rem 0 .8rem;
  flex: 1;
  justify-content: center;

  svg {
    fill: black;
    margin-right: 1rem;
    width: 40px;
  }

  h3 {
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
  }
}
</style>
