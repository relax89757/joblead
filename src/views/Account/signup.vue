<template>
  <div class="login">
    <form action>
      用户名
      <input type="text" id="username" name="username">
      密码
      <input type="password" id="password" name="password">
      <input type="submit" id="submit" name="submit">
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formaction: "",

    };
  },
  methods: {
    login() {
        
    }
  },
  components: {}
};
</script>


<style>
.login {
  width: 100%;
  height: 600px;
  background-image: url(http://www.jobleadchina.com/uploads/index_img.jpg);
  background-size: cover;
}
</style>
