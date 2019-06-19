<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <MyHeader></MyHeader>
    <router-view/>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from "@/views/Header/index.vue";
import MyFooter from "@/views/Footer/index.vue";
export default {
  components: { MyHeader, MyFooter }
};
</script>
<style  src="./assets/css/main.css"></style>
<style  src="./assets/css/bootstrap.css"></style>
<style  src="./assets/css/font-awesome.min.css"></style>
<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size:14px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
