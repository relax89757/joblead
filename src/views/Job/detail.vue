<template>
  <div class="job_company_info" v-if="jobInfo">
    <div class="job_info">
      <div class="job_basic_info">
        <ul class="detail-position-item list-unstyled">
          <li>
            <div class="position_title">
              <h2>{{jobInfo.position}}</h2>
            </div>
          </li>
          <li>
            <h4 class="job_company_name">{{jobInfo.company.brand_name}}</h4>
          </li>
          <li class="detail-position-item-point">
            <span>{{jobInfo.salary}}</span>
            <span>{{jobInfo.work_location}}</span>
          </li>
          <li>
            <span>{{jobInfo.required_skills}}</span>
            <span class="seperate-line"></span>
            <span>{{jobInfo.job_function}}</span>
            <span class="seperate-line"></span>
            <span>{{jobInfo.employment_type}}</span>
          </li>
          <li>
            <i class="glyphicon glyphicon-time icon-post-time"></i>
            <span class="post-time">{{jobInfo.create_time}}</span>
          </li>
        </ul>
      </div>

      <button class="btn btn-primary job_apply_btn" @click="applyJobBox">申请岗位</button>

      <div class="job_description_and_other">
        <div class="job_description">
          <div class="item-content">
            <h4 class="color-line">职位描述</h4>
            <div v-if="jobInfo.responsibilities">
              <div v-for="(responsibilitie ,index ) in jobInfo.responsibilities" :key="index">
                <p>{{index+1}}.{{responsibilitie}}</p>
              </div>
            </div>
            <hr />
          </div>
        </div>

        <div class="job_desired_skill_and_experience">
          <div class="item-content">
            <h4 class="color-line">期望的技能和经验</h4>
            <div v-if="jobInfo.requirements">
              <div v-for="(requirement ,index ) in jobInfo.requirements" :key="index">
                <p>{{index+1}}.{{requirement}}</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>

    <div class="company_info">
      <div class="company_logo">
        <div class="companyThumbnailCompanyLogo">
          <img
            class="companyThumbnailCompanyLogoImg"
            :src="jobInfo.company.logo_url"
            :title="jobInfo.company.brand_name"
            :alt="jobInfo.company.brand_name"
          />
        </div>
        <label class="company_info_name">{{jobInfo.company.brand_name}}</label>
      </div>

      <div class="company_basic_info">
        <ul class="company-info-content">
          <li>
            <div class="basic_info_container">
              <div class="basic_info_item">行业</div>
              <div class="basic_info_content">{{jobInfo.company.industry}}</div>
            </div>
          </li>

          <li>
            <div class="basic_info_container">
              <div class="basic_info_item">成立</div>
              <div class="basic_info_content">{{jobInfo.company.founded}}</div>
            </div>
          </li>
          <li>
            <div class="basic_info_container">
              <div class="basic_info_item">规模</div>
              <div class="basic_info_content">{{jobInfo.company.size}}</div>
            </div>
          </li>

          <li>
            <div class="basic_info_container">
              <div class="basic_info_item">主页</div>
              <div class="basic_info_content">
                <a
                  :href="jobInfo.company.website"
                  target="_blank "
                  rel="nofollow"
                >{{jobInfo.company.website}}</a>
              </div>
            </div>
          </li>

          <li>
            <div class="basic_info_container">
              <div class="basic_info_item">地址</div>
              <div class="basic_info_content">{{jobInfo.company.address}}</div>
            </div>
          </li>
        </ul>
      </div>

      <div class="company_description">
        <div class="company_item-content">
          <h4 class="color-line">公司介绍</h4>
          <p>{{jobInfo.company.introduce}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getJobInfoByJobID,
  applyJob,
  getResumeByUserID
} from "@/request/account";
import { mapGetters } from "vuex";
import { Message } from "element-ui";
export default {
  data() {
    return {
      job_id: "",
      user_id: "",
      jobInfo: {}
    };
  },
  computed: {
    ...mapGetters(["userinfo"])
  },
  mounted() {
    this.job_id = this.$route.params && this.$route.params.id;
    this.user_id = this.userinfo.user_id;
    this.getJobInfoByJobID();
  },
  methods: {
    getJobInfoByJobID() {
      let that = this;
      var id = this.$route.params && this.$route.params.id;
      getJobInfoByJobID(id).then(response => {
        if (response.success) {
          this.jobInfo = response.data;
          // that.joblist.push(response.data[0]);
          // console.log(response.data);
        } else {
          Message({
            message: response.msg || "error",
            type: "error",
            duration: 5 * 1000
          });
        }
      });
    },
    openLink(id) {
      this.url = "http://www.jobleadchina.com/job/" + id;
      window.open(this.url, "_blank");
    },
    applyJobBox() {
      this.$confirm("确定发送简历到HR申请职位?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          getResumeByUserID({ user_id: this.user_id }).then(response => {
            if (response.success) {
              var resume_id = response.data.resume_id;
              applyJob({
                job_id: this.job_id,
                user_id: this.user_id,
                resume_id: resume_id
              }).then(response => {
                if (response.success) {
                  Message({
                    message: "简历已发送",
                    type: "success",
                    duration: 5 * 1000
                  });
                }
              });
            } else {
              Message({
                message: "还没有简历，快去创建简历吧!",
                type: "error",
                duration: 5 * 1000
              });
              this.$router.push("/manager?id=1");
            }
          });
        })
        .catch(() => {});
    }
  },
  components: {}
};
</script>

<style scoped>
/*job detail页面*/

.position_title_amount {
  display: flex;
}

.position_title {
  flex: 4;
}

.position_apply_amount {
  flex: 1;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #004785;
}
/*left position info*/

.left-position {
  width: 600px;
  background-color: #fff;
  margin-bottom: 50px;
}

.detail-position-item {
  padding-top: 10px;
}

.detail-position-item li {
  margin: 20px;
}

.detail-position-item-point span {
  font-size: 18px;
  padding-right: 50px;
}

.detail-position-item h2,
.detail-position-item h4 {
  color: #004785;
}

.detail-position-item .benefit span {
  display: inline-block;
  margin-bottom: 10px;
}

/*职位信息与公司信息切换；申请该岗位*/

#button-apply {
  padding: 6px 85px;
  margin-right: 20px;
  float: right;
}

.nav-pills li {
  margin: 0 0 0 20px;
}

/*岗位、公司描述*/

.item-content {
  margin: 20px;
  font-size: 14px;
  overflow: hidden;
  width: 680px;
}

.company_item-content {
  margin: 20px;
  font-size: 14px;
  overflow: hidden;
  width: 680px;
  width: 280px;
}

.item-content p {
  color: #666;
  word-wrap: break-word;
  word-break: normal;
}

.color-line {
  border-left: 5px solid #004785;
  padding-left: 10px;
}

/*公司信息概览*/

#sidebar {
  width: 330px;
}

.company-info {
  background-color: #fff;
  display: flex;
  margin-bottom: 30px;
}

.company-info-logo {
  width: 150px;
  height: 150px;
  margin: 0 auto;
}

.company-info-title {
  text-align: center;
  padding: 20px;
}

.company-info-title p {
  color: #004785;
  font-size: 18px;
  margin-top: 10px;
}

.company-info-content {
  padding: 0 0 30px 0;
  margin: 0 20px;
  margin-right: 0;
  list-style: none;
}

.company-info-content li span {
  padding-right: 8px;
  display: inline-block;
  width: 80px;
  margin-bottom: 5px;
  color: #999;
}

.company-info-content li {
  overflow: hidden;
}

.job_company_info {
  display: flex;
  max-width: 1140px;
  margin: 0 auto;
  text-align: left;
}

.job_info {
  background-color: white;
  padding: 20px;
  margin: 20px;
  width: 760px;
  margin-left: 0;
}

.company_info {
  flex: 1;
  padding: 20px;
  margin: 20px;
  background-color: white;
  width: 360px;
  margin-left: 0;
}

.companyThumbnailCompanyLogo {
  width: 250px;
  height: 250px;
  margin: 0 auto;
}

.companyThumbnailCompanyLogo_figure {
  width: 250px;
  height: 250px;
}

.job_company_name {
  font-weight: 400;
}

.job_apply_bar_url {
  display: flex;
}

.job_apply_bar_title {
  flex: initial;
  width: 200px;
  min-width: 100px;
  margin: 0;
  background-color: #004785;
  float: left;
}

.job_apply_btn {
  float: right;
  width: 160px;
  min-width: 80px;
  flex: initial;
  margin: 0;
  background-color: #004785;
  border-radius: 2px;
}
.job_apply_btn:hover {
  background-color: #007bff;
}

.job_apply_placeholder {
  flex: 1;
  height: 10px;
  margin: 0;
}

.company_info_name {
  display: inline-block;
  margin: 20px;
  font-size: 25px;
  font-weight: normal;
  color: #333;
  line-height: 1.428571429;
}
.basic_info_container {
  position: relative;
}
.basic_info_content {
  display: inline-block;
  width: 200px;
  margin-left: 80px;
}
.basic_info_item {
  display: inline-block;
  position: absolute;
  left: 0;
  width: 100px;
  padding-right: 8px;
  display: inline-block;
  width: 80px;
  margin-bottom: 5px;
  color: #999;
}
.basic_info_label {
  width: 100%;
  font-weight: normal;
}

.refine-position {
  padding-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 20px;
}
.seperate-line {
  width: 1px;
  height: 10px;
  display: inline-block;
  margin: 0 4px;
  background: #004785;
}
.companyThumbnailCompanyLogo img {
  width: 80%;
}
</style>
