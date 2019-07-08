<template>
  <div class="jb_content">
    <div class="container">
      <div id="jobs" class="joblist">
        <div v-for="(job, index) in joblist" :key="index" class="jobThumbnail">
          <div class="jobThumbnailCompanyLogo">
            <figure class="jobThumbnailCompanyLogo_figure">
              <img
                class="jobThumbnailCompanyLogoImg"
                :src="job.company_logo"
                :title="job.company_name"
              />
            </figure>
          </div>

          <div class="jobThumbnailPosition">
            <div class="jobThumbnailPositionName">
              <h3 class="positionTitle">
                <a href="http://www.jobleadchina.com/job/4165">{{job.position}}</a>
              </h3>
            </div>
            <div class="jobThumbnailSalaryRange">
              <h3 class="salaryRange">{{job.salary_range.min}} -{{job.salary_range.max}}</h3>
            </div>
            <div class="jobThumbnailPositionRequire"></div>
            <div class="jobThumbnailPositionPoint">
              <p class="positionpoint">"IELTS Speaking"</p>
            </div>
          </div>

          <div class="jobThumbnailCompany">
            <div class="jobThumbnailCompanyName">
              <h3 class="companyName">
                <a href="http://www.jobleadchina.com/job/4165">{{company_name}}</a>
              </h3>
            </div>
            <div class="jobThumbnailCompanyIndustry">
              <span>{{job.partment}}</span>
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
export default {
  data() {
    return {
      joblist: [
        {
          company_name: "LXBIRD",
          company_logo: "",
          company_website: "",
          company_id: "",
          position: "IELTS Speaking Teacher（Part-time）-Based in Shenzhe",
          work_location: "Shenzhen",
          salary_range: {
            min: "7K/MTH",
            max: "10K/MTH"
          },
          partment: "Teaching Center",
          employment_type: "",
          job_function: "",
          responsibilities: "",
          requirements: "",
          seniority_level: "",
          validity_period: "",
          filter: "",
          required_skills: "",
          create_time: "Post time: June 18, 2019"
        }
      ]
    };
  },
  components: {}
};
</script>

<style scoped>
</style>

