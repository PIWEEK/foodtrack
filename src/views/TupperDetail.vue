<template>
  <div class="tupper-detail-view">
    <Header></Header>
    <input id="name" v-model="name" placeholder="">
    <input id="description" v-model="description" placeholder="">
    <input id="servings" v-model="servings" placeholder="">
    <input id="location" v-model="location" placeholder="">
    <input id="notifyMe" v-model="notifyMe" placeholder="">
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'TupperDetail',
  components: {
    Header
  },
  data: function () {
    return {
      name: 'Sopa',
      description: 'Sopa de picadillo',
      servings: 2,
      cookedAt: '2018-12-19',
      location: 'fridge',
      notifyMe: '2018-12-29'
    }
  }
}
</script>
