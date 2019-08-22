<template>
  <div class="contains">
    <div v-if="companyForm.company_id ||companyShow">
      <el-form
        ref="companyForm"
        :model="companyForm"
        label-width="100px"
        class="company-form"
        :rules="infoRules"
        label-position="right"
      >
        <div>
          <div class="item-title">
            <h4>公司基本信息</h4>
          </div>
          <el-form-item label="公司名称" prop="brand_name">
            <el-input
              ref="company_name"
              v-model="companyForm.brand_name"
              name="company_name"
              type="text"
            ></el-input>
          </el-form-item>

          <el-form-item label="公司全称" prop="business_license_name">
            <el-input
              ref="business_license_name"
              v-model="companyForm.business_license_name"
              name="business_license_name"
              type="text"
            ></el-input>
          </el-form-item>

          <el-form-item label="营业执照号" prop="business_license">
            <el-input
              ref="business_license"
              v-model="companyForm.business_license"
              name="business_license"
              type="text"
            ></el-input>
          </el-form-item>

          <el-form-item label="营业执照" prop="business_license_url">
            <el-upload
              class="avatar-uploader"
              action="http://www.pusaz.com:18080/file/upload"
              :data="uploadParams"
              :show-file-list="false"
              :on-success="handleLicenseSuccess"
              :before-upload="beforeLicenseUpload"
            >
              <img
                v-if="companyForm.business_license_url"
                :src="companyForm.business_license_url"
                class="avatar"
                title="点击上传营业执照"
              />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>

          <el-form-item label="公司Logo" prop="logo_url">
            <el-upload
              class="avatar-uploader"
              action="http://www.pusaz.com:18080/file/upload"
              :data="uploadParams"
              :show-file-list="false"
              :on-success="handleLogoSuccess"
              :before-upload="beforeLogoUpload"
            >
              <img
                v-if="companyForm.logo_url"
                :src="companyForm.logo_url"
                class="avatar"
                title="点击上传Logo"
              />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <!-- <el-form-item label="公司状态">
            <el-select v-model="companyForm.status">
              <el-option
                v-for="(item,index) in statuslist"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>-->

          <el-form-item prop="phone" label="公司电话">
            <el-input ref="phone" v-model="companyForm.phone" name="phone" type="text"></el-input>
          </el-form-item>

          <el-form-item prop="email" label="公司邮箱">
            <el-input ref="email" v-model="companyForm.email" name="email" type="text"></el-input>
          </el-form-item>

          <el-form-item label="公司官网">
            <el-input ref="website" v-model="companyForm.website" name="website" type="text"></el-input>
          </el-form-item>

          <el-form-item label="公司标语">
            <el-input ref="slogan" v-model="companyForm.slogan" name="slogan" type="text"></el-input>
          </el-form-item>

          <el-form-item label="公司规模">
            <el-select v-model="companyForm.size">
              <el-option
                v-for="(item,index) in sizelist"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="公司简介">
            <el-input ref="introduce" v-model="companyForm.introduce" name="introduce" type="text"></el-input>
          </el-form-item>

          <el-form-item label="公司地址">
            <el-input ref="address" v-model="companyForm.address" name="address" type="text"></el-input>
          </el-form-item>

          <el-form-item label="成立时间">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="companyForm.founded"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>

          <el-form-item label="公司行业">
            <el-select v-model="companyForm.industry">
              <el-option
                v-for="(item,index) in industrylist"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="公司总部">
            <el-input
              ref="headquarters"
              v-model="companyForm.headquarters"
              name="headquarters"
              type="text"
            ></el-input>
          </el-form-item>

          <el-form-item label="照片墙">
            <el-upload
              action="http://www.pusaz.com:18080/file/upload"
              :data="uploadParams"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              :on-success="handlePicSuccess"
              :file-list="companyForm.photolist"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>
        </div>

        <el-form-item>
          <el-button type="primary" @click="handCompany">确定修改</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-else>
      <div class="resume-box">
        <div class="empty">暂无公司</div>
        <el-button type="primary" @click="addCompany">立即创建</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  createCompany,
  editCompany,
  getCompanyByUserID
} from "@/request/account";
import { Message } from "element-ui";
export default {
  name: "scan",
  computed: {
    ...mapGetters(["userinfo", "config"])
  },
  data() {
    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else {
        if (value.indexOf("@") < 0) {
          callback(new Error("邮箱格式错误"));
        } else if (
          value.indexOf("@163") > 0 ||
          value.indexOf("@qq") > 0 ||
          value.indexOf("@gmail") > 0
        ) {
          callback(new Error("请输入企业邮箱"));
        }
        callback();
      }
    };
    return {
      companyShow: false,
      companyFormTmp: {},
      companyForm: {
        company_id: 0,
        brand_name: "",
        business_license_name: "",
        business_license: "",
        business_license_url: "",
        logo_url: "",
        admin_id: 0,

        phone: "",
        email: "",
        website: "",
        slogan: "",
        size: "",
        introduce: "",
        address: "",
        industry: "",
        founded: "",
        headquarters: "",
        status: "",
        life_photos_url: [],
        photolist: []
      },

      infoRules: {
        brand_name: [
          { required: true, message: "请输入公司名称", trigger: "blur" }
        ],
        business_license_name: [
          { required: true, message: "请输入公司全称", trigger: "blur" }
        ],
        business_license: [
          { required: true, message: "请输入营业执照号", trigger: "blur" }
        ],
        business_license_url: [
          { required: true, message: "请上传公司营业执照", trigger: "blur" }
        ],
        logo_url: [
          { required: true, message: "请上传公司logo", trigger: "blur" }
        ],
        email: [
          {
            required: true,
            validator: validateEmail,
            trigger: "blur"
          }
        ],
        phone: [{ required: true, message: "请输入电话", trigger: "blur" }]
      },
      uploadParams: {
        type: "company",
        folderName: ""
      },
      handletype: "create",
      sizelist: [],
      industrylist: [],
      statuslist: []
    };
  },
  created() {
    this.sizelist = this.config.size;
    this.industrylist = this.config.industry;
    this.statuslist = this.config.companystatus;
  },
  mounted() {
    this.companyForm.admin_id = this.userinfo.user_id;
    this.getCompany();
  },
  methods: {
    getCompany() {
      getCompanyByUserID({ user_id: this.companyForm.admin_id }).then(
        response => {
          if (response.success) {
            this.companyForm = response.data;
            this.companyForm.photolist = [];
            for (var i = 0; i < this.companyForm.life_photos_url.length; i++) {
              this.companyForm.photolist.push({
                name: "test",
                url: this.companyForm.life_photos_url[i]
              });
            }

            this.handletype = "edit";
          }
        }
      );
    },
    addCompany() {
      this.companyShow = true;
    },
    handCompany() {
      this.$refs["companyForm"].validate(valid => {
        if (valid) {
          if (this.handletype == "create") {
            createCompany(this.companyForm).then(response => {
              if (response.success) {
                this.companyForm = response.data;
                this.companyForm.photolist = [];
                for (
                  var i = 0;
                  i < this.companyForm.life_photos_url.length;
                  i++
                ) {
                  this.companyForm.photolist.push({
                    name: "test",
                    url: this.companyForm.life_photos_url[i]
                  });
                }
              }
              Message({
                message: response.msg || "error",
                type: response.success ? "success" : "error",
                duration: 5 * 1000
              });
            });
          } else {
            editCompany(this.companyForm).then(response => {
              if (response.success) {
                this.companyForm = response.data;
                this.companyForm.photolist = [];
                for (
                  var i = 0;
                  i < this.companyForm.life_photos_url.length;
                  i++
                ) {
                  this.companyForm.photolist.push({
                    name: "test",
                    url: this.companyForm.life_photos_url[i]
                  });
                }
              }
              Message({
                message: response.msg || "error",
                type: response.success ? "success" : "error",
                duration: 5 * 1000
              });
            });
          }
        }
      });
    },
    handleLicenseSuccess(res) {
      if (res.success) {
        this.companyForm.business_license_url = res.data;
      } else {
        Message({
          message: res.msg || "error",
          type: "error",
          duration: 5 * 1000
        });
      }
    },
    beforeLicenseUpload() {
      this.uploadParams.folderName = this.companyForm.business_license;
    },
    handleLogoSuccess(res) {
      if (res.success) {
        this.companyForm.logo_url = res.data;
      } else {
        Message({
          message: res.msg || "error",
          type: "error",
          duration: 5 * 1000
        });
      }
    },
    beforeLogoUpload() {
      this.uploadParams.folderName = this.companyForm.business_license;
    },
    handlePictureCardPreview(file) {
      console.log(file.url);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePicSuccess(res) {
      if (res.success) {
        if (
          this.companyForm.life_photos_url &&
          this.companyForm.life_photos_url.length > 0
        ) {
        } else {
          this.companyForm.life_photos_url = [];
        }
        this.companyForm.life_photos_url.push(res.data);
      } else {
        Message({
          message: res.msg || "error",
          type: "error",
          duration: 5 * 1000
        });
      }
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
.avatar {
  width: 256px;
  height: 256px;
}
</style>
