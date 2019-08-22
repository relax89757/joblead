<template>
  <div class="login">
    <div class="formbox">
      <h1 class="form-title align-items-center">Find The Job That Fits Your Life</h1>

      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        label-position="left"
      >
        <el-form-item prop="username">
          <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="username"
            name="username"
            type="text"
            tabindex="1"
          />
        </el-form-item>

        <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
          <el-form-item prop="password">
            <el-input
              :key="passwordType"
              ref="password"
              v-model="loginForm.password"
              :type="passwordType"
              placeholder="password"
              name="password"
              tabindex="2"
              auto-complete="on"
              @keyup.native="checkCapslock"
              @blur="capsTooltip = false"
              @keyup.enter.native="handleLogin"
            />
          </el-form-item>
        </el-tooltip>

        <el-button
          class="center-button"
          :loading="loading"
          type="primary"
          style="width:100%;margin-bottom:10px;"
          @click.native.prevent="handleLogin"
        >Login</el-button>
      </el-form>
      <div class="msg">
        <div class="findpsw">
          <router-link :to="'/forget'" class="link"></router-link>
        </div>
        <div class="description">
          Don't have an account?
          <router-link :to="'/signup'" class="link">Sign Up</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userLogin } from "@/request/account";
import { setCookie } from "@/request/cookies";
import { validUsername } from "@/request/validate";
import { Message } from "element-ui";
import md5 from "js-md5";
export default {
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
      status: 0,
      username: "",
      password: "",
      loginForm: {
        username: "",
        password: ""
      },
      userForm: {
        first_name: "",
        last_name: "",
        birth_date: "",
        gender: "",
        country: "",
        phone: "",
        email: "",
        password: ""
      },
      login: { username: "", password: "" },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ]
      },
      passwordType: "password",
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined
    };
  },
  methods: {
    checkCapslock({ shiftKey, key } = {}) {
      if (key && key.length === 1) {
        if (
          (shiftKey && (key >= "a" && key <= "z")) ||
          (!shiftKey && (key >= "A" && key <= "Z"))
        ) {
          this.capsTooltip = true;
        } else {
          this.capsTooltip = false;
        }
      }
      if (key === "CapsLock" && this.capsTooltip === true) {
        this.capsTooltip = false;
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          setCookie("jp", this.loginForm.username, 10 * 1000);
          setCookie("sp", md5(md5(this.loginForm.password)), 10 * 1000);
          userLogin({
            phone: this.loginForm.username,
            password: md5(md5(this.loginForm.password))
          }).then(response => {
            this.loading = false;
            if (response.success) {
              setCookie("token", response.TOKEN, 60 * 60 * 1000);
              setCookie(
                "userinfo",
                JSON.stringify(response.data),
                60 * 60 * 1000
              );
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
  components: {}
};
</script>

<style scoped>
@supports (-webkit-mask: none) and (not (cater-color: #fff)) {
  .login-container .el-input input {
    color: #fff;
  }
}

.el-input {
  display: inline-block;
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
  width: 100%;
  height: 600px;
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
</style>
