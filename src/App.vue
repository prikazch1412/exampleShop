<template>
  <div id="app">
      <header-component></header-component>
      <router-view class="main-wrapper"></router-view>
      <footer-component/>
  </div>
</template>

<script>
import HeaderComponent  from "./components/Header.vue";
import FooterComponent  from "./components/Footer.vue";
export default {

  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style scoped>
#app{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.main-wrapper{
  flex: 1;
}
</style>
