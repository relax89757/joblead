import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userinfo: {},
    isLogin: false
  },
  mutations: {
    SET_USERINFO(state, userinfo) {
      state.userinfo = userinfo;
      if (userinfo) {
        state.isLogin = true;
      } else {
        state.isLogin = false;
      }

    }
  },
  actions: {

  }, getters: {
    userinfo: state => state.userinfo,
    isLogin: state => state.isLogin
  }
})
