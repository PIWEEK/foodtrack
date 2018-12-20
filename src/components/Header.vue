<template>
  <div class="header">
    <router-link class="trigger-menu" to="/dashboard" v-if="!isDashboard">
      <IconHome className="icon-home"></IconHome>
    </router-link>
    <MainLogo className="foodtrack-logo"></MainLogo>
    <div class="user-zone">
      <router-link to="/notifications">
        <IconBell className="icon-bell"></IconBell>
      </router-link>
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

.trigger-menu {

}

.icon-bell {
  fill: $purple;
}
.icon-face {
  fill: $purple;
}
.icon-home {
  fill: $purple;
}

.user-zone {
  display: flex;
  :last-child {
    margin-left: .5rem;
  }
}
</style>
