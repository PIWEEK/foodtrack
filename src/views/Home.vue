<template>
  <div class="home">
    <Header></Header>
    <h2>Nevera</h2>
    <span>Nombre: {{ name1 }}</span> -- <span>Avísame: {{ notifyMe1 }}</span>
    <br />
    <span>Nombre: {{ name2 }}</span> -- <span>Avísame: {{ notifyMe2 }}</span>
    <br />
    <span>Nombre: {{ name3 }}</span> -- <span>Avísame: {{ notifyMe3 }}</span>

    <br />
    <h2>Congelador</h2>
    <span>Tuppers en la nevera: {{ tuppersCount }}</span> -- <span>Huecos libres: {{ spaceLeft }}</span>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  },
  data: function () {
    return {
      name1: 'Sopa',
      notifyMe1: '2018-12-19',
      name2: 'Albóndigas',
      notifyMe2: '2018-12-20',
      name3: 'Bonito con tomate',
      notifyMe3: '2018-12-20',
      tuppersCount: 14,
      spaceLeft: 2
    }
  }
}
</script>
