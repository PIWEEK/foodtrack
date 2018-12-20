<template>
  <div class="header">
    <router-link class="trigger-menu" to="/dashboard" v-if="!isDashboard">
      <IconHome className="icon-home"></IconHome>
    </router-link>
    <MainLogo className="foodtrack-logo"></MainLogo>
    <div class="user-zone">
      <a href="#" @click.prevent="notifications">
        <span class="alert-dot"></span>
        <IconBell className="icon-bell"></IconBell>
      </a>
      <router-link to="/profile">
        <IconFace className="icon-face"></IconFace>
      </router-link>
    </div>
  </div>
</template>

<script>
import MainLogo from '@/icons/foodtrack-logo.vue'
import IconHome from '@/icons/icon-home.vue'
import IconBell from '@/icons/icon-bell.vue'
import IconFace from '@/icons/icon-face.vue'
export default {
  name: 'Header',
  components: {
    MainLogo,
    IconHome,
    IconBell,
    IconFace
  },
  methods: {
    notifications() {
      this.$store.dispatch('lightboxAlert')
    }
  },
  computed: {
    isDashboard() {
      return this.$route.path === '/dashboard'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  align-items: center;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  left: 0;
  justify-content: center;
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}

.foodtrack-logo {
  margin: auto;
}

.icon-bell {
  fill: $purple;
}
.icon-face {
  fill: $purple;
}
.icon-home {
  fill: $purple;
  left: 1.5rem;
  position: absolute;
  top: 1.3rem;
}

.user-zone {
  display: flex;
  position: absolute;
  right: 1.5rem;
  top: 1.3rem;
  :last-child {
    margin-left: .5rem;
  }
}

.alert-dot {
  background: $red;
  border-radius: 50%;
  border: 2px solid white;
  height: 8px;
  position: absolute;
  top: .1rem;
  right: 2.1rem;
  width: 8px;
}
</style>
