<template>
  <div class="scanning">
    <h1 class="scanning-title">{{message}}</h1>
    <!-- TODO: Añadir circulo de cargando -->
    <div :class="scanningClass">
      <IconTupperNFC className="icon-tupper-nfc"></IconTupperNFC>
    </div>
    <button v-if="isAvailable && !isEnabled" class="btn-primary btn-line-transparent" type="submit">
      Volver a escanear
    </button>
  </div>
</template>

<script>
import nfc from '@/nfc'
import IconTupperNFC from '@/icons/tupper-nfc.vue'

export default {
  name: 'Scanning',
  components: {
    IconTupperNFC
  },
  created() {
    document.body.classList.add('home')
    nfc.start()
    nfc.on('read', (e) => {
      console.log(e)
    })
  },
  destroyed() {
    document.body.classList.remove('home')
    nfc.stop()
  },
  computed: {
    scanningClass() {
      if (this.isAvailable) {
        if (this.isEnabled) {
          return ['scanning-loader', 'is-scanning']
        }
        return ['scanning-loader', 'is-disabled']
      }
      return 'scanning-loader'
    },
    message() {
      if (this.isAvailable) {
        if (this.isEnabled) {
          return 'Acerca tu móvil al tupper'
        } else {
          return 'Activa el NFC para poder escanear el tupper'
        }
      }
      return 'Tú móvil no tiene NFC'
    },
    isEnabled() {
      return this.$store.state.nfc.isEnabled
    },
    isAvailable() {
      return this.$store.state.nfc.status === 'available'
    }
  }
}
</script>

<style lang="scss">
.scanning-title {
  text-align: center;
  color: white;
  margin-bottom: 2rem;
}

.scanning {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.scanning-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;

  &.is-disabled {

  }

  &.is-scanning {
    border: 2px solid rgba(255,255,255,0.5);
    border-radius: 100%;
  }
}

.icon-tupper-nfc {
  fill: white
}
</style>
