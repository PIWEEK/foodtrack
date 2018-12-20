<template>
  <div class="dashboard">
    <Header></Header>
    <div class="fridge-content">
      <button class="btn-primary btn-line">NEVERA</button>
      <div class="fridge-tuppers">
        <!--div class="tupperholder">
          <span>Tu nevera está vacía</span>
        </div-->
        <div class="home-fridge-list">
          <div class="list-item">
            <h3>Pollo asado con verduras</h3>
            <div class="alarm-date">
              <IconBellGradient className="icon-bell-gradient"></IconBellGradient>
              <span>HOY</span>
            </div>
          </div>
          <div class="list-item">
            <h3>Lentejas a la riojana</h3>
            <div class="alarm-date">
              <IconBellGradient className="icon-bell-gradient"></IconBellGradient>
              <span>MAÑANA</span>
            </div>
          </div>
          <div class="list-item">
            <h3>Croquetas de la mama</h3>
            <div class="alarm-date">
              <IconBellGradient className="icon-bell-gradient"></IconBellGradient>
              <span>12/02/2018</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cold-content">
      <button class="btn-primary btn-line">CONGELADOR</button>
      <div class="cold-tuppers">
        <!--div class="tupperholder">
          <span>Tu congelador está vacío</span>
        </div-->
        <div class="home-cold-list">
          <tupper50 className="tupper-50"></tupper50>
          <h3>12 tuppers</h3>
        </div>
      </div>
    </div>
    <div class="btn-icon">
      <IconNfc className="icon-nfc"></IconNfc>
      <router-link tag="button" class="btn-primary" to="/scanning">
        Escanear NFC
      </router-link>
    </div>
    <button class="btn-primary btn-line">
      <IconFridge className="icon-fridge"></IconFridge>
      <span>Compartir frigorífico</span>
    </button>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import IconFridge from '@/icons/icon-fridge.vue'
import IconNfc from '@/icons/icon-nfc.vue'
import tupper50 from '@/icons/tupper-50.vue'
import IconBellGradient from '@/icons/icon-bell-gradient.vue'

export default {
  name: 'Dashboard',
  components: { Header, IconFridge, IconNfc, tupper50, IconBellGradient },
  data() {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dashboard {
  margin-top: -12px;

  .btn-icon {
    svg {
      top: 12px;
    }
  }
  .btn-line {
    flex: 0;
    margin-top: 1.2rem;
  }
}

.fridge-content,
.cold-content {
  border: 6px solid $dark-shade-5;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  margin: .5rem 0;
  padding: .8rem;
  position: relative;

  .btn-line {
    margin-top: 0;
  }
}

.fridge-content {
  min-height: 35vh;
}

.cold-content {
  min-height: 12vh;
  &::after,
  &::before {
    border: 6px solid $dark-shade-5;
    border-radius: 12px;
    bottom: -29px;
    content: "";
    left: 16px;
    position: absolute;
    height: 6px;
    width: 50px;
  }

  &::before {
    left: 266px;
  }
}

.fridge-tuppers,
.cold-tuppers {
  display: flex;
  flex: 1;
}

.tupperholder {
  align-items: center;
  color: $dark-shade-50;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;

  svg {
    fill: $dark-shade-50;
    margin-bottom: .5rem;
    width: 40px;
  }
}

.home-fridge-list {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  padding-top: .4rem;
}

.list-item {
  border: 1px solid $dark-shade-25;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: .4rem;
  padding: .8rem 1rem;

  &:first-child {
    flex: auto;

    h3 {
      font-weight: bold;
    }
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.5;
    max-height: 55px;
    overflow: hidden;
  }

  .alarm-date {
    align-items: center;
    display: flex;
    margin-top: .8rem;

    svg {
      margin-right: .5rem;
    }

    span {
      color: $dark-shade-50;
      text-transform: uppercase;
      font-size: .8rem;
      font-weight: bold;
    }
  }
}

.home-cold-list {
  align-items: center;
  display: flex;
  flex: 1;
  padding: .8rem .8rem 0 .8rem;
  flex: 1;
  justify-content: center;

  svg {
    fill: black;
    margin-right: 1rem;
    width: 40px;
  }

  h3 {
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
  }
}
</style>
