<template>
  <div class="contain">
    <el-form ref="form" :model="infoForm" :rules="infoRules" label-width="86px" class="formbox">
      <div class="flex-row">
        <el-form-item label="姓" class="flex-row-item mr40" prop="first_name">
          <el-input v-model="infoForm.first_name"></el-input>
        </el-form-item>
        <el-form-item label="名" class="flex-row-item" prop="last_name">
          <el-input v-model="infoForm.last_name"></el-input>
        </el-form-item>
      </div>
      <div class="flex-row">
        <el-form-item label="手机号" class="flex-row-item mr40" prop="phone">
          <el-input readonly v-model="infoForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="国籍：" class="flex-row-item" prop="country">
          <el-select v-model="infoForm.country">
            <el-option
              v-for="(item,index) in countrylist"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="flex-row">
        <el-form-item label="生日：" class="flex-row-item mr40" prop="birth_date">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="infoForm.birth_date"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="性别：" class="flex-row-item" prop="gender">
          <el-select v-model="infoForm.gender" placeholder="请选择性别">
            <el-option
              v-for="(item,index) in genderlist"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="flex-row">
        <el-form-item label="求职状态：" class="flex-row-item mr40">
          <el-select v-model="infoForm.intstatus">
            <el-option
              v-for="(item,index) in intstatuslist"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="求职类型：" class="flex-row-item">
          <el-select v-model="infoForm.jobtype">
            <el-option
              v-for="(item,index) in jobtype"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="flex-row">
        <el-form-item label="电子邮件：" class="flex-row-item">
          <el-input v-model="infoForm.email"></el-input>
        </el-form-item>
      </div>
      <div class="flex-row">
        <el-form-item label="母语：" class="flex-row-item">
          <el-select v-model="infoForm.native_language">
            <el-option
              v-for="(item,index) in langlist"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="flex-row">
        <el-form-item label="地址" class="flex-row-item">
          <el-input v-model="infoForm.address"></el-input>
        </el-form-item>
      </div>
      <div class="flex-row">
        <el-form-item label="现居住地：" class="flex-row-item">
          <el-input v-model="infoForm.current_location"></el-input>
        </el-form-item>
      </div>
      <div class="flex-row">
        <el-form-item label="证书:" class="flex-row-item">
          <el-input v-model="infoForm.certificate"></el-input>
        </el-form-item>
      </div>
      <div class="flex-row">
        <el-form-item label="社交账号:" class="flex-row-item">
          <el-input v-model="infoForm.contact_info"></el-input>
        </el-form-item>
      </div>
      <el-form-item label="掌握语言">
        <el-select
          v-model="infoForm.foreign_lang_list"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请选择掌握语言"
        >
          <el-option
            v-for="item in langlist"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { editUserInfo } from "@/request/account";
import { mapGetters } from "vuex";
import { Message } from "element-ui";
import { setCookie } from "@/request/cookies";
export default {
  computed: {
    ...mapGetters(["userinfo", "config"])
  },
  data() {
    return {
      infoForm: {
        user_id: "",
        first_name: "",
        last_name: "",
        phone: "",
        birth_date: "",
        country: "",
        gender: "",
        email: "",
        address: "",
        current_location: "",
        native_language: "",
        avatar_url: "",
        foreign_lang_list: [],
        career_interest: "",
        jobtype: "",
        certificate: "",
        intstatus: "",
        contact_info: ""
      },
      langlist: [],
      genderlist: [],
      intstatuslist: [],
      jobtypelist: [],
      countrylist: [],
      infoRules: {
        first_name: [
          { required: true, message: "请输入姓氏", trigger: "blur" }
        ],
        last_name: [
          { required: true, message: "请输入名字称", trigger: "blur" }
        ],
        birth_date: [
          { required: true, message: "请输入出生年月", trigger: "blur" }
        ],
        gender: [{ required: true, message: "请输入性别", trigger: "blur" }],
        country: [{ required: true, message: "请输入国籍", trigger: "blur" }],
        phone: [{ required: true, message: "请输入手机号", trigger: "blur" }]
      }
    };
  },
  mounted() {
    this.langlist = this.config.lang;
    this.countrylist = this.config.country;
    this.intstatuslist = this.config.intstatus;
    this.jobtype = this.config.jobtype;
    this.genderlist = this.config.gender;

    this.infoForm.user_id = this.userinfo.user_id;
    this.infoForm.first_name = this.userinfo.first_name;
    this.infoForm.last_name = this.userinfo.last_name;
    this.infoForm.phone = this.userinfo.phone;
    this.infoForm.birth_date = this.userinfo.birth_date;
    this.infoForm.country = this.userinfo.country;
    this.infoForm.gender = this.userinfo.gender;

    this.infoForm.email = this.userinfo.email;

    this.infoForm.intstatus = this.userinfo.intstatus;
    this.infoForm.jobtype = this.userinfo.jobtype;
    this.infoForm.certificate = this.userinfo.certificate;
    this.infoForm.contact_info = this.userinfo.contact_info;

    this.infoForm.address = this.userinfo.address;
    this.infoForm.current_location = this.userinfo.current_location;
    this.infoForm.native_language = this.userinfo.native_language;
    this.infoForm.avatar_url = this.imageUrl;
    this.infoForm.foreign_lang_list = this.userinfo.foreign_lang_list;
  },
  methods: {
    onSubmit() {
      console.log(this.infoForm.foreign_lang_list);
      // this.infoForm.foreign_lang_list = JSON.stringfy(
      //   this.infoForm.foreign_lang_list
      // );
      this.$refs["form"].validate(valid => {
        if (valid) {
          editUserInfo(this.infoForm).then(response => {
            if (response.success) {
              this.$store.commit("SET_USERINFO", response.data);
              setCookie(
                "userinfo",
                JSON.stringify(response.data),
                60 * 60 * 1000
              );
              Message({
                message: response.msg,
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
        }
      });
    },
    formatDate: function(time) {
      if (time != null) {
        var datetime = new Date();
        datetime.setTime(time);
        var year = datetime.getFullYear();
        var month =
          datetime.getMonth() + 1 < 10
            ? "0" + (datetime.getMonth() + 1)
            : datetime.getMonth() + 1;
        var date =
          datetime.getDate() < 10
            ? "0" + datetime.getDate()
            : datetime.getDate();
        var hour =
          datetime.getHours() < 10
            ? "0" + datetime.getHours()
            : datetime.getHours();
        var minute =
          datetime.getMinutes() < 10
            ? "0" + datetime.getMinutes()
            : datetime.getMinutes();
        var second =
          datetime.getSeconds() < 10
            ? "0" + datetime.getSeconds()
            : datetime.getSeconds();
        return (
          year +
          "-" +
          month +
          "-" +
          date +
          " " +
          hour +
          ":" +
          minute +
          ":" +
          second
        );
      } else {
        return "---";
      }
    }
  },
  props: ["imageUrl"],
  watch: {
    imageUrl(val, oldval) {
      this.infoForm.avatar_url = val;
    }
  }
};
</script>

<style scoped>
.contain {
  width: 100%;
}
.content {
  margin: 2px 0 2px 30px;
  padding-right: 20px;
  box-sizing: border-box;
}
.flex-row {
  display: flex;
}
.flex-row-item {
  flex: 1;
}
.mr20 {
  margin-right: 20px;
}
.mr40 {
  margin-right: 40px;
}
.line {
  text-align: center;
}
.el-select,
.el-cascader {
  width: 100%;
}
.el-form-item__label {
  padding: 0 4px 0 0;
}
.el-form-item {
  margin-bottom: 20px;
}
</style>
