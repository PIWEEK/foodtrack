<template>
  <div class="splash">

  </div>
</template>

<script>
export default {
  name: 'Splash',
  created() {
    document.body.classList.add('home')
  },
  destroyed() {
    document.body.classList.remove('home')
  }
}
</script>
