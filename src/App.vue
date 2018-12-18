<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  color: $dark-shade-100;
  font-family: 'Montserrat', sans-serif;
  margin-top: 60px;
  padding: 1rem 1.7rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// HEADINGS
h1 {
  color: $purple;
  font-size: 1.3rem;
  font-weight: bold;
  margin: .5rem 0 2rem 0;
}

// BUTTONS
.btn-primary {
  background: $purple;
  border-radius: 8px;
  border: none;
  box-shadow: 1px 1px 8px rgba(108, 99, 255, 0.5);
  color: white;
  display: flex;
  font-size: 14px;
  font-weight: bold;
  justify-content: center;
  margin-top: 2rem;
  padding: .8rem 1rem;
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

  &.disabled {
    cursor: not-allowed;
    opacity: .5;
  }
}

// INPUTS
.form-group {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 0 1.3rem;

  &:last-child {
    margin: 0;
  }

  label {
    margin: 0 0 10px;
    color: $dark-shade-100;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: bold;
    line-height: 1;
    text-align: left;
    text-transform: uppercase;
  }

  input,
  textarea,
  select {
    background: white;
    border: 1px solid $dark-shade-25;
    border-radius: 6px;
    box-sizing: border-box;
    color: $dark-shade-100;
    display: block;
    font-family: 'Montserrat', sans-serif;
    font-size: inherit;
    outline: none;
    padding: 12px 20px;
    line-height: inherit;
    transition: 0.3s ease;
    width: 100%;

    &:focus {
      border-color: $dark-shade-50;
    }

    &::placeholder {
      color: $dark-shade-50;
    }
  }
}
</style>
