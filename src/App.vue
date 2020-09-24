<template>
  <div id="app">
      <header-component/>
      <main-wrapper></main-wrapper>
      <footer-component/>
  </div>
</template>

<script>
import HeaderComponent  from "./components/Header.vue";
import MainWrapper  from "./components/MainWrapper.vue";
import FooterComponent  from "./components/Footer.vue";
export default {

  name: 'App',
  components: {
    MainWrapper,
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
