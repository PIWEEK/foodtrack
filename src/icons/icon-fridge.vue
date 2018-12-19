<template>
    <svg :class="className" height="40" viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 0.02L4 0C1.79 0 0 1.79 0 4V36C0 38.21 1.79 40 4 40H28C30.21 40 32 38.21 32 36V4C32 1.79 30.21 0.02 28 0.02ZM28 36H4V17.95H28V36ZM28 14H4V4H28V14ZM8 6H12V12H8V6ZM8 20H12V30H8V20Z"/>
    </svg>
</template>

<script>
export default {
  props: {
    className: String
  }
}
</script>
