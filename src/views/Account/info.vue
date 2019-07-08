<template>
  <div class="contain">
    <div>用户ID：{{userinfo.USER_ID}}</div>
    <div>用户名：{{userinfo.FIRST_NAME}} {{userinfo.LAST_NAME}}</div>
    <div>手机号：{{userinfo.PHONE}}</div>
    <div>生日：{{userinfo.BIRTH_DTAE}}</div>
    <div>性别：{{userinfo.GENDER}}</div>
    <div>国籍：{{userinfo.CONUTRY}}</div>
    <div>电子邮件：{{userinfo.EMAIL}}</div>
    <div>头像：{{userinfo.AVTAR_URL}}</div>
    <div>母语：{{userinfo.NATIVE_LANGUAGE}}</div>
    <div>地址：{{userinfo.ADDRESS}}</div>
    <div>当前居住地：{{userinfo.CURRENT_LOACTION}}</div>
    <div>语言：{{userinfo.FOREIGN_LANG_LIST}}</div>
    <div>社交账号：{{userinfo.CONTACT_INFO}}</div>
    <div>注册时间：{{userinfo.CREATE_TIME}}</div>
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
