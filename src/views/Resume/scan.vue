<template>
  <div class="contains">
    <div v-if="resumeForm.resume_id ||editResume">
      <el-form
        ref="resumeForm"
        :model="resumeForm"
        :rules="infoRules"
        label-width="100px"
        class="resume-form"
        label-position="right"
      >
        <div>
          <div class="item-title">
            <h4>自我评价</h4>
          </div>
          <el-form-item label="自我评价" class="b40" prop="summary">
            <el-input type="textarea" v-model="resumeForm.summary" :autosize="{ minRows: 4}"></el-input>
          </el-form-item>
        </div>
        <div>
          <div class="item-title">
            <h4>工作经验</h4>
            <div>
              <el-button type="primary" @click="addCareer">+</el-button>
              <el-button type="primary" v-if="resumeForm.careers.length>1" @click="delCareer">-</el-button>
            </div>
          </div>
          <div v-for="(career,index) in resumeForm.careers" :key="'career'+index">
            <el-form-item label="公司名称" :rules="infoRules.company_name">
              <el-input
                ref="company_name"
                v-model="career.company_name"
                name="company_name"
                type="text"
              ></el-input>
            </el-form-item>
            <el-form-item label="工作地点" class="b40" :rules="infoRules.work_location">
              <el-input type="text" v-model="career.work_location" :autosize="{ minRows: 4}"></el-input>
            </el-form-item>

            <el-form-item label="公司行业" :rules="infoRules.industry">
              <el-select v-model="career.industry" filterable allow-create default-first-option>
                <el-option
                  v-for="(item ,index) in industrylist"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="工作职位" :rules="infoRules.position">
              <el-input ref="position" v-model="career.position" name="position" type="text"></el-input>
            </el-form-item>
            <el-form-item label="工作时间" :rules="infoRules.period">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="选择开始日期"
                  v-model="career.period_from"
                  style="width: 100%;"
                ></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-date-picker
                  placeholder="选择结束日期"
                  v-model="career.period_to"
                  style="width: 100%;"
                ></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="岗位职责" class="b40" :rules="infoRules.responsibilities">
              <el-input type="textarea" v-model="career.responsibilities" :autosize="{ minRows: 4}"></el-input>
            </el-form-item>
            <el-form-item label="所获奖项" class="b40">
              <el-input type="textarea" v-model="career.rewards" :autosize="{ minRows: 4}"></el-input>
            </el-form-item>

            <el-form-item label="备注">
              <el-input
                ref="description"
                v-model="career.description"
                name="description"
                type="textarea"
              ></el-input>
            </el-form-item>
          </div>
        </div>
        <div>
          <div class="item-title">
            <h4>学历</h4>
            <!-- <p class="add-career">+增加工作经验</p> -->
            <div>
              <el-button type="primary" @click="addEducation">+</el-button>
              <el-button
                type="primary"
                v-if="resumeForm.educations.length>1"
                @click="delEducation"
              >-</el-button>
            </div>
          </div>
          <div v-for="(education,index) in resumeForm.educations" :key="'education'+index">
            <el-form-item label="学校名称" :rules="infoRules.college_name">
              <el-input
                ref="college_name"
                v-model="education.college_name"
                name="college_name"
                type="text"
              ></el-input>
            </el-form-item>
            <div class="flex-row">
              <el-form-item label="专业名称" :rules="infoRules.major">
                <el-input ref="major" v-model="education.major" name="major" type="text"></el-input>
              </el-form-item>
              <el-form-item label="学历" :rules="infoRules.degree">
                <el-select v-model="education.degree" filterable allow-create default-first-option>
                  <el-option
                    v-for="(item ,index) in degreelist"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>

            <el-form-item label="学习时间" class="b40" :rules="infoRules.educationPeriod">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="选择开始日期"
                  v-model="education.period_from"
                  style="width: 100%;"
                ></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-date-picker
                  placeholder="选择结束日期"
                  v-model="education.period_to"
                  style="width: 100%;"
                ></el-date-picker>
              </el-col>
            </el-form-item>

            <el-form-item label="所获奖项" :rules="infoRules.rewards">
              <el-input
                ref="rewards"
                v-model="education.rewards"
                name="rewards"
                type="textarea"
                :autosize="{ minRows: 4}"
              ></el-input>
            </el-form-item>

            <el-form-item label="备注">
              <el-input
                ref="description"
                v-model="education.description"
                name="description"
                type="textarea"
              ></el-input>
            </el-form-item>
          </div>
        </div>
        <div>
          <!--  <div class="item-title">
            <h4>作品或其他附件</h4>
          </div>

         <el-form-item>
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">
                将文件拖到此处，或
                <em>点击上传</em>
              </div>
              <div class="el-upload__tip" slot="tip">将文件大小控制在 20M 以内，支持格式 .rar/.zip/.7z/.pdf</div>
            </el-upload>
          </el-form-item>-->
        </div>
        <el-button
          class="center-button"
          type="primary"
          style="width:100%;margin-bottom:10px;"
          @click.native.prevent="handResume"
        >Submit</el-button>
      </el-form>
    </div>
    <div v-else>
      <div class="resume-box">
        <div class="empty">暂无简历</div>
        <el-button type="primary" @click="addResume">立即创建</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { createResume, getResumeByUserID } from "@/request/account";
import { Message } from "element-ui";
export default {
  name: "scan",
  computed: {
    ...mapGetters(["userinfo", "config"])
  },
  data() {
    return {
      hasResume: false,
      editResume: false,
      resumeForm: {
        resume_id: 0,
        user_id: 0,
        summary: "",
        license: "",
        career_interests: "",
        careers: [
          {
            company_name: "",
            position: "",
            industry: "",
            work_location: "",
            period_from: "",
            period_to: "",
            responsibilities: "",
            description: "",
            rewards: "",
            attachment: ""
          }
        ],
        educations: [
          {
            college_name: "",
            major: "",
            degree: "",
            period_from: "",
            period_to: "",
            description: "",
            rewards: "",
            attachment: ""
          }
        ],
        attachments: []
      },
      degreelist: [],
      industrylist: [],
      infoRules: {
        summary: [
          { required: true, message: "请输入自我介绍", trigger: "blur" }
        ],
        company_name: [
          { required: true, message: "请输入公司名称", trigger: "blur" }
        ],
        work_location: [
          { required: true, message: "请输入工作地点", trigger: "blur" }
        ],
        industry: [{ required: true, message: "请输入行业", trigger: "blur" }],
        position: [{ required: true, message: "请输入职位", trigger: "blur" }],
        period: [{ required: true, message: "请输入职位", trigger: "blur" }],
        responsibilities: [
          { required: true, message: "请输入职责", trigger: "blur" }
        ],
        college_name: [
          { required: true, message: "请输入职责", trigger: "blur" }
        ],
        major: [{ required: true, message: "请输入职责", trigger: "blur" }],
        degree: [{ required: true, message: "请输入职责", trigger: "blur" }],
        description: [
          { required: true, message: "请输入职责", trigger: "blur" }
        ],
        educationPeriod: [
          { required: true, message: "请输入日期", trigger: "blur" }
        ]
      }
    };
  },
  mounted() {
    this.degreelist = this.config.degree;
    this.industrylist = this.config.industry;
    this.resumeForm.user_id = this.userinfo.user_id;
    this.getResume();
  },
  methods: {
    getResume() {
      getResumeByUserID({ user_id: this.resumeForm.user_id }).then(response => {
        if (response.success) {
          var resumeForm = response.data;
          resumeForm.careers = JSON.parse(resumeForm.careers);
          resumeForm.educations = JSON.parse(resumeForm.educations);
          this.resumeForm = resumeForm;
          this.hasResume = true;
        }
      });
    },
    addResume() {
      this.editResume = true;
    },
    handResume() {
      var resumeForm = JSON.parse(JSON.stringify(this.resumeForm));
      resumeForm.careers = JSON.stringify(resumeForm.careers);
      resumeForm.educations = JSON.stringify(resumeForm.educations);
      this.$refs["resumeForm"].validate(valid => {
        if (valid) {
          createResume(resumeForm).then(response => {
            if (response.success) {
              Message({
                message: response.msg || "error",
                type: "success",
                duration: 5 * 1000
              });
              var resumeFormTmp = response.data;
              resumeFormTmp.careers = JSON.parse(resumeFormTmp.careers);
              resumeFormTmp.educations = JSON.parse(resumeFormTmp.educations);
              this.resumeForm = resumeFormTmp;
            } else {
              Message({
                message: response.msg || "error",
                type: "error",
                duration: 5 * 1000
              });
            }
          });
        }
      });
    },
    addCareer() {
      this.resumeForm.careers.push({
        company_name: "",
        position: "",
        industry: "",
        work_location: "",
        period_from: "",
        period_to: "",
        responsibilities: "",
        rewards: ""
      });
    },
    addEducation() {
      this.resumeForm.educations.push({
        college_name: "",
        major: "",
        degree: "",
        period_from: "",
        period_to: "",
        description: "",
        rewards: ""
      });
    },
    delCareer() {
      this.resumeForm.careers.pop();
    },
    delEducation() {
      this.resumeForm.educations.pop();
    }
  }
};
</script>

<style scoped>
.contains {
  margin: 2px 0 2px 30px;
  box-sizing: border-box;
  min-height: 600px;
}
.b40 {
  margin-bottom: 40px;
}
.flex-row {
  display: flex;
}
.flex-row .el-form-item {
  flex: 1;
}
.el-select,
.el-cascader {
  width: 100%;
}
h4 {
  color: #000;
}
.resume-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.empty {
  height: 200px;
  margin: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-title {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.item-title h4 {
  font-weight: 500;
}
.line {
  text-align: center;
}
.add-career {
  color: #004785;
  cursor: pointer;
}
.el-upload-dragger {
  width: 100%;
}
</style>
