<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
div,
p,
.p,
span {
  margin: 0;
  padding: 0;
  color: inherit;
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
