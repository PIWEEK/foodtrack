<template>
  <div class="header">
    <a class="trigger-menu" href="#">
      <IconMenu className="icon-menu"></IconMenu>
    </a>
    <MainLogo className="main-logo"></MainLogo>
    <div class="user-zone">
      <a href="#">
        <IconBell className="icon-bell"></IconBell>
      </a>
      <a href="#">
        <IconFace className="icon-face"></IconFace>
      </a>
    </div>
  </div>
</template>

<script>
import MainLogo from '@/icons/foodtrack-logo.vue'
import IconMenu from '@/icons/icon-menu.vue'
import IconBell from '@/icons/icon-bell.vue'
import IconFace from '@/icons/icon-face.vue'
export default {
  name: 'Header',
  components: { MainLogo, IconMenu, IconBell, IconFace }
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
  padding: .5rem .8rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}
.main-logo {
  margin: auto;
}
.trigger-menu {
}
.icon-menu {
  fill: $purple;
}
.icon-bell {
  fill: $purple;
}
.icon-face {
  fill: $purple;
}
.user-zone {
  display: flex;
  :last-child {
    margin-left: .5rem;
  }
}
</style>
