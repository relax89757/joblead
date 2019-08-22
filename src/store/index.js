import Vue from 'vue'
import Vuex from 'vuex'
import {
  getCookie
} from "../request/cookies";

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    userinfo: getCookie("userinfo") ? JSON.parse(getCookie("userinfo")) : {},
    isLogin: getCookie("userinfo") ? true : false,
    config:{}
  },
  mutations: {
    SET_USERINFO(state, userinfo) {
      state.userinfo = userinfo;
      if (userinfo) {
        state.isLogin = true;
      } else {
        state.isLogin = false;
      }

    },
    SET_CONFIG(state, config){
      state.config = config;
    }
  },
  actions: {

  }, getters: {
    userinfo: state => state.userinfo,
    isLogin: state => state.isLogin,
    config :state => state.config
  }
})
