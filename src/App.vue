<template>
  <div id="app">
    <!-- <img alt="Vue logo"
         src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  #app {
    margin: 0 auto;
    padding: 0;
  }
</style>
