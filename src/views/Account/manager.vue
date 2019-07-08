<template>
  <div class="contain">
    <el-tabs tab-position="left" style="height: 600px;">
      <el-tab-pane label="用户管理">
        <UserInfo></UserInfo>
      </el-tab-pane>
      <el-tab-pane label="简历管理">
          <Resume></Resume>
      </el-tab-pane>
      <el-tab-pane label="公司管理">
          <Company></Company>
      </el-tab-pane>
      <el-tab-pane label="职位收藏">
          <Collect></Collect>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserInfo from "@/views/Account/info.vue";
import Resume from "@/views/Resume/scan.vue";
import Company from "@/views/Company/create.vue";
import Collect from "@/views/Job/collect.vue";
export default {
  components: {
    UserInfo,
    Resume,
    Company,
    Collect
  },
  computed: {
    ...mapGetters(["userinfo"])
  }
};
</script>

<style scoped>
.contain {
  margin: 40px auto;
  width: 60%;
  height: 600px;
}
</style>
