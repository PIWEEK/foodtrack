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
        <label for="description">CONTENIDO</label>
        <textarea id="description" v-model="description" rows="3" placeholder="Qué exquisitez as cocinado?" />
      </div>
      <div class="form-group">
        <label for="servings">RACIONES</label>
        <input id="servings" v-model="servings" placeholder="(pax.)">
      </div>
      <div class="form-group">
        <label for="cooked-at">COCINADO EL</label>
        <input id="cooked-at" type="date" @input="cookedAt = $event.target.valueAsDate">
      </div>
      <div class="form-group">
        <label>LO VOY A GUARDAR EN</label>
        <div class="row-flex">
          <label class="radio">
            <input name="radio" type="radio" checked v-model="location">
            <span>Congelador</span>
          </label>
          <label class="radio">
            <input name="radio" type="radio" v-model="location">
            <span>Nevera</span>
          </label>
        </div>
      </div>
      <div class="form-group">
        <label for="cooked-at">AVÍSAME EN</label>
        <select v-model="notifyMe">
          <option selected disabled value="">Selecciona una opción</option>
          <option value="one-week">1 week</option>
          <option value="one-month">1 month</option>
        </select>
      </div>
      <input class="btn-primary btn-green" type="submit" value="Guardar">
    </form>
  </div>
</template>

<script>
import storage from '../storage'
import Header from '@/components/Header.vue'

export default {
  name: 'AddTupper',
  components: {
    Header
  },
  data: function () {
    return {
      name: null,
      description: null,
      servings: null,
      cookedAt: null,
      location: null,
      notifyMe: null
    }
  },

  methods: {
    addTupper() {
      const maxId = localStorage.getItem('maxId')
        ? parseInt(localStorage.getItem('maxId'))
        : 0
      console.log('maxId: ')
      console.log(maxId)

      const tupperId = maxId + 1
      console.log('tupperId: ')
      console.log(tupperId)

      localStorage.setItem('maxId', tupperId)
      const tupper = {
        id: tupperId,
        name: this.name,
        description: this.description,
        servings: this.servings,
        cookedAt: this.cookedAt,
        location: this.location,
        notifyMe: this.notifyMe
      }
      storage.addTupper(tupper)
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
