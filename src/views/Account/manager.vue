<template>
  <div class="contain container">
    <div class="head-title">
      <div class="head-left">
        <h2>Hi,{{userinfo.first_name + userinfo.last_name}}!</h2>
      </div>
      <div>
        <el-upload
          class="avatar-uploader"
          action="http://www.pusaz.com:18080/file/upload"
          :data="uploadParams"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="avatar_url" :src="avatar_url" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
    </div>
    <el-tabs tab-position="left" @tab-click="handleClick"  v-model="selNum">
      <el-tab-pane label="用户管理">
        <UserInfo :imageUrl="avatar_url"></UserInfo>
      </el-tab-pane>
      <el-tab-pane label="简历管理">
        <Resume></Resume>
      </el-tab-pane>
      <el-tab-pane label="公司管理">
        <Company></Company>
      </el-tab-pane>
      <el-tab-pane label="职位管理">
        <Post></Post>
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
import Post from "@/views/Job/post.vue";
import { Message } from "element-ui";
export default {
  data() {
    return {
      selNum: 0,
      avatar_url: "",
      uploadParams: {
        type: "user",
        folderName: ""
      }
    };
  },
  components: {
    UserInfo,
    Resume,
    Company,
    Collect,
    Post
  },
  computed: {
    ...mapGetters(["userinfo"])
  },
  mounted() {
    this.avatar_url = this.userinfo.avatar_url;
    this.uploadParams.folderName = this.userinfo.user_id;
    if (this.$route.query.id) {
      this.selNum = this.$route.query.id;
    }
  },
  methods: {
    handleClick(tab, event) {
      this.selNum = tab.index;
    },
    handleAvatarSuccess(res) {
      if (res.success && res.data.length > 0) {
        this.avatar_url = res.data;
      } else {
        Message({
          message: res.msg || "error",
          type: "error",
          duration: 5 * 1000
        });
      }
    },
    beforeAvatarUpload() {}
  }
};
</script>

<style scoped>
.contain {
  margin: 30px auto;
  width: 60%;
}
.head-title {
  height: 140px;
  padding: 10px 20px 10px 120px;
  margin: 20px 0 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head-left {
  text-align: left;
  margin-right: 40px;
  flex: 1;
  border-bottom: 1px solid #eee;
}
.head-id {
  margin-right: 10px;
}
h2 {
  color: #000;
}
.head-right {
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}
.head-right.avatar {
  width: 120px;
  height: 140px;
}
.head-right.logo {
  width: 120px;
  height: 120px;
}
.head-right img {
  width: 100%;
  height: 100%;
}
.imgbtn {
  display: none;
  position: absolute;

  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: #004785c4;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}
.head-right:hover .imgbtn {
  display: block;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
