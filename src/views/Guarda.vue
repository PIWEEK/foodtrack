<template>
  <div id="guarda">
    <button type="button" v-on:click="guarda">Guarda</button>
    <button type="button" v-on:click="lee">Lee</button>
    <button type="button" v-on:click="suma">Añade</button>
    <hr/>
    <form id="leeId" @submit="leeId" method="get">
      <input v-model="tupperId" placeholder="id de tupper">
      <input type="submit" value="Lee un tupper">
    </form>
  </div>
</template>

<script>
import storage from '../storage'

export default {
  name: 'Guarda',
  data: function () {
    return {
      tupperId: null
    }
  },
  methods: {
    guarda: function() {
      storage.guarda()
    },
    lee: function() {
      storage.lee()
    },
    suma: function() {
      const tupper = { 'id': 'id3', 'name': 'sopa', 'location': 'nevera' }
      storage.suma(tupper)
    },
    leeId: function(e) {
      storage.leeId(this.tupperId)
    }
  }
}
</script>
