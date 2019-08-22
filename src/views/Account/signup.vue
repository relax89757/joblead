<template>
  <div class="login">
    <div class="formbox">
      <h1 class="form-title align-items-center"></h1>

      <el-form
        ref="userForm"
        :model="userForm"
        :rules="loginRules"
        class="login-form"
        label-position="left"
      >
        <el-form-item>
          <el-input
            prop="phone"
            ref="phone"
            v-model="userForm.phone"
            placeholder="phone"
            name="phone"
            type="text"
          >
            <template slot="append">
              <div class="sendcode" @click="sendCode">
                <span v-if="!codeFlag">发送验证码</span>
                <span v-else>{{codeNum}}</span>
              </div>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            ref="code"
            v-model="userForm.code"
            placeholder="code"
            name="code"
            type="text"
            tabindex="1"
          />
        </el-form-item>

        <el-form-item prop="firstname">
          <el-input
            ref="firstname"
            v-model="userForm.firstname"
            placeholder="firstname"
            name="firstname"
            type="text"
            tabindex="1"
          />
        </el-form-item>
        <el-form-item prop="lastname">
          <el-input
            ref="lastname"
            v-model="userForm.lastname"
            placeholder="lastname"
            name="lastname"
            type="text"
            tabindex="1"
          />
        </el-form-item>

        <el-form-item prop="country">
          <el-select
            v-model="userForm.country"
            filterable
            allow-create
            default-first-option
            placeholder="country"
            style="width:100%"
          >
            <el-option
              v-for="item in countrylist"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="birth_date">
          <el-date-picker
            type="date"
            placeholder="birth_date"
            v-model="userForm.birth_date"
            style="width: 100%;"
            auto-complete="on"
          ></el-date-picker>
        </el-form-item>

        <el-form-item prop="gender">
          <el-select
            v-model="userForm.gender"
            filterable
            allow-create
            default-first-option
            placeholder="gender"
            style="width:100%"
          >
            <el-option
              v-for="item in genderlist"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
          <el-form-item prop="password">
            <el-input
              :key="passwordType"
              ref="password"
              v-model="userForm.password"
              :type="passwordType"
              placeholder="password"
              name="password"
              tabindex="2"
              auto-complete="on"
              @blur="capsTooltip = false"
              @keyup.enter.native="handSignUp"
            />
          </el-form-item>
        </el-tooltip>

        <el-form-item prop="confirmPassword">
          <el-input
            :key="passwordType"
            ref="confirm password"
            v-model="userForm.confirmpassword"
            :type="passwordType"
            placeholder="confirm password"
            name="password"
            tabindex="2"
            auto-complete="on"
            @blur="capsTooltip = false"
            @keyup.enter.native="handSignUp"
          />
        </el-form-item>

        <el-button
          class="center-button"
          :loading="loading"
          type="primary"
          style="width:100%;margin-bottom:10px;"
          @click.native.prevent="handSignUp"
        >Submit</el-button>
      </el-form>
      <div class="msg">
        <div class="findpsw">
          <router-link :to="'/forget'" class="link"></router-link>
        </div>
        <div class="description">
          Already have an account?
          <router-link :to="'/login'" class="link">Sign In</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userSignup, signupCode } from "@/request/account";
import { setCookie } from "@/request/cookies";
import { validUsername } from "@/request/validate";
import { Message } from "element-ui";
import md5 from "js-md5";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["config"])
  },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("Please enter the correct user name"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        // callback(new Error("The password can not be less than 6 digits"));
        callback();
      } else {
        callback();
      }
    };
    return {
      userForm: {
        first_name: "",
        last_name: "",
        birth_date: "",
        gender: "",
        country: "",
        phone: "",
        password: "",
        confirmpassword: "",
        code: ""
      },
      login: { username: "", password: "" },
      loginRules: {
        phone: [{ required: true, message: "请输入手机号", trigger: "blur" }],
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ]
      },
      countrylist: [],
      genderlist: [],
      passwordType: "password",
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      codeNum: 60,
      codeFlag: false
    };
  },
  created() {
    this.countrylist = this.config.country;
    this.genderlist = this.config.gender;
  },
  methods: {
    sendCode() {
      if (this.codeFlag) {
        return;
      }
      if (!this.userForm.phone) {
        Message({
          message: "手机号不能为空",
          type: "error",
          duration: 2 * 1000
        });
        return;
      }
      signupCode({ phone: this.userForm.phone }).then(response => {
        if (response.success) {
          this.codeFlag = true;
          var that = this;
          setInterval(function() {
            that.codeNum--;
          }, 1000);
        } else {
          Message({
            message: response.msg || "error",
            type: "error",
            duration: 5 * 1000
          });
        }
      });
    },
    handSignUp() {
      this.$refs.userForm.validate(valid => {
        if (valid) {
          this.loading = true;
          var login = {};
          login.phone = this.userForm.phone;
          login.code = this.userForm.code;
          login.password = md5(md5(this.userForm.password));

          login.first_name = this.userForm.firstname;
          login.last_name = this.userForm.lastname;
          login.gender = this.userForm.gender;
          login.country = this.userForm.country;
          login.birth_date = this.userForm.birth_date;
          userSignup(login).then(response => {
            if (response.success) {
              setCookie("token", response.data.TOKEN, 60 * 60 * 1000);
              this.$store.commit("SET_USERINFO", response.data);
              this.$router.push({ path: "/" });
            } else {
              Message({
                message: response.msg || "error",
                type: "error",
                duration: 5 * 1000
              });
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  components: {},
  watch: {
    codeNum(val, oldVal) {
      if (val <= 0) {
        this.codeFlag = false;
      }
    }
  }
};
</script>


<style scoped>
@supports (-webkit-mask: none) and (not (cater-color: #fff)) {
  .login-container .el-input input {
    color: #fff;
  }
}
.el-input {
}
input {
  background: transparent;
  border: 0px;
  border-radius: 0px;
  padding: 12px 5px 12px 15px;
  color: #eee;
  height: 47px;
  caret-color: #fff;
}
input:-webkit-autofill {
  box-shadow: 0 0 0px 1000px #2d3a4b inset !important;
}

.el-form-item {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #454545;
}

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
}

.login-form {
  position: relative;
  width: 600px;
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden;
}

.tips {
  font-size: 14px;
  color: #fff;
  margin-bottom: 10px;
}

.tips span:first-of-type {
  margin-right: 16px;
}

.svg-container {
  padding: 6px 5px 6px 15px;
  color: #889aa4;
  vertical-align: middle;
  width: 30px;
  display: inline-block;
}

.title-container {
  position: relative;
}

.title {
  font-size: 26px;
  color: #eee;
  margin: 0px auto 40px auto;
  text-align: center;
  font-weight: bold;
}

.show-pwd {
  position: absolute;
  right: 10px;
  top: 7px;
  font-size: 16px;
  color: #889aa4;
  cursor: pointer;
  user-select: none;
}
.login {
  min-height: 100%;
  width: 100%;
  background-image: url(../../assets/img/index_img.jpg);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.formbox {
  width: 600px;
  text-align: center;
}
.formbox input {
  font-size: 16px;
  font-family: Lato, sans-serif;
  width: 100%;
  color: rgb(80, 88, 99);
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(196, 199, 204);
  border-image: initial;
  padding: 0px 12px;
  /* padding-top: 16px; */
  height: 48px;
}
.formbox form {
  margin-top: 20px !important;
}

.form-title {
  font-size: 30px;
  line-height: 1.2em;
  color: #fff !important;
  font-weight: bold;
}
.username {
}
.password {
  margin-top: 8px !important;
}

.msg {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.description {
  color: rgb(255, 255, 255);
  font-size: 15px;
  line-height: 22px;
}
.link {
  color: #8abdff !important;
  text-decoration: none;
}
.link:hover {
  color: #ffc72d !important;
  cursor: pointer;
}
.sendcode {
  cursor: pointer;
}
</style>

