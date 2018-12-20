<template>
  <div class="lightbox">
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
  </div>
</template>

<script>
export default {
  name: 'ConfirmRemove'
}
</script>
