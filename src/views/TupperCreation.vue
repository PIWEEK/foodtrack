<template>
  <div class="add-tupper-view">
    <Header></Header>
    <h1 class="purple">Añadir tupper</h1>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input id="name" v-model="name" placeholder="Mi tupper">
      </div>
      <div class="form-group">
        <label for="content">Contenido</label>
        <textarea id="content" v-model="content" rows="3" placeholder="¿Qué exquisitez has cocinado?" />
      </div>
      <div class="form-group">
        <IconUser className="icon-user"></IconUser>
        <label for="servings">Raciones</label>
        <input id="servings" type="number" v-model="servings" placeholder="(pax.)">
      </div>
      <div class="form-group">
        <IconDate className="icon-date"></IconDate>
        <label for="cooked-at">Cocinado el</label>
        <input id="cooked-at" type="date" v-model="cooked">
      </div>
      <div class="form-group">
        <label>Lo voy a guardar en</label>
        <div class="row-flex">
          <label class="radio">
            <input name="radio" type="radio" checked v-model="storedAt" value="freezer">
            <span>Congelador</span>
          </label>
          <label class="radio">
            <input name="radio" type="radio" v-model="storedAt" value="fridge">
            <span>Nevera</span>
          </label>
        </div>
      </div>
      <div class="form-group">
        <label for="notify-me-at">Avísame en</label>
        <select id="notify-me-at" v-model="notifyMeAt">
          <option selected disabled value="none">Selecciona una opción</option>
          <option value="0 days">hoy</option>
          <option value="1 day">1 día</option>
          <option value="2 days">2 días</option>
          <option value="3 days">3 días</option>
          <option value="4 days">4 días</option>
          <option value="5 days">5 días</option>
          <option value="1 week">1 semana</option>
          <option value="2 weeks">2 semanas</option>
          <option value="3 weeks">3 semanas</option>
          <option value="1 month">1 mes</option>
          <option value="2 months">2 meses</option>
          <option value="6 months">6 meses</option>
        </select>
      </div>
      <div class="btn-icon">
        <IconCheck className="icon-check"></IconCheck>
        <button class="btn-primary btn-green" type="submit">Guardar</button>
      </div>
    </form>
  </div>
</template>

<script>
import moment from 'moment'
import api from '@/api'
import Header from '@/components/Header.vue'
import IconDate from '@/icons/icon-date.vue'
import IconCheck from '@/icons/icon-check.vue'
import IconUser from '@/icons/icon-user.vue'

export default {
  name: 'TupperCreate',
  components: {
    Header,
    IconDate,
    IconCheck,
    IconUser
  },
  data() {
    return {
      tagId: null,
      tupperId: null,
      name: '',
      content: '',
      servings: 1,
      cookedAt: new Date(),
      storedAt: 'fridge',
      notifyMeAt: ''
    }
  },
  computed: {
    cooked: {
      get() {
        return moment(this.cookedAt)
          .format('YYYY-MM-DD')
      },
      set(newValue) {
        this.cookedAt = new Date(newValue)
      }
    },
    notifyMe: {
      get() {
        const [quantity, unit] = this.notifyMeAt.split(' ')
        return moment(this.cookedAt)
          .add(parseInt(quantity, 10), unit)
          .toDate()
      }
    }
  },
  methods: {
    async submit(e) {
      try {
        await this.$store.dispatch('tupperCreate', {
          tagId: this.$store.state.tupperRead.tagId,
          tupperId: '1',
          name: this.name,
          content: this.content,
          servings: this.servings,
          storedAt: this.storedAt,
          cookedAt: this.cookedAt,
          notifyMeAt: this.notifyMe
        })
        this.$router.replace('/tupper-created')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.add-tupper-view {
  form {
    animation: fadeInUp .6s ease;
  }
}
</style>
