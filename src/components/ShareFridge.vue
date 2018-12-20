<template>
  <div class="lightbox">
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
  </div>
</template>

<script>
export default {
  name: 'ShareFridge'
}
</script>
