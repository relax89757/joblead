import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home/index.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import("../views/Account/login.vue")
    },
    {
      path: "/signup",
      name: "signup",
      component: () =>
        import("../views/Account/signup.vue")
    },
    {
      path: "/resume",
      name: "resume",
      component: () =>
        import("../views/Resume/scan.vue")
    },
    {
      path: "/manager",
      name: "manager",
      component: () =>
        import("../views/Account/manager.vue")
    },
    {
      path: "/postjob",
      name: "postjob",
      component: () =>
        import("../views/Job/post.vue")
    },
    {
      path: "/jobs",
      name: "jobs",
      component: () =>
        import("../views/Job/search.vue")
    }
  ]
});
