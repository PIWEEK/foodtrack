<template>
  <div class="tupper-eaten">
    <Header></Header>
    <p>te has comido tu tupper super de {{ name }} bien</p>
    <button type="button" v-on:click="toHome">OK - vamos a  Home</button>

    <!-- Lightbox confirmacion de eliminar-->
    <!--div class="lightbox">
      <div class="lightbox-content">
        <div class="lightbox-header">
          <h2>ELIMINAR</h2>
          <span class="close">
            <IconClose className="icon-close"></IconClose>
          </span>
        </div>
        <div class="lightbox-inside">
          <h3>VAS A ELIMINAR</h3>
          <div class="tupper-name">
            <tupper50 className="tupper-50"></tupper50>
            <h3>Pollo al curry</h3>
          </div>
        </div>
        <div class="lightbox-btn">
          <button class="btn-primary btn-line">CANCELAR</button>
          <button class="btn-primary btn-red">ELIMINAR</button>
        </div>
      </div>
    </div-->

    <!-- Lightbox compartir nevera -->
    <!--div class="lightbox">
      <div class="lightbox-content">
        <div class="lightbox-header">
          <h2>COMPARTIR FRIGORÍFICO</h2>
          <span class="close">
            <IconClose className="icon-close"></IconClose>
          </span>
        </div>
        <div class="lightbox-inside">
          <div class="form-group">
            <label for="email">EMAIL</label>
            <input id="email" v-model="email" placeholder="usuario@mail.com">
          </div>
        </div>
        <div class="lightbox-btn">
          <button class="btn-primary btn-green">ENVIAR</button>
        </div>
      </div>
    </div-->

    <!-- Lightbox alertas -->
    <div class="lightbox">
      <div class="lightbox-content">
        <div class="lightbox-header">
          <h2>ALERTAS</h2>
          <span class="close">
            <IconClose className="icon-close"></IconClose>
          </span>
        </div>
        <div class="lightbox-inside">
          <div class="tupper">
            <div class="row-flex">
              <h3>Pollo al curry</h3>
              <div class="poo-date deadline">
                <span>HOY</span>
                <IconBell className="icon-bell"></IconBell>
              </div>
            </div>
          </div>
          <div class="tupper">
            <div class="row-flex">
              <h3>Pollo al curry</h3>
              <div class="poo-date deadline">
                <span>HOY</span>
                <IconBell className="icon-bell"></IconBell>
              </div>
            </div>
          </div>
          <div class="tupper">
            <div class="row-flex">
              <h3>Pollo al curry</h3>
              <div class="poo-date deadline">
                <span>HOY</span>
                <IconBell className="icon-bell"></IconBell>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import IconTupperOk from '@/icons/tupper-ok.vue'
import tupper50 from '@/icons/tupper-50'
import IconClose from '@/icons/icon-close.vue'
import IconBell from '@/icons/icon-bell.vue'

export default {
  name: 'TupperEaten',
  components: {
    Header,
    IconTupperOk,
    tupper50,
    IconClose,
    IconBell
  },
  created() {
    document.body.classList.add('done')
  },
  destroyed() {
    document.body.classList.remove('done')
  },
  methods: {
    toHome() {
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.tupper-name {
  border: 1px solid $dark-shade-25;
  border-radius: 6px;
  align-items: center;
  display: flex;
  flex: 1;
  margin-top: 1rem;
  padding: 1rem;
  flex: 1;
  justify-content: center;

  svg {
    fill: black;
    margin-right: 1rem;
    width: 40px;
  }

  h3 {
    font-size: 2rem;
    font-weight: bold;
  }
}
</style>
