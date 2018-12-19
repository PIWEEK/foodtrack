<template>
  <div class="splash">
    <div class="login-logo">
      <MainLogoWhite className="main-logo"></MainLogoWhite>
    </div>
    <h1 class="light">Gestiona los tuppers en tu frigorífico</h1>
    <img class="pattern" src="../assets/pattern.svg">
  </div>
</template>

<script>
import MainLogoWhite from '@/icons/foodtrack-logo-white.vue'

export default {
  name: 'Splash',
  components: { MainLogoWhite },
  created() {
    document.body.classList.add('home')
  },
  destroyed() {
    document.body.classList.remove('home')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login-logo {
  display: flex;
  justify-content: center;
  width: 100%;

  svg {
    width: 70%;
  }
}

h1.light {
  color: white;
  font-size: 1.5rem;
  line-height: 1.5;
  margin: 2rem 0 4rem 0;
  text-align: center;
  width: 100%;
}

img.pattern {
  left: 0;
  position: fixed;
  opacity: .5;
  top: 0;
  width: 100%;
  z-index: -1;
}

</style>
