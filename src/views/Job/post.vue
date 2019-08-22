<template>
  <div class="contain">
    <div v-if="userinfo.user_id">
      <div v-if="postFlag">
        <el-form
          ref="jobForm"
          :model="jobForm"
          :rules="infoRules"
          class="job-form"
          label-position="left"
          label-width="100px"
        >
          <el-form-item prop="position" label="职位名称">
            <el-input ref="position" v-model="jobForm.position" name="position" type="text"></el-input>
          </el-form-item>

          <el-form-item prop="work_location" label="工作地点">
            <el-select
              v-model="jobForm.work_location"
              filterable
              allow-create
              default-first-option
              style="width:100%"
            >
              <el-option
                v-for="(item,index) in citylist"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item prop="employment_type" label="职位类型">
            <el-select
              v-model="jobForm.employment_type"
              filterable
              allow-create
              default-first-option
              style="width:100%"
            >
              <el-option
                v-for="(item,index) in employmentlist"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="employment_type" label="行业">
            <el-cascader
              :options="industrylist"
              v-model="jobForm.job_function"
              :show-all-levels="false"
              style="width:100%"
            ></el-cascader>
          </el-form-item>
          <el-form-item
            :label="'工作职责'+(index+1)"
            v-for="(requirement ,index) in  jobForm.requirements"
            :key="'requirement'+index"
            :rules="infoRules.requirements"
          >
            <div style="display:flex">
              <el-input
                ref="requirements"
                name="requirements"
                v-model="jobForm.requirements[index]"
                type="text"
              ></el-input>
              <el-button class="center-button" type="primary" @click="addRequirement">+</el-button>
              <el-button
                class="center-button"
                v-if="jobForm.requirements.length>1"
                type="primary"
                @click="delRequirement(index)"
              >-</el-button>
            </div>
          </el-form-item>

          <el-form-item
            :label="'岗位要求'+(index+1)"
            v-for="(responsibilitie ,index) in  jobForm.responsibilities"
            :key="'responsibilitie'+index"
            :rules="infoRules.responsibilities"
          >
            <div style="display:flex">
              <el-input
                ref="responsibilitie"
                name="responsibilitie"
                v-model="jobForm.responsibilities[index]"
                type="text"
              ></el-input>
              <el-button class="center-button" type="primary" @click="addResponsibilitie">+</el-button>
              <el-button
                class="center-button"
                type="primary"
                v-if="jobForm.responsibilities.length>1"
                @click="delResponsibilitie(index)"
              >-</el-button>
            </div>
          </el-form-item>

          <el-form-item prop="required_skills" label="所需技能">
            <el-input
              ref="required_skills"
              v-model="jobForm.required_skills"
              name="required_skills"
              type="textarea"
            ></el-input>
          </el-form-item>

          <el-form-item prop="salary" label="薪资范围">
            <el-select
              v-model="jobForm.salary"
              filterable
              allow-create
              default-first-option
              style="width:100%"
            >
              <el-option
                v-for="(item,index) in salarylist"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="filter" label="筛选条件">
            <el-select v-model="jobForm.filter" style="width:100%">
              <el-option
                v-for="(item ,index) in degreelist"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="有效期">
            <el-select v-model="jobForm.period" style="width:100%">
              <el-option
                v-for="(item ,index) in periodlist"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item prop="description" label="描述">
            <el-input
              ref="description"
              v-model="jobForm.description"
              name="description"
              type="textarea"
            ></el-input>
          </el-form-item>

          <el-button
            class="center-button"
            type="primary"
            style="width:100%;margin-bottom:10px;"
            @click.native.prevent="PostJob"
          >Submit</el-button>
        </el-form>
      </div>
      <div v-else>
        请先
        <router-link to="/manager">注册公司</router-link>|
      </div>
    </div>
    <div v-else>
      请先
      <router-link to="/login">登录</router-link>|
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { postJob, getCompanyByUserID } from "@/request/account";
import { Message } from "element-ui";
export default {
  computed: {
    ...mapGetters(["userinfo", "config"])
  },
  data() {
    return {
      jobForm: {
        company_id: "",
        admin_id: "",
        position: "",
        work_location: "",
        employment_type: "",
        job_function: "",
        responsibilities: [""],
        requirements: [""],
        seniority_level: "",
        validity_period: "",
        filter: "",
        required_skills: "",
        salary: ""
      },
      employmentlist: [],
      salarylist: [],
      citylist: [],
      industrylist: [],
      periodlist: [],
      infoRules: {
        position: [{ required: true, message: "请输入职位", trigger: "blur" }],
        work_location: [
          { required: true, message: "请输入工作地点", trigger: "blur" }
        ],
        employment_type: [
          { required: true, message: "请输入职位类型", trigger: "blur" }
        ],
        job_function: [
          { required: true, message: "请输入行业", trigger: "blur" }
        ],
        responsibilities: [
          { required: true, message: "请输入工作地点", trigger: "blur" }
        ],
        requirements: [
          { required: true, message: "请输入工作地点", trigger: "blur" }
        ],
        required_skills: [
          { required: true, message: "请输入工作地点", trigger: "blur" }
        ]
      },
      postFlag: false
    };
  },
  created() {
    if (!this.userinfo.user_id) {
      this.$router.push("/login");
    }
  },
  mounted() {
    console.log(this.userinfo);
    this.employmentlist = this.config.jobtype;
    this.salarylist = this.config.salary;
    this.citylist = this.config.city;
    this.industrylist = this.config.industry;
    this.periodlist = this.config.period;
    this.degreelist = this.config.degree;
    this.jobForm.admin_id = this.userinfo.user_id;
    this.getCompany();
  },
  methods: {
    getCompany() {
      getCompanyByUserID({ user_id: this.jobForm.admin_id }).then(response => {
        if (response.success) {
          this.jobForm.company_id = response.data.company_id;
          this.postFlag = true;
        } else {
          this.$router.push("/manager?id=2");
        }
      });
    },
    PostJob() {
      postJob(this.jobForm).then(response => {
        if (response.success) {
          Message({
            message: "职位已发布",
            type: "success",
            duration: 5 * 1000
          });
        } else {
          Message({
            message: response.msg || "error",
            type: "error",
            duration: 5 * 1000
          });
        }
      });
    },
    addRequirement() {
      this.jobForm.requirements.push("");
    },
    addResponsibilitie() {
      this.jobForm.responsibilities.push("");
    },
    delRequirement(index) {
      this.jobForm.requirements.splice(index, 1);
    },
    delResponsibilitie(index) {
      this.jobForm.responsibilities.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.contain {
  margin: 0 auto;
  width: 50%;
  min-height: 600px;
}
.job-form {
  padding: 30px;
}
</style>
