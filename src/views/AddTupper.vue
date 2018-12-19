<template>
  <div class="add-tupper-view">
    <Header></Header>
    <h1 class="purple">Añadir tupper</h1>
    <form id="addTupper" @submit="addTupper">
      <div class="form-group">
        <label for="name">NOMBRE</label>
        <input id="name" v-model="name" placeholder="Mi tupper">
      </div>
      <div class="form-group">
        <label for="content">CONTENIDO</label>
        <textarea id="content" v-model="content" rows="3" placeholder="Qué exquisitez as cocinado?" />
      </div>
      <div class="form-group">
        <IconUser className="icon-user"></IconUser>
        <label for="servings">RACIONES</label>
        <input id="servings" v-model="servings" placeholder="(pax.)">
      </div>
      <div class="form-group">
        <IconDate className="icon-date"></IconDate>
        <label for="cooked-at">COCINADO EL</label>
        <input id="cooked-at" type="date" @input="cookedAt = $event.target.valueAsDate">
      </div>
      <div class="form-group">
        <label>LO VOY A GUARDAR EN</label>
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
        <label for="cooked-at">AVÍSAME EN</label>
        <select v-model="notifyMeAt">
          <option selected disabled value="">Selecciona una opción</option>
          <option value="one-week">1 week</option>
          <option value="one-month">1 month</option>
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
import api from '@/api'
import Header from '@/components/Header.vue'
import IconDate from '@/icons/icon-date.vue'
import IconCheck from '@/icons/icon-check.vue'
import IconUser from '@/icons/icon-user.vue'

export default {
  name: 'AddTupper',
  components: {
    Header, IconDate, IconCheck, IconUser
  },
  data() {
    return {
      tagId: null,
      tupperId: null,
      name: null,
      content: null,
      servings: null,
      cookedAt: null,
      storedAt: null,
      notifyMeAt: null
    }
  },

  methods: {
    async addTupper(e) {
      try {
        const tupper = {
          tagId: '11111111',
          tupperId: '1',
          name: this.name,
          content: this.content,
          servings: this.servings,
          storedAt: this.storedAt,
          cookedAt: '2018-12-19',
          notifyMeAt: '2018-12-23'
        }
        const response = await api.tuppers.addTupper(tupper)
        console.log(response)
        this.$router.push('Home')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.add-tupper-view {
  form {
    animation: fadeInUp .6s ease;
  }
}
</style>
