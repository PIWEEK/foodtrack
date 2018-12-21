<template>
  <div class="lightbox-content">
    <div class="lightbox-header">
      <h2>COMPARTIR FRIGORÍFICO</h2>
      <span class="close" @click.prevent="close">
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
      <button class="btn-primary btn-green" @click.prevent="send">
        ENVIAR
      </button>
    </div>
  </div>
</template>

<script>
import IconClose from '@/icons/icon-close'

export default {
  name: 'ShareFridge',
  components: {
    IconClose
  },
  data() {
    return {
      email: ''
    }
  },
  methods: {
    close() {
      this.$store.dispatch('lightboxNone')
    },
    send() {
      this.$store.dispatch('lightboxNone')
    }
  }
}
</script>
