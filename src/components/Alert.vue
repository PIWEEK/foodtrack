<template>
  <div class="lightbox-content">
    <div class="lightbox-header">
      <h2>ALERTAS</h2>
      <span class="close" @click.prevent="close">
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
</template>

<script>
import IconClose from '@/icons/icon-close'
import IconBell from '@/icons/icon-bell'

export default {
  name: 'Alert',
  components: {
    IconClose,
    IconBell
  },
  methods: {
    close() {
      this.$store.dispatch('lightboxNone')
    }
  }
}
</script>
