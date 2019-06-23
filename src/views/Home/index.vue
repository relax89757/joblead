<template>
  <div>
    <SearchJob></SearchJob>
    <JobList></JobList>
  </div>
</template>

<script>
import SearchJob from "@/views/Job/search.vue";
import JobList from "@/views/Job/list.vue";
import { cookiesLogin } from "@/request/account.js";
import { getCookie, setCookie } from "@/request/cookies.js";
export default {
  name: "home",
  created() {
    var token = getCookie("token");
    var userinfo = getCookie("userinfo");
    if (token && !userinfo) {
      cookiesLogin().then(response => {
        if (response.success) {
           this.$store.commit("SET_USERINFO", response.data);
          setCookie("token", response.data.TOKEN, 10000);
        }
      });
    }
  },
  data() {
    return {};
  },
  components: { JobList, SearchJob }
};
</script>
<style>
</style>
