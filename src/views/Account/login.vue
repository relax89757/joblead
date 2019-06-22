<template>
  <div class="login">
    <form action>
      <input type="text" id="username" class="username" name="username" v-model="username">
      <input type="password" id="password" class="password" name="password" v-model="password">
      <input type="button" id="submit" name="submit" @click="login">
    </form>
  </div>
</template>

<script>
import { userLogin } from "@/request/account.js";
import { setCookie } from "@/request/cookies.js";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      setCookie("sp", this.username, 10000);
      setCookie("ssp", this.password, 10000);
      userLogin().then(response => {});
    }
  },
  components: {}
};
</script>


<style>
.login {
  width: 100%;
  height: 800px;
  background-image: url(http://www.jobleadchina.com/uploads/index_img.jpg);
  background-size: cover;
}

.username {
  font-size: 16px;
  font-family: Lato, sans-serif;
  color: rgb(80, 88, 99);
  width: 100%;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(196, 199, 204);
  border-image: initial;
  padding: 0px 12px;
  padding-top: 16px;
  height: 48px;
}
.password {
}
</style>
