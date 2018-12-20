<template>
  <div class="tupper-detail-view">
    <Header></Header>
    <h2 class="tupper-title">
      <tupper50 className="tupper-50"></tupper50>
      <span>{{name}}</span>
    </h2>
    <p>{{content}}</p>
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
    <button class="btn-primary">
      COMÉRMELO
    </button>
    <a class="delete-link" href="#" @click.prevent="remove">
      <IconTrash className="icon-trash"></IconTrash>
      <span>ELIMINAR</span>
    </a>
    <hr/>
    <h5 class="small">COMER POR RACIONES</h5>
    <div class="row-flex">
      <button class="btn-primary btn-line">
        <tupper50 className="tupper-50"></tupper50>
        <span>1 RACIÓN</span>
     </button>
      <button class="btn-primary btn-line">
        <tupper50 className="tupper-50"></tupper50>
        <span>1 RACIÓN</span>
     </button>
    </div>
    <h5 class="small">MOVER</h5>
    <button class="btn-primary btn-line">
      <IconFridge className="icon-fridge"></IconFridge>
      <span>MOVER A LA NEVERA</span>
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

export default {
  name: 'TupperDetail',
  components: {
    Header,
    IconUser,
    IconDate,
    IconFridge,
    IconTrash,
    IconCold,
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
    cookedAt() {
      return moment(this.$store.state.tupperRead.cookedAt).format('DD/MM/YYYY')
    },
    storedAt() {
      return this.$store.state.tupperRead.storedAt === 'fridge' ? 'Nevera' : 'Congelador'
    },
    notifyMeAt() {
      return moment(this.$store.state.tupperRead.notifyMeAt).fromNow(true)
    }
  },
  methods: {
    remove() {
      console.log('Eliminar')
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
  margin-bottom: 2.5rem;
}

.row-flex {
  align-items: center;
  margin: .8rem 0;

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
</style>
