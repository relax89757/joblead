<template>
  <div class="contain">
    <div v-if="hasResume"></div>
    <div v-else>
      <div v-if="editResume">
        <el-form
          ref="resumeForm"
          :model="resumeForm"
          :rules="resumeRules"
          class="resume-form"
          label-position="left"
        >
          <el-form-item prop="summary">
            <el-input
              ref="summary"
              v-model="resumeForm.summary"
              placeholder="summary"
              name="summary"
              type="text"
            ></el-input>
          </el-form-item>

          <el-form-item prop="license">
            <el-input
              ref="license"
              v-model="resumeForm.license"
              placeholder="license"
              name="license"
              type="text"
            ></el-input>
          </el-form-item>

          <el-form-item prop="career_interests">
            <el-input
              ref="career_interests"
              v-model="resumeForm.career_interests"
              placeholder="career_interests"
              name="career_interests"
              type="text"
            ></el-input>
          </el-form-item>

          <el-form-item prop="career">
            <el-input
              ref="career"
              v-model="resumeForm.career"
              placeholder="career"
              name="career"
              type="text"
            ></el-input>
          </el-form-item>

          <el-form-item prop="education">
            <el-input
              ref="education"
              v-model="resumeForm.education"
              placeholder="education"
              name="education"
              type="text"
            ></el-input>
          </el-form-item>

          <el-form-item prop="attachments">
            <el-input
              ref="attachments"
              v-model="resumeForm.attachments"
              placeholder="attachments"
              name="attachments"
              type="text"
            ></el-input>
          </el-form-item>
          <el-button
            class="center-button"
            :loading="loading"
            type="primary"
            style="width:100%;margin-bottom:10px;"
            @click.native.prevent="handResume"
          >Submit</el-button>
        </el-form>
      </div>
      <div v-else>
        暂无简历
        <a @click="addResume">立即创建</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { createResume ,getResumeByUserID} from "@/request/account";
import { Message } from "element-ui";
export default {
  name: "scan",
  computed: {
    ...mapGetters(["userinfo"])
  },
  data() {
    return {
      hasResume: false,
      editResume: false,
      resumeForm: {
        user_id: "",
        summary: "",
        license: "",
        career_interests: "",
        career: "",
        education: "",
        attachments: ""
      }
    };
  },
  mounted() {
    this.resumeForm.user_id = this.userinfo.USER_ID;
  },
  methods: {
    getResume() {
      getResumeByUserID(this.resumeForm.user_id).then(response => {
        if (response.success) {
          this.hasResume = true;
        } else {
          this.hasResume = false;
        }
      });
    },
    addResume() {
      this.editResume = true;
    },
    handResume() {
      createResume(this.resumeForm).then(response => {
        if (response.success) {
          alert(1);
        } else {
          Message({
            message: response.msg || "error",
            type: "error",
            duration: 5 * 1000
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.contain {
  width: 100%;
  height: 600px;
}
</style>
