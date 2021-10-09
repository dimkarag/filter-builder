<template>
  <v-app id="app">
    <example />
  </v-app>
</template>

<script>
import example from './components/Example.vue'

export default {
  name: 'App',
  components: {
    example
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
}
.v-application--wrap {
  flex-direction: row!important;
}
</style>