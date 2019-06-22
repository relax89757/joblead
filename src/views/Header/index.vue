<template>
  <header id="header">
    <div class="container">
      <div class="row align-items-center justify-content-between d-flex">
        <div id="logo">
          <router-link to="/">
            <img
              src="http://www.jobleadchina.com/images/logo.png"
              alt="jobleadchina"
              title="jobleadchina"
            >
          </router-link>|
        </div>
        <nav id="nav-menu-container">
          <ul class="nav-menu">
            <li>
              <router-link to="/jobs">Find jobs</router-link>|
            </li>
            <li>
              <router-link to="/">Post jobs</router-link>|
            </li>
            <li>
              <a href="price.html">Headhunter(猎头服务)</a>
            </li>
            <li>
              <a href="blog-home.html">About Us</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
            <li>
              <router-link to="/signup">Signup</router-link>|
            </li>
            <li>
              <router-link to="/login">Login</router-link>|
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MyHeader",
  data() {
    return {};
  },
  components: {}
};
</script>

<style>
</style>
