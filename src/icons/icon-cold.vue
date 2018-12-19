<template>
  <svg :class="className" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 18H31.66L38.14 11.51L35.31 8.69L26 18H22V14L31.31 4.69L28.49 1.86L22 8.34V0H18V8.34L11.51 1.86L8.69 4.69L18 14V18H14L4.69 8.69L1.86 11.51L8.34 18H0V22H8.34L1.86 28.49L4.69 31.31L14 22H18V26L8.69 35.31L11.51 38.14L18 31.66V40H22V31.66L28.49 38.14L31.31 35.31L22 26V22H26L35.31 31.31L38.14 28.49L31.66 22H40V18Z"/>
  </svg>
</template>

<script>
export default {
  props: {
    className: String
  }
}
</script>
