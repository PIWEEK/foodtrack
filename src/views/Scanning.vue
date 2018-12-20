<template>
  <div class="scanning">
    <Header></Header>
    <h1 class="scanning-title">{{message}}</h1>
    <!-- TODO: Añadir circulo de cargando -->
    <div :class="scanningClass">
      <IconTupperNFC className="icon-tupper-nfc"></IconTupperNFC>
    </div>
    <div v-if="isAvailable && !isEnabled" class="btn-icon">
      <IconNFC className="icon-nfc"></IconNFC>
      <button class="btn-primary btn-line-transparent" type="submit">
        Volver a escanear
      </button>
    </div>
  </div>
</template>

<script>
import nfc from '@/nfc'
import IconTupperNFC from '@/icons/tupper-nfc'
import IconNFC from '@/icons/icon-nfc'
import Header from '@/components/Header.vue'

export default {
  name: 'Scanning',
  components: {
    Header,
    IconNFC,
    IconTupperNFC
  },
  created() {
    this.$store.dispatch('nfcCheck')
    nfc.start()
    nfc.on('read', this.handleNFCRead)
  },
  mounted() {
    document.body.classList.add('home')
  },
  destroyed() {
    document.body.classList.remove('home')
    nfc.stop()
  },
  methods: {
    handleNFCRead(tagId) {
      const tupper = this.$store.state.tuppers.find(tupper => tupper.tagId === tagId)
      this.$store.dispatch('tupperRead', { tagId })
      if (tupper) {
        this.$router.replace('/tupper-detail')
      } else {
        this.$router.replace('/tupper-creation')
      }
    }
  },
  computed: {
    scanningClass() {
      if (this.isAvailable) {
        if (this.isEnabled) {
          return ['scanning-loader', 'is-scanning']
        }
        return ['scanning-loader', 'is-disabled']
      }
      return ['scanning-loader', 'is-scanning']
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
  color: white;
  font-weight: bold;
  margin: 2rem;
  text-align: center;
}

.scanning {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75vh;
}

.scanning-loader {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18rem;
  height: 18rem;

  &.is-disabled {

  }

  &.is-scanning {
    border: 4px solid rgba(255,255,255,0.5);
    border-radius: 100%;

    &::after {
      content: ' ';
      position: absolute;
      top: -4px;
      left: -2px;
      width: 18rem;
      height: 18rem;
      border: 4px solid rgba(255,255,255,0.75);
      border-radius: 100%;
      border-left-color: transparent;
      border-top-color: transparent;
      border-right: 0;
      animation: loop linear 1s infinite;
    }
  }
}

.icon-tupper-nfc {
  fill: white
}

@keyframes loop {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
