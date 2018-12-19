<template>
  <div class="dashboard">
    <Header></Header>
    <div class="fridge-content">
      <button class="btn-primary btn-line">NEVERA</button>
      <div class="fridge-tuppers">
        <div class="tupperholder">
          <tupper50 className="tupper-50"></tupper50>
          <span>Tu nevera está vacía</span>
        </div>
      </div>
    </div>
    <div class="cold-content">
      <button class="btn-primary btn-line">CONGELADOR</button>
      <div class="cold-tuppers">
        <div class="tupperholder">
          <tupper50 className="tupper-50"></tupper50>
          <span>Tu congelador está vacío</span>
        </div>
      </div>
    </div>
    <div class="btn-icon">
      <IconNfc className="icon-nfc"></IconNfc>
      <button class="btn-primary">ESCANEAR NFC</button>
    </div>
    <button class="btn-primary btn-line">
      <IconFridge className="icon-fridge"></IconFridge>
      <span>COMPARTIR FRIGORIFICO</span>
    </button>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import IconFridge from '@/icons/icon-fridge.vue'
import IconNfc from '@/icons/icon-nfc.vue'
import tupper50 from '@/icons/tupper-50.vue'

export default {
  name: 'Dashboard',
  components: { Header, IconFridge, IconNfc, tupper50 },
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
  padding: 1rem;
  position: relative;

  .btn-line {
    margin-top: 0;
  }
}

.fridge-content {
  min-height: 30vh;
}

.cold-content {
  min-height: 20vh;
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
    margin-bottom: 1.5rem;
  }
}
</style>
