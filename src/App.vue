<template>
  <div id="app" v-if="flag">
    <MyHeader></MyHeader>
    <router-view />
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from "@/views/Header/index.vue";
import MyFooter from "@/views/Footer/index.vue";
import { getConfig } from "@/request/account";
export default {
  components: { MyHeader, MyFooter },
  data() {
    return {
      flag: false
    };
  },
  created() {
    this.getConfigrature();
  },
  methods: {
    getConfigrature() {
      getConfig({}).then(response => {
        if (response.success) {
          this.$store.commit("SET_CONFIG", response.data);
          this.flag = true;
          console.log(this.flag);
        } else {
          this.message = response.msg;
          this.flag = true;
        }
      });
    }
  }
};
</script>

<style  src="./assets/css/bootstrap.css"></style>
<style  src="./assets/css/font-awesome.min.css"></style>
<style  src="./assets/css/main.css"></style>
<style >
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
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
