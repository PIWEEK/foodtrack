<template>
  <div class="tupper">
    {{item.name}}
  </div>
</template>

<script>
export default {
  name: 'TupperItem',
  props: {
    item: Object
  }
}
</script>
