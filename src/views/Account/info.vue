<template>
  <div class="contain">
    <div>用户名：{{userinfo.USER_NAME}}</div>
    <div>电话：{{userinfo.PHONE}}</div>
    <div>邮箱：{{userinfo.EMAIL}}</div>
    <div>注册时间：{{userinfo.CREATE_TIME}}</div>
    <div>地址：{{userinfo.ADDRESS}}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["userinfo"])
  }
};
</script>

<style scoped>
.contain {
  width: 100%;
}
</style>
