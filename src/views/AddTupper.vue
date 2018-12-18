<template>
  <div id="guarda">
    <form id="addTupper" @submit="addTupper">
      <input v-model="name" placeholder="Name">
      <input v-model="description" placeholder="Description">
      <input v-model="servings" placeholder="Servings">
      <input type="date" @input="cookedAt = $event.target.valueAsDate">
      <select v-model="location">
        <option disabled value="">Please select one</option>
        <option>Fridge</option>
        <option>Freezer</option>
      </select>
      <select v-model="notifyMe">
        <option selected disabled value="">Please select one</option>
        <option value="one-week">1 week</option>
        <option value="one-month">1 month</option>
      </select>
      <input type="submit" value="Add tupper">
    </form>
  </div>
</template>

<script>
import storage from '../storage'

export default {
  name: 'AddTupper',
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
