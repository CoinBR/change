<template>
  <div id="app">
    <give-change :numberOfToPayFields="4">
    </give-change>
  </div>
</template>

<script>
import GiveChange from './components/GiveChange.vue'

export default {
  name: 'App',
  components: {
    GiveChange
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
  margin-top: 60px;
}
</style>
