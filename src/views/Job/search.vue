<template>
  <div class="section hero-section transparent">
    <div class="inner">
      <div class="container">
        <div class="job-search-form">
          <h2>
            Over
            <span>
              100,000
              <sup>+</sup>
            </span>jobs are waiting for you
          </h2>
          <div style="margin-bottom: 15px;" class="form-inline flex">
            <el-input
              v-model="searchObj.msg"
              placeholder="job title / Keywords / company name"
              class="form-group keyword"
            ></el-input>
            <div class="flex form-group">
              <el-select
                v-model="searchObj.city"
                placeholder="City"
                class="city"
                clearable
                @change="searchJob"
              >
                <el-option
                  v-for="(city,index) in citys"
                  :key="index"
                  :label="city.label"
                  :value="city.value"
                ></el-option>
              </el-select>
              <el-select
                v-model="searchObj.type"
                placeholder="Job Type"
                class="type"
                clearable
                @change="searchJob"
              >
                <el-option
                  v-for="(type,index) in types"
                  :key="'t'+index"
                  :label="type.label"
                  :value="type.value"
                ></el-option>
              </el-select>

              <el-cascader
                :options="industry"
                v-model="searchObj.industry"
                :show-all-levels="false"
                placeholder="Industry"
                clearable
                @change="searchJob"
              ></el-cascader>

              <el-select
                v-model="searchObj.salary"
                placeholder="Salary Range"
                class="salary"
                clearable
                @change="searchJob"
              >
                <el-option
                  v-for="(salary,index) in salarys"
                  :key="'s'+index"
                  :label="salary.label"
                  :value="salary.value"
                ></el-option>
              </el-select>
            </div>
            <el-button icon="el-icon-search" class="search-button button" @click="searchJob"></el-button>
          </div>
          <div class="keywords flex">
            <h4 class>Popular Keywords:</h4>
            <a href="#0" class="button item-center">web design</a>
            <a href="#0" class="button item-center">accountant</a>
            <a href="#0" class="button item-center">car dealer</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bus from "@/assets/js/bus.js";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      searchObj: {
        msg: "",
        city: "",
        type: "",
        industry: [],
        salary: ""
      },
      citys: [],
      types: [],
      industry: [],
      salarys: []
    };
  },
  computed: {
    ...mapGetters(["config"])
  },
  created() {
    this.citys = this.config.city;
    this.types = this.config.jobtype;
    this.salarys = this.config.salary;
    this.industry = this.config.industry;
  },
  components: {},
  methods: {
    searchJob() {
      bus.$emit("getjoblist", this.searchObj);
    }
  }
};
</script>



<style scoped>
/* @import "../../assets/css/style.css"; */

.hero-section .job-search-form {
  padding: 160px 0;
}
.job-search-form h2 {
  color: #fff;
  margin-bottom: 28px;
}
.job-search-form h2 > span {
  font-size: 34px;
  padding: 0 7px;
}
.job-search-form .form-inline {
  background: rgba(0, 0, 0, 0.3);
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 3px;
}
.form-group {
  flex: 1;
  width: 100%;
  position: relative;
}
.job-search-form .form-inline .form-group {
  flex: 1 auto;
  margin-right: 10px;
}
.job-search-form .form-inline .form-group .form-group-inner {
  position: relative;
  width: 100%;
}
.job-search-form .form-inline .form-group i {
  position: absolute;
  right: 0;
  top: 0;
  padding-right: 16px;
  font-size: 16px;
  color: #a0a7ba;
  line-height: 50px;
}
.job-search-form .form-inline .button {
  font-size: 24px;
  border-radius: 4px;
  padding: 11px 16px;

  box-shadow: none;
}
.job-search-form .keywords.flex {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;
  justify-content: flex-start;
}
.job-search-form .keywords h4 {
  margin: 0;
  margin-right: 15px;

  align-self: flex-start;
}
.job-search-form .keywords .button {
  margin-right: 7px;
  border-radius: 4px;
  padding: 6px 10px;
  text-transform: none;
  font-family: "Lato", sans-serif;
  font-size: 12px;
  line-height: 13px;

  box-shadow: none;
}
@media all and (max-width: 768px) {
  .hero-section .job-search-form {
    padding: 100px 0;
  }
  .job-search-form form .form-group {
    margin: 0;
    margin-bottom: 10px;
  }
  .job-search-form .keywords h4 {
    flex: 0 100%;
    margin-bottom: 10px;
  }
  .job-search-form .keywords .button {
    margin-bottom: 10px;
  }
}
@media all and (max-width: 480px) {
  .job-search-form form .form-group i {
    display: none;
  }
}
.hero-section {
  background: url(../../assets/img/bg1.jpg);
}
.search-button {
  width: 70px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 0;
}
.el-select-dropdown {
  border-radius: 0;
}
.el-input-group {
  line-height: normal;
  display: inline-table;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}

label {
  margin-bottom: 0;
}

.el-select {
  flex: 1;
}
.el-input__inner {
  border-radius: 0 !important;
}
/* .city {
  width: 100px;
}
.type {
  width: 120px;
}
.salary {
  width: 140px;
} */
.el-cascader {
  width: 200px;
}
.job-search-form .form-inline .keyword {
  flex: 400px 0 0;
}
</style>