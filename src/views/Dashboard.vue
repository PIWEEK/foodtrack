<template>
  <div class="dashboard">
    <Header></Header>
    <div class="fridge-content">
      <router-link class="btn-primary btn-line" tag="button" to="/tupper-list?view=fridge">NEVERA</router-link>
      <div class="fridge-tuppers">
        <!--div class="tupperholder">
          <span>Tu nevera está vacía</span>
        </div-->
        <div class="home-fridge-list">
          <div class="list-item" v-for="tupper in fridge" :key="tupper.tagId">
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
        <!--div class="tupperholder">
          <span>Tu congelador está vacío</span>
        </div-->
        <div class="home-cold-list">
          <tupper50 className="tupper-50"></tupper50>
          <h3>{{freezer.length}} tuppers</h3>
        </div>
      </div>
    </div>
    <div class="btn-icon">
      <IconNfc className="icon-nfc"></IconNfc>
      <router-link tag="button" class="btn-primary" to="/scanning">
        Escanear NFC
      </router-link>
    </div>
    <button class="btn-primary btn-line">
      <IconFridge className="icon-fridge"></IconFridge>
      <span>Compartir frigorífico</span>
    </button>
  </div>
</template>

<script>
import moment from 'moment'

import Header from '@/components/Header'
import IconFridge from '@/icons/icon-fridge'
import IconNfc from '@/icons/icon-nfc'
import tupper50 from '@/icons/tupper-50'
import IconBellGradient from '@/icons/icon-bell-gradient'

export default {
  name: 'Dashboard',
  components: {
    Header,
    IconFridge,
    IconNfc,
    IconBellGradient,
    tupper50,
  },
  data() {
    return {

    }
  },
  methods: {
    formatDate(date) {
      return moment(date).fromNow(true)
    }
  },
  computed: {
    fridge() {
      const fridge = this.$store.state.tuppers
        ? this.$store.state.tuppers.filter(tupper => tupper.storedAt === 'fridge')
        : []

      fridge.sort((a, b) => a.notifyMeAt - b.notifyMeAt)
      return fridge
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
    margin-top: 1.2rem;
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
  min-height: 35vh;
}

.cold-content {
  min-height: 12vh;
  &::after,
  &::before {
    border: 6px solid $dark-shade-5;
    border-radius: 12px;
    bottom: -29px;
    content: "";
    left: 16px;
    position: absolute;
    height: 6px;
    width: 50px;
  }

  &::before {
    left: 266px;
  }
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
  flex-wrap: wrap;
  padding-top: .4rem;
}

.list-item {
  border: 1px solid $dark-shade-25;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: .4rem;
  padding: .8rem 1rem;

  &:first-child {
    flex: auto;

    h3 {
      font-weight: bold;
    }
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.5;
    max-height: 55px;
    overflow: hidden;
  }

  .alarm-date {
    align-items: center;
    display: flex;
    margin-top: .8rem;

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
