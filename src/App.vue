<template>
  <div id="app">
    <router-view/>
    <Lightboxes></Lightboxes>
  </div>
</template>

<script>
import Lightboxes from '@/components/Lightboxes'

export default {
  name: 'App',
  components: {
    Lightboxes
  }
}
</script>

<style lang="scss">
body {
  position: relative;

  &.home {
    background: linear-gradient(270deg, #F8A4D8 0%, #6C63FF 100%);
  }

  &.done {
    background: linear-gradient(270deg, #66D2EA 0%, #6FCF97 100%);
    color: white;

    p, h1 {
      color: white;
    }
  }
}

#app {
  color: $dark-shade-100;
  font-family: 'Montserrat', sans-serif;
  margin-top: 60px;
  padding: 1rem 1.4rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.row-flex {
  display: flex;
  flex-wrap: wrap;
  margin: .5rem 0 0;
}

// HEADINGS
h1.purple {
  color: $purple;
  font-size: 1.3rem;
  font-weight: bold;
  margin: 1rem 0 2rem 0;
}

h1.gradient {
  background: -webkit-linear-gradient(0deg, #6C63FF 0%, #F8A4D8 60%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: $purple;
  font-size: 1.3rem;
  line-height: 1.5;
  margin: 1rem 0 2rem 0;
}

hr {
  border: 1px solid $dark-shade-25;
  margin: 1.5rem 0;
  opacity: .4;
}

// BUTTONS
.btn-primary {
  background: $purple;
  border-radius: 8px;
  border: none;
  box-shadow: 1px 1px 8px rgba(108, 99, 255, 0.5);
  color: white;
  display: flex;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: bold;
  justify-content: center;
  margin-top: 2rem;
  min-height: 50px;
  padding: 1rem;
  text-align: center;
  text-transform: uppercase;
  width: 100%;

  &:hover {
    background: darken($purple, 15);
    transform: translateY(4px);
  }

  svg {
    margin-right: .8rem;
    flex-shrink: 0;
  }

  &.btn-green {
    background: $green;
    box-shadow: 1px 1px 8px rgba(111, 207, 151, 0.5);

    &:hover {
      background: darken($green, 15);
    }
  }

  &.btn-red {
    background: $red;
    box-shadow: 1px 1px 8px rgba(255, 99, 99, .5);

    &:hover {
      background: darken($red, 15);
    }
  }

  &.btn-white {
    border-radius: 8px;
    box-shadow: 1px 1px 8px rgba(108, 99, 255, 0.5);
    background: white;
    color: $purple;
  }

  &.disabled {
    cursor: not-allowed;
    opacity: .5;
  }

  &.btn-line {
    align-items: center;
    background: white;
    border: 2px solid $purple;
    box-shadow: none;
    color: $purple;
    flex: 1;
    margin-top: 0;
    padding: .3rem 1rem;

    &:hover {
      background: $purple;
      color: white;
    }

    svg {
      fill: $purple;
      width: 15px;
    }
  }

  &.btn-line-transparent {
    border: 2px solid white;
    border-radius: 8px;
    background: transparent;
    color: white;
  }
}

.btn-icon {
  position: relative;

  svg {
    fill: white;
    left: 15%;
    position: absolute;
    top: 4px;
    width: 25px;
  }
}

// INPUTS
.form-group {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
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
    padding: .8rem 1rem;
    line-height: inherit;
    transition: 0.3s ease;
    width: 100%;

    &:focus {
      border-color: $dark-shade-50;
    }

    &::placeholder {
      color: $dark-shade-50;
    }

    &:valid {
      border-color: $green;
    }

    &:invalid {
      // border-color: $red;
    }
  }

  svg {
    bottom: 5px;
    fill: $purple;
    position: absolute;
    right: 1.5rem;
    width: 20px;
  }
}

// RADIO
.radio{
  display: block;
  cursor: pointer;
  user-select:none;
  text-align: left;

  &+.radio{
    margin-left: 2rem;
  }

  input{
    display: none;

    &+span{
      display: inline-block;
      font-weight: 400;
      line-height: 1.1;
      position: relative;
      padding-left: 24px;

      &:before{
        content: '';
        display: block;
        position: absolute;
        top: 0px;
        left: 0px;
        border-radius: 50%;
        margin-right: 5px;
        width: 16px;
        height: 16px;
        border: 1px solid $purple;
        background: #fff;
      }

      &:after{
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        background: $purple;
        position: absolute;
        border-radius: 50%;
        top: 4px;
        left: 4px;
        opacity: 0;
        transform: scale(0,0);
        transition: all .2s cubic-bezier(0.64, 0.57, 0.67, 1.53);
      }
    }

    &:checked+span:after{
      opacity: 1;
      transform: scale(1,1);
    }
  }
}

// LIGHTBOX
.lightbox {
  align-items: center;
  background-color: rgba(255, 255, 255, .8);
  display: flex;
  height: 100vh;
  left: 0;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 900;

  .lightbox-content {
    animation: fadeInUp .6s ease;
    background: white;
    box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.1);
    border-radius: 6px;
    display: flex;
    height: 300px;
    flex-direction: column;
    margin: .6rem;
    padding: 1.5rem 2rem;
    width: 100%;

    .lightbox-header {
      align-items: center;
      display: flex;

      h2 {
        background: -webkit-linear-gradient(0deg, #6C63FF 0%, #F8A4D8 70%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: $purple;
        font-size: .9rem;
        font-weight: bold;
        text-transform: uppercase;
      }

      .close {
        margin-left: auto;

        svg {
          fill: $dark-shade-50;
          height: 20px;
          width: 20px;
        }
      }
    }

    .lightbox-inside {
      display: flex;
      flex-direction: column;
      margin: auto 0;
      width: 100%;

      h3 {
        font-size: .9rem;
      }

      .tupper-name {
        font-weight: bold;
        margin-top: 1.8rem;
        padding: 1rem 1rem 1rem 2.8rem;
        position: relative;

        h3 {
        font-size: 1.2rem;
        line-height: 1.5;
        }

        svg {
          top: 1rem;
          fill: black;
          left: .2rem;
          position: absolute;
          width: 30px;
        }
      }
    }

    .lightbox-btn {
      align-items: center;
      display: flex;
      width: 100%;

      .btn-primary {
        margin: 0 .5rem;
        flex: 1;
      }
    }
  }
}
</style>
