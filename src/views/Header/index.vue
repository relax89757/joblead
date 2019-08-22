<template>
  <header id="header">
    <div class="container">
      <div class="row align-items-center justify-content-between d-flex">
        <div id="logo">
          <router-link to="/">
            <img src="../../assets/img/logo.png" alt="jobleadchina" title="jobleadchina" />
          </router-link>|
        </div>
        <nav id="nav-menu-container">
          <ul class="nav-menu">
           <li>
              <router-link to="/">Homepage</router-link>|
            </li>
            <li>
              <router-link to="/postjob">Post jobs</router-link>|
            </li>
            <li v-if="!isLogin">
              <router-link to="/login">Login</router-link>|
            </li>
            <li v-else class="wrap">
              <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
                <div class="avatar-wrapper">
                  <img src="../../assets/img/profile-icon01.png" class="user-avatar" />
                  <span class="nickname">{{userinfo.USER_NAME}}</span>
                  <span class="caret"></span>
                </div>
                <el-dropdown-menu slot="dropdown">
                  <router-link to="/manager">
                    <el-dropdown-item>Manager</el-dropdown-item>
                  </router-link>
                  <!-- <router-link to="/resume">
                    <el-dropdown-item>Resume</el-dropdown-item>
                  </router-link>-->
                  <el-dropdown-item>
                    <span style="display:block;" @click="logout">Logout</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MyHeader",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["isLogin", "userinfo"])
  },
  components: {},
  methods: {
    async logout() {
      this.$store.commit("SET_USERINFO", null);
      this.$router.push(`/`);
    }
  }
};
</script>

<style scoped>
.wrap {
  padding: 6px 10px;
  text-decoration: none;
  display: inline-block;

  cursor: pointer;
}
.nickname {
  font-weight: 400;
  color: #fff;
  font-size: 12px;
  text-transform: uppercase;
  outline: none;
}
.wrap .caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px solid #fff;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}
.wrap:hover .nickname {
  color: #b3b3b3;
  background-color: #004785;
}
.wrap:hover .caret {
  border-top: 4px solid #b3b3b3;
}
.user-avatar {
  width: 20px;
  height: 20px;
}
</style>
