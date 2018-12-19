<template>
    <svg :class="className" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 16C20.42 16 24 12.41 24 8C24 3.58 20.42 0 16 0C11.58 0 8 3.58 8 8C8 12.41 11.58 16 16 16ZM16 20C10.67 20 0 22.67 0 28V32H32V28C32 22.67 21.33 20 16 20Z"/>
    </svg>
</template>

<script>
export default {
  props: {
    className: String
  }
}
</script>
