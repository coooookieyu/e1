<template>
  <div id="app">
    <UserBox/>
  </div>
</template>

<script>
import UserBox from "@/components/UserBox.vue";

export default {
  name: 'App',
  components: {
    UserBox
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
