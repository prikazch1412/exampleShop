<template>
  <div id="app">
      <header-component></header-component>
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
</style>
