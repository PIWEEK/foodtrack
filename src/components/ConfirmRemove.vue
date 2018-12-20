<template>
  <div class="lightbox-content">
    <div class="lightbox-header">
      <h2>ELIMINAR</h2>
      <span class="close" @click.prevent="close">
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
      <button class="btn-primary btn-line" @click.prevent="cancel">CANCELAR</button>
      <button class="btn-primary btn-red" @click.prevent="remove">ELIMINAR</button>
    </div>
  </div>
</template>

<script>
import IconClose from '@/icons/icon-close'
import tupper50 from '@/icons/tupper-50'

export default {
  name: 'ConfirmRemove',
  components: {
    IconClose,
    tupper50
  },
  methods: {
    cancel() {
      this.$store.dispatch('lightboxNone')
    },
    close() {
      this.$store.dispatch('lightboxNone')
    },
    remove() {
      this.$store.dispatch('tupperRemove')
      if (this.$route.path === '/tupper-detail') {
        this.$router.replace('/dashboard')
      }
    }
  }
}
</script>
