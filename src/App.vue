<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $dark-shade-100;
}

// BUTTONS
.btn-primary {
  background: $purple;
  box-shadow: 1px 1px 8px rgba(108, 99, 255, 0.5);
  color: white;
  display: flex;
  font-size: 14px;
  font-weight: bold;
  padding: .7rem 1rem;
  text-align: center;
  text-transform: uppercase;
  width: 100%;

  &:hover {
    background: darken($purple, 15);
    margin-top: 4px;
  }

  svg {
    margin-right: .8rem;
  }

  &.btn-green {
    background: $green;
    box-shadow: 1px 1px 8px rgba(111, 207, 151, 0.5);

    &:hover {
      background: darken($green, 15);
    }
  }

  // INPUTS
  .form-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 0 20px;

    &:last-child {
      margin: 0;
    }

    label {
      display: block;
      margin: 0 0 10px;
      color: $dark-shade-100;
      font-family: 'Montserrat', sans-serif;
      font-size: 12px;
      font-weight: $bold;
      line-height: 1;
      text-transform: uppercase;
      letter-spacing: .2em;
    }

    input {
      outline: none;
      display: block;
      background: white;
      width: 100%;
      border: 1px solid $dark-shade-25;
      border-radius: 4px;
      box-sizing: border-box;
      padding: 12px 20px;
      color: $dark-shade-100;
      font-family: 'Montserrat', sans-serif;
      font-size: inherit;
      font-weight: $semibold;
      line-height: inherit;
      transition: 0.3s ease;

      &:focus {
        border-color: $dark-shade-50;
      }
    }
  }
}
</style>
