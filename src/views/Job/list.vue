<template>
  <div class="jb_content">
    <div class="container">
      <div id="jobs" class="joblist">
        <div v-for="(job, index) in joblist" :key="index" class="jobThumbnail">
          <div class="jobThumbnailCompanyLogo">
            <div class="jobThumbnailCompanyLogo_figure">
              <img
                v-if="job.company&&job.company.logo_url"
                class="jobThumbnailCompanyLogoImg"
                :src="job.company.logo_url"
                :title="job.company.brand_name"
              />
              <img
                v-else
                class="jobThumbnailCompanyLogoImg"
                :src="logo"
                :title="job.company.brand_name"
              />
            </div>
          </div>

          <div class="jobThumbnailPosition">
            <div class="jobThumbnailPositionName">
              <h3 class="positionTitle">
                <router-link :to="'/detail/'+ job.job_id">
                  <a>{{job.position}}</a>
                </router-link>
              </h3>
            </div>
            <div class="jobThumbnailSalaryRange" v-if="job.salary">${{job.salary}}</div>
            <div class="jobThumbnailPositionRequire">
              <span>{{job.required_skills}}</span>
              <span class="seperate-line"></span>
              <!-- <span>{{job.job_function}}</span>
              <span class="seperate-line"></span> -->
              <span>{{job.employment_type}}</span>
            </div>
            <div class="jobThumbnailPositionPoint">{{job.description}}</div>
          </div>

          <div class="jobThumbnailCompany">
            <div class="jobThumbnailCompanyName">
              <h3 class="companyName">
                <a href="http://www.jobleadchina.com/job/4165">{{job.company.brand_name}}</a>
              </h3>
            </div>
            <div class="jobThumbnailCompanyIndustry">
              <span>{{job.job_function}}</span>
              <span class="seperate-line"></span>
              <span>{{job.work_location}}</span>
            </div>
            <div class="jobThumbnailWalfareTag"></div>
            <div class="timestamp">
              <i class="glyphicon glyphicon-time post-time"></i>
              <span class="post-time">{{job.create_time}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { searchJobList } from "@/request/account";
import { Message } from "element-ui";
import bus from "@/assets/js/bus.js";
export default {
  data() {
    return {
      joblist: [
        // {
        //   company: {
        //     brand_name: "LXBIRD",
        //     company_logo: "",
        //     company_website: ""
        //   },
        //   company_id: "",
        //   position: "IELTS Speaking Teacher（Part-time）-Based in Shenzhe",
        //   work_location: "Shenzhen",
        //   salary: "10K/MTH",
        //   salary_range: {
        //     min: "7K/MTH",
        //     max: "10K/MTH"
        //   },
        //   partment: "Teaching Center",
        //   employment_type: "",
        //   job_function: "Software ",
        //   responsibilities: "",
        //   requirements: "",
        //   seniority_level: "",
        //   validity_period: "",
        //   filter: "",
        //   required_skills: "",
        //   create_time: "Post time: June 18, 2019"
        // }
      ],
      logo: require("@/assets/img/logo_holder.png"),
      url: ""
    };
  },
  mounted() {
    this.getJobList();
    var that = this;
    bus.$on("getjoblist", (searchObj) => {
      that.getJobList(searchObj);
    });
  },
  methods: {
    getJobList(searchObj) {
      let that = this;
      searchJobList(searchObj).then(response => {
        if (response.success) {
          that.joblist = response.data;
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
    }
  },
  components: {}
};
</script>

<style scoped>
.jobThumbnail {
  display: flex;
  width: 980px !important;
  font-size: 16px;
  margin: 10px auto;
  text-align: left;
}

.jobThumbnailCompanyLogo,
.companyThumbnailCompanyLogo {
  flex: 1;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  position: relative;
  height: 150px;
}

.jobThumbnailCompanyLogo_figure,
.companyThumbnailCompanyLogo_figure {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.jobThumbnailCompanyLogoImg,
.companyThumbnailCompanyLogoImg {
  width: 100%;
  max-height: 100%;
}

.jobThumbnailPosition {
  flex: 3;
  margin: 10px;
}

.jobThumbnailCompany {
  flex: 2;
  margin: 10px;
  margin-left: 30px;
}
.positionTitle {
  /* font-size: 18px; */
  color: #004785;
  margin: 4px 0 10px;
}
.jobThumbnailSalaryRange {
  font-size: 18px;
  margin: 4px 0;
}
.jobThumbnailPositionRequire {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin-top: 16px;
}
.seperate-line {
  width: 1px;
  height: 10px;
  display: inline-block;
  margin: 0 4px;
  background: #004785;
}
/* .jobThumbnailPositionRequire span{
  border-right:2px solid #004785;
}
.jobThumbnailPositionRequire span ::after{
   width: 1px;
  height: 10px;
  display: inline-block;
  content:"";
  margin: 0 4px;
  background: #004785;
} */
.jobThumbnailPositionPoint {
  margin-top: 10px;
}
.jobThumbnailCompanyIndustry {
  margin-top: 25px;
}
.timestamp {
  margin-top: 10px;
  color: #999;
  font-size: 14px;
}
.companyName {
  font-size: 18px;
  color: #004785;
}
.companyName a {
  color: #004785;
}
</style>

