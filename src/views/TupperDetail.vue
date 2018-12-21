<template>
  <div class="tupper-detail-view">
    <Header></Header>
    <h2 class="tupper-title">
      <tupper50 className="tupper-50"></tupper50>
      <span>{{name}}</span>
    </h2>
    <p>{{content}}</p>
    <div class="row-flex">
      <div class="poo-date">
        <IconBell className="icon-bell"></IconBell>
        <span>{{notifyMe}}TEST</span>
      </div>
    </div>
    <div class="row-flex">
      <IconUser className="icon-user"></IconUser>
      <span>{{servings}} raciones</span>
    </div>
    <div class="row-flex">
      <IconCold className="icon-cold"></IconCold>
      <span>{{storedAt}}</span>
    </div>
    <div class="row-flex">
      <IconDate className="icon-data"></IconDate>
      <span>{{notifyMeAt}}</span>
    </div>
    <button class="btn-primary" @click.prevent="eatWhole">
      COMÉRMELO
    </button>
    <a class="delete-link" href="#" @click.prevent="remove">
      <IconTrash className="icon-trash"></IconTrash>
      <span>ELIMINAR</span>
    </a>
    <hr/>
    <div class="eat-by-serving" v-if="servings > 1">
      <h5 class="small">COMER POR RACIONES</h5>
      <div class="row-flex">
        <button class="btn-primary btn-line" v-for="serving in servingsList" :key="serving" @click.prevent="eatServing(serving)">
          <tupper50 className="tupper-50"></tupper50>
          <span>{{serving}} {{servingNoun(serving)}}</span>
      </button>
      </div>
    </div>
    <h5 class="small">MOVER</h5>
    <button class="btn-primary btn-line" @click.prevent="moveTo">
      <IconFridge className="icon-fridge"></IconFridge>
      <span>{{moveToMessage}}</span>
    </button>
  </div>
</template>

<script>
import moment from 'moment'

import Header from '@/components/Header'
import tupper50 from '@/icons/tupper-50'
import IconUser from '@/icons/icon-user'
import IconDate from '@/icons/icon-date'
import IconFridge from '@/icons/icon-fridge'
import IconTrash from '@/icons/icon-trash'
import IconCold from '@/icons/icon-cold'
import IconBell from '@/icons/icon-bell'

export default {
  name: 'TupperDetail',
  components: {
    Header,
    IconUser,
    IconDate,
    IconFridge,
    IconTrash,
    IconCold,
    IconBell,
    tupper50
  },
  computed: {
    tagId() {
      return this.$store.state.tupperRead.tagId
    },
    name() {
      return this.$store.state.tupperRead.name
    },
    content() {
      return this.$store.state.tupperRead.content
    },
    servings() {
      return this.$store.state.tupperRead.servings
    },
    servingsList() {
      const servings = []
      for (let index = 0; index < this.servings - 1; index++) {
        servings.push(index + 1)
      }
      return servings
    },
    cookedAt() {
      return moment(this.$store.state.tupperRead.cookedAt).format('DD/MM/YYYY')
    },
    storedAt() {
      return this.$store.state.tupperRead.storedAt === 'fridge' ? 'Nevera' : 'Congelador'
    },
    notifyMeAt() {
      return moment(this.$store.state.tupperRead.notifyMeAt).fromNow(true)
    },
    moveToMessage() {
      return this.$store.state.tupperRead.storedAt === 'fridge' ? 'Mover al congelador' : 'Mover a la nevera'
    }
  },
  methods: {
    servingNoun(servings) {
      return servings === 1 ? 'RACIÓN' : 'RACIONES'
    },
    async eatServing(quantity) {
      console.log(quantity)
      await this.$store.dispatch('tupperEatServing', {
        quantity
      })
      this.$router.replace('/tupper-eaten')
    },
    async eatWhole() {
      await this.$store.dispatch('tupperEatWhole')
      this.$router.replace('/tupper-eaten')
    },
    moveTo() {
      this.$store.dispatch('tupperMove')
    },
    remove() {
      this.$store.dispatch('lightboxConfirmRemove', {
        _id: this.$store.state.tupperRead._id
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tupper-title {
  border-bottom: 1px solid $dark-shade-25;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  padding: 1rem 1rem 1rem 2.5rem;
  position: relative;

  svg {
    bottom: .6rem;
    fill: black;
    left: .2rem;
    position: absolute;
    width: 25px;
  }
}

p {
  line-height: 1.6;
  margin-bottom: 3.5rem;
}

.row-flex {
  align-items: center;
  margin: .8rem 0;
  position: relative;

  svg {
    fill: $dark-shade-50;
    margin-right: 1rem;
    width: 15px;
  }

  .btn-line {
    margin-right: 1rem;

    svg {
      fill: $purple;
      width: 25px;
    }

    &:last-child {
      margin-right: 0;
    }
  }
  .poo-date {
    background: linear-gradient(270deg, #F8A4D8 0%, #6C63FF 100%);
    border-top-left-radius: 4px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 10px;
    color: white;
    display: flex;
    left: -30px;
    justify-content: flex-start;
    padding: .3rem .6rem .3rem 2rem;
    position: absolute;
    top: -30px;
    width: 140px;

    span {
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
    }

    svg {
      fill: white;
      margin-right: 1rem;
      margin-left: 0;
      width: 12px;
    }

    &.deadline {
      background: $red;
    }
  }
}

.delete-link {
  align-items: center;
  display: flex;
  color: $red;
  font-size: 14px;
  margin: 1rem 1rem 1rem auto;
  justify-content: center;
  text-decoration: none;
  text-transform: uppercase;
  width: fit-content;

  svg {
    fill: $red;
    margin-right: 1rem;
    width: 14px;
  }

  span {
    font-weight: bold;
  }
}

h5.small {
  margin: 0 0 10px;
  color: $dark-shade-100;
  font-size: 12px;
  font-weight: bold;
  text-align: left;
  text-transform: uppercase;
}

.eat-by-serving {
  .row-flex {
    .btn-primary {
      margin: .5rem;
      max-width: 46%;
    }
  }
}
</style>
