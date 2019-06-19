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
            <!-- <li class="menu-active">
              <router-link to="/">Home</router-link>|
            </li> -->
            <li>
              <!-- <a href="about-us.html">About Us</a> -->
              <router-link to="/jobs">Find jobs</router-link>|
            </li>
            <li>
              <!-- <a href="category.html">Category</a> -->
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
            <!-- <li class="menu-has-children">
              <a href class="sf-with-ul">Pages</a>
              <ul>
                <li>
                  <a href="elements.html">elements</a>
                </li>
                <li>
                  <a href="search.html">search</a>
                </li>
                <li>
                  <a href="single.html">single</a>
                </li>
              </ul>
            </li> -->
            <li>
              <a class="ticker-btn" href="#">Signup</a>
            </li>
            <li>
              <a class="ticker-btn" href="#">Login</a>
            </li>
          </ul>
        </nav>
        <!-- #nav-menu-container -->
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
