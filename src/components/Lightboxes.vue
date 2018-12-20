<template>
  <div class="lightbox" v-if="lightbox !== 'none'">
    <ShareFridge v-if="lightbox === 'share-fridge'"></ShareFridge>
    <Alert v-if="lightbox === 'alert'"></Alert>
    <ConfirmRemove v-if="lightbox === 'confirm-remove'"></ConfirmRemove>
  </div>
</template>

<script>
import ShareFridge from '@/components/ShareFridge'
import Alert from '@/components/Alert'
import ConfirmRemove from '@/components/ConfirmRemove'

export default {
  name: 'Lightboxes',
  components: {
    ShareFridge,
    Alert,
    ConfirmRemove
  },
  computed: {
    lightbox() {
      return this.$store.state.lightbox
    }
  }
}
</script>
